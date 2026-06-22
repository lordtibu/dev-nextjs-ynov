import type { GetServerSideProps } from 'next';
import Website from '../../components/Website';
import type { Website as WebsiteData } from '../../types/website';

interface WebsitePageProps {
  website: WebsiteData;
}

export default function WebsitePage({ website }: WebsitePageProps) {
  return (
    <>
      <Website website={website} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<WebsitePageProps> = async ({ params }) => {
  const res = await fetch('http://localhost:3000/websites.json');
  const websites: WebsiteData[] = await res.json();

  const website = websites.find((item) => item.slug === params?.slug);

  if (!website) {
    return {
      redirect: {
        destination: '/websites',
        permanent: false,
      },
    };
  }

  return {
    props: { website },
  };
};
