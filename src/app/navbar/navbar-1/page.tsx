'use client';

import TailwindLogo from '@/components/TailwindLogo';
import NavbarLink from '@/components/navbar1/NavbarLink';
import NavbarLinkMobile from '@/components/navbar1/NavbarLinkMobile';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-2">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <TailwindLogo />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex gap-x-4">
                  <NavbarLink href="/">Dashboard</NavbarLink>
                  <NavbarLink href="#">Projects</NavbarLink>
                  <NavbarLink href="#">Calender</NavbarLink>
                  <NavbarLink href="#">Contact</NavbarLink>
                  <NavbarLink href="#">About</NavbarLink>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center gap-x-4 pr-2 sm:static sm:pr-0">
              <BellIcon className="h-6 w-6 text-gray-500" />
              <div className="relative">
                <button className="rounded-full ring-2 ring-gray-300 ring-offset-2">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </button>
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Your Profile
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Settings
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={isOpen ? 'sm:hidden' : 'hidden sm:hidden'}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavbarLinkMobile href="">Dashboard</NavbarLinkMobile>
            <NavbarLinkMobile href="#">Projects</NavbarLinkMobile>
            <NavbarLinkMobile href="#">Calendar</NavbarLinkMobile>
            <NavbarLinkMobile href="#">Contact</NavbarLinkMobile>
            <NavbarLinkMobile href="#">About</NavbarLinkMobile>
          </div>
        </div>
      </nav>
    </>
  );
}
