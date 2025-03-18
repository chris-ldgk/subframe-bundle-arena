"use client";
/*
 * Documentation:
 * Text Field — https://app.subframe.com/71d92cde7b25/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  placeholder?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = React.forwardRef<HTMLElement, InputProps>(function Input(
  { placeholder, className, ...otherProps }: InputProps,
  ref
) {
  return (
    <input
      className={SubframeCore.twClassNames(
        "h-full w-full border-none bg-transparent text-body font-body text-default-font outline-none placeholder:text-neutral-400",
        className
      )}
      placeholder={placeholder as string}
      ref={ref as any}
      {...otherProps}
    />
  );
});

interface TextFieldRootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  error?: boolean;
  variant?: "outline" | "filled";
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const TextFieldRoot = React.forwardRef<HTMLElement, TextFieldRootProps>(
  function TextFieldRoot(
    {
      disabled = false,
      error = false,
      variant = "outline",
      label,
      helpText,
      icon = null,
      iconRight = null,
      children,
      className,
      ...otherProps
    }: TextFieldRootProps,
    ref
  ) {
    return (
      <label
        className={SubframeCore.twClassNames(
          "group/be48ca43 flex flex-col items-start gap-1",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {label ? (
          <span className="text-caption-bold font-caption-bold text-default-font">
            {label}
          </span>
        ) : null}
        <div
          className={SubframeCore.twClassNames(
            "flex h-8 w-full flex-none items-center gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-2 group-focus-within/be48ca43:border group-focus-within/be48ca43:border-solid group-focus-within/be48ca43:border-brand-primary",
            {
              "border border-solid border-neutral-100 bg-neutral-100 group-hover/be48ca43:border group-hover/be48ca43:border-solid group-hover/be48ca43:border-neutral-border group-focus-within/be48ca43:bg-default-background":
                variant === "filled",
              "border border-solid border-error-600": error,
              "border border-solid border-neutral-200 bg-neutral-200": disabled,
            }
          )}
        >
          {icon ? (
            <span className="text-body font-body text-subtext-color">
              {icon}
            </span>
          ) : null}
          {children ? (
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch px-1">
              {children}
            </div>
          ) : null}
          {iconRight ? (
            <span
              className={SubframeCore.twClassNames(
                "text-body font-body text-subtext-color",
                { "text-error-500": error }
              )}
            >
              {iconRight}
            </span>
          ) : null}
        </div>
        {helpText ? (
          <span
            className={SubframeCore.twClassNames(
              "text-caption font-caption text-subtext-color",
              { "text-error-700": error }
            )}
          >
            {helpText}
          </span>
        ) : null}
      </label>
    );
  }
);

export const TextField = Object.assign(TextFieldRoot, {
  Input,
});
