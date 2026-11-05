"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
}
interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
}

const EMPTY_EDU = { degree: "", school: "", period: "" };
const EMPTY_EXP = { role: "", company: "", period: "" };

export default function AdminExperiencePage() {
  const [education, setEducation] = useState<Education[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [eduForm, setEduForm] = useState(EMPTY_EDU);
  const [eduEditId, setEduEditId] = useState<number | null>(null);
  const [expForm, setExpForm] = useState(EMPTY_EXP);
  const [expEditId, setExpEditId] = useState<number | null>(null);

  const load = async () => {
    const [eduRes, expRes] = await Promise.all([
      fetch("/api/admin/education"),
      fetch("/api/admin/experience"),
    ]);
    if (eduRes.ok) setEducation(await eduRes.json());
    if (expRes.ok) setExperiences(await expRes.json());
  };

  useEffect(() => {
    load();
  }, []);

  // Education
  const submitEdu = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = eduEditId ? "PUT" : "POST";
    const url = eduEditId ? `/api/admin/education/${eduEditId}` : "/api/admin/education";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eduForm),
    });
    if (res.ok) {
      setEduForm(EMPTY_EDU);
      setEduEditId(null);
      await load();
    }
  };
  const deleteEdu = async (id: number) => {
    if (!confirm("Hapus education ini?")) return;
    await fetch(`/api/admin/education/${id}`, { method: "DELETE" });
    await load();
  };

  // Experience
  const submitExp = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = expEditId ? "PUT" : "POST";
    const url = expEditId ? `/api/admin/experience/${expEditId}` : "/api/admin/experience";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expForm),
    });
    if (res.ok) {
      setExpForm(EMPTY_EXP);
      setExpEditId(null);
      await load();
    }
  };
  const deleteExp = async (id: number) => {
    if (!confirm("Hapus experience ini?")) return;
    await fetch(`/api/admin/experience/${id}`, { method: "DELETE" });
    await load();
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-10">
      <header>
        <h1 className="font-gabarito text-3xl font-bold text-color-darkPurple">
          Experience
        </h1>
      </header>

      {/* Education */}
      <section className="flex flex-col gap-4">
        <Card className="p-6 shadow-sm">
          <h2 className="font-gabarito font-semibold text-color-primerText mb-4">
            {eduEditId ? "Edit Education" : "Tambah Education"}
          </h2>
          <form onSubmit={submitEdu} className="flex flex-col gap-4">
            <Field label="Gelar / Degree">
              <Input
                value={eduForm.degree}
                onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                required
              />
            </Field>
            <Field label="Sekolah / Kampus">
              <Input
                value={eduForm.school}
                onChange={(e) => setEduForm({ ...eduForm, school: e.target.value })}
                required
              />
            </Field>
            <Field label="Periode">
              <Input
                value={eduForm.period}
                onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                required
              />
            </Field>
            <div className="flex gap-3">
              <Button type="submit">{eduEditId ? "Simpan" : "Tambah"}</Button>
              {eduEditId && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setEduEditId(null);
                    setEduForm(EMPTY_EDU);
                  }}
                >
                  Batal
                </Button>
              )}
            </div>
          </form>
        </Card>

        <Card className="p-5 shadow-sm">
          <h3 className="font-gabarito font-semibold text-color-primerText mb-3">
            Daftar Education
          </h3>
          {education.length === 0 && (
            <p className="text-sm text-color-secondaryText">Belum ada data.</p>
          )}
          <ul className="flex flex-col gap-2">
            {education.map((e) => (
              <li
                key={e.id}
                className="flex items-center justify-between gap-3 border border-color-border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="font-medium text-color-primerText">{e.degree}</p>
                  <p className="text-sm text-color-secondaryText">
                    {e.school} — {e.period}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEduEditId(e.id);
                      setEduForm({ degree: e.degree, school: e.school, period: e.period });
                    }}
                  >
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteEdu(e.id)}>
                    Hapus
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Work Experience */}
      <section className="flex flex-col gap-4">
        <Card className="p-6 shadow-sm">
          <h2 className="font-gabarito font-semibold text-color-primerText mb-4">
            {expEditId ? "Edit Experience" : "Tambah Work Experience"}
          </h2>
          <form onSubmit={submitExp} className="flex flex-col gap-4">
            <Field label="Role">
              <Input
                value={expForm.role}
                onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                required
              />
            </Field>
            <Field label="Perusahaan">
              <Input
                value={expForm.company}
                onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                required
              />
            </Field>
            <Field label="Periode">
              <Input
                value={expForm.period}
                onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                required
              />
            </Field>
            <div className="flex gap-3">
              <Button type="submit">{expEditId ? "Simpan" : "Tambah"}</Button>
              {expEditId && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    setExpEditId(null);
                    setExpForm(EMPTY_EXP);
                  }}
                >
                  Batal
                </Button>
              )}
            </div>
          </form>
        </Card>

        <Card className="p-5 shadow-sm">
          <h3 className="font-gabarito font-semibold text-color-primerText mb-3">
            Daftar Work Experience
          </h3>
          {experiences.length === 0 && (
            <p className="text-sm text-color-secondaryText">Belum ada data.</p>
          )}
          <ul className="flex flex-col gap-2">
            {experiences.map((e) => (
              <li
                key={e.id}
                className="flex items-center justify-between gap-3 border border-color-border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="font-medium text-color-primerText">{e.role}</p>
                  <p className="text-sm text-color-secondaryText">
                    {e.company} — {e.period}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setExpEditId(e.id);
                      setExpForm({ role: e.role, company: e.company, period: e.period });
                    }}
                  >
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteExp(e.id)}>
                    Hapus
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
