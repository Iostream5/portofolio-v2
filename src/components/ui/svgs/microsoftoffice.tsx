import type { SVGProps } from "react";

const MicrosoftOffice = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5Z" fill="#D83B01" />
    <path d="M12 2v20l10-5V7l-10-5Z" fill="#F7630C" />
    <path d="M12 7l-4 3.5v3L12 17V7Z" fill="#fff" opacity="0.8" />
    <path d="M12 7v10l4-3.5v-3L12 7Z" fill="#fff" opacity="0.5" />
  </svg>
);

export { MicrosoftOffice };
