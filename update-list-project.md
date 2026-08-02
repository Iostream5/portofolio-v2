`judul`:`PAKE-MAIL`
`link`:`https://pake-mail.vercel.app/`
`img`: `pake-mail.png`
`deskripsi`: `RANGKUM SAJA (Saya sudah punya gambaran lengkap. Berikut audit dan deskripsi portofolionya.
Audit Proyek — Pake Mail
Stack & infrastruktur: Next.js 16 (App Router) + React 19 + TypeScript, Auth.js (NextAuth v5) dengan Google OAuth, Prisma + PostgreSQL (Supabase), BullMQ + Redis (Upstash) untuk job queue, Cloudflare R2 (S3-compatible) untuk penyimpanan dokumen, di-deploy ke Vercel + worker terpisah di Railway.
Fitur inti yang diimplementasikan:
- Auth — Login/registrasi Google OAuth di app/(auth) + middleware di proxy.ts.
- Email accounts — Connect Gmail via OAuth, token dienkripsi AES-256-GCM (lib/encryption.ts).
- Batch sending — antrian email terjadwal via BullMQ (lib/queue.ts, workers/index.ts), dgn cron windows, delay acak, retry, auto-stop, per-recipient status pipeline (PENDING→SENT→APPLIED→...→ACCEPTED).
- Reply detection engine — poling Gmail (lib/gmail-poll.ts) dengan deteksi tingkat keyakinan 4-tier (CONFIRMED/LIKELY/POSSIBLE/INDIKASI), filter auto-reply, exclude list, link ke funnel rekrutmen.
- Auto-resend — trigger/mulai ulang untuk pelamar yang tak dijawab (workers/resend-*.ts).
- Aset & template — upload dokumen (R2), template email, profile/CV, recipient import/export.
- Dashboard — notifikasi, statistik, activity logs.
Kualitas: Clean-architecture-ish (tiered: route handlers + lib/* + workers/), enkripsi at-rest untuk token, lazy-init Redis untuk menghindari kegagalan build, terstruktur rapi, dokumentasi produksi (production-dokumentation.md) sangat detail.
Catatan minor (bukan blocker): Banyak any di beberapa worker/gmail-poll, nama file production-dokumentation.md typo, dan README masih default bawaan Next.js (belum ditulis manual).
Deskripsi untuk Portofolio (siap tempel, Bahasa Indonesia)
Pake Mail — Platform Otomasi Pelamar Kerja (SaaS)
Full-stack SaaS yang mengotomatiskan pengiriman lamaran kerja massal ke banyak HR sekaligus, lengkap dengan mesin deteksi balasan (reply tracking) untuk memantau progress pelamar hingga tahap interview sampai diterima.
Arsitektur & Teknologi: Next.js 16 (App Router) + TypeScript; autentikasi Google OAuth (Auth.js v5); ORM Prisma di atas PostgreSQL (Supabase auto-generated schema dengan ENUM status dan foreign key); BullMQ + Upstash Redis untuk job queue dan pemrosesan batch ber-skala; Cloudflare R2 (S3 compatible) untuk object storage dokumen (upload CV, surat, sertifikat); AES-256-GCM untuk enkripsi token OAuth pengguna saat istirahat. UI dibangun dengan Tailwind CSS dan sistem desain custom. Deploy di Vercel dengan background worker terpisah (Railway).
Fitur kunci:
- Antrean pengiriman email terjadwal (delay, jam/hari aktif, retry otomatis, auto-stop saat fail-rate tinggi);
- Reply detection engine dengan 4 tingkat keyakinan (Confirmed/Likely/Possible/Indikasi) via polling Gmail + heuristik filter auto-reply;
- Pipeline status pelamar (Applied → Interview → Offering → Accepted) yang diperbarui otomatis dari balasan;
- Auto-resend scheduled untuk pelamar yang belum dijawab;
- Manajemen dokumen ber-versi, template email custom, database tujuan, import/export CSV, notifikasi real-time.
Hal teknis yang paling saya banggakan: desain sistem job queue dengan beberapa worker (email, reply-poll, notification-batcher, resend-trigger, resend-execution), enkripsi & penyimpanan aman token OAuth pihak ketiga, dan deteksi balasan dengan pemanfaatan Gmail API thread matching.
Tetapi perlu saya luruskan: file dokumentasi akses utama bernama production-dokumentation.md (ada typo "dokumentation"). Ini tidak berpengaruh ke fungsionalitas.)`

`pengerjaan`:`juli 2026-agustus 2026
`techstack`:`nextjs, supabase, redis, tailwind, prisma, bullmq, backblaze r2, railway, googleapis, oauth`
