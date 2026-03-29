/* ── Background lights — pure CSS animations, zero JS ── */

export default function BackgroundLights() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary purple glow - top right */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] bg-light bg-light-1" />

      {/* Secondary green glow - bottom left */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-tertiary/20 rounded-full blur-[150px] bg-light bg-light-2" />

      {/* Accent purple glow - center left */}
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-[#818cf8]/20 rounded-full blur-[120px] bg-light bg-light-3" />

      {/* Small accent - mid right */}
      <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] bg-primary/25 rounded-full blur-[100px] bg-light bg-light-4" />

      {/* Bottom center glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-primary/20 to-tertiary/10 rounded-full blur-[120px] bg-light bg-light-5" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(12, 12, 15, 0.4) 70%, rgba(12, 12, 15, 0.8) 100%)`,
        }}
      />
    </div>
  );
}
