export class PostModel {
	constructor(dto) {
		return { ...dto };
	}

	id;
	title;
	path;
}
