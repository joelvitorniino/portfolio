import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <div className="bg-gray-300 p-8">
        <h1 className="text-3xl font-bold">Contact</h1>
        <div className="mt-4">
          <span className="inline-block m-1">
            <FaLinkedin size={45} className="inline" />
            <Link
              href="https://br.linkedin.com/in/joel-vitor-niino-campos-b319ba238"
              target="_blank"
            >
              <p className="inline ml-2 font-semibold hover:font-bold">
                Joel Vitor Niino Campos
              </p>
            </Link>
          </span>

          <span className="flex m-1">
            <FaWhatsapp size={45} className="inline" />
            <Link href="https://wa.me/+5521967401179" target="_blank">
              <p className="inline ml-2 font-semibold hover:font-bold">
                Joel Vitor - Whatsapp
              </p>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
