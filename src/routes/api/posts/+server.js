import { json } from '@sveltejs/kit'

async function getPosts() {
	let posts = []

	const paths = import.meta.glob('/src/lib/data/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata
			const post = { ...metadata, slug }
			post.published && posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
  let posts
  try {
    posts = await getPosts()
    console.log(posts)
    if (!Array.isArray(posts)) {
      throw new Error('error')
    }
  } catch {
    console.log("failed")
  }
  console.log(Array.isArray(posts))
	return json(posts)
}
