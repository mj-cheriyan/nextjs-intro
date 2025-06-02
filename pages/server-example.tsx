
export async function getServerSideProps() {
  const time = new Date().toLocaleString();

  return {
    props: { time },
  };
}

export default function ServerExample({ time }: { time: string }) {
  return (
    <main>
      <h1 className="text-xl font-bold text-primary">Server Time</h1>
      <p>{time}</p>
    </main>
  );
}
