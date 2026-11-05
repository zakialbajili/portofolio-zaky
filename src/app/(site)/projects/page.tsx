import LatestProject from "@/components/organism/LatestProject";
import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <main>
      <LatestProject projects={getProjects()} />
    </main>
  );
}
