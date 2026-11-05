import { getDb } from "./db";

export interface About {
  id: number;
  name: string;
  role: string;
  years_experience: string;
  bio: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  sort_order: number;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  sort_order: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  sort_order: number;
}

export interface Content {
  about: About | null;
  projects: Project[];
  education: Education[];
  experiences: Experience[];
}

// node:sqlite rows are null-prototype objects, which Next.js refuses to
// pass to client components. Spread into plain objects before returning.
function toPlain<T>(row: unknown): T {
  return { ...(row as Record<string, unknown>) } as T;
}

export function getAbout(): About | null {
  const row = getDb().prepare("SELECT * FROM about WHERE id = 1").get();
  return row ? toPlain<About>(row) : null;
}

export function getProjects(): Project[] {
  return getDb()
    .prepare("SELECT * FROM projects ORDER BY sort_order ASC, id ASC")
    .all()
    .map((r) => toPlain<Project>(r));
}

export function getEducation(): Education[] {
  return getDb()
    .prepare("SELECT * FROM education ORDER BY sort_order ASC, id ASC")
    .all()
    .map((r) => toPlain<Education>(r));
}

export function getExperiences(): Experience[] {
  return getDb()
    .prepare("SELECT * FROM experiences ORDER BY sort_order ASC, id ASC")
    .all()
    .map((r) => toPlain<Experience>(r));
}

export function getContent(): Content {
  return {
    about: getAbout(),
    projects: getProjects(),
    education: getEducation(),
    experiences: getExperiences(),
  };
}

// ---- Writes (admin) ----

export function updateAbout(input: Omit<About, "id">) {
  getDb()
    .prepare(
      "UPDATE about SET name = ?, role = ?, years_experience = ?, bio = ? WHERE id = 1"
    )
    .run(input.name, input.role, input.years_experience, input.bio);
  return getAbout();
}

export function createProject(input: Omit<Project, "id">) {
  const nextOrder = (
    getDb()
      .prepare("SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM projects")
      .get() as { n: number }
  ).n;
  const result = getDb()
    .prepare(
      "INSERT INTO projects (title, description, image_url, sort_order) VALUES (?, ?, ?, ?)"
    )
    .run(input.title, input.description, input.image_url, nextOrder);
  return result.lastInsertRowid as number;
}

export function updateProject(id: number, input: Omit<Project, "id">) {
  getDb()
    .prepare(
      "UPDATE projects SET title = ?, description = ?, image_url = ? WHERE id = ?"
    )
    .run(input.title, input.description, input.image_url, id);
}

export function deleteProject(id: number) {
  getDb().prepare("DELETE FROM projects WHERE id = ?").run(id);
}

export function createEducation(input: Omit<Education, "id">) {
  const nextOrder = (
    getDb()
      .prepare("SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM education")
      .get() as { n: number }
  ).n;
  const result = getDb()
    .prepare(
      "INSERT INTO education (degree, school, period, sort_order) VALUES (?, ?, ?, ?)"
    )
    .run(input.degree, input.school, input.period, nextOrder);
  return result.lastInsertRowid as number;
}

export function updateEducation(id: number, input: Omit<Education, "id">) {
  getDb()
    .prepare("UPDATE education SET degree = ?, school = ?, period = ? WHERE id = ?")
    .run(input.degree, input.school, input.period, id);
}

export function deleteEducation(id: number) {
  getDb().prepare("DELETE FROM education WHERE id = ?").run(id);
}

export function createExperience(input: Omit<Experience, "id">) {
  const nextOrder = (
    getDb()
      .prepare("SELECT COALESCE(MAX(sort_order), -1) + 1 AS n FROM experiences")
      .get() as { n: number }
  ).n;
  const result = getDb()
    .prepare(
      "INSERT INTO experiences (role, company, period, sort_order) VALUES (?, ?, ?, ?)"
    )
    .run(input.role, input.company, input.period, nextOrder);
  return result.lastInsertRowid as number;
}

export function updateExperience(id: number, input: Omit<Experience, "id">) {
  getDb()
    .prepare("UPDATE experiences SET role = ?, company = ?, period = ? WHERE id = ?")
    .run(input.role, input.company, input.period, id);
}

export function deleteExperience(id: number) {
  getDb().prepare("DELETE FROM experiences WHERE id = ?").run(id);
}
