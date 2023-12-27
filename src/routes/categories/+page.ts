export async function load({ fetch }) {
	const res = await fetch('/api/posts')
	const posts = await res.json()

	// create empty array to hold categories
	const categoryList: array = []

	// loop through posts and add categories to array
	posts.forEach((post: { default: any }) => {
		// get the categories
		const categories = post.categories
		// add the category to the array if it is not already in the array
		categories.forEach((category: string) => {
			if (!categoryList.includes(category)) {
				categoryList.push(category)
			}
		})
	})

	return { categoryList }
}
