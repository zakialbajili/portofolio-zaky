import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "portfolio.db");

// Single connection, cached across module reloads (HMR-safe)
const globalForDb = globalThis as unknown as { __db?: DatabaseSync };

function createDb() {
  mkdirSync(DATA_DIR, { recursive: true });
  const db = new DatabaseSync(DB_PATH);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");

  db.exec(`
    CREATE TABLE IF NOT EXISTS about (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      years_experience TEXT NOT NULL,
      bio TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS education (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      degree TEXT NOT NULL,
      school TEXT NOT NULL,
      period TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS experiences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role TEXT NOT NULL,
      company TEXT NOT NULL,
      period TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );
  `);

  seedIfEmpty(db);
  return db;
}

// Seed only when the DB was just created / tables empty, so the site
// shows the same content as before the CMS existed.
function seedIfEmpty(db: DatabaseSync) {
  const aboutCount = (db.prepare("SELECT COUNT(*) AS n FROM about").get() as { n: number }).n;
  if (aboutCount === 0) {
    db.prepare(
      "INSERT INTO about (id, name, role, years_experience, bio) VALUES (1, ?, ?, ?, ?)"
    ).run(
      "Zaky Maulana Al Bajili",
      "Fullstack Web Developer",
      "3+",
      "Specialized expertise in software development and over 3 year of consistent experience as a Fullstack Developer. I have a comprehensive understanding of both frontend and backend technologies. Proficient in designing scalable and efficient cloud architecture to support business needs. Accustomed to completing projects on time according to the established schedule. Passionate in the field of Fullstack Development, and Cloud Engineering."
    );
  }

  const projectCount = (db.prepare("SELECT COUNT(*) AS n FROM projects").get() as { n: number }).n;
  if (projectCount === 0) {
    const img = "https://assets.aceternity.com/demos/tailwindmasterkit.webp";
    const insert = db.prepare(
      "INSERT INTO projects (title, description, image_url, sort_order) VALUES (?, ?, ?, ?)"
    );
    for (let i = 0; i < 3; i++) {
      insert.run(
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat quasi autem debitis consequatur possimus, cupiditate repudiandae porro ipsam tempore modi. Aspernatur animi mollitia omnis exercitationem nobis voluptatibus. Inventore, deleniti.",
        img,
        i
      );
    }
  }

  const educationCount = (db.prepare("SELECT COUNT(*) AS n FROM education").get() as { n: number }).n;
  if (educationCount === 0) {
    db.prepare(
      "INSERT INTO education (degree, school, period, sort_order) VALUES (?, ?, ?, 0)"
    ).run(
      "Bachelor in Electrical Engineering",
      "University of Sultan Ageng Tirtayasa",
      "2020-2024"
    );
  }

  const experienceCount = (db.prepare("SELECT COUNT(*) AS n FROM experiences").get() as { n: number }).n;
  if (experienceCount === 0) {
    const rows: [string, string, string][] = [
      ["IT Developer", "PT. Superkrane Mitra Utama, Tbk.", "2025 - Present"],
      ["Fullstack Web Developer (Freelance)", "Candidax Consultant", "2025"],
      ["Fullstack Web Developer (Freelance)", "PT. OQB Software House", "2024"],
      ["Fullstack Web Developer (Freelance)", "SMKN 3 Kota Serang", "2024"],
      ["Fullstack Web Developer (Freelance)", "MYG Beauty Clinic", "2024"],
    ];
    const insert = db.prepare(
      "INSERT INTO experiences (role, company, period, sort_order) VALUES (?, ?, ?, ?)"
    );
    rows.forEach((r, i) => insert.run(r[0], r[1], r[2], i));
  }
}

export function getDb(): DatabaseSync {
  if (!globalForDb.__db) {
    globalForDb.__db = createDb();
  }
  return globalForDb.__db;
}
