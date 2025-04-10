import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input focus-visible:border-b-action selection:bg-primary placeholder:text-muted-foreground aria-invalid:border-action dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:text-red-500 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
