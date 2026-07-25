import { type RefObject } from "react";

export type TransitionState =
  | "idle"
  | "splash"
  | "exiting"
  | "navigating"
  | "entering";

export interface AnimationRefs {
  splashLeft: RefObject<HTMLDivElement | null>;
  splashRight: RefObject<HTMLDivElement | null>;
  bgLeft: RefObject<HTMLDivElement | null>;
  bgRight: RefObject<HTMLDivElement | null>;
  diagonal: RefObject<HTMLDivElement | null>;
  diagonalBg: RefObject<HTMLDivElement | null>;
  text: RefObject<HTMLHeadingElement | null>;
}
