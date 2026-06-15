export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div
      className={`glass-card rounded-2xl border border-border bg-card/80 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
