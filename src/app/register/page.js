"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFromSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    //* User registration functionality
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="my-20">
      <h1 className="text-center text-primary text-2xl mb-4">Register</h1>

      {userCreated && (
        <div className="my-4 text-center text-sm">
          User created.<br />
          Now you can{' '}
          <Link className="underline text-red-500 font-semibold" href={'/login'}>Login &raquo;</Link>
        </div>
      )}

      {error && (
        <div className="my-4 text-center text-red-500 text-sm">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
      <form className="block max-w-sm mx-auto" onSubmit={handleFromSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500 text-sm">
          or login with social account
        </div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})} className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="Google png" width={24} height={24} />
          Login with google
        </button>

        <div className="text-center my-4 text-gray-500 border-t pt-4 text-sm">
          Existing account?{' '}
          <Link className="underline text-red-500 font-semibold" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
      <div></div>
    </section>
  );
}
