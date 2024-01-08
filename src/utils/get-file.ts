import fs from 'fs';
import path from 'path';

export function getFile(fileName) {
	// console.log(path.join(process.cwd(), 'content', 'posts', fileName + '.md'));

	return fs.readFileSync(
		path.join(process.cwd(), 'content', 'posts', fileName + '.md'),
		'utf-8'
	);
}
