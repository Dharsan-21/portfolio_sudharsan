export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 text-sm text-text-body ${className}`}
    >
      {children}
    </span>
  )
}
