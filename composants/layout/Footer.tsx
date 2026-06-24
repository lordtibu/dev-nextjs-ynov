import { PrismicNextLink } from "@prismicio/next";
import Logo from "../ui/Logo";
import CookiesConsent from "./CookiesConsent";
import { createClient } from "@/prismicio";

export default async function Footer() {
  const client = createClient();
  const menu = await client.getSingle("footer_menu");

  return (
    <footer className="px-6 py-12">
      <Logo />
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-button">
          {menu.data.menu_items.map((item, i) => (
            <li key={`footer-link-${i}`}>
              <PrismicNextLink field={item.url}>{item.label}</PrismicNextLink>
            </li>
          ))}
          <li>
            <CookiesConsent />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
