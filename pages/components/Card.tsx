import Image from "next/image";
import Link from "next/link";
import React from "react";

type SafeNumber = number | `${number}`;

interface CardProps {
  imageLink: string;
  width: SafeNumber;
  height: SafeNumber;
  url: string;
  title: string;
  description: string;
  repository: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center flex-col">
      <Image
        className="rounded-t-lg"
        src={props.imageLink}
        width={props.width}
        height={props.height}
        alt="Portfolio"
      />
      <div className="p-7">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <Link
          href={props.url ?? ""}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>

        <Link
          href={props.repository ?? ""}
          className="inline-flex items-end px-3 py-2 ml-24 sm:ml-16 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600 lg:ml-24 md:ml-24 iphone:ml-10"
        >
          Repository
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
