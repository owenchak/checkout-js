let boltTracker: Window["BoltAnalytics"] = {};

const eventQueue: any[] = [];

export enum GuestCheckoutEvents {
  CheckoutLoadSuccess = "Checkout load success",
  DetailEntryBegan = "Detail entry began",
  AccountButtonClick = "Account lookup button click",
  AccountLookupSkipped = "Account lookup skipped",
  BoltButtonExists = "Bolt recognized button rendered",
  BoltButtonClicked = "Bolt recognized button clicked",
  ShippingEntered = "Shipping details fully entered",
  ShippingComplete = "Shipping method step complete",
  BillingEntered = "Billing details entered",
  PaymentEntered = "Payment details fully entered",
  PaymentMethodSelected = "Payment method selected",
  PaymentRejected = "Payment rejected",
  PaymentComplete = "Payment complete",
  Exit = "Exit"
}

const defaultTimeout = 1000;
const defaultPollingInterval = 10;
// borrowed polling mechanism 
function pollUntilAccepted<T>(
  fn: () => T,
  accept: (t: T) => boolean,
  timeoutMillis = defaultTimeout,
  interval = defaultPollingInterval,
): Promise<T | Error> {
  return new Promise<T | Error>(resolve => {
    let remainingTime = timeoutMillis;

    const intervalId = setInterval(() => {
      if (remainingTime < 0) {
        clearInterval(intervalId);
        resolve(new Error(`Timed out while waiting for ${fn} (${timeoutMillis}ms)`));
        return;
      }

      const value = fn();
      if (accept(value)) {
        const timeElapsed = timeoutMillis - remainingTime;
        console.log(`--bolt bigc--: poll condition accepted after ${timeElapsed} ms`);
        clearInterval(intervalId);
        resolve(value);
        return;
      }

      remainingTime = remainingTime - interval;
    }, interval);
  });
}

function checkForBoltAnalytics() {
  try {
    if (window && window.BoltAnalytics) {
      boltTracker = window.BoltAnalytics;
      console.log("--bolt bigc--: successfully found window.BoltAnalytics");
      return true;
    }
  } catch (e) {
    console.log("--bolt bigc--: error while initializing AnalyticsEvents", e);
  }
  return false;
}

export const AnalyticsEvents = {
  init: () => {
    try {
      // immediately send checkout load success event
      AnalyticsEvents.emitEvent("Checkout load success");
      // poll until window.BoltAnalytics is on the page
      pollUntilAccepted(checkForBoltAnalytics, t => t, 3000)
        .catch(e => console.warn("--bolt bigc--: failure to locate BoltAnalytics on the window", e));
    } catch (e) {
      console.log("--bolt bigc--: error during polling for BoltAnalytics", e);
    }
  },
  emitEvent: (eventName: string, eventProps?: any) => {
    try {
      eventQueue.push({ eventName, eventProps });
      // wait until checkoutStepComplete is defined to emit logs
      if (!boltTracker || !boltTracker.checkoutStepComplete) {
        return;
      }

      while (eventQueue.length) {
        const { eventName, eventProps } = eventQueue.shift();

        console.log("--bolt bigc--: emitting analytics event ", eventName);

        boltTracker.checkoutStepComplete(eventName, eventProps);
      }
    } catch (e) {
      console.log("--bolt bigc--: error during emitting event ", e);
    }
  },
  onBeforeUnload: () => {
    AnalyticsEvents.emitEvent("Exit");
  },
};
