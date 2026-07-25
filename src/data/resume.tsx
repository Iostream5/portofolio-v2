import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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

export const DATA = {
  name: "Azhar Adriyan Hasibuan",
  initials: "Zar",
  url: "https://localhost:3000",
  location: "Bekasi, Jawa Barat, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bekasi",
  description:
    "Quality Assurance Engineer yang passionate dalam memastikan kualitas software. Lulusan SMK jurusan Rekayasa Perangkat Lunak dengan pengalaman magang di PT Neuronworks Indonesia.",
  summary:
    "Saya adalah lulusan SMKS Al-Ittihad jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki passion di bidang Quality Assurance. Selama masa sekolah, saya aktif mengembangkan berbagai proyek aplikasi mobile dan web. Pengalaman magang saya di PT Neuronworks Indonesia sebagai QA Engineer memberikan saya pemahaman mendalam tentang software testing dan quality assurance. Saya terus belajar dan mengembangkan skill di bidang testing, automation, dan software development.",
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "azharadrian123@gmail.com",
    tel: "+6285-6926-01300",
    social: {
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
      href: "https://www.neuronworks.co.id/",
      badges: [],
      location: "Komp. Buah Batu Regency A2 No.9-10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia",
      title: "Quality Assurance (QA)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CON4GjtkOyFYJzXn4lPngKUFWL-_7G7jwC5V0YLkZopmP3CeI2rphdY&s=10",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Melakukan pengujian software untuk memastikan kualitas aplikasi sesuai standar. Menulis test case, melakukan manual testing, dan berkolaborasi dengan tim development untuk mengidentifikasi dan memperbaiki bug.",
    },
    {
      company: "TEFATIE",
      href: "https://www.neuronworks.co.id/",
      badges: [],
      location: "Komp. Buah Batu Regency A2 No.9-10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia",
      title: "Teaching Factory Al-Ittihad",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CON4GjtkOyFYJzXn4lPngKUFWL-_7G7jwC5V0YLkZopmP3CeI2rphdY&s=10",
      start: "Jun 2024",
      end: "Feb 2025",
      description:
        `Di sekolah menengah kejuruan (SMK), Teaching Factory atau TEFA adalah konsep pembelajaran berbasis industri. Melalui TEFA, siswa tidak hanya belajar teori di kelas, tetapi juga langsung memproduksi produk atau layanan nyata yang standar kualitasnya diakui oleh masyarakat atau industri pasar. Kata "Tie" sendiri diambil dari nama sekolah mereka, Al Ittihad (Altie)`,
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
      active: true,
      description:
        "Irsyadut Thulab adalah aplikasi yang menyediakan tuntunan bacaan tawasul, Al-Qur'an, dan sholawat. Dikembangkan oleh Tefatie SMKS Al Ittihad, aplikasi ini bertujuan untuk memudahkan pengguna dalam memahami dan mengamalkan bacaan-bacaan penting dalam kehidupan sehari-hari sesuai ajaran Islam.",
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
      dates: "feb 2025 - may 2025",
      active: true,
      description:
        `Wartel Queue Management System adalah aplikasi manajemen antrean dan pencatatan waktu berbasis web & desktop yang dirancang khusus untuk Warung Telepon (Wartel). Aplikasi ini mengelola seluruh operasional wartel mulai dari pendaftaran antrean pelanggan, pencatatan durasi pemakaian, perhitungan biaya otomatis berdasarkan tarif yang dikonfigurasi, hingga pelaporan dan analitik.`,
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
      href: "https://prakerin-smks-alittihad.vercel.app/login",
      dates: "jan 2026 - jun 2026",
      active: true,
      description:
        `Aplikasi web berbasis Next.js + Supabase untuk mengelola seluruh siklus Praktik Kerja Lapangan (PKL) di SMK. Melayani 13 peran pengguna (admin, kaprog, korlap, pembimbing, siswa, dll.)`,
      technologies: ["Next JS", "Supabase", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Web",
          href: "https://prakerin-smks-alittihad.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/prakerin-app.png",
      video: "",
    },
    {
      title: "Siakad",
      href: "#",
      dates: "jan 2026 - jun 2026",
      active: true,
      description:
        `Sistem Informasi Akademik STAI AL-ITTIHAD hadir untuk memberikan kemudahan akses informasi, pendaftaran, dan manajemen perkuliahan yang modern, transparan, dan terintegrasi.`,
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
  hackathons: [] as Array<{
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
      icon: React.ReactNode;
      href: string;
    }>;
  }>,
} as const;
