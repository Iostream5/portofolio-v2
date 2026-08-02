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

export const resumeId: Resume = {
  name: "Azhar Adriyan Hasibuan",
  initials: "Zar",
  url: "https://localhost:3000",
  location: "Bekasi, Jawa Barat, Indonesia",
  locationLink: "[google.com](https://www.google.com/maps/place/Bekasi)",
  description:
    "Lulusan SMKS Al-Ittihad jurusan Rekayasa Perangkat Lunak. Terbiasa belajar melalui praktik langsung dan cukup memperhatikan detail saat mengerjakan sesuatu. Memiliki pengalaman magang di PT Neuronworks Indonesia serta terbiasa bekerja dalam tim untuk proyek-proyek.",
  summary:
    "Saya Lulusan SMK jurusan Rekayasa Perangkat Lunak (RPL) yang punya pengalaman magang sebagai Quality Assurance. Selama sekolah, saya cukup sering terlibat dalam proyek kelas, mulai dari aplikasi mobile sederhana hingga website, baik dikerjakan sendiri maupun bersama tim. Pengalaman paling berharga adalah saat magang di PT Neuronworks Indonesia, di mana saya belajar langsung soal software testing dan quality assurance di lingkungan kerja profesional. Saya terbiasa belajar melalui praktik langsung, cukup memperhatikan detail, dan terbiasa bekerja sama dalam tim untuk menyelesaikan proyek sesuai standar kualitas yang diminta. Saat ini saya masih terus mengembangkan kemampuan di bidang testing, automation, serta software development.",
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
    { href: "/", icon: HomeIcon, label: "Beranda" },
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
        name: "Kirim Email",
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
        "Menguji software untuk memastikan aplikasi berjalan sesuai standar kualitas. Sehari-hari menulis test case, melakukan manual testing, dan bekerja bareng tim development untuk menemukan serta memperbaiki bug.",
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
        `Teaching Factory (TEFA) adalah model pembelajaran berbasis industri di SMK. Lewat TEFA, siswa tidak cuma belajar teori di kelas, tapi juga langsung membuat produk atau layanan nyata dengan standar kualitas yang diakui industri.`,
    }
  ],
  education: [
    {
      school: "SMKS Al-Ittihad",
      href: "https://smks-alittihad.sch.id/",
      degree: "Rekayasa Perangkat Lunak (RPL)",
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
        "Aplikasi tuntunan bacaan tawasul, Al-Qur'an, dan sholawat yang dikembangkan oleh Tefatie SMKS Al-Ittihad. Tujuannya sederhana: membantu pengguna memahami dan mengamalkan bacaan-bacaan penting sehari-hari sesuai ajaran Islam.",
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
      dates: "Feb 2025 - Mei 2025",

      description:
        `Sistem manajemen antrean berbasis web dan desktop yang dibuat khusus untuk Warung Telepon (Wartel). Aplikasi ini menangani seluruh operasional wartel — mulai dari pendaftaran antrean pelanggan, pencatatan durasi pemakaian, perhitungan biaya otomatis sesuai tarif, sampai laporan dan analitik.`,
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
        `Aplikasi web berbasis Next.js dan Supabase untuk mengelola seluruh proses Praktik Kerja Lapangan (PKL) di SMK, dari awal sampai selesai. Mendukung 13 peran pengguna, termasuk admin, kaprog, korlap, pembimbing, dan siswa.`,
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
        `Sistem Informasi Akademik STAI Al-Ittihad yang memudahkan akses informasi, pendaftaran, dan pengelolaan perkuliahan secara modern, transparan, dan terintegrasi.`,
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
