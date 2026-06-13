const variants = {
  primary:
    'bg-accent-blue text-text-primary hover:bg-accent-blue/90 border border-transparent',
  ghost:
    'bg-transparent text-text-primary border border-border hover:border-text-muted hover:bg-bg-elevated/50',
  text: 'bg-transparent text-text-body hover:text-text-primary border border-transparent p-0',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base'

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    const isHash = href.startsWith('#')

    if (isHash) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      )
    }

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
