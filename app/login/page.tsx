"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Email atau Password salah!");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-black-main flex items-center justify-center relative overflow-hidden text-white">
      <Spotlight className="absolute inset-0 z-0" />
      
      <div className="z-10 w-full max-w-md p-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} /> Kembali ke Beranda
        </Link>
        
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-primary via-blue-400 to-blue-primary"></div>
          
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="text-zinc-400 mb-8">Akses Dashboard Operasional HPIO.</p>

          {error && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                <input 
                  type="email" 
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black-main border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-primary transition-colors"
                  placeholder="admin@hpio.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black-main border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-blue-primary transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 rounded-xl bg-blue-primary text-black-main font-semibold hover:bg-blue-400 transition-colors mt-4"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
