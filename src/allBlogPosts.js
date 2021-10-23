import postMap from "./posts/*.mdx";

function parseSlug(slug) {
	const fullMatches = slug.match(/^(\d+)-(\d+)-(\d+)-(.+)$/);
	if (fullMatches != null) {
		const year = Number(fullMatches[1]);
		const month = Number(fullMatches[2]);
		const day = Number(fullMatches[3]);
		const id = fullMatches[4];

		return { draft: false, id, date: new Date(year, month - 1, day) }
	}

	const draftMatches = slug.match(/^draft-(.+)$/);
	if (draftMatches != null) {
		return { draft: true, id: draftMatches[1], date: new Date() };
	}

	throw new Error("Invalid blog post slug: " + slug);
}

const posts = [];

for (const [slug, {metadata, default: Body}] of Object.entries(postMap)) {
	let { title, hidden } = metadata;
	const { id, date, draft } = parseSlug(slug);

	if (draft) {
		title = "DRAFT: " + title;
		hidden = true;
	}

    posts.push({
		slug,
		title,
		hidden,
		id,
		date,
		Body,
	});
}

posts.sort((a, b) => {
	if (a.date < b.date) {
		return 1;
	} else {
		return -1;
	}
});

export default posts;
