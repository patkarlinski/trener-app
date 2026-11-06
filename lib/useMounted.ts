import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * `false` podczas SSR i hydratacji, `true` po zamontowaniu na kliencie.
 * Bez setState w efekcie — bezpieczne dla react-hooks/set-state-in-effect.
 */
export function useMounted() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
