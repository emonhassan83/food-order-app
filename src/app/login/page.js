/* eslint-disable react/no-unescaped-entities */
'use client';
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn('credentials', {email, password, callbackUrl: '/'});

    setLoginInProgress(false);
  }
  return (
    <section className="mt-20">
      <h1 className="text-center text-primary text-2xl mb-4">
        Login
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
               disabled={loginInProgress}
               onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="password" value={password}
               disabled={loginInProgress}
               onChange={e => setPassword(e.target.value)}/>
        <button disabled={loginInProgress} type="submit">Login</button>
        <div className="my-4 text-center text-gray-500 text-sm">
          or login with provider
        </div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
                className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={'Google png'} width={24} height={24} />
          Login with google
        </button>

        <div className="text-center my-4 text-gray-500 border-t pt-4 text-sm">
          Don't have account?{' '}
          <Link className="underline text-red-500 font-semibold" href={'/register'}>Register here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}