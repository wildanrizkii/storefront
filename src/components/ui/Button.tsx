"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#1C1A17] text-white hover:bg-black active:scale-[0.99] rounded-full",
        primary:
          "bg-[#1C1A17] text-white hover:bg-black active:scale-[0.99] rounded-full",
        secondary:
          "bg-[#F2ECE5] text-charcoal-main hover:bg-[#E5DDD3] active:scale-[0.99] rounded-full",
        outline:
          "border border-border-light bg-transparent text-charcoal-main hover:border-charcoal-main active:bg-[#F2ECE5]/60 rounded-full",
        ghost:
          "bg-transparent text-charcoal-main hover:bg-[#EFECE6] active:bg-[#E5DDD3] rounded-full",
        destructive:
          "bg-[#B33932] text-white hover:bg-red-700 active:scale-[0.99] rounded-full",
        link:
          "text-[#8F6232] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] px-5 py-2.5 text-[13px]",
        md: "min-h-[44px] px-5 py-2.5 text-[13px]",
        sm: "min-h-[34px] px-3.5 py-1.5 text-[12px]",
        lg: "min-h-[48px] px-6 py-3 text-[14px]",
        icon: "h-9 w-9 min-h-[36px] min-w-[36px] p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
