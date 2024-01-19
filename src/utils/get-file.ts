import fs from 'fs';
import path from 'path';

export function getPosts() {
	return fs.readdirSync(path.join(process.cwd(), 'content', 'posts'));
}

export function getPost(fileName: string) {
	return fs.readFileSync(
		path.join(process.cwd(), 'content', 'posts', fileName + '.md'),
		'utf-8'
	);
}

export function generatePostsMap() {
	const posts = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'));

	const formatPosts = posts.map(
		(post) => 'https://laurentcodes.xyz/blog/' + post.slice(0, -3)
	);

	return formatPosts;
}
