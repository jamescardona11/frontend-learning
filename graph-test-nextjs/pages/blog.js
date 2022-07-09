import NavBar from '../components/NavBar';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Image from 'next/image';

const graphcms = new GraphQLClient(process.env.GRAPH_CALL);

const QUERY = gql`
  {
    blogPosts {
      id
      slug
      title
      coverPhoto {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { blogPosts } = await graphcms.request(QUERY);

  return {
    props: {
      blogPosts,
    },
  };
}

export default function Blog({ blogPosts }) {
  return (
    <div className='w-screen h-full text-white'>
      <NavBar />
      <div className='grid p-4 border-2 border-pink-600 h-56 content-center'>
        <h2 className='text-black bg-pink-600 text-9xl font-extrabold'>Blog</h2>
      </div>
      <div className='mx-auto'>
        {blogPosts.map(({ id, title, slug, coverPhoto }) => (
          <div key={id}>
            <div className='grid grid-cols-2 items-center'>
              <div className='place-self-end'>
                <Image
                  src={coverPhoto.url}
                  alt='blog post cover image'
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <h2 className='text-pink-600 text-3xl font-bold'>
                  <Link href={`/post/${slug}`}>
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
