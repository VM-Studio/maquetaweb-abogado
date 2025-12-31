// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        send_to?: string;
        event_callback?: () => void;
        [key: string]: unknown;
      }
    ) => void;
    dataLayer: unknown[];
  }
}

export {};