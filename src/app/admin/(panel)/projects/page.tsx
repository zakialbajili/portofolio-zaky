"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  sort_order: number;
}

const EMPTY = { title: "", description: "", image_url: "" };

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await fetch("/api/admin/projects");
    if (res.ok) setProjects(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/admin/projects/${editingId}` : "/api/admin/projects";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm(EMPTY);
      setEditingId(null);
      await load();
    }
  };

  const handleEdit = (p: Project) => {
    setEditingId(p.id);
    setForm({ title: p.title, description: p.description, image_url: p.image_url });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus project ini?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    await load();
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-8">
      <header>
        <h1 className="font-gabarito text-3xl font-bold text-color-darkPurple">
          Projects
        </h1>
      </header>

      <Card className="p-6 shadow-sm">
        <h2 className="font-gabarito font-semibold text-color-primerText mb-4">
          {editingId ? "Edit Project" : "Tambah Project"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Judul</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="image_url">URL Gambar</Label>
            <Input
              id="image_url"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
              required
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit">
              {editingId ? "Simpan" : "Tambah"}
            </Button>
            {editingId && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setEditingId(null);
                  setForm(EMPTY);
                }}
              >
                Batal
              </Button>
            )}
          </div>
        </form>
      </Card>

      <div className="flex flex-col gap-4">
        <h2 className="font-gabarito text-lg font-semibold text-color-primerText">
          Daftar Project
        </h2>
        {loading && <p className="text-sm text-color-secondaryText">Loading...</p>}
        {!loading && projects.length === 0 && (
          <p className="text-sm text-color-secondaryText">Belum ada project.</p>
        )}
        {projects.map((p) => (
          <Card key={p.id} className="p-5 shadow-sm flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-gabarito font-semibold text-color-primerText">
                  {p.title}
                </h3>
                <p className="text-sm text-color-secondaryText line-clamp-2">
                  {p.description}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button size="sm" variant="outline" onClick={() => handleEdit(p)}>
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(p.id)}>
                  Hapus
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
