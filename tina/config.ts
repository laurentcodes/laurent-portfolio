import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = 'main';

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
					{
						type: 'rich-text',
						name: 'summary',
						label: 'Summary',
						required: true,
					},
					{
						type: 'reference',
						name: 'author',
						label: 'Author',
						collections: ['author'],
					},
					{
						type: 'string',
						name: 'tags',
						label: 'Tags',
						list: true,
						options: [
							{ value: 'general', label: 'General' },
							{ value: 'javascript', label: 'JavaScript' },
							{ value: 'react', label: 'React' },
							{ value: 'update', label: 'Update' },
							{ value: 'guide', label: 'Guide' },
						],
					},
					{
						type: 'datetime',
						name: 'posted',
						label: 'Posted',
						required: true,
					},
				],
			},
			{
				name: 'author',
				label: 'Authors',
				path: 'content/authors',
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						required: true,
					},
					{
						type: 'string',
						name: 'link',
						label: 'Link',
					},
				],
			},
		],
	},
});