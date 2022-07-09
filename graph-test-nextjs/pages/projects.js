import NavBar from '../components/NavBar';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Image from 'next/image';

const graphcms = new GraphQLClient(process.env.GRAPH_CALL);

const QUERY = gql`
  {
    projects {
      id
      title
      slug
      image {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div className='w-screen h-full text-white'>
      <NavBar />
      <div className='grid p-4 border-2 border-pink-600 h-56 content-center'>
        <h2 className='text-black bg-pink-600 text-9xl font-extrabold'>
          Projects
        </h2>
      </div>
      <div className='mx-auto'>
        {projects.map(({ id, title, slug, image }) => (
          <div key={id}>
            <div className='grid grid-cols-2 items-center'>
              <div className='place-self-end'>
                <Image
                  src={image.url}
                  alt='blog post cover image'
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <h2 className='text-pink-600 text-3xl font-bold'>
                  <Link href={`/project/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
