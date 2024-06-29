import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavbarLinkMobile({ href, children }: Props) {
  return (
    <Link href={href} className="block rounded-md px-3 py-2 text-base font-medium">
      {children}
    </Link>
  );
}
