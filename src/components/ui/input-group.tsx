import * as React from "react";
import { cn } from "@/lib/utils";

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  merged?: boolean;
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, merged, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group input-group group-focus-within:border-default dark:group-focus-within:border-default-500 relative flex w-full flex-wrap items-stretch ltr:flex-row rtl:flex-row-reverse",
        className,
        {
          merged: merged,
        },
      )}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

const InputGroupButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "focus:border-default dark:focus:border-default-500 first:*:rounded-r-none last:*:rounded-l-none",
      className,
    )}
    {...props}
  />
));
InputGroupButton.displayName = "InputGroupButton";

const InputGroupText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, color, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-default-200 text-default-500 bg-background group-focus-within:border-default dark:group-focus-within:border-default-500 ring-default flex items-center justify-center border px-3 text-sm font-normal transition duration-300 first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0",
      className,
      {
        "border-primary/50": color === "primary",
        "border-secondary/50": color === "secondary",
        "border-warning/50": color === "warning",
        "border-info/50": color === "info",
        "border-success/50": color === "success",
        "border-destructive/50": color === "destructive",
      },
    )}
    {...props}
  />
));
InputGroupText.displayName = "InputGroupText";

export { InputGroup, InputGroupButton, InputGroupText };
