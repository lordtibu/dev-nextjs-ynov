import { ButtonLink } from "@/composants/ui/ButtonLink";
import Video from "@/composants/ui/Video";
import Title from "@/composants/ui/Title";
import Website from "@/composants/ui/Website";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function HomePage() {
  const client = createClient();
  const websites = await client.getAllByType("website");
  const [hero, ...rest] = websites;

  return (
    <main>
      {hero && (
        <div className="px-6 py-12">
          <header className="text-center pb-12">
            <Title tag="h1">{hero.data.title}</Title>
          </header>
          <PrismicNextLink document={hero}>
            <PrismicNextImage
              field={hero.data.thumbnail}
              className="rounded-lg"
            />
          </PrismicNextLink>
        </div>
      )}

      <div className="bg-white px-6 py-12">
        <Title
          tag="h2"
          topLine="Voir les derniers"
          bottomLine="et ajoute tes propres reviews"
        >
          Sites web
        </Title>
        <div className="grid md:grid-cols-3 gap-4 pt-12">
          {rest.slice(0, 3).map((w) => (
            <Website key={w.id} website={w} />
          ))}
        </div>
        <footer className="pt-12 flex justify-center">
          <ButtonLink href="/websites" variant="link">
            Voir tous les sites
          </ButtonLink>
        </footer>
      </div>

      <div className="bg-white px-6 py-12">
        <Title tag="h2" topLine="découvrez notre dernier">
          Highlight
        </Title>

        <Video src="/highlight.mp4" />
      </div>
    </main>
  );
}
