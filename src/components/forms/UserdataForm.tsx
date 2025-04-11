"use client";

import { FIELDS } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
// import IMask from "imask";
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

  const [phoneValue, setPhoneValue] = useState("+38 (0");
  const [isDeleting, setIsDeleting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const PREFIX = "+38 (0";

  // Format phone number to ensure it has the correct format with parentheses
  const formatPhoneNumber = (value: string): string => {
    // If empty or just the prefix, return the prefix
    if (!value || value === PREFIX) {
      return PREFIX;
    }

    // Extract all digits from the input
    const allDigits = value.replace(/[^0-9]/g, "");

    // Handle potential duplication of "380"
    let digits = allDigits;
    if (allDigits.startsWith("380")) {
      digits = allDigits.substring(3);
    }

    // Format the phone number with the new pattern
    if (digits.length <= 2) {
      // Just the operator code (partial)
      return `+38 (0${digits}`;
    } else if (digits.length <= 5) {
      // Operator code complete, starting area code
      return `+38 (0${digits.substring(0, 2)}) ${digits.substring(2)}`;
    } else if (digits.length <= 7) {
      // Area code complete, starting subscriber number
      return `+38 (0${digits.substring(0, 2)}) ${digits.substring(2, 5)} ${digits.substring(5)}`;
    } else {
      // Full number with proper spacing
      return `+38 (0${digits.substring(0, 2)}) ${digits.substring(2, 5)} ${digits.substring(5, 7)} ${digits.substring(7, 9)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    // If we're deleting and at the prefix, don't format
    if (isDeleting && (rawValue === PREFIX || rawValue.length <= PREFIX.length)) {
      setPhoneValue(PREFIX);
      form.setValue("phone" as Path<T>, PREFIX as never);
      return;
    }

    const formattedValue = formatPhoneNumber(rawValue);
    setPhoneValue(formattedValue);
    form.setValue("phone" as Path<T>, formattedValue as never);
  };

  // Handle key down events to detect deletion
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Track if we're deleting
    setIsDeleting(e.key === "Backspace" || e.key === "Delete");

    // Prevent deleting the prefix
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      inputRef.current &&
      (inputRef.current.selectionStart || 0) <= PREFIX.length
    ) {
      e.preventDefault();
    }

    // Allow only digits, arrows, tab, backspace, delete
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"];
    if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
    }
  };

  // Handle focus to ensure prefix and cursor position
  const handleFocus = () => {
    if (inputRef.current) {
      // If empty, set to prefix
      if (!phoneValue || phoneValue === "") {
        setPhoneValue(PREFIX);
        form.setValue("phone" as Path<T>, PREFIX as never);
      }

      // Position cursor after prefix if at the beginning
      const cursorPos = inputRef.current.selectionStart || 0;
      if (cursorPos < PREFIX.length) {
        setTimeout(() => {
          inputRef.current?.setSelectionRange(PREFIX.length, PREFIX.length);
        }, 10);
      }
    }
  };

  // Handle click to prevent cursor before prefix
  const handleClick = () => {
    if (inputRef.current) {
      const cursorPos = inputRef.current.selectionStart || 0;
      if (cursorPos < PREFIX.length) {
        inputRef.current.setSelectionRange(PREFIX.length, PREFIX.length);
      }
    }
  };

  // Initialize phone value
  useEffect(() => {
    // Set initial phone value from form or default to prefix
    const initialPhone = (form.getValues("phone" as Path<T>) as string) || PREFIX;
    setPhoneValue(formatPhoneNumber(initialPhone));
    form.setValue("phone" as Path<T>, formatPhoneNumber(initialPhone) as never);
  }, [form]);

  // Handle form submission
  const handleSubmit: SubmitHandler<T> = async (data) => {
    try {
      setIsSubmitting(true);

      const res = await onSubmit(data);

      if (res.success) {
        form.reset();
        setPhoneValue(PREFIX);
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
                      placeholder="+38 (0__) ___ __ __"
                      ref={(el) => {
                        inputRef.current = el;
                        field.ref(el);
                      }}
                      name={field.name}
                      onChange={handlePhoneChange}
                      onKeyDown={handleKeyDown}
                      onFocus={handleFocus}
                      onClick={handleClick}
                      onBlur={field.onBlur}
                      value={phoneValue}
                      className="text-foreground bg-white py-[14px]"
                      type="tel"
                      required
                      maxLength={19}
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
