import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/navbar/navbar-1">Navbar 1</Link>
        </li>
      </ul>
    </main>
  );
}

