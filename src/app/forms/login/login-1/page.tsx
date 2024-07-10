import Image from 'next/image';
import Link from 'next/link';

export default function Login1() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="flex h-4/5 w-10/12 justify-center lg:w-3/5">
        <div className="relative hidden w-6/12 rounded-l-md shadow-lg lg:block">
          <Image
            src="/bg-login1.png"
            alt="login 1"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-l-md"
          />
        </div>
        <div className="w-full rounded-r-md bg-white px-10 py-14 shadow-lg lg:w-5/12">
          <div className="flex justify-center">
            <Image src="/eastblue.svg" alt="eastblue logo" width={130} height={10} />
          </div>
          <p className="mt-10 text-center text-lg text-gray-500">Welcome to East Blue</p>
          <form className="mt-8">
            <div>
              <label htmlFor="username" className="block text-xs font-medium text-gray-500">
                Email
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="block w-full border-b py-1.5 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="password" className="block text-xs font-medium text-gray-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full border-b py-1.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-3 flex justify-end">
              <Link href="#" className="text-xs font-medium text-blue-500">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-gray-600 py-1.5 text-sm font-bold text-white hover:bg-gray-500"
            >
              Sign in
            </button>
            <p className="mt-6 text-center text-xs font-medium text-gray-500">
              New East Blue?{' '}
              <Link href="#" className="font-semibold text-blue-500">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
