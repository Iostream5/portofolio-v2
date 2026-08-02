import BlurFade from "@/components/magicui/blur-fade";
import { TransitionLink } from "@/components/page-transition";
import { Badge } from "@/components/ui/badge";
import { getData } from "@/data/resume";
import type { ProjectItem } from "@/data/types";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

function toPlainText(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_#>|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ProjectPreview({ project }: { project: ProjectItem }) {
  return (
    <div className="relative shrink-0">
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-[420px] object-cover"
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[420px] object-cover"
        />
      ) : (
        <div className="w-full h-48 md:h-72 bg-muted" />
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const ids = getAllProjectSlugs(getData("id").projects);
  return routing.locales.flatMap((locale) =>
    ids.map((id) => ({ locale, id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata | undefined> {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const data = getData(locale);
  const project = getProjectBySlug(data.projects, id);

  if (!project) {
    return undefined;
  }

  const description = toPlainText(project.description);
  const projectImage = project.image?.startsWith("http")
    ? project.image
    : `${data.url}${project.image}`;

  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      url: `${data.url}/project/${id}`,
      ...(project.image && {
        images: [
          {
            url: projectImage,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      ...(project.image && {
        images: [projectImage],
      }),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const data = getData(locale);
  const t = await getTranslations("Project");
  const project = getProjectBySlug(data.projects, id);

  if (!project) {
    notFound();
  }

  return (
    <section id="project">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex justify-start gap-4 items-center">
          <TransitionLink
            href="/#projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={t("back")}
          >
            <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
            {t("back")}
          </TransitionLink>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        {project.href ? (
          <TransitionLink
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-border overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`Open ${project.title}`}
          >
            <ProjectPreview project={project} />
          </TransitionLink>
        ) : (
          <div className="relative shrink-0 rounded-xl border border-border overflow-hidden">
            <ProjectPreview project={project} />
          </div>
        )}
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="flex flex-col gap-4 mt-6">
          <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{project.dates}</span>
            {project.active && (
              <Badge
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {t("active")}
              </Badge>
            )}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="my-6 flex w-full items-center">
          <div
            className="flex-1 h-px bg-border"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          />
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{project.description}</Markdown>
        </article>
      </BlurFade>

      {project.links.length > 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="flex flex-col gap-y-4 mt-8">
            <h2 className="text-xl font-bold">{t("links")}</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, idx) => (
                <TransitionLink
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {link.icon}
                  {link.type}
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden />
                </TransitionLink>
              ))}
            </div>
          </div>
        </BlurFade>
      )}

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="flex flex-col gap-y-4 mt-8">
          <h2 className="text-xl font-bold">{t("techStack")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
