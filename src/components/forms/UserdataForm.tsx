"use client";

import { FIELDS } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import IMask from "imask";
import { useEffect, useRef, useState } from "react";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { ZodType } from "zod";
import { BtnOrLink } from "../elements";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: T) => any;
  type?: "LEAVE_DATA";
}

const UserdataForm = <T extends FieldValues>({ schema, defaultValues, onSubmit }: Props<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current && !inputRef.current.dataset.imask) {
      IMask(inputRef.current, {
        mask: "+{38} (000) 000 00 00",
      });
      inputRef.current.dataset.imask = "true";
    }
  }, []);

  const handleSubmit: SubmitHandler<T> = async (data) => {
    try {
      setIsSubmitting(true);

      const res = await onSubmit(data);

      if (res.success) {
        form.reset();
        toast.success("Успішно відправлено");
      }

      return res;
    } catch (error) {
      console.error(error);
      toast.error("Щось пішло не так, спробуйте ще раз");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form className="grid gap-5 xl:grid-cols-2" onSubmit={form.handleSubmit(handleSubmit)}>
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem data-fade className={field.name === "description" ? "col-span-1 xl:col-span-2" : ""}>
                <FormLabel>{FIELDS[field.name as keyof typeof FIELDS].label}</FormLabel>
                <FormControl>
                  {field.name === "description" ? (
                    <Textarea
                      className="text-foreground bg-white py-[14px]"
                      required
                      placeholder={FIELDS[field.name as keyof typeof FIELDS].placeholder}
                      {...field}
                    />
                  ) : field.name === "phone" ? (
                    <Input
                      placeholder="+38 (000a) 000 00 00"
                      ref={(el) => {
                        inputRef.current = el;
                        field.ref(el);
                      }}
                      name={field.name}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      value={field.value}
                      className="text-foreground bg-white py-[14px]"
                      type="tel"
                      required
                    />
                  ) : (
                    <Input
                      className="text-foreground bg-white py-[14px]"
                      required
                      type={FIELDS[field.name as keyof typeof FIELDS].type}
                      placeholder={FIELDS[field.name as keyof typeof FIELDS].placeholder}
                      {...field}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <p data-fade className="text-secondary-foreground my-5 text-center text-xs xl:col-span-2">
          Натискаючи «Відправити», я даю згоду на обробку моїх персональних данних.
        </p>
        <BtnOrLink
          data-fade
          title={isSubmitting ? "Відправлення..." : "Відправити"}
          type="submit"
          disabled={isSubmitting}
          className={`text-foreground mx-auto w-full max-w-[256px] py-4 text-sm font-bold uppercase xl:col-span-2 ${
            isSubmitting ? "cursor-not-allowed opacity-70" : ""
          }`}
        />
      </form>
    </Form>
  );
};

export { UserdataForm };
