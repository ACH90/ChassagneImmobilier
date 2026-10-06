type MarqueeProps = {
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

export default function Marquee({
  children,
  duration = 35,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`marquee-wrapper ${className}`}
      aria-label="Informations locales"
    >
      <div
        className="marquee-track"
        style={
          {
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
