"use client";

import { Button } from "@/composants/ui/Button";
import Website from "@/composants/ui/Website";
import type { Content } from "@prismicio/client";

type WebsitesListType = {
  websites: Content.WebsiteDocument[];
};
export default function WebsitesList({ websites }: WebsitesListType) {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {websites.map((w) => (
          <Website key={w.id} website={w} />
        ))}
      </div>
      <footer className="pt-12 flex justify-center">
        <Button onClick={() => {}}>Charger plus de sites web</Button>
      </footer>
    </>
  );
}
