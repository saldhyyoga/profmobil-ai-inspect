
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, LogIn, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Cookies from 'js-cookie';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This is a mock authentication - in a real application, you would connect to a backend service
      // For now, we'll just set a cookie to simulate login success
      if (email && password) {
        // Set auth cookie that expires in 7 days
        Cookies.set('profmobil-access', 'authenticated', { expires: 7 });
        
        toast({
          title: isRegister ? "Registrasi Berhasil!" : "Login Berhasil!",
          description: isRegister 
            ? "Akun Anda telah berhasil dibuat." 
            : "Selamat datang kembali di ProfMobil AI.",
          variant: "default",
        });

        // Redirect to dashboard or home page after successful login
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      toast({
        title: "Authentication Error",
        description: "Terjadi kesalahan saat proses autentikasi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // In a real application, implement Google OAuth login
    toast({
      title: "Google Login",
      description: "Fitur login dengan Google sedang dalam pengembangan.",
      variant: "default",
    });
    
    // For demo purposes, we'll simulate a successful login
    Cookies.set('profmobil-access', 'authenticated', { expires: 7 });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-automotive-50 to-tech-50">
      <div className="hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-automotive-600 to-tech-800 p-12 text-white justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute opacity-10 w-64 h-64 rounded-full bg-white -top-10 -left-10"></div>
          <div className="absolute opacity-10 w-96 h-96 rounded-full bg-white bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6">ProfMobil AI</h1>
          <p className="text-2xl mb-8">Inspeksi Mobil Bekas Bertenaga AI</p>
          <div className="space-y-8">
            <div className="flex items-start">
              <span className="flex-shrink-0 bg-white/20 p-2 rounded-full mr-4">
                <User className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-xl">Akun Terpercaya</h3>
                <p className="mt-2 opacity-80">Dapatkan akses ke fitur eksklusif untuk pengalaman transaksi mobil bekas yang lebih aman.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 bg-white/20 p-2 rounded-full mr-4">
                <LogIn className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-xl">Login dengan Mudah</h3>
                <p className="mt-2 opacity-80">Gunakan email atau akun Google Anda untuk login dengan cepat dan aman.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {isRegister ? 'Buat Akun Baru' : 'Selamat Datang Kembali'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isRegister ? 'Daftar untuk memulai perjalanan Anda dengan ProfMobil AI' : 'Login untuk mengakses akun Anda'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={isRegister}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {!isRegister && (
              <div className="text-right">
                <a href="#" className="text-sm text-automotive-600 hover:underline">Lupa password?</a>
              </div>
            )}

            <Button 
              type="submit"
              className="w-full bg-automotive-600 hover:bg-automotive-700"
              disabled={isLoading}
            >
              {isLoading ? "Memproses..." : isRegister ? "Daftar" : "Login"}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau lanjutkan dengan</span>
              </div>
            </div>

            <Button 
              type="button"
              variant="outline"
              className="w-full border-gray-300"
              onClick={handleGoogleLogin}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                </g>
              </svg>
              Login dengan Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
              <button
                type="button" 
                className="text-automotive-600 hover:underline font-medium"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? 'Login' : 'Daftar sekarang'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
