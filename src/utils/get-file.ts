import fs from 'fs';
import path from 'path';

export function getFile(fileName: string) {
	return fs.readFileSync(
		path.join(process.cwd(), 'content', 'posts', fileName + '.md'),
		'utf-8'
	);
}
