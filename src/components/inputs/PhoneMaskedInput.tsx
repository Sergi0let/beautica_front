import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

type PhoneMaskedInputProps = React.ComponentPropsWithoutRef<"input"> & {
  onChange?: (value: string) => void;
  handleChange?: (value: string) => void;
};

const PhoneMaskedInput = forwardRef<HTMLInputElement, PhoneMaskedInputProps>(
  ({ className, value, onChange, handleChange, ...props }, ref) => {
    const handleAccept = (value: string) => {
      // Clean the value before passing to react-hook-form
      if (onChange) {
        onChange(value);
      }
      if (handleChange) {
        handleChange(value);
      }
    };
    const hasValue = typeof value === "string" && value.length > 0;
    return (
      <IMaskInput
        {...props}
        inputRef={ref}
        mask="+38 (000) 000 00 00"
        lazy={false}
        placeholderChar="_"
        value={value as string}
        onAccept={handleAccept}
        inputMode="numeric"
        className={cn(
          "border-input flex h-12 w-full min-w-0 rounded-[12px] border bg-white px-4 py-3 text-lg shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:border-ring focus-visible:ring-ring/50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          hasValue && "border-primary ring-ring ring-1",
          className,
        )}
      />
    );
  },
);

PhoneMaskedInput.displayName = "PhoneMaskedInput";

export { PhoneMaskedInput };
