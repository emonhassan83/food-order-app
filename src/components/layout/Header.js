"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session.status;

  return (
    <>
      <header className="flex items-center justify-between">
        <a href="/" className="uppercase text-red-600 font-semibold text-xl">
          Tasty Trails
        </a>
        <nav className="flex gap-6 items-center text-gray-600 font-medium">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contract</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500">
          {status === "authenticated" && (
            <>
              {/* <Link href={"/profile"} className="whitespace-nowrap">
                Hello, {userName}
              </Link> */}
              <button
                onClick={() => signOut()}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Logout
              </button>
            </>
          )}
          {status === "unauthenticated" && (
            <>
             <Link href="/login">Login</Link>
          <Link
            href={"/register"}
            className="bg-primary text-white rounded-full px-6 py-2 "
          >
            Register
          </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
