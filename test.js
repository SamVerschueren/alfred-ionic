import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('button');

	t.deepEqual(result, [
		{
			title: 'Button',
			autocomplete: 'Button',
			arg: 'https://ionicframework.com/docs/v2/api/components/button/Button/',
			quicklookurl: 'https://ionicframework.com/docs/v2/api/components/button/Button/'
		},
		{
			title: 'FabButton',
			autocomplete: 'FabButton',
			arg: 'https://ionicframework.com/docs/v2/api/components/fab/FabButton/',
			quicklookurl: 'https://ionicframework.com/docs/v2/api/components/fab/FabButton/'
		},
		{
			title: 'RadioButton',
			autocomplete: 'RadioButton',
			arg: 'https://ionicframework.com/docs/v2/api/components/radio/RadioButton/',
			quicklookurl: 'https://ionicframework.com/docs/v2/api/components/radio/RadioButton/'
		},
		{
			title: 'SegmentButton',
			autocomplete: 'SegmentButton',
			arg: 'https://ionicframework.com/docs/v2/api/components/segment/SegmentButton/',
			quicklookurl: 'https://ionicframework.com/docs/v2/api/components/segment/SegmentButton/'
		}
	]);
});
