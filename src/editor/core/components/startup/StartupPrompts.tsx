import { useCookieConsentInitialization } from "@app/hooks/useCookieConsentInitialization";
import { usePosthogTracking } from "@app/hooks/usePosthogTracking";
import { useScarfTracking } from "@app/hooks/useScarfTracking";

/** Mount once in each app's main routes, below its config and theme providers. */
export function StartupPrompts() {
  useCookieConsentInitialization();
  usePosthogTracking();
  useScarfTracking();
  return null;
}
