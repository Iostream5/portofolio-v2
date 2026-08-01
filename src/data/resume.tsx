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

export const DATA = {
  name: "Azhar Adriyan Hasibuan",
  initials: "Zar",
  url: "[localhost](https://localhost:3000)",
  location: "Bekasi, Jawa Barat, Indonesia",
  locationLink: "[google.com](https://www.google.com/maps/place/Bekasi)",
  description:
    "QA Engineer yang senang memastikan software berjalan tanpa masalah. Lulusan SMK jurusan Rekayasa Perangkat Lunak, pernah magang sebagai QA di PT Neuronworks Indonesia.",
  summary:
    "Saya lulusan SMKS Al-Ittihad jurusan Rekayasa Perangkat Lunak (RPL) dan tertarik banget dengan dunia Quality Assurance. Selama sekolah, saya aktif mengerjakan berbagai proyek aplikasi mobile dan web. Lewat magang di PT Neuronworks Indonesia sebagai QA Engineer, saya belajar banyak soal software testing dan quality assurance secara langsung di dunia kerja. Sampai sekarang, saya masih terus mengasah skill di bidang testing, automation, dan software development.",
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
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "azharadrian123@gmail.com",
    tel: "+6285-6926-01300",
    social: {
      GitHub: {
        name: "GitHub",
        url: "[github.com](https://github.com/Iostream5)",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "[linkedin.com](https://www.linkedin.com/in/zardryn)",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "[instagram.com](https://www.instagram.com/zardryn)",
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
      href: "[neuronworks.co.id](https://www.neuronworks.co.id/)",
      badges: [],
      location: "Komp. Buah Batu Regency A2 No.9-10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia",
      title: "Quality Assurance (QA)",
      logoUrl: "[encrypted-tbn0.gstatic.com](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CON4GjtkOyFYJzXn4lPngKUFWL-_7G7jwC5V0YLkZopmP3CeI2rphdY&s=10)",
      start: "Jun 2025",
      end: "Sep 2025",
      description:
        "Menguji software untuk memastikan aplikasi berjalan sesuai standar kualitas. Sehari-hari menulis test case, melakukan manual testing, dan bekerja bareng tim development untuk menemukan serta memperbaiki bug.",
    },
    {
      company: "TEFATIE",
      href: "[neuronworks.co.id](https://www.neuronworks.co.id/)",
      badges: [],
      location: "Komp. Buah Batu Regency A2 No.9-10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia",
      title: "Teaching Factory Al-Ittihad",
      logoUrl: "[encrypted-tbn0.gstatic.com](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CON4GjtkOyFYJzXn4lPngKUFWL-_7G7jwC5V0YLkZopmP3CeI2rphdY&s=10)",
      start: "Jun 2024",
      end: "Feb 2025",
      description:
        `Teaching Factory (TEFA) adalah model pembelajaran berbasis industri di SMK. Lewat TEFA, siswa tidak cuma belajar teori di kelas, tapi juga langsung membuat produk atau layanan nyata dengan standar kualitas yang diakui industri. Nama "Tie" sendiri diambil dari nama sekolah kami, Al-Ittihad (Altie).`,
    }
  ],
  education: [
    {
      school: "SMKS Al-Ittihad",
      href: "[smks-alittihad.sch.id](https://smks-alittihad.sch.id/)",
      degree: "Rekayasa Perangkat Lunak (RPL)",
      logoUrl: "/SMKS.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Irsyadut Thulab",
      href: "[play.google.com](https://play.google.com/store/apps/details?id=com.irsyadutthulab.altie&pcampaignid=web_share)",
      dates: "Jan 2024 - Sep 2025",
      active: true,
      description:
        "Aplikasi tuntunan bacaan tawasul, Al-Qur'an, dan sholawat yang dikembangkan oleh Tefatie SMKS Al-Ittihad. Tujuannya sederhana: membantu pengguna memahami dan mengamalkan bacaan-bacaan penting sehari-hari sesuai ajaran Islam.",
      technologies: ["JavaScript", "Alpine JS", "Capacitor"],
      links: [
        {
          type: "Playstore",
          href: "[play.google.com](https://play.google.com/store/apps/details?id=com.irsyadutthulab.altie&pcampaignid=web_share)",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "[play-lh.googleusercontent.com](https://play-lh.googleusercontent.com/c-vKgE9axlrXh6ztUeQ_zqkm2xNY7EDpC8tJ_SMuY3Xsys6ibe1GwlMclLtGvGHQAxpvoj7wVZdfYWS22VqT=w526-h296-rw)",
      video: "/irsyadut-thulab-video.mp4",
    },
    {
      title: "Wartel-App",
      href: "[wartel-altie.vercel.app](https://wartel-altie.vercel.app/)",
      dates: "Feb 2025 - Mei 2025",
      active: true,
      description:
        `Sistem manajemen antrean berbasis web dan desktop yang dibuat khusus untuk Warung Telepon (Wartel). Aplikasi ini menangani seluruh operasional wartel — mulai dari pendaftaran antrean pelanggan, pencatatan durasi pemakaian, perhitungan biaya otomatis sesuai tarif, sampai laporan dan analitik.`,
      technologies: ["React JS", "Supabase", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Web",
          href: "[wartel-altie.vercel.app](https://wartel-altie.vercel.app/)",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/wartel-app.png",
      video: "",
    },
    {
      title: "Prakerin App",
      href: "[prakerin-smks-alittihad.vercel.app](https://prakerin-smks-alittihad.vercel.app/login)",
      dates: "Jan 2026 - Jun 2026",
      active: true,
      description:
        `Aplikasi web berbasis Next.js dan Supabase untuk mengelola seluruh proses Praktik Kerja Lapangan (PKL) di SMK, dari awal sampai selesai. Mendukung 13 peran pengguna, termasuk admin, kaprog, korlap, pembimbing, dan siswa.`,
      technologies: ["Next JS", "Supabase", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Web",
          href: "[prakerin-smks-alittihad.vercel.app](https://prakerin-smks-alittihad.vercel.app/login)",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/prakerin-app.png",
      video: "",
    },
    {
      title: "Siakad",
      href: "#",
      dates: "Jan 2026 - Jun 2026",
      active: true,
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

