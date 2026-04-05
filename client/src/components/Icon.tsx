interface IconProps {
  icon: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

export function Icon({ icon, size = 'md', className = '' }: IconProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  return (
    <i
      className={`fa-solid ${icon} ${sizeClasses[size]} ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    />
  );
}
