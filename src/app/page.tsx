import Link from 'next/link';

export default function Home() {
  return (
    <main className="mt-10 flex justify-center gap-x-10">
      <ul>
        <li className="text-2xl">
          <Link href="/navbar/navbar-1">Navbar 1</Link>
        </li>
      </ul>

      <ul className="space-y-5">
        <li className="text-2xl">
          <Link href="/forms/login-form-1">Login Form 1</Link>
        </li>
        <li className="text-2xl">
          <Link href="/forms/login/login-1">Login 1</Link>
        </li>
      </ul>
    </main>
  );
}

