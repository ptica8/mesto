(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",errorBorder:"popup__border-error"},t=document.querySelector(".popup_type_profile"),n=document.querySelector(".popup_type_card"),r=document.querySelector(".profile__edit"),o=document.querySelector(".profile__button"),i=t.querySelector(".popup__form_profile"),u=n.querySelector(".popup__form_card"),l=document.querySelector(".popup__input_type_name"),s=document.querySelector(".popup__input_type_job");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".list__element").cloneNode(!0)}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("list__element-button_type_active")}},{key:"_handleDeleteButton",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._listElementImg.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeButton=this._element.querySelector(".list__element-button_type_like"),this._likeButton.addEventListener("click",(function(){e._handleLikeButton()})),this._deleteButton=this._element.querySelector(".list__element-button_type_delete"),this._deleteButton.addEventListener("click",(function(){e._handleDeleteButton()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._listElementImg=this._element.querySelector(".list__element-img"),this._listElementImg.src=this._link,this._listElementImg.alt=this._name,this._element.querySelector(".list__element-title").textContent=this._name,this._setEventListeners(),this._element}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOutsideClick",value:function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close"))&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){e._handleOutsideClick(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImagePicture=t._popupElement.querySelector(".popup__img"),t._popupImageSubtitle=t._popupElement.querySelector(".popup__subtitle"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImagePicture.src=t,this._popupImagePicture.alt=e,this._popupImageSubtitle.textContent=e,y(b(u.prototype),"open",this).call(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popupElement.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){j(P(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;j(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._job=t.job,this._nameElement=document.querySelector(this._name),this._jobElement=document.querySelector(this._job)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileValues={},this._profileValues.name=this._nameElement.textContent,this._profileValues.job=this._jobElement.textContent,this._profileValues}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._jobElement.textContent=e.job}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorBorder=t.errorBorder,this._formSelector=t.formSelector,this._form=n}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._field.querySelectorAll(this._inputSelector)),this._buttonElement=this._field.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){var n=this._field.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._errorBorder)}},{key:"_hideInputError",value:function(e){var t=this._field.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),e.classList.remove(this._errorBorder),t.textContent=""}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._field=this._form.querySelector(".popup__form-set"),this._setEventListeners()}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return new c(e,".list-template",A).generateCard()}function A(e,t){F.open(e,t)}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){fetch(this._url,{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"getAllCards",value:function(){}},{key:"editProfileInfo",value:function(){}},{key:"addNewCard",value:function(){}},{key:"deleteCard",value:function(){}},{key:"editAvatar",value:function(){}},{key:"putLikeOnCard",value:function(){}},{key:"deleteLike",value:function(){}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://nomoreparties.co/v1/cohort-41/users/me",headers:{Authorization:"64093150-cd2b-4857-920b-cb790fed6f1f"}}).getUserInfo();var D=new q({name:".profile__name",job:".profile__subtitle"}),U=new I(".popup_type_profile",(function(e){D.setUserInfo(e)}));U.setEventListeners();var z=new I(".popup_type_card",(function(e){var t=T(e);N.addItem(t)}));z.setEventListeners();var F=new k(".popup_type_image");F.setEventListeners();var N=new E({items:[{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"}],renderer:function(e){var t=T(e);N.addItem(t)}},".list");N.renderItems();var G=new R(e,i);G.enableValidation();var M=new R(e,u);M.enableValidation(),r.addEventListener("click",(function(){G.resetValidation();var e=D.getUserInfo();l.value=e.name,s.value=e.job,U.open()})),o.addEventListener("click",(function(){M.resetValidation(),z.open()}))})();