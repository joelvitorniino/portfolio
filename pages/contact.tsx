import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato | Portfólio Joel Vitor</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contato</h1>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaLinkedin size={40} className="text-blue-700" />
              <Link href="https://br.linkedin.com/in/joel-vitor-niino-campos-b319ba238" passHref target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-700 hover:text-blue-800 transition-colors">
                  Joel Vitor Niino Campos
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <FaWhatsapp size={40} className="text-green-500" />
              <Link href="https://wa.me/+5521967401179" passHref target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors">
                  Joel Vitor - Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
