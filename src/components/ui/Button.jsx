import React from 'react';

/**
 * Universal Button component adhering to the design system.
 * Supports link and button modes with single-line whitespace-nowrap and accessible focus.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap select-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-[8px] gap-2",
    md: "px-6 py-3 text-base rounded-[8px] gap-2.5",
    lg: "px-8 py-3.5 text-lg rounded-[8px] gap-3 font-semibold",
  };

  const variants = {
    primary: "bg-[#184332] text-white hover:bg-[#0f2c21] shadow-sm hover:shadow active:scale-[0.99]",
    secondary: "bg-[#24332c] text-white hover:bg-[#18231e] shadow-sm active:scale-[0.99]",
    outline: "border border-[#184332] text-[#184332] hover:bg-[#184332] hover:text-white bg-transparent active:scale-[0.99]",
    white: "bg-white text-[#184332] hover:bg-[#f2f6f3] shadow-md hover:shadow-lg active:scale-[0.99]",
    ghost: "text-[#184332] hover:bg-[#ebf3ee] bg-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
