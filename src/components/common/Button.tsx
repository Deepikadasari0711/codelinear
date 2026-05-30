import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "primary";
};

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type CommonButtonProps = LinkButtonProps | NativeButtonProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-[4px] px-7 py-2 text-[10px] font-semibold uppercase tracking-normal transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const variants = {
  outline:
    "border border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10",
  primary:
    "border border-[#0878FF] bg-[#0878FF] text-white hover:border-[#0068df] hover:bg-[#0068df]",
};

const Button = (props: CommonButtonProps) => {
  const { className = "", variant = "outline" } = props;
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { children, className: _className, variant: _variant, href, ...linkProps } = props;

    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const {
    children,
    className: _className,
    variant: _variant,
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
