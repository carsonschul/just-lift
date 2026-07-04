import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-950">
      <h1 className="text-6xl text-white font-bold">Just Lift.</h1>
      <p className="text-lg text-gray-400">Five questions. One plan.</p>
      <Link href="/questionnaire" className="bg-sky-500 hover:bg-sky-400 active:scale-95 transition font-semibold rounded-lg px-6 py-3 text-white mt-4">Get Started</Link>
    </main>
  );
}