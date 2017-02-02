'use strict';
const alfy = require('alfy');

const ONE_DAY = 86400000;

alfy.fetch('https://ionicframework.com/docs/v2/data/index.json', {
	maxAge: ONE_DAY,
	transform: result => {
		const ref = result.ref;

		return Object.keys(ref).map(x => ({
			url: ref[x].p,
			keyword: ref[x].t
		}));
	}
}).then(result => {
	const items = alfy
		.inputMatches(result, 'keyword')
		.map(x => {
			const url = `https://ionicframework.com/docs/v2${x.url}`;

			return {
				title: x.keyword,
				autocomplete: x.keyword,
				arg: url,
				quicklookurl: url
			};
		});

	alfy.output(items);
});
