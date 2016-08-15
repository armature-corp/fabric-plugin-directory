export default class Pager {
	constructor() {
		this.items = [];
		for( let i=0; i<300; i++ ) {
			this.items.push({
				name: i
			});
		}
	}
}