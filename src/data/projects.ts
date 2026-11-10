import { getCollection, type CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">;

// Ongoing work sorts first, then everything else by when it last saw activity.
const lastActive = (project: Project) =>
  project.data.ongoing ? Number.MAX_SAFE_INTEGER : (project.data.endDate ?? project.data.date).valueOf();

/** Every project, most recent first. Used by the home page, the list page, and project pages. */
export async function getProjects() {
  const projects = await getCollection("projects");
  return projects.sort(
    (a, b) => lastActive(b) - lastActive(a) || b.data.date.valueOf() - a.data.date.valueOf(),
  );
}
