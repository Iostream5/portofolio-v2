# Data yang Diperlukan untuk Portofolio Web

Template ini menggunakan file utama `src/data/resume.tsx` sebagai sumber data utama.

---

## 1. Data Diri (Personal Identity)

| Field | Deskripsi | Contoh |
|---|---|---|
| `name` | Nama lengkap | `"Azhar Adriyan Hasibuan"` |
| `initials` | Inisial nama | `"Zar"` |
| `url` | URL website personal | `"https://dillion.io"` |
| `location` | Lokasi saat ini | `"Bekasi, Jawabarat, Indonesia"` |
| `locationLink` | Link Google Maps lokasi | `"https://www.google.com/maps/place/..."` |
| `description` | Deskripsi singkat (1 kalimat) | `"Software Engineer turned Entrepreneur..."` |
| `summary` | Bio lengkap (mendukung Markdown) | `"At the end of 2022, I quit my job..."` |
| `avatarUrl` | Path foto profil di folder `public/` | `"/me.png"` |

---

## 2. Kontak

| Field | Deskripsi | Contoh |
|---|---|---|
| `contact.email` | Alamat email | `"azharadrian123@gmail.com"` |
| `contact.tel` | Nomor telepon | `"+6285-6926-01300"` |

--- 

## 3. Social Media Links

Setiap platform memiliki: `name`, `url`, `navbar` (true/false untuk tampil di navbar)

| Platform | URL |
|---|---|
| GitHub | `"https://github.com/Iostream5"` |
| LinkedIn | `"www.linkedin.com/in/zardryn"` |
| Instagram | `"https://www.instagram.com/zardryn"` |
| Email | `"azharadrian123@gmail.com"` (default) |

**Note:** Icon tersedia di `src/components/icons.tsx`: globe, email, linkedin, instagram, github, notion, whatsapp, dll.

---

## 4. Navbar Links

| Field | Deskripsi | Contoh |
|---|---|---|
| `href` | Path halaman | `"/"` |
| `label` | Teks navbar | `"Home"` |

Default: Home (`/`) dan Blog (`/blog`)

---

## 5. Skills / Keahlian

Array of objects: `{ name: string, icon: React.Component }`

Contoh skill:
- React, Next.js, TypeScript, Node.js, TailwindCSS, UI/UX, Figma, Git, GitHub, Vercel, HTML, CSS, JavaScript, Microsoft Office

Icon skill ada di folder `src/components/ui/svgs/`

---

## 6. Pengalaman Kerja (Work Experience)

Setiap entry:

| Field | Deskripsi | Contoh |
|---|---|---|
| `company` | Nama perusahaan | `"PT NEURONWORKS INDONESIA"` |
| `href` | URL perusahaan | `"https://www.neuronworks.co.id/"` |
| `badges` | Array badge (opsional) | `[]` |
| `location` | Lokasi kerja | `"Komp. Buah Batu Regency A2 No.9 - 10 Kel. Kujangsari, Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia."` |
| `title` | Jabatan | `"Quality Assurance (QA)"` |
| `logoUrl` | Path logo di `public/` | `"/atomic.png"` |
| `start` | Tanggal mulai | `"Jun 2025"` |
| `end` | Tanggal selesai | `"Sep 2025"` |
| `description` | Deskripsi pekerjaan (mendukung Markdown) | `""` |

---

## 7. Pendidikan (Education)

Setiap entry:

| Field | Deskripsi | Contoh |
|---|---|---|
| `school` | Nama institusi | `"SMKS AL-ITTIHAD"` |
| `href` | URL institusi | `"https://smks-alittihad.sch.id/"` |
| `degree` | Jurusan | `"Rekayasa Perangkat Lunak (RPL)"` |
| `logoUrl` | Path logo di `public/` | `"/al-ittihad.png"` |
| `start` | Tahun mulai | `"2023"` |
| `end` | Tahun selesai | `"2026"` |

---

## 8. Proyek (Projects)

Setiap entry:

| Field | Deskripsi | Contoh |
|---|---|---|
| `title` | Nama proyek | `"Irsyadut Thulab App"` |
| `href` | URL proyek | `"https://play.google.com/store/apps/details?id=com.irsyadutthulab.altie&pcampaignid=web_share"` |
| `dates` | Rentang waktu | `"Jan 2024 - Sep 2025"` |
| `active` | Status aktif | `true` |
| `description` | Deskripsi (mendukung Markdown) | `"Irsyadut Thulab adalah aplikasi yang menyediakan tuntunan bacaan tawasul, Al-Qur'an, dan sholawat. Dikembangkan oleh Tefatie SMKS Al Ittihad, aplikasi ini bertujuan untuk memudahkan pengguna dalam memahami dan mengamalkan bacaan-bacaan penting dalam kehidupan sehari-hari sesuai ajaran Islam. Dengan antarmuka yang ramah pengguna, Irsyadut Thulab berupaya menjadi panduan praktis bagi umat dalam memperdalam spiritualitas dan ibadah."` |
| `technologies` | Array teknologi yang dipakai | `["HTML", "JS", "Alpine JS", "Capacitor"]` |
| `links` | Array link `{ type, href, icon }` | `[{ type: "Playstore", href: "https://play.google.com/store/apps/details?id=com.irsyadutthulab.altie&pcampaignid=web_share", icon: <Icons.globe /> }]` |
| `image` | Path gambar (opsional) | `"/irsyadut-thulab.jpg"` |
| `video` | URL video (opsional) | `"https://..."` |

---

## 9. Hackathon (Opsional)

Setiap entry:

no

---

## 10. Blog Posts

File MDX di folder `content/*.mdx` dengan frontmatter:

```yaml
---
title: "Judul Artikel"
publishedAt: "2024-12-01"
updatedAt: "2024-12-01"  # opsional
author: "Nama Author"     # opsional
summary: "Ringkasan singkat artikel"
image: "https://..."      # opsional, untuk OG image
---
```

---

## 11. Static Assets yang Perlu Diganti

| File | Keterangan |
|---|---|
| `public/me.png` | Foto profil |
| `public/*.png` / `public/*.svg` | Logo perusahaan & institusi pendidikan |
| `src/app/favicon.ico` | Icon tab browser |
| `public/fonts/` | Font untuk OG images |

---

## 12. SEO Metadata (di `src/app/layout.tsx`)

| Field | Keterangan |
|---|---|
| `metadata.verification.google` | Google Search Console verification code |
| `metadata.verification.yandex` | Yandex verification code |

---

## Ringkasan

**File utama yang perlu diedit:** `src/data/resume.tsx` (95% data)
**Folder konten blog:** `content/*.mdx`
**Folder gambar:** `public/`

Total field yang perlu diisi: **~300+ field** (termasuk semua entry work, education, projects, hackathons)
