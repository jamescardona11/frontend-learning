import NavBar from "../../components/NavBar";
import styles from "../../components/Post.module.css"
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckyjg354o11vl01yy3in52e9d/master"
);

export const QUERY = gql`
  query Post($slug: String!) {
    blogPost(where: { slug: $slug }) {
      id
      slug
      title
      author {
        name
      }
      content {
        html
      }
    }
  }
`;

export const SLUGLIST = gql`
  {
    blogPosts {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const blogPost = await graphcms.request(QUERY, { slug });

  const post = blogPost.blogPost;

  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const { blogPosts } = await graphcms.request(SLUGLIST);

  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  return (
    <div className="w-screen h-full text-white">
      <NavBar />
      <div className="m-4">
        <h2 className="text-pink-600 font-extrabold text-6xl">{post.title}</h2>
        <p className="text-xs">{post.author.name}</p>
        <div className={`post ${styles.post}`} dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </div>
  );
}
