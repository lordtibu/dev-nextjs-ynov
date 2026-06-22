import type { GetServerSideProps } from 'next';
import Website from '../../components/Website';
import type { Website as WebsiteData } from '../../types/website';

interface WebsitesProps {
  websites: WebsiteData[];
}

export default function Websites({ websites }: WebsitesProps) {
  return (
    <>
      <h1>websites</h1>
      {websites.map((website) => (
        <Website key={website.slug} website={website} />
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<WebsitesProps> = async () => {
  const res = await fetch('http://localhost:3000/websites.json');
  const websites: WebsiteData[] = await res.json();

  return {
    props: { websites },
  };
};
