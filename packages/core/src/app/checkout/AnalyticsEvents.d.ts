export declare enum GuestCheckoutEvents {
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
    PaymentRejected = "Payment rejected",
    PaymentComplete = "Payment complete",
    Exit = "Exit"
}
export declare const AnalyticsEvents: {
    init: () => void;
    emitEvent: (eventName: string, eventProps?: any) => void;
    onBeforeUnload: () => void;
};
