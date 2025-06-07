interface WebAppEvent {
  on(eventName: string, callback: (...args: any[]) => void): void;
  off(eventName: string, callback: (...args: any[]) => void): void;
  trigger(eventName: string, ...args: any[]): void;
}

interface WebApp {
  event: WebAppEvent;
}

declare var webapp: WebApp;