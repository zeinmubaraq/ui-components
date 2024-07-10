import TextInput from '@/components/login-form1/TextInput';
import TailwindLogo from '@/components/TailwindLogo';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm1() {
  return (
    <main className="relative h-screen w-screen">
      <Image
        alt="login"
        src="/login-1.jpg"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-y-0 w-full bg-white px-10 py-20 sm:right-0 sm:w-1/3">
        <div className="flex flex-col justify-center">
          <TailwindLogo />
          <h2 className="mt-7 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10">
          <form className="space-y-6">
            <input type="text" className="" />
            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <button className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Sign in
            </button>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
