export {};

declare global {
  interface Window {
    BoltAnalytics: {
      checkoutStepComplete?: (event: string, properties?: any) => void;
    }
  }
}