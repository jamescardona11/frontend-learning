import NavBar from "../../components/NavBar";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckyjg354o11vl01yy3in52e9d/master"
);

export const QUERY = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      source
      title
      demo
      description
      image {
        url
      }
    }
  }
`;

export const PROJECTLIST = gql`
  {
    projects {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, { slug });

  const project = data.project;

  return {
    props: {
      project,
    },
  };
}
export async function getStaticPaths() {
  const { projects } = await graphcms.request(PROJECTLIST);

  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: "blocking",
  };
}
// finish
export default function Project({ project }) {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="text-center">
        <div className="m-4">
          <h2 className="text-pink-600 font-extrabold text-6xl">
            {project.title}
          </h2>
        </div>
        <div className="">
          <Image
            src={project.image.url}
            alt="project image"
            width={300}
            height={300}
          />
          <p>{project.description}</p>
          <Link href={project.demo}>
            <a className="text-pink-600 hover:text-white">DEMO</a>
          </Link>{" "}
          <Link href={project.source}>
            <a className="text-pink-600 hover:text-white">SOURCE</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
