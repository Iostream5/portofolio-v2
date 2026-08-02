import type { ProjectItem } from "@/data/types";

export type Project = ProjectItem;

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectSlug(project: Project) {
  return slugify(project.title);
}

export function getProjectBySlug(projects: readonly ProjectItem[], slug: string) {
  return projects.find((project) => getProjectSlug(project) === slug);
}

export function getAllProjectSlugs(projects: readonly ProjectItem[]) {
  return projects.map((project) => getProjectSlug(project));
}
