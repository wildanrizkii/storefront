"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-full border border-[#DCD4C8] bg-white px-4 py-2 text-sm text-[#211E1A] placeholder:text-[#6E685F] transition-colors focus-visible:outline-none focus-visible:border-[#211E1A] focus-visible:ring-1 focus-visible:ring-[#211E1A]/15 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
