import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-2xl pb-2">Home Page</h1>
      <Link href={'/about'}>Go to About</Link>
    </>
  );
}
