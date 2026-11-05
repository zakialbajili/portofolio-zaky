"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface AboutForm {
  name: string;
  role: string;
  years_experience: string;
  bio: string;
}

const EMPTY: AboutForm = { name: "", role: "", years_experience: "", bio: "" };

export default function AdminAboutPage() {
  const [form, setForm] = useState<AboutForm>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/about")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setForm(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/about", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-8">
      <header>
        <h1 className="font-gabarito text-3xl font-bold text-color-darkPurple">
          About Me
        </h1>
      </header>

      <Card className="p-6 shadow-sm">
        {loading ? (
          <p className="text-sm text-color-secondaryText">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nama</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="years_experience">Tahun Pengalaman</Label>
              <Input
                id="years_experience"
                value={form.years_experience}
                onChange={(e) => setForm({ ...form, years_experience: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="bio">Intro / Bio</Label>
              <Textarea
                id="bio"
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                rows={6}
                required
              />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit">Simpan</Button>
              {saved && <span className="text-sm text-color-jungleGreen">Tersimpan ✓</span>}
            </div>
          </form>
        )}
      </Card>
    </div>
  );
}
