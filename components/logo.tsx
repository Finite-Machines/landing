export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo" aria-label="Finite Machines">
      <span className="logo-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {!compact && <span className="logo-type">FINITE MACHINES</span>}
    </span>
  );
}
