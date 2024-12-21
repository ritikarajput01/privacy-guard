// Background script for handling privacy protection features
import { TrackerBlocker } from '../services/TrackerBlocker';
import { CookieManager } from '../services/CookieManager';
import { FingerprintProtection } from '../services/FingerprintProtection';

const trackerBlocker = new TrackerBlocker();
const cookieManager = new CookieManager();
const fingerprintProtection = new FingerprintProtection();

// Initialize protection features
trackerBlocker.init();
cookieManager.init();
fingerprintProtection.init();

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'GET_STATS':
      sendResponse({
        trackersBlocked: trackerBlocker.getStats(),
        cookiesProtected: cookieManager.getStats(),
        fingerprintsBlocked: fingerprintProtection.getStats()
      });
      break;
    case 'TOGGLE_PROTECTION':
      const isEnabled = request.enabled;
      trackerBlocker.toggle(isEnabled);
      cookieManager.toggle(isEnabled);
      fingerprintProtection.toggle(isEnabled);
      sendResponse({ success: true });
      break;
  }
});