import Title from "@/composants/ui/Title";
import { createClient } from "@/prismicio";
import WebsitesList from "./_components/WebsitesList";

export default async function WebsitesPage() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <WebsitesList websites={websites} />
    </main>
  );
}
