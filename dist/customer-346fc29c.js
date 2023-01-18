"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[727],{509:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(86940),r=n(91074);function o(e,t){var n=window.getComputedStyle(e);return t.reduce((function(e,t){var o;return(0,a.pi)((0,a.pi)({},e),((o={})[t]=n.getPropertyValue((0,r.kebabCase)(t)),o))}),{})}},76741:(e,t,n)=>{function a(e){return!!e.features["CHECKOUT-6879.enable_floating_labels"]}n.d(t,{Z:()=>a})},14233:(e,t,n)=>{function a(e){var t=document.createElement("div");t.innerHTML=e;var n=t.querySelector("a");if(!n)return[];var a=t.innerHTML.split(n.outerHTML);return[a[0],n.text,a[1]]}n.d(t,{Z:()=>a})},4853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge,mapToWithCheckoutCustomerProps:()=>de});var a=n(86940),r=n(91074),o=n(67627),i=n(55631),l=n(61397),c=n(49890),s=n(85494),u=n(76741),m=n(36983),d=n(62038),g=n(76417),h=n(67106),p=n(97804),E=n(70140),f=n(43276),v=n(30867),C=n(60452),b=n(16206),k=n(78379),Z=n(70764),_=n(55375),y=n(19686),S=n(17175),L=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;function w(e){var t=e.language;return(0,y.Ry)({email:(0,y.Z_)().max(256).matches(L,t.translate("customer.email_invalid_error")).required(t.translate("customer.email_required_error"))})}function I(e){return function(t,n){var a=n.label,r=n.min,o=n.max;if(e)return"required"===t?e.translate("customer.required_error",{label:a}):"max"===t&&o?e.translate("customer.max_error",{label:a,max:o}):"min"===t&&r?e.translate("customer.min_error",{label:a,min:r}):"invalid"===t?e.translate("customer.invalid_characters_error",{label:a}):void 0}}const F=(0,_.memoize)((function(e){var t=e.formFields,n=e.language,a=e.passwordRequirements,r=a.description,o=a.numeric,i=a.alpha,l=a.minLength;return(0,y.Ry)({firstName:(0,y.Z_)().required(n.translate("address.first_name_required_error")),lastName:(0,y.Z_)().required(n.translate("address.last_name_required_error")),password:(0,y.Z_)().required(n.translate("customer.password_required_error")||r).matches(o,n.translate("customer.password_number_required_error")||r).matches(i,n.translate("customer.password_letter_required_error")||r).min(l,n.translate("customer.password_under_minimum_length_error")).max(100,n.translate("customer.password_over_maximum_length_error"))}).concat(w({language:n})).concat((0,S.Z)({formFields:t,translate:I(n)}))}));var x=n(43261);const N=(0,f.Z)((0,g.withFormik)({handleSubmit:function(e,t){var n=t.props.onSubmit;(void 0===n?r.noop:n)(e)},mapPropsToValues:function(e){return{firstName:"",lastName:"",email:"",password:"",customFields:{},acceptsMarketingEmails:e.requiresMarketingConsent?[]:["0"]}},validationSchema:function(e){var t,n=e.language,a=e.formFields,r=null===(t=a.find((function(e){return e.requirements})))||void 0===t?void 0:t.requirements;if(!r)throw new Error("Password requirements missing");return F({language:n,formFields:a,passwordRequirements:(0,x.Z)(r)})}})((function(e){var t=e.formFields,n=e.createAccountError,a=e.isCreatingAccount,r=e.onCancel,i=e.useFloatingLabel,l=(0,o.useMemo)((function(){if(n){if((0,p.Z)(n)&&409===n.status){var e=n.message.split(":");return e.length>1?o.createElement(E.Z,{data:{email:e[1].trim()},id:"customer.email_in_use_text"}):o.createElement(E.Z,{id:"customer.unknown_email_in_use_text"})}return n.message}}),[n]);return o.createElement(b.Z,{className:"checkout-form",id:"checkout-customer-returning",testId:"checkout-customer-returning"},o.createElement(k.Z,null,l&&o.createElement(v.Z,{type:v.N.Error},l),o.createElement("div",{className:"create-account-form"},t.map((function(e){return o.createElement(Z.Z,{autocomplete:e.name,extraClass:"dynamic-form-field--".concat(e.name),field:e,key:e.id,parentFieldName:e.custom?"customFields":void 0,useFloatingLabel:i})})))),o.createElement("div",{className:"form-actions"},o.createElement(C.ZP,{disabled:a,id:"checkout-customer-create",testId:"customer-continue-create",type:"submit",variant:C.Wu.Primary},o.createElement(E.Z,{id:"customer.create_account_action"})),o.createElement("a",{className:"button optimizedCheckout-buttonSecondary","data-test":"customer-cancel-button",href:"#",id:"checkout-customer-cancel",onClick:(0,h.Z)(r)},o.createElement(E.Z,{id:"common.cancel_action"}))))})));var A=n(31561),P=n(14453),M=n(38158),z=n(3268),q=n(19984),T=n(9607),G=n(7936),B=n(92963);const R=(0,o.memo)((function(e){var t=e.onChange,n=e.useFloatingLabel,r=(0,o.useCallback)((function(e){return o.createElement(G.Z,(0,a.pi)({},e.field,{autoComplete:e.field.name,id:e.field.name,type:"email",useFloatingLabel:n}))}),[n]),i=(0,o.useMemo)((function(){return o.createElement(E.Z,{id:"customer.email_label"})}),[]);return o.createElement(B.Z,{input:r,labelContent:i,name:"email",onChange:t,useFloatingLabel:n})}));const U=(0,f.Z)((0,g.withFormik)({mapPropsToValues:function(e){var t=e.email;return{email:void 0===t?"":t}},handleSubmit:function(e,t){var n=t.props.onSendLoginEmail;(void 0===n?r.noop:n)(e)},validationSchema:function(e){return w({language:e.language})}})((0,o.memo)((function(e){var t=e.email,n=e.isOpen,a=e.isSendingEmail,i=void 0!==a&&a,l=e.emailHasBeenRequested,c=e.onRequestClose,s=void 0===c?r.noop:c,u=e.sentEmailError,m=e.sentEmail,d=e.submitForm,g=e.useFloatingLabel,h=e.values.email,p=(0,o.useMemo)((function(){return l?u?"common.error_heading":"login_email.sent_header":t?"login_email.header_with_email":"login_email.header"}),[l,u,t]),f=(0,o.useMemo)((function(){return o.createElement("div",{className:"modal-footer"},o.createElement(C.ZP,{onClick:s},o.createElement(E.Z,{id:"common.ok_action"})))}),[s]),k=(0,o.useMemo)((function(){return u&&429===u.status?f:l&&!u?i?o.createElement(z.Z,{isLoading:!0}):m&&"reset_password"===m.sent_email?f:o.createElement("p",null,o.createElement(P.Z,{id:"login_email.resend_link",onClick:d}),o.createElement(P.Z,{id:"login_email.use_password_link",onClick:s})):o.createElement("div",{className:"modal-footer"},o.createElement(C.ZP,{className:"optimizedCheckout-buttonSecondary",onClick:s,type:"button"},o.createElement(E.Z,{id:"common.cancel_action"})),o.createElement(C.ZP,{isLoading:i,type:"submit",variant:C.Wu.Primary},o.createElement(E.Z,{id:"login_email.send"})))}),[u,l,f,d,i,s,m]),Z=(0,o.useMemo)((function(){if(!u)return null;var e=u.status;return o.createElement(v.Z,{type:v.N.Error},429===e?o.createElement(E.Z,{id:"login_email.error_temporary_disabled"}):o.createElement(E.Z,{id:404===e?"login_email.error_not_found":"login_email.error_server"}))}),[u]),_=(0,o.useMemo)((function(){if(u&&429===u.status)return null;if(l&&m&&!u){var e=m.expiry,t=m.sent_email;return o.createElement("p",null,o.createElement(M.Z,{data:{email:h,minutes:Math.round(e/60)},id:"sign_in"===t?"login_email.sent_text":"customer.reset_password_before_login_error"}))}return l&&!m?o.createElement(R,{useFloatingLabel:g}):o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(E.Z,{id:"login_email.text"})),o.createElement(R,{useFloatingLabel:g}))}),[u,l,m,h]);return o.createElement(q.Z,{additionalBodyClassName:"modal--withText",additionalModalClassName:"modal--medium",header:o.createElement(T.Z,null,o.createElement(E.Z,{id:p})),isOpen:n,onRequestClose:s,shouldShowCloseButton:!0},o.createElement(b.Z,null,o.createElement(z.Z,{isLoading:i&&!t}),Z,_,k))}))));var O=n(696),W=n.n(O),D=n(59826),V=function(e){var t=e.url;return o.createElement(D.Z,{labelContent:o.createElement(M.Z,{data:{url:t},id:"privacy_policy.label"}),name:"privacyPolicy"})};const J=(0,o.memo)((function(e){var t=e.url;return o.createElement(k.Z,{additionalClassName:"checkout-privacy-policy"},o.createElement(V,{url:t}))}));var H=n(98119),$=n(45793),K=n(50004),Y=n(64553);const j=(0,o.memo)((function(e){var t=e.field,n=e.requiresMarketingConsent;return o.createElement(o.Fragment,null,o.createElement(K.Z,(0,a.pi)({},t,{checked:t.value,className:"form-checkbox",id:t.name,type:"checkbox"})),o.createElement(Y.Z,{htmlFor:t.name},o.createElement(E.Z,{id:n?"customer.guest_marketing_consent":"customer.guest_subscribe_to_newsletter_text"})))}));const Q=(0,f.Z)((0,g.withFormik)({mapPropsToValues:function(e){var t=e.email,n=void 0===t?"":t,a=e.defaultShouldSubscribe,r=void 0!==a&&a;return{email:n,shouldSubscribe:!e.requiresMarketingConsent&&r,privacyPolicy:!1}},handleSubmit:function(e,t){(0,t.props.onContinueAsGuest)(e)},validationSchema:function(e){var t=e.language,n=e.privacyPolicyUrl,a=(0,y.Z_)().email(t.translate("customer.email_invalid_error")).max(256).required(t.translate("customer.email_required_error")),r=(0,y.Ry)({email:a});return n?r.concat(function(e){var t=e.isRequired,n=e.language,a={};return t&&(a.privacyPolicy=(0,y.O7)().oneOf([!0],n.translate("privacy_policy.required_error"))),(0,y.Ry)(a)}({isRequired:!!n,language:t})):r}})((0,o.memo)((function(e){var t=e.canSubscribe,n=e.checkoutButtons,r=e.continueAsGuestButtonLabelId,i=e.isLoading,l=e.onChangeEmail,c=e.onShowLogin,s=e.privacyPolicyUrl,u=e.requiresMarketingConsent,m=e.useFloatingLabel,d=(0,o.useCallback)((function(e){return o.createElement(j,(0,a.pi)({},e,{requiresMarketingConsent:u}))}),[u]);return o.createElement(b.Z,{className:"checkout-form",id:"checkout-customer-guest",testId:"checkout-customer-guest"},o.createElement(k.Z,{legend:o.createElement(H.Z,{hidden:!0},o.createElement(E.Z,{id:"customer.guest_customer_text"}))},o.createElement("div",{className:"customerEmail-container"},o.createElement("div",{className:"customerEmail-body"},o.createElement(R,{onChange:l,useFloatingLabel:m}),(t||u)&&o.createElement($.Z,{name:"shouldSubscribe",render:d}),s&&o.createElement(J,{url:s})),o.createElement("div",{className:W()("form-actions customerEmail-action",{"customerEmail-floating--enabled":m})},o.createElement(C.ZP,{className:"customerEmail-button",id:"checkout-customer-continue",isLoading:i,testId:"customer-continue-as-guest-button",type:"submit",variant:C.Wu.Primary},o.createElement(E.Z,{id:r})))),!i&&o.createElement("p",null,o.createElement(E.Z,{id:"customer.login_text"})," ",o.createElement("a",{"data-test":"customer-continue-button",id:"checkout-customer-login",onClick:c},o.createElement(E.Z,{id:"customer.login_action"}))),n))}))));var X=n(25426);const ee=(0,X.Z)((function(){return o.createElement("svg",{viewBox:"0 0 576 512",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"}))}));const te=(0,X.Z)((function(){return o.createElement("svg",{viewBox:"0 0 640 512",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"}))}));var ne=n(32475);const ae=(0,o.memo)((function(e){var t=e.useFloatingLabel,n=void 0!==t&&t,r=(0,o.useCallback)((function(e){return o.createElement(ne.Z,{openByDefault:!1},(function(t){var r=t.isOpen,i=t.toggle;return o.createElement("div",{className:"form-field-password"},o.createElement(G.Z,(0,a.pi)({},e.field,{additionalClassName:"form-input--withIcon",id:e.field.name,type:r?"text":"password",useFloatingLabel:n})),n&&o.createElement(Y.Z,{htmlFor:e.field.name,id:"".concat(e.field.name,"-label"),useFloatingLabel:!0},o.createElement(E.Z,{id:"customer.password_label"})),o.createElement("a",{className:"form-toggle-password form-input-icon",href:"#",onClick:i},r?o.createElement(ee,null):o.createElement(te,null)))}))}),[n]),i=(0,o.useMemo)((function(){return o.createElement(E.Z,{id:"customer.password_label"})}),[]);return o.createElement(B.Z,{input:r,labelContent:n?null:i,name:"password",useFloatingLabel:n})}));const re=(0,f.Z)((0,g.withFormik)({mapPropsToValues:function(e){var t=e.email;return{email:void 0===t?"":t,password:""}},handleSubmit:function(e,t){(0,t.props.onSignIn)(e)},validationSchema:function(e){var t=e.language;return w({language:t}).concat((0,y.Ry)({password:(0,y.Z_)().required(t.translate("customer.password_required_error"))}))}})((0,o.memo)((function(e){var t=e.canCancel,n=e.continueAsGuestButtonLabelId,a=e.forgotPasswordUrl,i=e.email,l=e.isSignInEmailEnabled,c=e.isSigningIn,s=e.language,u=e.onCancel,m=void 0===u?r.noop:u,d=e.onChangeEmail,g=e.onContinueAsGuest,p=e.onCreateAccount,f=void 0===p?r.noop:p,Z=e.onSendLoginEmail,_=void 0===Z?r.noop:Z,y=e.signInError,S=e.shouldShowCreateAccountLink,L=e.useFloatingLabel,w=e.viewType,I=void 0===w?A.Z.Login:w,F=(0,o.useCallback)((function(){return i?o.createElement("p",{className:"optimizedCheckout-contentSecondary"},o.createElement(P.Z,{data:{email:i},id:"customer.guest_could_login_change_email",onClick:m,testId:"change-email"})):null}),[i,m]);return o.createElement(b.Z,{className:"checkout-form",id:"checkout-customer-returning",testId:"checkout-customer-returning"},o.createElement(k.Z,{legend:o.createElement(H.Z,{hidden:!0},o.createElement(E.Z,{id:"customer.returning_customer_text"}))},y&&o.createElement(v.Z,{testId:"customer-login-error-message",type:v.N.Error},function(e,t){switch(e.body&&e.body.type){case"throttled_login":return t("customer.sign_in_throttled_error");case"reset_password_before_login":return t("customer.reset_password_before_login_error");default:return t("customer.sign_in_error")}}(y,(function(e){return s.translate(e)}))),I===A.Z.SuggestedLogin&&o.createElement(v.Z,{type:v.N.Info},o.createElement(M.Z,{data:{email:i},id:"customer.guest_could_login"})),I===A.Z.CancellableEnforcedLogin&&o.createElement(v.Z,{type:v.N.Info},o.createElement(M.Z,{data:{email:i},id:"customer.guest_must_login"})),I===A.Z.EnforcedLogin&&o.createElement(v.Z,{type:v.N.Error},o.createElement(P.Z,{id:"customer.guest_temporary_disabled",onClick:f})),(I===A.Z.Login||I===A.Z.EnforcedLogin)&&o.createElement(R,{onChange:d,useFloatingLabel:L}),o.createElement(ae,{useFloatingLabel:L}),o.createElement("p",{className:"form-legend-container"},o.createElement("span",null,l&&o.createElement(P.Z,{id:"login_email.link",onClick:_,testId:"customer-signin-link"}),!l&&o.createElement("a",{"data-test":"forgot-password-link",href:a,rel:"noopener noreferrer",target:"_blank"},o.createElement(E.Z,{id:"customer.forgot_password_action"}))),I===A.Z.Login&&S&&o.createElement("span",null,o.createElement(P.Z,{id:"customer.create_account_to_continue_text",onClick:f}))),o.createElement("div",{className:"form-actions"},o.createElement(C.ZP,{disabled:c,id:"checkout-customer-continue",testId:"customer-continue-button",type:"submit",variant:C.Wu.Primary},o.createElement(E.Z,{id:"customer.sign_in_action"})),I===A.Z.SuggestedLogin&&o.createElement("a",{className:"button optimizedCheckout-buttonSecondary","data-test":"customer-guest-continue",href:"#",id:"checkout-guest-continue",onClick:(0,h.Z)(g)},o.createElement(E.Z,{id:n})),t&&I!==A.Z.EnforcedLogin&&I!==A.Z.SuggestedLogin&&o.createElement("a",{className:"button optimizedCheckout-buttonSecondary","data-test":"customer-cancel-button",href:"#",id:"checkout-customer-cancel",onClick:(0,h.Z)(m)},o.createElement(E.Z,{id:I===A.Z.CancellableEnforcedLogin?"login_email.use_another_email":"common.cancel_action"}))),I===A.Z.SuggestedLogin&&F()))}))));var oe=n(72398),ie=n(19945);function le(e){var t=e.acceptsMarketingEmails,n=e.customFields,r=(0,a._T)(e,["acceptsMarketingEmails","customFields"]);return(0,a.pi)((0,a.pi)({},r),{acceptsMarketingEmails:t&&t.length>0,customFields:(0,ie.Z)(n)})}var ce=n(509),se=n(45855);const ue=(0,g.withFormik)({mapPropsToValues:function(e){var t=e.email,n=void 0===t?"":t,a=e.defaultShouldSubscribe,r=void 0!==a&&a;return{email:n,shouldSubscribe:!e.requiresMarketingConsent&&r,privacyPolicy:!1}},handleSubmit:function(e,t){(0,t.props.onContinueAsGuest)(e)}})((0,o.memo)((function(e){var t=e.continueAsGuestButtonLabelId,n=e.isLoading,r=e.initialize,i=e.deinitialize,l=e.onChangeEmail,c=e.onShowLogin,s=e.onContinueAsGuest,u=e.canSubscribe,m=e.checkoutButtons,d=e.requiresMarketingConsent,g=e.privacyPolicyUrl,h=e.step,p=(0,o.useState)(!0),f=p[0],v=p[1],b=(0,o.useState)(""),Z=b[0],_=b[1],y=(0,o.useState)(!1),S=y[0],L=y[1],w=(0,o.useState)(!0),I=w[0],F=w[1],x=(0,o.useState)(!1),N=x[0],A=x[1],P=function(){s({email:Z,shouldSubscribe:!1})},M=(0,o.useCallback)((function(e,t){l(t),_(t),v(!t),L(e),e||A(!0)}),[v,l]);(0,o.useEffect)((function(){(!h.isComplete||N)&&Z&&S&&P()}),[Z,S,N]);var z=(0,o.useCallback)((function(e){F(e)}),[]);(0,o.useEffect)((function(){return r({methodId:"stripeupe",stripeupe:{container:"stripeupeLink",onEmailChange:M,isLoading:z,getStyles:G,gatewayId:"stripeupe",methodId:"card"}}),function(){i({methodId:"stripeupe"})}}),[]);var q=function(e,t){var n=document.getElementById(e);if(n)return(0,ce.Z)(n,t)},T="stripe-card-component-field",G=(0,o.useCallback)((function(){var e=q("".concat(T,"--input"),["color","background-color","border-color","box-shadow"]),t=q("".concat(T,"--label"),["color"]),n=q("".concat(T,"--error"),["color"]);return t&&e&&n?{labelText:t.color,fieldText:e.color,fieldPlaceholderText:e.color,fieldErrorText:n.color,fieldBackground:e["background-color"],fieldInnerShadow:e["box-shadow"],fieldBorder:e["border-color"]}:void 0}),[]),B=(0,o.useCallback)((function(e){return o.createElement(j,(0,a.pi)({},e,{requiresMarketingConsent:d}))}),[d]),R=S&&!N?"customer.continue_as_stripe_customer_action":t;return o.createElement(o.Fragment,null,o.createElement("div",{className:"checkout-form"},o.createElement(se.Z,{hideContentWhenLoading:!0,isLoading:I},o.createElement(k.Z,{legend:!S&&o.createElement(H.Z,{hidden:!0},o.createElement(E.Z,{id:"customer.guest_customer_text"}))},o.createElement("div",{className:"customerEmail-container"},o.createElement("div",{className:"customerEmail-body"},o.createElement("div",{id:"stripeupeLink"}),o.createElement("br",null),(u||d)&&o.createElement($.Z,{name:"shouldSubscribe",render:B}),g&&o.createElement(J,{url:g})),o.createElement("div",{className:"form-actions customerEmail-action"},(!S||S&&!N)&&o.createElement(C.ZP,{className:"stripeCustomerEmail-button",disabled:f,id:"stripe-checkout-customer-continue",isLoading:n,onClick:P,testId:"stripe-customer-continue-as-guest-button",type:"submit",variant:C.Wu.Primary},o.createElement(E.Z,{id:R})))),!n&&o.createElement("p",null,o.createElement(E.Z,{id:"customer.login_text"})," ",o.createElement("a",{"data-test":"customer-continue-button",id:"checkout-customer-login",onClick:c},o.createElement(E.Z,{id:"customer.login_action"}))),!S&&m))),o.createElement("div",{className:"optimizedCheckout-form-input",id:"".concat(T,"--input"),placeholder:"1111"},o.createElement("div",{className:"form-field--error"},o.createElement("div",{className:"optimizedCheckout-form-label",id:"".concat(T,"--error")})),o.createElement("div",{className:"optimizedCheckout-form-label",id:"".concat(T,"--label")})))})));var me=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isEmailLoginFormOpen:!1,isReady:!1,hasRequestedLoginEmail:!1},t.closeEmailLoginFormForm=function(){t.setState({isEmailLoginFormOpen:!1,hasRequestedLoginEmail:!1})},t.handleEmailLoginClicked=function(){return(0,a.mG)(t,void 0,void 0,(function(){var e;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:e=this.props.viewType,t.label=1;case 1:return t.trys.push([1,,4,5]),e!==A.Z.Login&&this.draftEmail?[4,this.handleSendLoginEmail({email:this.draftEmail})]:[3,3];case 2:t.sent(),t.label=3;case 3:return[3,5];case 4:return this.setState({isEmailLoginFormOpen:!0}),[7];case 5:return[2]}}))}))},t.handleSendLoginEmail=function(e){return(0,a.mG)(t,void 0,void 0,(function(){var t;return(0,a.Jh)(this,(function(n){switch(n.label){case 0:t=this.props.sendLoginEmail,n.label=1;case 1:return n.trys.push([1,,3,4]),[4,t(e)];case 2:return n.sent(),[3,4];case 3:return this.setState({hasRequestedLoginEmail:!0}),[7];case 4:return[2]}}))}))},t.handleContinueAsGuest=function(e){return(0,a.mG)(t,void 0,void 0,(function(){var t,n,o,i,l,c,u,m,d,g,h,p,E,f,v,C,b;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:t=this.props,n=t.canSubscribe,o=t.continueAsGuest,i=t.hasBillingId,l=t.defaultShouldSubscribe,c=t.onChangeViewType,u=void 0===c?r.noop:c,m=t.onContinueAsGuest,d=void 0===m?r.noop:m,g=t.onContinueAsGuestError,h=void 0===g?r.noop:g,p=t.onSubscribeToNewsletter,E=e.email.trim(),f=!i&&!l&&void 0,a.label=1;case 1:return a.trys.push([1,4,,5]),[4,o({email:E,acceptsMarketingNewsletter:!(!n||!e.shouldSubscribe)||f,acceptsAbandonedCartEmails:!!e.shouldSubscribe||f})];case 2:return v=a.sent().data,p(e.shouldSubscribe),(C=v.getCustomer())&&C.shouldEncourageSignIn&&C.isGuest&&!C.isStripeLinkAuthenticated?[2,u(A.Z.SuggestedLogin)]:[4,this.executePaymentMethodCheckoutOrContinue()];case 3:return a.sent(),this.draftEmail=void 0,[3,5];case 4:return b=a.sent(),!(0,s.Z)(b)||"update_subscriptions"!==b.type&&"payment_method_client_invalid"!==b.type||(this.draftEmail=void 0,d()),(0,s.Z)(b)&&429===b.status?[2,u(A.Z.EnforcedLogin)]:(0,s.Z)(b)&&403===b.status?[2,u(A.Z.CancellableEnforcedLogin)]:(h(b),[3,5]);case 5:return[2]}}))}))},t.handleSignIn=function(e){return(0,a.mG)(t,void 0,void 0,(function(){var t,n,o,i,l,c,s;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:t=this.props,n=t.signIn,o=t.onSignIn,i=void 0===o?r.noop:o,l=t.onSignInError,c=void 0===l?r.noop:l,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,n(e)];case 2:return a.sent(),i(),this.draftEmail=void 0,[3,4];case 3:return s=a.sent(),c(s),[3,4];case 4:return[2]}}))}))},t.handleCreateAccount=function(e){return(0,a.mG)(t,void 0,void 0,(function(){var t,n,o,i,l;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return t=this.props,n=t.createAccount,o=void 0===n?r.noop:n,i=t.onAccountCreated,l=void 0===i?r.noop:i,[4,o(le(e))];case 1:return a.sent(),l(),[2]}}))}))},t.showCreateAccount=function(){var e=t.props.onChangeViewType;(void 0===e?r.noop:e)(A.Z.CreateAccount)},t.handleCancelCreateAccount=function(){var e=t.props,n=e.clearError,a=e.onChangeViewType,o=void 0===a?r.noop:a,i=e.createAccountError;i&&n(i),o(A.Z.Login)},t.handleCancelSignIn=function(){var e=t.props,n=e.clearError,a=e.onChangeViewType,o=void 0===a?r.noop:a,i=e.signInError;i&&n(i),o(A.Z.Guest)},t.handleChangeEmail=function(e){var n=t.props,a=n.analyticsTracker,r=n.emitAnalyticsEvent;n.hasDetailEntryBegan||r(oe.O.DetailEntryBegan),t.draftEmail=e,a.customerEmailEntry(e)},t.handleShowLogin=function(){var e=t.props.onChangeViewType;(void 0===e?r.noop:e)(A.Z.Login)},t.executePaymentMethodCheckoutOrContinue=function(){return(0,a.mG)(t,void 0,void 0,(function(){var e,t,n,o,i,l,c=this;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return e=this.props,t=e.executePaymentMethodCheckout,n=e.onContinueAsGuest,o=void 0===n?r.noop:n,i=e.providerWithCustomCheckout,l=e.emitAnalyticsEvent,i&&i!==m.Z.StripeUPE?(l(oe.O.AccountButtonClick),[4,t({methodId:i,continueWithCheckoutCallback:o,checkoutPaymentMethodExecuted:function(e){return c.checkoutPaymentMethodExecuted(e)}})]):[3,2];case 1:return a.sent(),[3,3];case 2:o(),a.label=3;case 3:return[2]}}))}))},t}return(0,a.ZT)(t,e),t.prototype.componentDidMount=function(){return(0,a.mG)(this,void 0,void 0,(function(){var e,t,n,o,i,l,c,s,u;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:e=this.props,t=e.initializeCustomer,n=e.email,o=e.onReady,i=void 0===o?r.noop:o,l=e.onUnhandledError,c=void 0===l?r.noop:l,s=e.providerWithCustomCheckout,this.draftEmail=n,a.label=1;case 1:return a.trys.push([1,4,,5]),s===m.Z.StripeUPE?[3,3]:[4,t({methodId:s})];case 2:a.sent(),a.label=3;case 3:return[3,5];case 4:return u=a.sent(),c(u),[3,5];case 5:return this.setState({isReady:!0}),i(),[2]}}))}))},t.prototype.componentWillUnmount=function(){return(0,a.mG)(this,void 0,void 0,(function(){var e,t,n,o,i,l,c;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:e=this.props,t=e.deinitializeCustomer,n=void 0===t?r.noop:t,o=e.providerWithCustomCheckout,i=e.onUnhandledError,l=void 0===i?r.noop:i,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,n({methodId:o})];case 2:return a.sent(),[3,4];case 3:return c=a.sent(),l(c),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props.viewType,t=this.state,n=t.isEmailLoginFormOpen,a=t.isReady,r=e===A.Z.Guest,l=e===A.Z.CreateAccount,c=!r&&!l;return o.createElement(i.Z,{isLoading:!a},n&&this.renderEmailLoginLinkForm(),c&&this.renderLoginForm(),r&&this.renderGuestForm(),l&&this.renderCreateAccountForm())},t.prototype.renderGuestForm=function(){var e=this.props,t=e.canSubscribe,n=e.checkEmbeddedSupport,a=e.checkoutButtonIds,i=e.deinitializeCustomer,l=e.email,c=e.initializeCustomer,s=e.isContinuingAsGuest,u=void 0!==s&&s,g=e.isExecutingPaymentMethodCheckout,h=void 0!==g&&g,p=e.isInitializing,E=void 0!==p&&p,f=e.isSubscribed,v=e.privacyPolicyUrl,C=e.requiresMarketingConsent,b=e.providerWithCustomCheckout,k=e.onUnhandledError,Z=void 0===k?r.noop:k,_=e.step,y=e.useFloatingLabel;return b===m.Z.StripeUPE?o.createElement(ue,{canSubscribe:t,checkoutButtons:o.createElement(d.Z,{checkEmbeddedSupport:n,deinitialize:i,initialize:c,isInitializing:E,methodIds:a,onError:Z}),continueAsGuestButtonLabelId:"customer.continue",defaultShouldSubscribe:f,deinitialize:i,email:this.draftEmail||l,initialize:c,isLoading:u||E||h,onChangeEmail:this.handleChangeEmail,onContinueAsGuest:this.handleContinueAsGuest,onShowLogin:this.handleShowLogin,privacyPolicyUrl:v,requiresMarketingConsent:C,step:_}):o.createElement(Q,{canSubscribe:t,checkoutButtons:o.createElement(d.Z,{checkEmbeddedSupport:n,deinitialize:i,initialize:c,isInitializing:E,methodIds:a,onError:Z}),continueAsGuestButtonLabelId:"customer.continue",defaultShouldSubscribe:f,email:this.draftEmail||l,isLoading:u||E||h,onChangeEmail:this.handleChangeEmail,onContinueAsGuest:this.handleContinueAsGuest,onShowLogin:this.handleShowLogin,privacyPolicyUrl:v,requiresMarketingConsent:C,useFloatingLabel:y})},t.prototype.renderEmailLoginLinkForm=function(){var e=this.state,t=e.isEmailLoginFormOpen,n=e.hasRequestedLoginEmail,a=this.props,r=a.isSendingSignInEmail,i=a.signInEmailError,l=a.signInEmail,c=a.useFloatingLabel;return o.createElement(U,{email:this.draftEmail,emailHasBeenRequested:n,isOpen:t,isSendingEmail:r,onRequestClose:this.closeEmailLoginFormForm,onSendLoginEmail:this.handleSendLoginEmail,sentEmail:l,sentEmailError:i,useFloatingLabel:c})},t.prototype.renderCreateAccountForm=function(){var e=this.props,t=e.customerAccountFields,n=e.isCreatingAccount,a=e.createAccountError,r=e.requiresMarketingConsent,i=e.useFloatingLabel;return o.createElement(N,{createAccountError:a,formFields:t,isCreatingAccount:n,onCancel:this.handleCancelCreateAccount,onSubmit:this.handleCreateAccount,requiresMarketingConsent:r,useFloatingLabel:i})},t.prototype.renderLoginForm=function(){var e=this.props,t=e.isEmbedded,n=e.email,a=e.forgotPasswordUrl,r=e.isSignInEmailEnabled,i=e.isGuestEnabled,l=e.isSendingSignInEmail,c=e.isSigningIn,s=e.isAccountCreationEnabled,u=e.providerWithCustomCheckout,m=e.signInError,d=e.useFloatingLabel,g=e.viewType;return o.createElement(re,{canCancel:i,continueAsGuestButtonLabelId:u?"customer.continue":"customer.continue_as_guest_action",email:this.draftEmail||n,forgotPasswordUrl:a,isSendingSignInEmail:l,isSignInEmailEnabled:r&&!t,isSigningIn:c,onCancel:this.handleCancelSignIn,onChangeEmail:this.handleChangeEmail,onContinueAsGuest:this.executePaymentMethodCheckoutOrContinue,onCreateAccount:this.showCreateAccount,onSendLoginEmail:this.handleEmailLoginClicked,onSignIn:this.handleSignIn,shouldShowCreateAccountLink:s,signInError:m,useFloatingLabel:d,viewType:g})},t.prototype.checkoutPaymentMethodExecuted=function(e){this.props.analyticsTracker.customerPaymentMethodExecuted(e)},t}(o.Component);function de(e){var t=e.checkoutService,n=e.checkoutState,a=n.data,r=a.getBillingAddress,o=a.getCustomerAccountFields,i=a.getCheckout,l=a.getCustomer,c=a.getSignInEmail,s=a.getConfig,m=n.errors,d=m.getSignInError,g=m.getSignInEmailError,h=m.getCreateCustomerAccountError,p=n.statuses,E=p.isContinuingAsGuest,f=p.isExecutingPaymentMethodCheckout,v=p.isInitializingCustomer,C=p.isSigningIn,b=p.isSendingSignInEmail,k=p.isCreatingCustomerAccount,Z=r(),_=i(),y=l(),S=c(),L=s();if(!_||!L)return null;var w=L.checkoutSettings,I=w.privacyPolicyUrl,F=w.requiresMarketingConsent,x=w.isSignInEmailEnabled,N=w.isAccountCreationEnabled;return{customerAccountFields:o(),canSubscribe:L.shopperConfig.showNewsletterSignup,checkoutButtonIds:L.checkoutSettings.remoteCheckoutProviders,clearError:t.clearError,createAccount:t.createCustomerAccount,continueAsGuest:t.continueAsGuest,sendLoginEmail:t.sendSignInEmail,defaultShouldSubscribe:L.shopperConfig.defaultNewsletterSignup,deinitializeCustomer:t.deinitializeCustomer,executePaymentMethodCheckout:t.executePaymentMethodCheckout,email:(null==Z?void 0:Z.email)||(null==y?void 0:y.email),firstName:null==y?void 0:y.firstName,forgotPasswordUrl:L.links.forgotPasswordLink,initializeCustomer:t.initializeCustomer,isCreatingAccount:k(),createAccountError:h(),hasBillingId:!!(null==Z?void 0:Z.id),isContinuingAsGuest:E(),isExecutingPaymentMethodCheckout:f(),isInitializing:v(),isSignInEmailEnabled:x,isAccountCreationEnabled:N,isGuestEnabled:L.checkoutSettings.guestCheckoutEnabled,isSigningIn:C(),isSendingSignInEmail:b(),signInEmail:S,signInEmailError:g(),privacyPolicyUrl:I,providerWithCustomCheckout:L.checkoutSettings.providerWithCustomCheckout||void 0,requiresMarketingConsent:F,signIn:t.signInCustomer,signInError:d(),useFloatingLabel:(0,u.Z)(L.checkoutSettings)}}const ge=(0,l.Z)((0,c.Z)(de)(me))},19945:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(91074);function r(e){var t=[];return(0,a.forIn)(e,(function(e,n){var r;if((0,a.isDate)(e)){var o=(0,a.padStart)((e.getMonth()+1).toString(),2,"0"),i=(0,a.padStart)(e.getDate().toString(),2,"0");r="".concat(e.getFullYear(),"-").concat(o,"-").concat(i)}else r=e;t.push({fieldId:n,fieldValue:r})})),t}},14453:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67627),r=n(67106),o=n(14233);const i=(0,n(43276).Z)((function(e){var t=e.data,n=e.id,i=e.language,l=e.onClick,c=e.testId,s=i.translate(n,t),u=(0,o.Z)(s);return u.length?a.createElement(a.Fragment,null,u[0],a.createElement("a",{"data-test":c,href:"#",onClick:(0,r.Z)(l)},u[1]),u[2]):a.createElement(a.Fragment,null,s)}))},59826:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(86940),r=n(91074),o=n(67627),i=n(45793),l=n(25079),c=n(3354);const s=(0,o.memo)((function(e){var t=e.additionalClassName,n=e.disabled,s=void 0!==n&&n,u=e.labelContent,m=e.onChange,d=e.name,g=e.id,h=(0,o.useCallback)((function(e){var t=e.field;return o.createElement(o.Fragment,null,o.createElement(l.Z,(0,a.pi)({},t,{checked:!!t.value,disabled:s,id:g||t.name,label:u})),o.createElement(c.Z,{errorId:"".concat(null!=g?g:d,"-field-error-message"),name:d,testId:"".concat((0,r.kebabCase)(d),"-field-error-message")}))}),[s,g,u,d]);return o.createElement(i.Z,{additionalClassName:t,name:d,onChange:m,render:h})}))},25079:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(86940),r=n(696),o=n.n(r),i=n(67627),l=n(50004),c=n(64553);const s=(0,i.forwardRef)((function(e,t){var n=e.additionalClassName,r=e.label,s=e.id,u=(0,a._T)(e,["additionalClassName","label","id"]);return i.createElement(i.Fragment,null,i.createElement(l.Z,(0,a.pi)({},u,{className:o()("form-checkbox","optimizedCheckout-form-checkbox",n),id:s,ref:t,type:"checkbox"})),i.createElement(c.Z,{htmlFor:s},r))}))},70764:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(86940),r=n(696),o=n.n(r),i=n(91074),l=n(67627),c=n(70140),s=n(76417),u=n(47086),m=n(18037),d=n.n(m),g=n(71735),h=n(11547);const p=(0,g.Z)(h.Z,{displayNamePrefix:"withDate",pickProps:function(e,t){return"date"===t&&!!e}});var E=n(34984),f=n(25079),v=n(50004),C=n(64553);const b=(0,l.forwardRef)((function(e,t){var n=e.additionalClassName,r=e.label,i=e.value,c=e.checked,s=e.id,u=(0,a._T)(e,["additionalClassName","label","value","checked","id"]);return l.createElement(l.Fragment,null,l.createElement(v.Z,(0,a.pi)({},u,{checked:c,className:o()("form-radio","optimizedCheckout-form-radio",n),id:s,ref:t,type:"radio",value:i})),l.createElement(C.Z,{htmlFor:s},r))}));var k=n(10817),Z=n(7936);const _=(0,l.memo)(p((function(e){e.additionalClassName;var t=e.date,n=e.fieldType,r=e.id,c=e.name,s=e.onChange,m=void 0===s?i.noop:s,g=e.options,h=e.placeholder,p=e.useFloatingLabel,v=e.value,C=(0,a._T)(e,["additionalClassName","date","fieldType","id","name","onChange","options","placeholder","useFloatingLabel","value"]),_=t.inputFormat,y=(0,l.useCallback)((function(e,t){return m((0,a.pi)((0,a.pi)({},t),{target:{name:c,value:e}}))}),[m,c]);switch(n){case u.Z.dropdown:return l.createElement(l.Fragment,null,l.createElement("div",{className:o()({"dropdown-chevron":!p},{"floating-select-chevron":p})},l.createElement(E.Z,null)),l.createElement("select",(0,a.pi)({},C,{className:o()({"floating-select":p},"form-select optimizedCheckout-form-select"),"data-test":"".concat(r,"-select"),id:r,name:c,onChange:m,value:null===v?"":v}),h&&l.createElement("option",{value:""},h),g&&g.map((function(e){var t=e.label,n=e.value;return l.createElement("option",{key:n,value:n},t)}))));case u.Z.radio:return g&&g.length?l.createElement(l.Fragment,null,g.map((function(e){var t=e.label,n=e.value;return l.createElement(b,(0,a.pi)({},C,{checked:n===v,id:"".concat(r,"-").concat(n),key:n,label:t,name:c,onChange:m,testId:"".concat(r,"-").concat(n,"-radio"),value:n}))}))):null;case u.Z.checkbox:return g&&g.length?l.createElement(l.Fragment,null,g.map((function(e){var t=e.label,n=e.value;return l.createElement(f.Z,(0,a.pi)({},C,{checked:!!Array.isArray(v)&&v.includes(n),id:"".concat(r,"-").concat(n),key:n,label:t,name:c,onChange:m,testId:"".concat(r,"-").concat(n,"-checkbox"),value:n}))}))):null;case u.Z.date:return l.createElement(d(),(0,a.pi)({},C,{autoComplete:"off",calendarClassName:"optimizedCheckout-contentPrimary",className:o()("form-input optimizedCheckout-form-input",{"floating-input":p}),dateFormat:_,maxDate:C.max?new Date("".concat(C.max,"T00:00:00Z")):void 0,minDate:C.min?new Date("".concat(C.min,"T00:00:00Z")):void 0,name:c,onChange:y,placeholderText:_.toUpperCase(),popperClassName:"optimizedCheckout-contentPrimary",selected:(0,i.isDate)(v)?v:void 0}));case u.Z.multiline:return l.createElement(k.Z,(0,a.pi)({},C,{id:r,name:c,onChange:m,testId:"".concat(r,"-text"),type:n,useFloatingLabel:p,value:v}));default:return l.createElement(Z.Z,(0,a.pi)({},C,{id:r,name:c,onChange:m,placeholder:h,testId:"".concat(r,"-").concat(n===u.Z.password?"password":"text"),type:n,useFloatingLabel:p,value:v}))}})));var y=n(36662),S=n(3354);const L=(0,l.memo)((function(e){var t=e.testId,n=e.onSelectedAll,a=e.onSelectedNone,r=(0,l.useCallback)((function(e){e.preventDefault(),n()}),[n]),o=(0,l.useCallback)((function(e){e.preventDefault(),a()}),[a]);return l.createElement("ul",{className:"multiCheckbox--controls"},l.createElement("li",{className:"multiCheckbox--control"},l.createElement(c.Z,{id:"address.select"})),l.createElement("li",{className:"multiCheckbox--control"},l.createElement("a",{"data-test":"".concat(t,"Checkbox-all-button"),href:"#",onClick:r},l.createElement(c.Z,{id:"address.select_all"}))),l.createElement("li",{className:"multiCheckbox--control"},l.createElement("a",{"data-test":"".concat(t,"Checkbox-none-button"),href:"#",onClick:o},l.createElement(c.Z,{id:"address.select_none"}))))}));var w=function(e){var t=e.form,n=t.values,a=t.errors,r=e.id,o=e.label,c=e.name,m=e.onChange,d=void 0===m?i.noop:m,g=e.options,h=e.push,p=e.remove,E=(0,l.useCallback)((function(){var e=(0,s.getIn)(n,c)||[];(0,i.difference)(g.map((function(e){return e.value})),e).forEach((function(e){return h(e)})),d((0,s.getIn)(n,c))}),[c,d,g,h,n]),f=(0,l.useCallback)((function(){((0,s.getIn)(n,c)||[]).forEach((function(){return p(0)})),d((0,s.getIn)(n,c))}),[c,d,p,n]),v=(0,l.useCallback)((function(e){var t=(0,s.getIn)(n,c)||[],a=e.target,r=a.value;a.checked?h(r):p(t.indexOf(r)),d((0,s.getIn)(n,c))}),[c,d,h,p,n]);return l.createElement(y.Z,{hasError:(0,s.getIn)(a,c)&&(0,s.getIn)(a,c).length},o,g.length>1&&l.createElement(L,{onSelectedAll:E,onSelectedNone:f,testId:r}),l.createElement(_,{fieldType:u.Z.checkbox,id:r,name:c,onChange:v,options:g,value:(0,s.getIn)(n,c)||[]}),l.createElement(S.Z,{errorId:"".concat(null!=r?r:c,"-field-error-message"),name:c,testId:"".concat((0,i.kebabCase)(c),"-field-error-message")}))};const I=(0,l.memo)((function(e){var t=e.id,n=e.label,r=e.name,o=e.onChange,c=e.options,u=(0,l.useCallback)((function(e){return l.createElement(w,(0,a.pi)({id:t,label:n,name:r,onChange:o,options:c},(0,i.pick)(e,["form","pop","push","remove"])))}),[t,n,r,o,c]);return l.createElement(s.FieldArray,{name:r,render:u})}));var F=n(92963);const x=(0,l.memo)((function(e){var t=e.field,n=t.fieldType,r=t.type,s=t.secret,m=t.name,d=t.label,g=t.required,h=t.options,p=t.max,E=t.min,f=t.maxLength,v=e.parentFieldName,b=e.onChange,k=e.placeholder,Z=e.inputId,y=e.autocomplete,S=e.label,L=e.extraClass,w=e.useFloatingLabel,x=Z||m,N=v?"".concat(v,".").concat(m):m,A=Boolean(w&&((0,i.includes)(["text","password","dropdown","date","multiline"],n)||!n)),P=(0,l.useMemo)((function(){return l.createElement(C.Z,{htmlFor:x,id:"".concat(x,"-label"),useFloatingLabel:A},S||d,!g&&l.createElement(l.Fragment,null," ",l.createElement("small",{className:"optimizedCheckout-contentSecondary"},l.createElement(c.Z,{id:"common.optional_text"}))))}),[x,d,g,A,S]),M=(0,l.useMemo)((function(){return"text"===n?"integer"===r?u.Z.number:(0,i.includes)(m,"phone")||(0,i.includes)(m,"tel")?u.Z.telephone:s?u.Z.password:u.Z.text:n}),[n,r,s,m]),z=(0,l.useCallback)((function(e){var t=e.field;return l.createElement(_,(0,a.pi)({},t,{"aria-labelledby":"".concat(x,"-label ").concat(x,"-field-error-message"),autoComplete:y,fieldType:M,id:x,max:p,maxLength:f||void 0,min:E,options:h&&h.items,placeholder:k||h&&h.helperLabel,rows:h&&h.rows,useFloatingLabel:A}))}),[x,p,f,E,h,k,M,y]);return l.createElement("div",{className:o()("dynamic-form-field",{"floating-form-field":A},L)},n===u.Z.checkbox?l.createElement(I,{id:x,label:P,name:N,onChange:b,options:h&&h.items||[]}):l.createElement(F.Z,{id:x,input:z,label:P,name:N,onChange:b,useFloatingLabel:A}))}))},10817:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(86940),r=n(696),o=n.n(r),i=n(67627);const l=(0,i.forwardRef)((function(e,t){var n=e.additionalClassName,r=e.testId,l=e.className,c=e.useFloatingLabel,s=(0,a._T)(e,["additionalClassName","testId","className","useFloatingLabel"]);return i.createElement("textarea",(0,a.pi)({},s,{className:l||o()({"floating-textarea":c},"form-input","optimizedCheckout-form-input",n),"data-test":r,ref:t}))}))},34984:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67627);const r=(0,n(25426).Z)((function(){return a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))}))}}]);
//# sourceMappingURL=customer-346fc29c.js.map