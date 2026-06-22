import Link from 'next/link';
import type { Website } from '../types/website';
import Image from 'next/image'

interface WebsiteProps {
  website: Website;
}

export default function Website({ website }: WebsiteProps) {
  return (
    <Link href={`/websites/${website.slug}`}>
      <article>
        <p>title : {website.title}</p>
        <Image
            src={`/websites/${website.thumbnail}`}
            width={600}
            height={600}
            alt={website.title}
        />
      </article>
    </Link>
  );
}
