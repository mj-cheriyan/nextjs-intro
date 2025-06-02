
export async function getStaticProps() {
  const res = await fetch('https://api.quotable.io/random');
  const quote = await res.json();

  return {
    props: { quote },
    revalidate: 10,
  };
}

export default function ISRExample({ quote }: { quote: any }) {
  return (
    <main>
      <h1 className="text-xl font-bold text-primary">Incremental Static Quote</h1>
      <blockquote>{quote.content}</blockquote>
      <cite>— {quote.author}</cite>
    </main>
  );
}
