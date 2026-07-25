import type { SVGProps } from "react";

const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5.5C8.5 5.5 6.2 7.3 5 11c1.5-2.3 3.3-3.2 5.5-2.8 1.2.2 2 1 3 2C15 12 17 14 19 11c-1.5 2.3-3.3 3.2-5.5 2.8-1.2-.2-2-1-3-2C9 9 7 7 5 5.5Z"
      fill="#06B6D4"
    />
    <path
      d="M5 11c-1.5 2.3-1 4.8 1.5 6 2.5 1.2 4.8.5 6.5-1.5 1-1.2 2-2 3-1.5 1.5.5 2.5 2 3 3 .5-2.3 0-4.5-2-6-1.5-1-3-.5-4.5 1-1 1-2 1.5-3 1-1.5-.5-2.5-1.5-3-2Z"
      fill="#06B6D4"
    />
  </svg>
);

export { TailwindCSS };
