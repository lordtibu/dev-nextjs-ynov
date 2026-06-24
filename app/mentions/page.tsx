import Mentions from "@/public/mentions.mdx";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Next Formation.",
};

export default function MentionsPage() {
  return (
    <main>
      <h1>Mentions</h1>
      <Mentions />
    </main>
  );
}
