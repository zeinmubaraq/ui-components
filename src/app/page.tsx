import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex">
      <ul>
        <li>
          <Link href="/navbar/navbar-1">Navbar 1</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/forms/login-form-1">Login Form 1</Link>
        </li>
      </ul>
    </main>
  );
}

