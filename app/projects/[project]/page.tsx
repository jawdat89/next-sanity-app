import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};
export default async function Projects({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>{project.name}</div>;
}
