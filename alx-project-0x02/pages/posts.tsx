import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage({ posts }: { posts: PostProps[] }) {
  return (
    <>
      <Header />

      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Posts Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}

// ⭐ Required getStaticProps
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // limit to 10 posts
    },
  };
}
