import Loadable from 'react-loadable';

export default function LazyComponent(opts) {
	return Loadable({
		loading: () => null,
		delay: 200,
		...opts
	});
}
