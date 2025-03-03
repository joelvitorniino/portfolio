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

export default function Card({ title, description, url, imageLink, repository }: CardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={imageLink}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex space-x-2">
          {url && (
            <Link href={url} target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
                Detalhes
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
            </Link>
          )}
          {repository && (
            <Link href={repository} target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-800 transition-colors duration-200">
                Repositório
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
