export async function load({ params }) {
	try {
		// Dynamic import the posts
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, 'Could not load ${params.slug}.md')
	}
}
