"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[372],{53537:(e,t,n)=>{n.d(t,{Z:()=>M});var o=n(86940),a=n(55375),r=n(91074),i=n(67627),l=n(70140),s=n(43276),c=n(47086),d=n(78379),u=n(70764),m=n(59826),p={address1:"addressLine1",address2:"addressLine2",postalCode:"postCode",stateOrProvince:"province",stateOrProvinceCode:"provinceCode"};function h(e){return"".concat(p[e]||e)}function f(e){return"".concat(h(e),"Input")}const v=function(){function e(e){var t=e.address_components,n=e.name;this._name=n,this._address=t}return e.prototype.getState=function(){return this._get("administrative_area_level_1","short_name")},e.prototype.getStreet=function(){return this._name},e.prototype.getStreet2=function(){return this._get("subpremise","short_name")},e.prototype.getCity=function(){return this._get("postal_town","long_name")||this._get("locality","long_name")||this._get("neighborhood","short_name")},e.prototype.getCountry=function(){return this._get("country","short_name")},e.prototype.getPostCode=function(){return this._get("postal_code","short_name")},e.prototype._get=function(e,t){var n=this._address&&this._address.find((function(t){return-1!==t.types.indexOf(e)}));return n?n[t]:""},e}();const g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.prototype.getState=function(){return this._get("administrative_area_level_2","long_name")},t.prototype.getStreet2=function(){return this._get("locality","long_name")},t}(v);const C=function(){function e(){}return e.create=function(e){var t=new v(e);return"GB"===t.getCountry()?new g(e):t},e}();function y(e,t){if(void 0===t&&(t=[]),!e||!e.address_components)return{};var n=C.create(e),a=n.getState(),r=n.getCountry(),i=t&&t.find((function(e){return r===e.code})),l=n.getStreet2();return(0,o.pi)({address2:l,city:n.getCity(),countryCode:r,postalCode:n.getPostCode()},a?function(e,t){void 0===t&&(t=[]);var n=t.find((function(t){var n=t.code,o=t.name;return n===e||o===e}));if(!n)return{stateOrProvince:t.length?"":e,stateOrProvinceCode:""};return{stateOrProvince:n.name,stateOrProvinceCode:n.code}}(a,i&&i.subdivisions):{})}var E=n(92963),b=n(64553),_=n(6904);const Z=function(e){var t=e.children;return i.createElement("div",{className:"popover"},t)};function k(e,t){var n=["popoverList-item"];return e===t&&n.push("is-active"),n.join(" ")}const S=(0,i.memo)((function(e){var t=e.highlightedIndex,n=void 0===t?-1:t,a=e.testId,r=e.getItemProps,l=void 0===r?function(e){return e}:r,s=e.menuProps,c=void 0===s?{}:s,d=e.items;return d&&d.length?i.createElement("ul",(0,o.pi)({className:"popoverList","data-test":a},c),d.map((function(e,t){return i.createElement("li",(0,o.pi)({className:k(n,t),"data-test":a&&"".concat(a,"-item")},l({key:e.id,index:t,item:e}),{key:t}),e.content)}))):null}));const P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.stateReducer=function(e,n){var a=t.props.onChange;switch(n.type){case _.ZP.stateChangeTypes.blurInput:case _.ZP.stateChangeTypes.blurButton:case _.ZP.stateChangeTypes.mouseUp:case _.ZP.stateChangeTypes.touchEnd:return(0,o.pi)((0,o.pi)({},n),{inputValue:e.inputValue});case _.ZP.stateChangeTypes.changeInput:return n.inputValue!==e.inputValue&&a&&a(n.inputValue||"",e.isOpen),n;case _.ZP.stateChangeTypes.keyDownEnter:default:return n}},t.handleStateChange=function(e){var n=e.isOpen,o=e.inputValue,a=t.props.onToggleOpen,i=void 0===a?r.noop:a;void 0!==n&&i({isOpen:n,inputValue:o||""})},t}return(0,o.ZT)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.inputProps,a=t.initialValue,l=t.initialHighlightedIndex,s=t.items,c=t.children,d=t.onSelect,u=t.listTestId;return i.createElement(_.ZP,{defaultHighlightedIndex:0,initialHighlightedIndex:l,initialInputValue:a,itemToString:this.itemToString,labelId:n&&n["aria-labelledby"]?n["aria-labelledby"]:null,onChange:d,onStateChange:this.handleStateChange,stateReducer:this.stateReducer},(function(t){var a=t.isOpen,l=t.getInputProps,d=t.getMenuProps,m=t.getItemProps,p=t.highlightedIndex;return i.createElement("div",null,i.createElement("input",(0,o.pi)({},l(),n)),a&&!!s.length&&i.createElement(Z,null,i.createElement(S,{getItemProps:m,highlightedIndex:(0,r.isNumber)(p)?p:-1,items:s.map((function(t){return e.toPopoverItem(t)})),menuProps:d(),testId:u}),c))}))},t.prototype.toPopoverItem=function(e){return(0,o.pi)((0,o.pi)({},e),{content:this.highlightItem(e)})},t.prototype.highlightItem=function(e){if(!e.highlightedSlices||!e.highlightedSlices.length)return e.label;var t=0,n=0;return e.highlightedSlices.reduce((function(o,a,r){var l=e.label,s=a.offset,c=a.length,d=s-t;return d&&(o.push(i.createElement(i.Fragment,{key:n},l.substr(t,d))),n+=1),t=s+c,o.push(i.createElement("strong",{key:n},l.substr(s,c))),n+=1,r===(e.highlightedSlices||[]).length-1&&(o.push(i.createElement(i.Fragment,{key:n},l.substr(t))),n+=1),o}),[])},t.prototype.itemToString=function(e){return e&&e.value||""},t}(i.PureComponent);var w=n(33327);const N=function(){function e(){this._scriptLoader=(0,w.getScriptLoader)()}return e.prototype.loadMapsSdk=function(e){var t=this;return this._googleAutoComplete||(this._googleAutoComplete=new Promise((function(n,o){var a="initAutoComplete",r=["language=en","key=".concat(e),"libraries=places","callback=".concat(a)].join("&");window[a]=function(){(function(e){var t=e;return Boolean(t.google&&t.google.maps&&t.google.maps.places)})(window)&&n(window.google.maps),o()},t._scriptLoader.loadScript("//maps.googleapis.com/maps/api/js?".concat(r)).catch((function(e){throw t._googleAutoComplete=void 0,e}))}))),this._googleAutoComplete},e}();var I;const A=function(){function e(e,t){void 0===t&&(I||(I=new N),t=I),this._apiKey=e,this._scriptLoader=t}return e.prototype.getAutocompleteService=function(){return this._autocompletePromise||(this._autocompletePromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(e){if(!e.places.AutocompleteService)throw new Error("`AutocompleteService` is undefined");return new e.places.AutocompleteService}))),this._autocompletePromise},e.prototype.getPlacesServices=function(){var e=document.createElement("div");return this._placesPromise||(this._placesPromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(t){if(!t.places.PlacesService)throw new Error("`PlacesService` is undefined");return new t.places.PlacesService(e)}))),this._placesPromise},e}();const x=function(e){function t(t){var n=e.call(this,t)||this;return n.onSelect=function(e){var t=n.props,o=t.fields,a=t.onSelect,i=void 0===a?r.noop:a,l=t.nextElement;n.googleAutocompleteService.getPlacesServices().then((function(t){t.getDetails({placeId:e.id,fields:o||["address_components","name"]},(function(t){l&&l.focus(),i(t,e)}))}))},n.onChange=function(e){var t=n.props,o=t.isAutocompleteEnabled,a=t.onChange;if((void 0===a?r.noop:a)(e,!1),!o)return n.resetAutocomplete();n.setAutocomplete(e),n.setItems(e)},n.googleAutocompleteService=new A(t.apiKey),n.state={items:[],autoComplete:"off"},n}return(0,o.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.initialValue,n=e.onToggleOpen,a=void 0===n?r.noop:n,l=e.inputProps,s=void 0===l?{}:l,c=this.state,d=c.autoComplete,u=c.items;return i.createElement(P,{initialHighlightedIndex:0,initialValue:t,inputProps:(0,o.pi)((0,o.pi)({},s),{autoComplete:d}),items:u,listTestId:"address-autocomplete-suggestions",onChange:this.onChange,onSelect:this.onSelect,onToggleOpen:a},i.createElement("div",{className:"co-googleAutocomplete-footer"}))},t.prototype.setItems=function(e){var t=this;if(e){var n=this.props,o=n.componentRestrictions,a=n.types;this.googleAutocompleteService.getAutocompleteService().then((function(n){n.getPlacePredictions({input:e,types:a||["geocode"],componentRestrictions:o},(function(e){return t.setState({items:t.toAutocompleteItems(e)})}))}))}else this.setState({items:[]})},t.prototype.resetAutocomplete=function(){this.setState({items:[],autoComplete:"off"})},t.prototype.setAutocomplete=function(e){this.setState((0,o.pi)((0,o.pi)({},this.state),{autoComplete:e&&e.length?"nope":"off"}))},t.prototype.toAutocompleteItems=function(e){return(e||[]).map((function(e){return{label:e.description,value:e.structured_formatting.main_text,highlightedSlices:e.matched_substrings,id:e.place_id}}))},t}(i.PureComponent);const F=(0,i.memo)((function(e){var t=e.field,n=t.default,o=t.name,a=e.countryCode,r=e.supportedCountries,s=e.parentFieldName,c=e.nextElement,d=e.apiKey,u=e.onSelect,m=e.onChange,p=e.onToggleOpen,v=s?"".concat(s,".").concat(o):o,g=(0,i.useMemo)((function(){return i.createElement(l.Z,{id:"address.address_line_1_label"})}),[]),C=function(e){return"".concat(h(e),"Label")}(o),y=(0,i.useMemo)((function(){return{className:"form-input optimizedCheckout-form-input",id:f(o),"aria-labelledby":C,placeholder:n}}),[o,C,n]),_=(0,i.useCallback)((function(e){var t=e.field;return i.createElement(x,{apiKey:d,componentRestrictions:a?{country:a}:void 0,initialValue:t.value,inputProps:y,isAutocompleteEnabled:!!a&&r.indexOf(a)>-1,nextElement:c,onChange:m,onSelect:u,onToggleOpen:p})}),[d,a,y,c,m,u,p,r]);return i.createElement("div",{className:"dynamic-form-field dynamic-form-field--addressLineAutocomplete"},i.createElement(E.Z,{input:_,label:i.createElement(b.Z,{htmlFor:y.id,id:C},g),name:v}))}));var O={address1:"address.address_line_1_label",address2:"address.address_line_2_label",city:"address.city_label",company:"address.company_name_label",countryCode:"address.country_label",firstName:"address.first_name_label",lastName:"address.last_name_label",phone:"address.phone_number_label",postalCode:"address.postal_code_label",stateOrProvince:"address.state_label",stateOrProvinceCode:"address.state_label"},T={address1:"address-line1",address2:"address-line2",city:"address-level2",company:"organization",countryCode:"country",firstName:"given-name",lastName:"family-name",phone:"tel",postalCode:"postal-code",stateOrProvince:"address-level1",stateOrProvinceCode:"address-level1"},V={countryCode:"address.select_country_action",stateOrProvince:"address.select_state_action",stateOrProvinceCode:"address.select_state_action"},L="address1",D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.containerRef=(0,i.createRef)(),t.handleDynamicFormFieldChange=(0,a.memoize)((function(e){return function(n){t.syncNonFormikValue(e,n)}})),t.handleAutocompleteChange=function(e,n){n||t.syncNonFormikValue(L,e)},t.handleAutocompleteSelect=function(e,n){var o=n.value,a=t.props,i=a.countries,l=a.setFieldValue,s=void 0===l?r.noop:l,c=a.onChange,d=void 0===c?r.noop:c,u=y(e,i);(0,r.forIn)(u,(function(e,t){s(t,e),d(t,e)})),o&&t.syncNonFormikValue(L,o)},t.syncNonFormikValue=function(e,n){var o=t.props,a=o.formFields,i=o.setFieldValue,l=void 0===i?r.noop:i,s=o.onChange,d=void 0===s?r.noop:s,u=a.filter((function(e){return e.custom&&e.fieldType===c.Z.date})).map((function(e){return e.name}));(e===L||u.indexOf(e)>-1)&&l(e,n),d(e,n)},t}return(0,o.ZT)(t,e),t.prototype.componentDidMount=function(){var e=this.containerRef.current;e&&(this.nextElement=e.querySelector('[autocomplete="address-line2"]'))},t.prototype.render=function(){var e=this,t=this.props,n=t.formFields,o=t.fieldName,a=t.countriesWithAutocomplete,r=t.countryCode,s=t.googleMapsApiKey,c=t.onAutocompleteToggle,p=t.shouldShowSaveAddress;return i.createElement(i.Fragment,null,i.createElement(d.Z,null,i.createElement("div",{className:"checkout-address",ref:this.containerRef},n.map((function(t){var n=t.name,d=V[n];return"address1"===n&&s&&a?i.createElement(F,{apiKey:s,countryCode:r,field:t,key:t.id,nextElement:e.nextElement||void 0,onChange:e.handleAutocompleteChange,onSelect:e.handleAutocompleteSelect,onToggleOpen:c,parentFieldName:o,supportedCountries:a}):i.createElement(u.Z,{autocomplete:T[t.name],extraClass:"dynamic-form-field--".concat(h(n)),field:t,inputId:f(n),key:"".concat(t.id,"-").concat(t.name),label:t.custom?t.label:i.createElement(l.Z,{id:O[t.name]}),onChange:e.handleDynamicFormFieldChange(n),parentFieldName:t.custom?o?"".concat(o,".customFields"):"customFields":o,placeholder:e.getPlaceholderValue(t,d)})})))),p&&i.createElement(m.Z,{labelContent:i.createElement(l.Z,{id:"address.save_in_addressbook"}),name:o?"".concat(o,".shouldSaveAddress"):"shouldSaveAddress"}))},t.prototype.getPlaceholderValue=function(e,t){var n=this.props.language;return e.default&&"dropdown"!==e.fieldType?e.default:t&&n.translate(t)},t}(i.Component);const M=(0,s.Z)(D)},24648:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(86940),a=n(67627),r=n(67106),i=n(70140),l=n(24994),s=n(88870),c=n(43276),d=n(36636);const u=(0,c.Z)((function(e){var t=e.selectedAddress,n=e.language,o=(0,a.useState)(!1),l=o[0],s=o[1];return a.createElement("a",{"aria-controls":"addressDropdown","aria-description":n.translate("address.enter_or_select_address_action"),"aria-expanded":l,className:"button dropdown-button dropdown-toggle--select",href:"#",id:"addressToggle",onClick:(0,r.Z)((function(){return s(!l)}))},t?a.createElement(d.Z,{address:t}):a.createElement(i.Z,{id:"address.enter_address_action"}))}));var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSelectAddress=function(e){var n=t.props,o=n.onSelectAddress,a=n.selectedAddress;(0,s.Z)(a,e)||o(e)},t.handleUseNewAddress=function(){var e=t.props,n=e.selectedAddress;(0,e.onUseNewAddress)(n)},t}return(0,o.ZT)(t,e),t.prototype.render=function(){var e=this.props,t=e.addresses,n=e.selectedAddress;return a.createElement("div",{className:"form-field"},a.createElement("div",{className:"dropdown--select"},a.createElement(l.Z,{dropdown:a.createElement(p,{addresses:t,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:n})},a.createElement(u,{addresses:t,selectedAddress:n}))))},t}(a.PureComponent),p=function(e){var t=e.addresses,n=e.onSelectAddress,o=e.onUseNewAddress,l=e.selectedAddress;return a.createElement("ul",{className:"dropdown-menu instrumentSelect-dropdownMenu",id:"addressDropdown"},a.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select"},a.createElement("a",{"data-test":"add-new-address",href:"#",onClick:(0,r.Z)((function(){return o(l)}))},a.createElement(i.Z,{id:"address.enter_address_action"}))),t.map((function(e){return a.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select",key:e.id},a.createElement("a",{href:"#",onClick:(0,r.Z)((function(){return n(e)}))},a.createElement(d.Z,{address:e})))})))};const h=(0,a.memo)(m)},88870:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(86940),a=n(91074);function r(e,t){return!(!e||!t)&&((0,a.isEqual)(i(e),i(t))&&function(e,t){if(e.stateOrProvince&&e.stateOrProvince===t.stateOrProvince)return!0;if(e.stateOrProvinceCode&&e.stateOrProvinceCode===t.stateOrProvinceCode)return!0;return e.stateOrProvince===t.stateOrProvince&&e.stateOrProvinceCode===t.stateOrProvinceCode}(e,t))}function i(e){return(0,a.omit)((0,o.pi)((0,o.pi)({},e),{customFields:(e.customFields||[]).filter((function(e){return!!e.fieldValue}))}),["id","shouldSaveAddress","stateOrProvince","stateOrProvinceCode","type","email","country"])}},97204:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(91074),a=n(88870),r=n(33497);function i(e,t,n){return!(!e||!(0,r.Z)(e,n))&&(0,o.some)(t,(function(t){return(0,a.Z)(t,e)}))}},95593:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(86940),a=n(19945);function r(e){var t=e.customFields,n=(0,o._T)(e,["customFields"]),r=e.shouldSaveAddress;return(0,o.pi)((0,o.pi)({},n),{shouldSaveAddress:r,customFields:(0,a.Z)(t)})}},19945:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(91074);function a(e){var t=[];return(0,o.forIn)(e,(function(e,n){var a;if((0,o.isDate)(e)){var r=(0,o.padStart)((e.getMonth()+1).toString(),2,"0"),i=(0,o.padStart)(e.getDate().toString(),2,"0");a="".concat(e.getFullYear(),"-").concat(r,"-").concat(i)}else a=e;t.push({fieldId:n,fieldValue:a})})),t}},67570:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(86940),a=n(67627),r=n(70140),i=n(64553),l=n(7936),s=n(98119),c=n(78379),d=n(92963);const u=function(){var e=(0,a.useCallback)((function(e){return a.createElement(i.Z,{hidden:!0,htmlFor:e},a.createElement(r.Z,{id:"shipping.order_comment_label"}))}),[]),t=(0,a.useCallback)((function(e){var t=e.field;return a.createElement(l.Z,(0,o.pi)({},t,{autoComplete:"off",maxLength:2e3}))}),[]),n=(0,a.useMemo)((function(){return a.createElement(s.Z,null,a.createElement(r.Z,{id:"shipping.order_comment_label"}))}),[]);return a.createElement(c.Z,{legend:n,testId:"checkout-shipping-comments"},a.createElement(d.Z,{input:t,label:e,name:"orderComment"}))}},41957:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(10631),a=n(56851);function r(e){return(e&&e.payments?e.payments:[]).find((function(e){return!(0,o.Z)(e)&&!(0,a.Z)(e)&&!!e.providerId}))}},74161:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(92304);function a(e){return(0,o.Z)(e.lineItems.physicalItems.filter((function(e){return!e.addedByPromotion})))}},24994:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(86940),a=n(67627),r=n(80850);const i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={shouldShow:!1},t.handleClick=function(e){t.state.shouldShow?t.handleClose(e.nativeEvent):t.handleOpen(e.nativeEvent)},t.handleOpen=function(){t.state.shouldShow||t.setState({shouldShow:!0},(function(){document.addEventListener("click",t.handleClose)}))},t.handleClose=function(){t.state.shouldShow&&t.setState({shouldShow:!1},(function(){document.removeEventListener("click",t.handleClose)}))},t}return(0,o.ZT)(t,e),t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleClose)},t.prototype.render=function(){var e=this,t=this.props,n=t.children,i=t.placement,l=t.dropdown,s=this.state.shouldShow;return a.createElement(r.Manager,null,a.createElement(r.Reference,null,(function(t){var o=t.ref;return a.createElement("div",{className:"dropdownTrigger",onClick:e.handleClick,ref:o},n)})),a.createElement(r.Popper,{modifiers:{hide:{enabled:!1},flip:{enabled:!1},preventOverflow:{enabled:!1}},placement:i},(function(e){var t=e.ref,n=e.style;return s?a.createElement("div",{className:"dropdownMenu",ref:t,style:(0,o.pi)((0,o.pi)({},n),{width:"100%",zIndex:1})},l):null})))},t.defaultProps={placement:"bottom-start"},t}(a.Component)},59826:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(86940),a=n(91074),r=n(67627),i=n(45793),l=n(25079),s=n(3354);const c=(0,r.memo)((function(e){var t=e.additionalClassName,n=e.disabled,c=void 0!==n&&n,d=e.labelContent,u=e.onChange,m=e.name,p=e.id,h=(0,r.useCallback)((function(e){var t=e.field;return r.createElement(r.Fragment,null,r.createElement(l.Z,(0,o.pi)({},t,{checked:!!t.value,disabled:c,id:p||t.name,label:d})),r.createElement(s.Z,{errorId:"".concat(null!=p?p:m,"-field-error-message"),name:m,testId:"".concat((0,a.kebabCase)(m),"-field-error-message")}))}),[c,p,d,m]);return r.createElement(i.Z,{additionalClassName:t,name:m,onChange:u,render:h})}))},25079:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(86940),a=n(696),r=n.n(a),i=n(67627),l=n(50004),s=n(64553);const c=(0,i.forwardRef)((function(e,t){var n=e.additionalClassName,a=e.label,c=e.id,d=(0,o._T)(e,["additionalClassName","label","id"]);return i.createElement(i.Fragment,null,i.createElement(l.Z,(0,o.pi)({},d,{className:r()("form-checkbox","optimizedCheckout-form-checkbox",n),id:c,ref:t,type:"checkbox"})),i.createElement(s.Z,{htmlFor:c},a))}))},70764:(e,t,n)=>{n.d(t,{Z:()=>I});var o=n(86940),a=n(91074),r=n(67627),i=n(70140),l=n(76417),s=n(47086),c=n(18037),d=n.n(c),u=n(71735),m=n(11547);const p=(0,u.Z)(m.Z,{displayNamePrefix:"withDate",pickProps:function(e,t){return"date"===t&&!!e}});var h=n(25079),f=n(696),v=n.n(f),g=n(50004),C=n(64553);const y=(0,r.forwardRef)((function(e,t){var n=e.additionalClassName,a=e.label,i=e.value,l=e.checked,s=e.id,c=(0,o._T)(e,["additionalClassName","label","value","checked","id"]);return r.createElement(r.Fragment,null,r.createElement(g.Z,(0,o.pi)({},c,{checked:l,className:v()("form-radio","optimizedCheckout-form-radio",n),id:s,ref:t,type:"radio",value:i})),r.createElement(C.Z,{htmlFor:s},a))}));var E=n(10817),b=n(7936);const _=(0,r.memo)(p((function(e){e.additionalClassName;var t=e.date,n=e.fieldType,i=e.id,l=e.name,c=e.onChange,u=void 0===c?a.noop:c,m=e.options,p=e.placeholder,f=e.value,v=(0,o._T)(e,["additionalClassName","date","fieldType","id","name","onChange","options","placeholder","value"]),g=t.inputFormat,C=(0,r.useCallback)((function(e,t){return u((0,o.pi)((0,o.pi)({},t),{target:{name:l,value:e}}))}),[u,l]);switch(n){case s.Z.dropdown:return r.createElement("select",(0,o.pi)({},v,{className:"form-select optimizedCheckout-form-select","data-test":"".concat(i,"-select"),id:i,name:l,onChange:u,value:null===f?"":f}),p&&r.createElement("option",{value:""},p),m&&m.map((function(e){var t=e.label,n=e.value;return r.createElement("option",{key:n,value:n},t)})));case s.Z.radio:return m&&m.length?r.createElement(r.Fragment,null,m.map((function(e){var t=e.label,n=e.value;return r.createElement(y,(0,o.pi)({},v,{checked:n===f,id:"".concat(i,"-").concat(n),key:n,label:t,name:l,onChange:u,testId:"".concat(i,"-").concat(n,"-radio"),value:n}))}))):null;case s.Z.checkbox:return m&&m.length?r.createElement(r.Fragment,null,m.map((function(e){var t=e.label,n=e.value;return r.createElement(h.Z,(0,o.pi)({},v,{checked:!!Array.isArray(f)&&f.includes(n),id:"".concat(i,"-").concat(n),key:n,label:t,name:l,onChange:u,testId:"".concat(i,"-").concat(n,"-checkbox"),value:n}))}))):null;case s.Z.date:return r.createElement(d(),(0,o.pi)({},v,{autoComplete:"off",calendarClassName:"optimizedCheckout-contentPrimary",className:"form-input optimizedCheckout-form-input",dateFormat:g,maxDate:v.max?new Date("".concat(v.max,"T00:00:00Z")):void 0,minDate:v.min?new Date("".concat(v.min,"T00:00:00Z")):void 0,name:l,onChange:C,placeholderText:g.toUpperCase(),popperClassName:"optimizedCheckout-contentPrimary",selected:(0,a.isDate)(f)?f:void 0}));case s.Z.multiline:return r.createElement(E.Z,(0,o.pi)({},v,{id:i,name:l,onChange:u,testId:"".concat(i,"-text"),type:n,value:f}));default:return r.createElement(b.Z,(0,o.pi)({},v,{id:i,name:l,onChange:u,placeholder:p,testId:"".concat(i,"-").concat(n===s.Z.password?"password":"text"),type:n,value:f}))}})));var Z=n(36662),k=n(3354);const S=(0,r.memo)((function(e){var t=e.testId,n=e.onSelectedAll,o=e.onSelectedNone,a=(0,r.useCallback)((function(e){e.preventDefault(),n()}),[n]),l=(0,r.useCallback)((function(e){e.preventDefault(),o()}),[o]);return r.createElement("ul",{className:"multiCheckbox--controls"},r.createElement("li",{className:"multiCheckbox--control"},r.createElement(i.Z,{id:"address.select"})),r.createElement("li",{className:"multiCheckbox--control"},r.createElement("a",{"data-test":"".concat(t,"Checkbox-all-button"),href:"#",onClick:a},r.createElement(i.Z,{id:"address.select_all"}))),r.createElement("li",{className:"multiCheckbox--control"},r.createElement("a",{"data-test":"".concat(t,"Checkbox-none-button"),href:"#",onClick:l},r.createElement(i.Z,{id:"address.select_none"}))))}));var P=function(e){var t=e.form,n=t.values,o=t.errors,i=e.id,c=e.label,d=e.name,u=e.onChange,m=void 0===u?a.noop:u,p=e.options,h=e.push,f=e.remove,v=(0,r.useCallback)((function(){var e=(0,l.getIn)(n,d)||[];(0,a.difference)(p.map((function(e){return e.value})),e).forEach((function(e){return h(e)})),m((0,l.getIn)(n,d))}),[d,m,p,h,n]),g=(0,r.useCallback)((function(){((0,l.getIn)(n,d)||[]).forEach((function(){return f(0)})),m((0,l.getIn)(n,d))}),[d,m,f,n]),C=(0,r.useCallback)((function(e){var t=(0,l.getIn)(n,d)||[],o=e.target,a=o.value;o.checked?h(a):f(t.indexOf(a)),m((0,l.getIn)(n,d))}),[d,m,h,f,n]);return r.createElement(Z.Z,{hasError:(0,l.getIn)(o,d)&&(0,l.getIn)(o,d).length},c,p.length>1&&r.createElement(S,{onSelectedAll:v,onSelectedNone:g,testId:i}),r.createElement(_,{fieldType:s.Z.checkbox,id:i,name:d,onChange:C,options:p,value:(0,l.getIn)(n,d)||[]}),r.createElement(k.Z,{errorId:"".concat(null!=i?i:d,"-field-error-message"),name:d,testId:"".concat((0,a.kebabCase)(d),"-field-error-message")}))};const w=(0,r.memo)((function(e){var t=e.id,n=e.label,i=e.name,s=e.onChange,c=e.options,d=(0,r.useCallback)((function(e){return r.createElement(P,(0,o.pi)({id:t,label:n,name:i,onChange:s,options:c},(0,a.pick)(e,["form","pop","push","remove"])))}),[t,n,i,s,c]);return r.createElement(l.FieldArray,{name:i,render:d})}));var N=n(92963);const I=(0,r.memo)((function(e){var t=e.field,n=t.fieldType,l=t.type,c=t.secret,d=t.name,u=t.label,m=t.required,p=t.options,h=t.max,f=t.min,v=t.maxLength,g=e.parentFieldName,y=e.onChange,E=e.placeholder,b=e.inputId,Z=e.autocomplete,k=e.label,S=e.extraClass,P=b||d,I=g?"".concat(g,".").concat(d):d,A=(0,r.useMemo)((function(){return r.createElement(C.Z,{htmlFor:P,id:"".concat(P,"-label")},k||u,!m&&r.createElement(r.Fragment,null," ",r.createElement("small",{className:"optimizedCheckout-contentSecondary"},r.createElement(i.Z,{id:"common.optional_text"}))))}),[P,u,m,k]),x=(0,r.useMemo)((function(){return"text"===n?"integer"===l?s.Z.number:(0,a.includes)(d,"phone")||(0,a.includes)(d,"tel")?s.Z.telephone:c?s.Z.password:s.Z.text:n}),[n,l,c]),F=(0,r.useCallback)((function(e){var t=e.field;return r.createElement(_,(0,o.pi)({},t,{"aria-labelledby":"".concat(P,"-label ").concat(P,"-field-error-message"),autoComplete:Z,fieldType:x,id:P,max:h,maxLength:v||void 0,min:f,options:p&&p.items,placeholder:E||p&&p.helperLabel,rows:p&&p.rows}))}),[P,h,v,f,p,E,x,Z]);return r.createElement("div",{className:"dynamic-form-field ".concat(S)},n===s.Z.checkbox?r.createElement(w,{id:P,label:A,name:I,onChange:y,options:p&&p.items||[]}):r.createElement(N.Z,{id:P,input:F,label:A,name:I,onChange:y}))}))},10817:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(86940),a=n(696),r=n.n(a),i=n(67627);const l=(0,i.forwardRef)((function(e,t){var n=e.additionalClassName,a=e.testId,l=e.className,s=(0,o._T)(e,["additionalClassName","testId","className"]);return i.createElement("textarea",(0,o.pi)({},s,{className:l||r()("form-input","optimizedCheckout-form-input",n),"data-test":a,ref:t}))}))}}]);
//# sourceMappingURL=372-95538e60.js.map