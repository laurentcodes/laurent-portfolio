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

export function getOGImagePath(name: string) {
  const fullPath = path.join(process.cwd(), 'public', 'og-images', name + '.png');

  return fullPath;
}
