type IconName =
  | "arrow"
  | "check"
  | "clock"
  | "cloud"
  | "code"
  | "database"
  | "download"
  | "eye"
  | "gauge"
  | "layers"
  | "maintenance"
  | "menu"
  | "network"
  | "report"
  | "shield"
  | "signal"
  | "trend"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  cloud: <path d="M17.5 19H6a4 4 0 0 1-.6-7.95A7 7 0 0 1 18.9 9a5 5 0 0 1-1.4 10Z"/>,
  code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
  download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
  gauge: <><path d="M4 17a9 9 0 1 1 16 0"/><path d="m12 14 4-5"/><path d="M6 20h12"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
  maintenance: <path d="M14.7 6.3a4 4 0 0 0-5-5l2.1 2.1-2.4 2.4-2.1-2.1a4 4 0 0 0 5 5l7.2 7.2a2.1 2.1 0 0 1-3 3l-7.2-7.2a4 4 0 0 0-5 5l2.1-2.1 2.4 2.4-2.1 2.1a4 4 0 0 0 5-5"/>,
  menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
  network: <><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><rect x="3" y="15" width="6" height="5" rx="1"/><path d="M6 9v3h12v3"/><path d="M6 12v3"/></>,
  report: <><path d="M5 3h11l3 3v15H5V3Z"/><path d="M14 3v5h5"/><path d="M9 17v-3"/><path d="M12 17v-6"/><path d="M15 17v-4"/></>,
  shield: <><path d="M12 3 20 7v5c0 5-3.4 8.1-8 10-4.6-1.9-8-5-8-10V7l8-4Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
  signal: <><path d="M5 18v-3"/><path d="M10 18v-7"/><path d="M15 18V8"/><path d="M20 18V4"/></>,
  trend: <><path d="M3 17 9 11l4 4 8-9"/><path d="M15 6h6v6"/></>,
  x: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
