import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  url: string;
  imageLink: string;
  repository: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <div className="relative flex justify-center items-center h-64">
        <Image
          className="rounded-t-lg"
          src={props.imageLink}
          layout="fill"
          objectFit="cover"
          alt={props.title}
        />
      </div>
      <div className="p-7 flex flex-col grow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="grow"></div>
        <div className="flex">
          <Link href={props.url ?? ""} className="flex-1 inline-flex items-center justify-center py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-bl-lg rounded-br-lg hover:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" passHref>
              Details
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
          </Link>
          <Link href={props.repository ?? ""} className="flex-1 inline-flex items-center justify-center py-3 ml-2 text-sm font-medium text-center text-white bg-gray-600 rounded-bl-lg rounded-br-lg hover:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600" passHref>
              Repository
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
