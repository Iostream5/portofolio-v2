import type { SVGProps } from "react";

const Supabase = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M11.9 22.8c-.58.56-1.54.22-1.68-.6l-1.04-9.2c-.08-.68.46-1.24 1.14-1.24H17.4c.93 0 1.48 1.05.92 1.77l-7.18 9.21v.06Z"
      fill="url(#supa-a)"
    />
    <path
      d="M11.9 22.8c-.58.56-1.54.22-1.68-.6l-1.04-9.2c-.08-.68.46-1.24 1.14-1.24H17.4c.93 0 1.48 1.05.92 1.77l-7.18 9.21v.06Z"
      fill="url(#supa-b)"
    />
    <path
      d="M13.66 1.2a.9.9 0 0 1 1.68.6l1.04 9.2c.08.68-.46 1.24-1.14 1.24H8.16c-.93 0-1.48-1.05-.92-1.77l7.18-9.21-.76-.06Z"
      fill="#3ECF8E"
    />
    <defs>
      <linearGradient id="supa-a" x1="12" y1="11.76" x2="12" y2="22.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient id="supa-b" x1="12" y1="11.76" x2="12" y2="22.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
    </defs>
  </svg>
);

export { Supabase };
