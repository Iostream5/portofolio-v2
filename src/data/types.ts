import type { ComponentType, ReactNode } from "react";

export type IconType = ComponentType<{ className?: string }>;

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  navbar: boolean;
  download?: boolean;
}

export interface NavItem {
  href: string;
  icon: IconType;
  label: string;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface WorkItem {
  company: string;
  href: string;
  badges: unknown[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string | null;
  description: string;
}

export interface EducationItem {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface ProjectLink {
  icon: ReactNode;
  type: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  image: string;
  video: string;
}

export interface HackathonItem {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  win?: string;
  icon?: string;
  links: Array<{
    title: string;
    icon: ReactNode;
    href: string;
  }>;
}

export interface Resume {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: Skill[];
  navbar: NavItem[];
  contact: {
    email: string;
    tel: string;
    social: Record<string, SocialLink>;
  };
  work: WorkItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  hackathons: HackathonItem[];
}
