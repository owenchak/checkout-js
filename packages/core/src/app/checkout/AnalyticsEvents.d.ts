export declare enum GuestCheckoutEvents {
    CheckoutLoadSuccess = "Checkout load success",
    DetailEntryBegan = "Detail entry began",
    AccountButtonClick = "Account lookup button click",
    BoltButtonExists = "Bolt recognized button rendered",
    BoltButtonClicked = "Bolt recognized button clicked",
    ShippingEntered = "Shipping details fully entered",
    ShippingComplete = "Shipping method step complete",
    BillingEntered = "Billing details entered",
    PaymentEntered = "Payment details entered",
    PaymentRejected = "Payment rejected",
    PaymentSuccessful = "Payment successful",
    Exit = "Exit"
}
export declare const AnalyticsEvents: {
    init: () => void;
    emitEvent: (eventName: string) => void;
    onBeforeUnload: () => void;
};
