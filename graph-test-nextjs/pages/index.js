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
  const { blogPosts, projects } = await graphcms.request(QUERY);

  return {
    props: {
      blogPosts,
      projects,
    },
  };
}

export default function Home({ blogPosts, projects }) {
  return (
    <div className='w-screen h-full text-white'>
      <NavBar />
      <div className='p-4 h-screen'>
        <div className='grid grid-cols-2 items-center h-3/5'>
          <div>
            <h2 className='text-pink-600 text-2xl font-extrabold'>
              Hey! I'm Sirena Alyce
            </h2>
          </div>
          <div>
            <p>
              I'm a front-end developer in Atlanta, GA. Powder gummi bears
              soufflé donut jelly-o pudding pie liquorice oat cake. Lemon drops
              powder lemon drops brownie dragée sugar plum. Tiramisu jelly beans
              pudding cupcake ice cream marzipan ice cream pie.
            </p>
          </div>
        </div>
        <div className='mb-4'>
          <div>
            <h2 className='text-black bg-pink-600 text-2xl p-1 mb-2 font-bold'>
              About
            </h2>
          </div>
          <div>
            <p>
              Liquorice candy canes candy croissant sweet cake halvah. Donut
              bear claw lollipop sweet fruitcake pudding candy croissant.
              Jujubes jelly lemon drops chocolate bar muffin jelly icing. Tart
              gummi bears croissant danish lemon drops pudding powder chocolate
              cake sweet roll. Pie caramels bear claw shortbread pastry gummies.
              Cake cookie biscuit bear claw sugar plum cookie halvah. Sesame
              snaps candy gummies marshmallow liquorice topping. Powder gummi
              bears cotton candy gingerbread soufflé sesame snaps apple pie
              dessert cheesecake. Cookie cotton candy chocolate toffee tiramisu
              chocolate bonbon liquorice.
            </p>
          </div>
        </div>
        <div className='h-3/5'>
          <div>
            <h2 className='text-black bg-pink-600 text-2xl p-1 font-bold'>
              Projects
            </h2>
          </div>
          <div className='grid grid-cols-3 h-full place-items-center'>
            {projects.slice(0, 3).map(({ id, title, slug, image }) => (
              <div key={id} className='grid grid-cols-1'>
                <h2 className='text-pink-600 text-3xl font-bold'>
                  <Link href={`/project/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
                <Image src={image.url} width={150} height={150} />
              </div>
            ))}
          </div>
        </div>
        <div className='h-1/5'>
          <div>
            <h2 className='text-black bg-pink-600 p-1 mb-2 text-2xl font-bold'>
              Latest Articles
            </h2>
          </div>
          <div className='grid grid-cols-2'>
            {blogPosts.slice(0, 2).map(({ id, title, slug }) => (
              <div key={id}>
                <h2 className='text-pink-600 text-2xl font-bold'>
                  <Link href={`/post/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
