import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};
export default async function Projects({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between bg-gradient-to-r from-orange-400 via-red-400 to-violet-600 bg-clip-text text-transparent text-3xl drop-shadow font-extrabold">
        <h1>{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>

      {/* content goes here */}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      {/* image goes here */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
