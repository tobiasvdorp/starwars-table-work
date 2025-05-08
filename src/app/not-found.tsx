import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center min-h-screen p-4 sm:p-8">
      <div className="bg-primary rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-8 text-gray-800">
          Page Not Found
        </h1>
        <p className="text-lg mb-8">
          {" "}
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-black-500 hover:underline border-2 border-black rounded-md px-4 py-2"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
