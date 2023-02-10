import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa';

const compliments = [
  'Me chamo Joel Vitor',
  'Tenho 16 anos',
  'Sou Programador Full Stack',
  'Meu grande sonho é se tornar um grande desenvolvedor!',
  'Estudo programação a 3 anos!',
];

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex flex-col items-center mb-10">
      <Image
        src="/images/profile.jpeg"
        width="128"
        height="128"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">Joel Vitor</h1>
      <h1 className='text-xl text-gray-700 mb-10'>
        <Typewriter options={{
          strings: compliments,
          autoStart: true
        }}/>
      </h1>
    </div>
    <div className="flex flex-col md:flex-row justify-between w-64">
      <Link href="https://github.com/joelvitorniino" className='bg-gray-300 py-2 px-4 rounded-lg mb-4 md:mb-0 hover:bg-gray-400'>
        <BsGithub className='w-7 h-7 inline-block' />
        <span className='ml-2'>Github</span>
      </Link>
      <Link href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/" className='bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400'>
        <FaLinkedin className='w-7 h-7 inline-block' />
        <span className='ml-2'>Linkedin</span>
      </Link>
    </div>
  </div>
  );

};