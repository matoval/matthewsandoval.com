import { allPosts, Post } from "contentlayer/generated"
import { notFound } from "next/navigation";
import { PageProps } from "../../../types/app/layout";
import Head from "next/head";
import Link from "next/link";

interface pageProps {
  params: {
    slug: string
  }
}

const blog = async ({params}: PageProps) => {
  return (
    <div className="blog-home">
      <Head>
        <title>NextJs Content Layer Blog Template</title>
      </Head>
      <ul>
        {allPosts.map((post, i) => (
          <li className="post" key={i}>
            <Link href={post.slug} className="title">{post.title}</Link>
            <p className="date">{post.date}</p>
            <p className="description">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
	)
}

export default blog