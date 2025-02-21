import {
    CheckoutSelectors,
    CustomerInitializeOptions,
    CustomerRequestOptions,
    ExecutePaymentMethodCheckoutOptions,
} from '@bigcommerce/checkout-sdk';
import { noop } from 'lodash';
import React, { FunctionComponent, memo, useEffect, useState } from 'react';

import { useAnalytics } from '@bigcommerce/checkout/analytics';
import { GuestCheckoutEvents } from '../../checkout/AnalyticsEvents';

import { stopPropagation } from '../../common/dom';
import { TranslatedString } from '../../locale';
import { Button } from '../../ui/button';
import { IconBolt } from '../../ui/icon';

export interface BoltCheckoutSuggestionProps {
    isExecutingPaymentMethodCheckout: boolean;
    methodId: string;
    deinitializeCustomer(options: CustomerRequestOptions): Promise<CheckoutSelectors>;
    executePaymentMethodCheckout(
        options: ExecutePaymentMethodCheckoutOptions,
    ): Promise<CheckoutSelectors>;
    initializeCustomer(options: CustomerInitializeOptions): Promise<CheckoutSelectors>;
    onUnhandledError?(error: Error): void;
    emitAnalyticsEvent(event: string): void;
}

const BoltCheckoutSuggestion: FunctionComponent<BoltCheckoutSuggestionProps> = ({
    isExecutingPaymentMethodCheckout,
    methodId,
    deinitializeCustomer,
    executePaymentMethodCheckout,
    initializeCustomer,
    onUnhandledError = noop,
    emitAnalyticsEvent,
}) => {
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
    const { analyticsTracker } = useAnalytics();

    useEffect(() => {
        deinitializeCustomer({ methodId });

        try {
            initializeCustomer({
                methodId,
                bolt: {
                    onInit: (hasBoltAccount, email) => {
                        if (hasBoltAccount) {
                            emitAnalyticsEvent(GuestCheckoutEvents.BoltButtonExists);
                        }
                        setShowSuggestion(hasBoltAccount);

                        if (email) {
                            analyticsTracker.customerSuggestionInit({hasBoltAccount});
                        }
                    },
                },
            });
        } catch (error) {
            onUnhandledError(error);
        }

        return () => {
            deinitializeCustomer({ methodId });
        };
    }, [initializeCustomer, deinitializeCustomer, methodId, onUnhandledError]);

    if (!showSuggestion) {
        return null;
    }

    const handleActionClick = async () => {
        emitAnalyticsEvent(GuestCheckoutEvents.BoltButtonClicked);
        await executePaymentMethodCheckout({ methodId });
    };

    return (
        <div className="checkoutSuggestion" onClick={stopPropagation()}>
            <p className="checkoutSuggestion-message">
                <TranslatedString
                    data={{
                        provider: 'Bolt',
                        providerFlow: 'Bolt Checkout',
                    }}
                    id="customer.suggestion_text"
                />
            </p>
            <Button
                className="checkoutSuggestion-button checkoutSuggestion-button--bolt"
                data-test="suggestion-action-button"
                isLoading={isExecutingPaymentMethodCheckout}
                onClick={handleActionClick}
            >
                <IconBolt additionalClassName="checkoutSuggestion-button-icon--bolt" />
                <TranslatedString
                    data={{ providerFlow: 'Bolt Checkout' }}
                    id="customer.suggestion_action"
                />
            </Button>
        </div>
    );
};

export default memo(BoltCheckoutSuggestion);
