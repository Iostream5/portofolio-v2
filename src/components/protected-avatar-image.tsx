"use client";

import { AvatarImage } from "@/components/ui/avatar";

export function ProtectedAvatarImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <AvatarImage
      alt={alt}
      src={src}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    />
  );
}