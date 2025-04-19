import useMediaQuery from './useMediaQuery';

export default function useNSMediaQuery() {
	const isMobile = useMediaQuery({ maxWidth: 599 });
	const isLoading = !isMobile;

	return { isMobile, isLoading };
}