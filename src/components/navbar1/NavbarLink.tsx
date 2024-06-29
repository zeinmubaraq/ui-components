import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavbarLink({ href, children }: Props) {
  return (
    <Link href={href} className="px-1 py-2 text-sm font-medium">
      {children}
    </Link>
  );
}
