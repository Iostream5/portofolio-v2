import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CvDownloadCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex w-full flex-col gap-4 overflow-hidden rounded-xl border bg-card px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center">
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-primary/5 blur-3xl transition-colors duration-300 group-hover:bg-primary/10"
        aria-hidden
      />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold tracking-tight">{title}</p>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Button asChild size="sm" className="rounded-lg">
          <a href={href} download>
            <Download className="size-4" aria-hidden />
          </a>
        </Button>
      </div>
    </div>
  );
}
