import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { UiUx } from "@/components/ui/svgs/uiux";
import { Figma } from "@/components/ui/svgs/figma";
import { Git } from "@/components/ui/svgs/git";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Javascript } from "@/components/ui/svgs/javascript";
import { MicrosoftOffice } from "@/components/ui/svgs/microsoftoffice";
import { Supabase } from "@/components/ui/svgs/supabase";
import type { Resume } from "./types";

export const resumeEn: Resume = {
  name: "Azhar Adriyan Hasibuan",
  initials: "Zar",
  url: "https://localhost:3000",
  location: "Bekasi, West Java, Indonesia",
  locationLink: "[google.com](https://www.google.com/maps/place/Bekasi)",
  description:
    "A graduate of SMKS Al-Ittihad majoring in Software Engineering (RPL). I learn best through hands-on practice and pay close attention to detail. I have internship experience at PT Neuronworks Indonesia and I'm comfortable working in teams on projects.",
  summary:
    "I'm a vocational high school graduate in Software Engineering (RPL) with internship experience as a Quality Assurance. During school, I was often involved in class projects, from simple mobile apps to websites, both on my own and with teams. The most valuable experience was my internship at PT Neuronworks Indonesia, where I learned directly about software testing and quality assurance in a professional work environment. I'm used to learning through hands-on practice, I pay close attention to detail, and I'm comfortable collaborating with teams to deliver projects that meet the required quality standards. I'm currently still developing my skills in testing, automation, and software development.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "TailwindCSS", icon: TailwindCSS },
    { name: "UI/UX", icon: UiUx },
    { name: "Figma", icon: Figma },
    { name: "Git", icon: Git },
    { name: "Vercel", icon: Vercel },
    { name: "JavaScript", icon: Javascript },
    { name: "Microsoft Office", icon: MicrosoftOffice },
    { name: "Supabase", icon: Supabase },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "azharadrian123@gmail.com",
    tel: "+6285-6926-01300",
    social: {
      CV: {
        name: "CV",
        url: "/CV%20Azhar%20Adriyan%20Hasibuan.pdf",
        icon: Icons.download,
        navbar: false,
        download: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Iostream5",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zardryn",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/zardryn",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:azharadrian123@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT NEURONWORKS INDONESIA",
      href: "https://www.neuronworks.co.id",
      badges: [],
      location: "Komp. Buah Batu Regency A2 No.9-10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia",
      title: "Quality Assurance (QA)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CON4GjtkOyFYJzXn4lPngKUFWL-_7G7jwC5V0YLkZopmP3CeI2rphdY&s=10",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Testing software to make sure applications run to quality standards. Day to day, I write test cases, do manual testing, and work closely with the development team to find and fix bugs.",
    },
    {
      company: "TEFATIE",
      href: "https://smks-alittihad.sch.id/",
      badges: [],
      location: "Komp. Buah Batu Regency A2 No.9-10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia",
      title: "Teaching Factory Al-Ittihad",
      logoUrl: "/tefatie.jpeg",
      start: "Jun 2024",
      end: "Feb 2025",
      description:
        `Teaching Factory (TEFA) is an industry-based learning model in vocational schools (SMK). Through TEFA, students don't just learn theory in class, but also directly create real products or services to industry-recognized quality standards.`,
    }
  ],
  education: [
    {
      school: "SMKS Al-Ittihad",
      href: "https://smks-alittihad.sch.id/",
      degree: "Software Engineering (RPL)",
      logoUrl: "/SMKS.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Irsyadut Thulab",
      href: "https://play.google.com/store/apps/details?id=com.irsyadutthulab.altie&pcampaignid=web_share",
      dates: "Jan 2024 - Sep 2025",

      description:
        "A guide app for tawasul recitations, the Qur'an, and sholawat developed by Tefatie SMKS Al-Ittihad. The goal is simple: help users understand and practice important daily recitations according to Islamic teachings.",
      technologies: ["JavaScript", "Alpine JS", "Capacitor"],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.irsyadutthulab.altie&pcampaignid=web_share",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://play-lh.googleusercontent.com/c-vKgE9axlrXh6ztUeQ_zqkm2xNY7EDpC8tJ_SMuY3Xsys6ibe1GwlMclLtGvGHQAxpvoj7wVZdfYWS22VqT=w526-h296-rw",
      video: "/irsyadut-thulab-video.mp4",
    },
    {
      title: "Wartel-App",
      href: "https://wartel-altie.vercel.app/",
      dates: "Feb 2025 - May 2025",

      description:
        `A web and desktop queue management system built specifically for telephone kiosks (Wartel). This app handles the entire wartel operation — from customer queue registration, usage duration tracking, automatic billing based on rates, to reports and analytics.`,
      technologies: ["React JS", "Supabase", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Web",
          href: "https://wartel-altie.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/wartel-app.png",
      video: "",
    },
    {
      title: "Prakerin App",
      href: "https://prakerin-smks-alittihad.vercel.app",
      dates: "Jan 2026 - Jun 2026",

      description:
        `A Next.js and Supabase web app to manage the entire Industrial Work Practice (PKL) process at vocational schools, from start to finish. Supports 13 user roles, including admin, kaprog, korlap, supervisor, and student.`,
      technologies: ["Next JS", "Supabase", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Web",
          href: "https://prakerin-smks-alittihad.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/prakerin-app.png",
      video: "",
    },
    {
      title: "Siakad",
      href: "https://siakad.vercel.app",
      dates: "Jan 2026 - Jun 2026",

      description:
        `Academic Information System for STAI Al-Ittihad that makes information access, enrollment, and course management modern, transparent, and integrated.`,
      technologies: ["Next JS", "Supabase", "TailwindCSS", "Typescript", "Midtrans"],
      links: [
        {
          type: "Web",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/siakad-app.png",
      video: "",
    }
  ],
  hackathons: [],
};
