import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types";

async function getPosts() {
  let posts: Post[] = [];

  // patte
  const paths = import.meta.glob('/src/posts/*.md', {
    eager: true
  })

  // loop over paths and and them to the posts array
  for (const path in paths) {

    const file = await paths[path];

    const slug = path.split('/').pop()?.split('.')[0] ?? '';

    if (file && typeof file === 'object' && 'metadata' in file && slug) {

      const metadata = file.metadata as Omit<Post, 'slug'>;
      
      const post = { ...metadata, slug } satisfies Post;
      console.log(post);
      post.published && posts.push(post);
    }
  
  }

  posts = posts.sort((first, second) => 
    new Date(second.date).getTime() - new Date(first.date).getTime()
  )

  return posts;


}


export async function GET(): Promise<Response> {
  const posts = await getPosts()
  return json(posts)
}
