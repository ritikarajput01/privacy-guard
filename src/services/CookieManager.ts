export class CookieManager {
  private enabled: boolean = true;
  private protectedCount: number = 0;

  init() {
    if (chrome.cookies) {
      chrome.cookies.onChanged.addListener(this.handleCookieChange.bind(this));
    }
  }

  private handleCookieChange(changeInfo: any) {
    if (!this.enabled) return;

    const { cookie, removed } = changeInfo;
    
    if (!removed && this.shouldProtectCookie(cookie)) {
      this.protectCookie(cookie);
      this.protectedCount++;
    }
  }

  private shouldProtectCookie(cookie: any) {
    return !cookie.secure || cookie.session;
  }

  private protectCookie(cookie: any) {
    if (chrome.cookies) {
      chrome.cookies.set({
        ...cookie,
        secure: true,
        sameSite: 'Strict'
      });
    }
  }

  toggle(enabled: boolean) {
    this.enabled = enabled;
  }

  getStats() {
    return this.protectedCount;
  }
}