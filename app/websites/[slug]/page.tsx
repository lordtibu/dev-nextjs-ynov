import Title from "@/composants/ui/Title";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return websites.map((w) => ({
    slug: w.uid,
  }));
}

type WebsitePageType = {
  params: Promise<{ slug: string }>;
};

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
  const client = createClient();
  const website = await client
    .getByUID("website", slug)
    .catch(() => undefined);

  if (!website) redirect("/websites");

  return (
    <main className="px-6 py-12">
      <header className="text-center pb-12">
        <Title tag="h1">{website.data.title}</Title>
        <p className="mt-4">{website.data.description}</p>
      </header>
      <PrismicNextImage field={website.data.thumbnail} className="rounded-lg" />
    </main>
  );
}
