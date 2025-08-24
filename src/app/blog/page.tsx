import { allPosts, Post } from "contentlayer/generated"
import Head from "next/head";
import Link from "next/link";

const blog = async () => {
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