"use client";

import { FIELDS } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

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

  const formatPhoneNumber = (value: string, isDeletingOperation = false) => {
    // If empty, return empty string
    if (!value) {
      return "";
    }

    // If user is deleting and there's only the prefix or less left, return just the prefix
    if (isDeletingOperation && (value === "+" || value === "+3" || value === "+38" || value === "+380")) {
      return value;
    }

    // Strip all non-digit characters except the leading +
    let digitsOnly = value.replace(/^\+/, "").replace(/\D/g, "");

    // Limit to 12 digits (excluding the + sign, so total 13 characters)
    digitsOnly = digitsOnly.substring(0, 12);

    // If input is empty after cleaning, return empty string
    if (!digitsOnly) {
      return "";
    }

    // If deleting and we have 3 or fewer digits, don't auto-format
    if (isDeletingOperation && digitsOnly.length <= 3) {
      // Preserve what the user has typed exactly, but ensure it starts with +
      return value.startsWith("+") ? value : "+" + value.replace(/\D/g, "");
    }

    // If the number doesn't start with 380, prepend it
    if (!digitsOnly.startsWith("380")) {
      // If starts with 80, prepend 3
      if (digitsOnly.startsWith("80")) {
        digitsOnly = "3" + digitsOnly;
      }
      // If starts with 0, replace it with 380
      else if (digitsOnly.startsWith("0")) {
        digitsOnly = "38" + digitsOnly.substring(1);
      }
      // Otherwise, prepend 380
      else {
        digitsOnly = "380" + digitsOnly;
      }
    }

    // Ensure we only have 12 digits maximum (+ sign makes it 13 characters)
    digitsOnly = digitsOnly.substring(0, 12);

    return "+" + digitsOnly;
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
              <FormItem className={field.name === "description" ? "col-span-1 xl:col-span-2" : ""}>
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
                      className="text-foreground bg-white py-[14px]"
                      required
                      maxLength={13}
                      type="tel"
                      placeholder="+380XXXXXXXXX"
                      {...field}
                      onChange={(e) => {
                        const formattedValue = formatPhoneNumber(e.target.value, isDeleting);
                        field.onChange(formattedValue);
                      }}
                      onKeyDown={(e) => {
                        // Set deleting flag if backspace or delete is pressed
                        if (e.key === "Backspace" || e.key === "Delete") {
                          setIsDeleting(true);
                          return;
                        }

                        setIsDeleting(false);

                        // Allow: backspace, delete, tab, escape, enter, and navigation keys
                        if (
                          [8, 9, 13, 27, 46, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
                          // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                          (e.ctrlKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1) ||
                          // Allow: home, end
                          (e.keyCode >= 35 && e.keyCode <= 39)
                        ) {
                          // Let it happen
                          return;
                        }

                        // Prevent if not a number (except for the allowed keys above)
                        if (!/^\d$/.test(e.key)) {
                          e.preventDefault();
                          return;
                        }

                        // Get the digits only (excluding + sign)
                        const currentDigits = e.currentTarget.value.replace(/^\+/, "").replace(/\D/g, "");

                        // Prevent typing if we already have 12 digits (13 chars including +)
                        if (currentDigits.length >= 12) {
                          e.preventDefault();
                        }
                      }}
                      onKeyUp={() => {
                        // Reset deleting flag when key is released
                        setIsDeleting(false);
                      }}
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
        <p className="text-secondary-foreground my-5 text-center text-xs xl:col-span-2">
          Натискаючи «Відправити», я даю згоду на обробку моїх персональних данних.
        </p>
        <BtnOrLink
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
