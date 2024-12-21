export class TrackerBlocker {
  private enabled: boolean = true;
  private blockedCount: number = 0;
  private trackerPatterns: string[] = [
    '*://*.doubleclick.net/*',
    '*://*.google-analytics.com/*',
    '*://*.facebook.com/*',
    '*://analytics.twitter.com/*'
  ];

  init() {
    if (chrome.webRequest) {
      chrome.webRequest.onBeforeRequest.addListener(
        this.handleRequest.bind(this),
        { urls: this.trackerPatterns },
        ['blocking']
      );
    }
  }

  private handleRequest(details: any) {
    if (!this.enabled) return { cancel: false };
    
    this.blockedCount++;
    return { cancel: true };
  }

  toggle(enabled: boolean) {
    this.enabled = enabled;
  }

  getStats() {
    return this.blockedCount;
  }
}