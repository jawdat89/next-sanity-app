import Image from "next/image";

import { getProjects } from "@/sanity/sanity-utils";

import { Fragment } from "react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I'm{" "}
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
          <Fragment>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-300"
              />
            )}
            <div
              key={project._id}
              className="border border-gray-300 rounded-lg p-3"
            >
              <div className="bg-gradient-to-r from-orange-400 via-red-400 to-violet-600 bg-clip-text font-bold text-transparent">
                {project.name}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
