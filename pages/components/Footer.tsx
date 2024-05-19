import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-center lg:text-left">
        <div
          className="text-center text-gray-700 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <Link href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/">
            Joel Vitor
          </Link>{" "}
          &copy; { year }
        </div>
      </footer>
    </>
  );
}
