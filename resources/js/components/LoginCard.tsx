import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { useForm } from '@inertiajs/react';

interface AuthCardProps {
  onModeSwitch?: (isRegister: boolean) => void;
}

export default function AuthCard({ onModeSwitch }: AuthCardProps) {
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  // Login form
  const loginForm = useForm({
    username: '',
    password: '',
  });

  // Register form
  const registerForm = useForm({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Login data:', loginForm.data);
    loginForm.post('/login');
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Register data:', registerForm.data);

    registerForm.post('/register', {
      onSuccess: () => {
        // Reset form register setelah berhasil
        registerForm.reset();

        // Kembali ke mode login
        setIsRegisterMode(false);
        setShowPassword(false);
        setShowConfirmPassword(false);

        // Callback untuk parent component
        if (onModeSwitch) {
          onModeSwitch(false);
        }

        // Tampilkan pesan sukses (opsional)
        alert('Registrasi berhasil! Silakan login dengan akun Anda.');
      },
      onError: (errors) => {
        // console.log('Registration errors:', errors);
      }
    });
  };

  const switchMode = () => {
    const newMode = !isRegisterMode;
    setIsRegisterMode(newMode);
    setShowPassword(false);
    setShowConfirmPassword(false);

    // Reset forms when switching
    loginForm.reset();
    registerForm.reset();

    // Callback for parent component
    if (onModeSwitch) {
      onModeSwitch(newMode);
    }
  };

  const currentForm = isRegisterMode ? registerForm : loginForm;
  const isLoading = currentForm.processing;

  return (
    <div className="w-full max-w-md">
      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
        {/* Header dengan gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-1">
            {isRegisterMode ? 'Buat Akun Baru' : 'Selamat Datang'}
          </h2>
          <p className="text-blue-100 text-sm">
            {isRegisterMode
              ? 'Daftarkan diri Anda untuk melanjutkan'
              : 'Silahkan masuk ke akun Anda'
            }
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6">
          {/* Login Form */}
          {!isRegisterMode && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type="text"
                    name="username"
                    value={loginForm.data.username}
                    onChange={(e) => loginForm.setData('username', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="masukkan username Anda"
                    required
                  />
                </div>
                {loginForm.errors.username && (
                  <p className="text-red-500 text-xs mt-1">{loginForm.errors.username}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginForm.data.password}
                    onChange={(e) => loginForm.setData('password', e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="masukkan password Anda"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {loginForm.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{loginForm.errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  'Masuk'
                )}
              </button>
            </form>
          )}

          {/* Register Form */}
          {isRegisterMode && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type="text"
                    name="username"
                    value={registerForm.data.username}
                    onChange={(e) => registerForm.setData('username', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="pilih username Anda"
                    required
                    minLength={3}
                  />
                </div>
                {registerForm.errors.username && (
                  <p className="text-red-500 text-xs mt-1">{registerForm.errors.username}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={registerForm.data.password}
                    onChange={(e) => registerForm.setData('password', e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="buat password Anda"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {registerForm.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{registerForm.errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="password_confirmation"
                    value={registerForm.data.password_confirmation}
                    onChange={(e) => registerForm.setData('password_confirmation', e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="ulangi password Anda"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {registerForm.errors.password_confirmation && (
                  <p className="text-red-500 text-xs mt-1">{registerForm.errors.password_confirmation}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-green-300 transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  'Daftar'
                )}
              </button>
            </form>
          )}

          {/* Switch Mode Link */}
          <div className="mt-8 text-center">
            <span className="text-gray-600 text-sm">
              {isRegisterMode ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
              <button
                type="button"
                onClick={switchMode}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors underline"
              >
                {isRegisterMode ? 'Masuk sekarang' : 'Daftar sekarang'}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
