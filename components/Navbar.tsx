/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NezokaLogo from '@/assets/images/nezoka.webp';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoMenu } from 'react-icons/io5';

interface NavBarProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
const Navbar: React.FC<NavBarProps> = ({ setLoading }) => {
  return (
    <nav className="w-full fixed top-0 flex justify-between items-center shadow-md shadow-black/15 p-5 md:px-24 backdrop-blur bg-white/50 ">
      <Link href="/" className="w-fit flex gap-4 items-center select-none">
        <Image
          src={NezokaLogo}
          alt="Nezoka Logo"
          width={50}
          height={50}
          className="max-sm:w-10"
        />
        <span className="text-gray-800 font-extrabold text-3xl">Nezoka</span>
      </Link>
      <Sheet>
        <SheetTrigger className="hidden max-md:block">
          <IoMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent side="right" className="pt-20 flex flex-col">
          <SheetHeader>
            <Link
              href="/"
              className="w-fit flex gap-4 items-center select-none"
            >
              <Image
                src={NezokaLogo}
                alt="Nezoka Logo"
                width={50}
                height={50}
                className="max-sm:w-10"
              />
              <span className="text-gray-800 font-extrabold text-3xl">
                Nezoka
              </span>
            </Link>
          </SheetHeader>
          <div className="flex flex-col justify-start items-end gap-5 pt-10 text-xl font-bold">
            <Link href="/" className="flex gap-2 items-end select-none">
              Home
            </Link>
            <button
              onClick={() => setLoading(true)}
              className="rounded-lg flex "
            >
              How To Use
            </button>
            <Link
              href="https://t.me/nezoka1"
              target="__blank"
              className="flex gap-2 items-end select-none whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex gap-7 font-semibold w-fit max-md:hidden">
        <Link href="/" className="w-10 flex gap-2 items-center select-none">
          Home
        </Link>
        <button onClick={() => setLoading(true)}>How To Use</button>
        <Link
          href="https://t.me/nezoka1"
          target="__blank"
          className="w-10 flex gap-2 items-center select-none whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
