import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import type { Content } from "@prismicio/client";

export default function Website({
  website,
}: {
  website: Content.WebsiteDocument;
}) {
  return (
    <PrismicNextLink document={website}>
      <div className="relative">
        <PrismicNextImage
          field={website.data.thumbnail}
          className="rounded-lg"
        />
        <h3 className="mt-4">{website.data.title}</h3>
      </div>
    </PrismicNextLink>
  );
}
