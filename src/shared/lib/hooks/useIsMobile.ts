import { MOBILE_BREAKPOINT } from '../constants/breakpoints';
import { useMediaQuery } from './useMediaQuery';

export function useIsMobile() {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
  return isMobile;
}
