export async function load({ fetch }) {
	const res = await fetch('/api/posts')
	const posts = await res.json()
	console.log('posts: ', posts)
	return { posts }
}
