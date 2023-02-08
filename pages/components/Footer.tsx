import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 w-full">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2023{" "}
          <Link
            href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/"
            className="hover:underline"
          >
            Joel Vitor
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
