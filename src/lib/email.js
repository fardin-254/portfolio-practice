import { PROFILE } from "@/lib/data";
import { showToast } from "@/components/ui/Toast";

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  PROFILE.email
)}`;

export function handleEmailClick(e) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(PROFILE.email).catch(() => {});
  }
  showToast(`Email copied (${PROFILE.email}) — opening Gmail...`);
}