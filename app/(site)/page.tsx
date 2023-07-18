import Image from "next/image";

import { getProjects } from "@/sanity/sanity-utils";

import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-400 to-violet-600 bg-clip-text text-transparent">
          Jawdat
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-500">
        Hello Everyone! Check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-300 rounded-lg p-1 hover: scale-105 hover: border-blue-200"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-300"
              />
            )}
            <div className="mt-2 bg-gradient-to-r from-orange-400 via-red-400 to-violet-600 bg-clip-text font-bold text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
