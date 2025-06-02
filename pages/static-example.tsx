// pages/static-example.tsx
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default function StaticExample({ posts }: { posts: any[] }) {
  return (
    <main>
      <h1 className="text-xl font-bold text-primary">Static Posts</h1>
      <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
    </main>
  );
}
