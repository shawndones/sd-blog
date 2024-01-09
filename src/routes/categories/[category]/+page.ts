export async function load({ fetch, params }) {
	const res = await fetch('/api/posts')
	const posts = await res.json()

	// get the category from the params
	const category = params.category

	// create empty array to hold posts
	const categoryPosts : Array<object> = []

	// loop through posts and  console.log(post.metadata.category);
	posts.forEach((post: { default: object }) => {
		// get the categories
		const categories = post.categories

		// loop through the categories
		categories.forEach((cat: string) => {
			// if the category matches the param
			if (cat === category) {
				// push the post to the array
				categoryPosts.push(post)
			}
		})
	})

	return { categoryPosts }
}
