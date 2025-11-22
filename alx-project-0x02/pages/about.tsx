import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">About Page</h1>

        <div className="flex flex-col items-center gap-4 mt-6">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>

          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>

          <Button size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </main>
    </>
  );
}
