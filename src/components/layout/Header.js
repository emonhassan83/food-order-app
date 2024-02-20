import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <a href="" className="uppercase text-red-600 font-semibold text-xl">
          Tasty Trails
        </a>
        <nav className="flex gap-6 items-center text-gray-600 font-medium">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contract</Link>
          <Link
            href={""}
            className="bg-primary text-white rounded-full px-6 py-1 "
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}
