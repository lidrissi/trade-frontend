'use client';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function LoginPage(): React.ReactElement {
  const t = useTranslations('Auth');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      email: 'superadmin@massarates.ma',
      password: 'Fdgx9!kQ',
      redirect: false, // prevent automatic redirect
    });

    if (res?.error) {
      setError('Invalid credentials');
    } else {
      window.location.href = '/'; // redirect manually
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          placeholder={t('Email')}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
