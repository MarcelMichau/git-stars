import Loadable from 'react-loadable';

export default function LazyComponent(opts) {
	return Loadable({
		LoadingComponent: () => null,
		delay: 200,
		...opts
	});
}
