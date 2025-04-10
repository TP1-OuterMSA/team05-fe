import { useMemo, useEffect, useState } from 'react';

type Props = {
	maxWidth: number;
};

export default function useMediaQuery({ maxWidth }: Props) {
	const mediaQueryString = useMemo(() => `(max-width: ${maxWidth}px)`, [maxWidth]);

	const [matches, setMatches] = useState<boolean>(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(mediaQueryString).matches;
		}
		return false;
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mediaQueryList = window.matchMedia(mediaQueryString);
		const listener = () =>
			requestAnimationFrame(() => setMatches(mediaQueryList.matches));
		listener();
		mediaQueryList.addEventListener('change', listener);

		return () => mediaQueryList.removeEventListener('change', listener);
	}, [mediaQueryString]);

	return matches;
}