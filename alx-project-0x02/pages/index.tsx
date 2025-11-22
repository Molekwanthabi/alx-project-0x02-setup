
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to ALX Project 02
        </h1>

        <p className="text-lg text-gray-600">
          Navigate using the Header to explore the Home, About, Posts, and Users pages.
        </p>
      </main>
    </>
  );
}
