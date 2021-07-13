(()=>{"use strict";document.querySelector(".popup");var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__info-name"),n=document.querySelector(".popup__form"),r=document.querySelector(".profile__info-text"),o=document.querySelector(".popup__input_type_name"),i=document.querySelector(".popup__input_type_job"),a=(document.querySelector(".elements"),document.querySelector(".profile__add-button")),u=(document.querySelector(".popup-place"),document.querySelector(".popup-place__form"),document.querySelector(".avatar")),c=(document.querySelector(".popup-avatar"),document.querySelector(".profile__image")),l={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".popup__save",inputErrorClass:".form__input_type_error",inputErrorMessage:".form__input-error"},s="popup_open",f=(document.querySelector(".popup_open"),"popup__body");function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o){var i=t.name,a=t.link,u=t.owner,c=t._id,l=t.likes,s=n.handleCardClick,f=n.handleCardDislike,p=n.handleCardLike,h=n.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=i,this._link=a,this._image=".element__image",this._likeButton=".element__like",this._deleteButton=".element__delete",this._text=".element__text",this._likes=l,this._owner=u._id,this._id=c,this._userId=o,this._cardSelector=r,this._handleCardClick=s,this._handleCardDislike=f,this._handleCardLike=p,this._handleCardDelete=h,this._element=this._getTemplate(),this._cardElement=this._element.querySelector(this._image),this._cardLikeElement=this._element.querySelector(this._likeButton)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._cardLikeElement.addEventListener("click",(function(){e._element.querySelector(e._likeButton).classList.contains("element__like_type_active")?e._dislikeCard():e._likeCard()})),this._element.querySelector(this._deleteButton).addEventListener("click",(function(){return e._deleteCard()}))}},{key:"generateCard",value:function(){var e=this;return this._setEventListeners(),this.updateLikeCount(),this._element.querySelector(this._image).src=this._link,this._element.querySelector(this._image).alt=this._name,this._element.querySelector(this._text).textContent=this._name,this._userId===this._owner&&this._element.querySelector(this._deleteButton).classList.add("element__delete_active"),this._likes.forEach((function(t){t._id!==e._userId||e._element.querySelector(e._likeButton).classList.toggle("element__like_type_active")})),this._element}},{key:"updateLikeCount",value:function(){this._element.querySelector(".element__number").textContent=this._likes.length}},{key:"_likeCard",value:function(){var e=this;this._handleCardLike(this._id).then((function(){e._element.querySelector(e._likeButton).classList.toggle("element__like_type_active")}))}},{key:"_dislikeCard",value:function(){var e=this;this._handleCardDislike(this._id).then((function(){e._element.querySelector(e._likeButton).classList.toggle("element__like_type_active")}))}},{key:"_deleteCard",value:function(){this._handleCardDelete(this._id,this._element)}},{key:"_openCard",value:function(e,t){var n=document.querySelector(".popup-image__picture");n.src=e,n.alt=t,n.textContent=t}}])&&p(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_setEventListeners",(function(){r._form.addEventListener("submit",r._handleSubmitForm),r._form.addEventListener("input",r._eventHandler)})),_(this,"_eventHandler",(function(e){var t=e.target;r._setCustomError(t),r._setFieldError(t),r._setSubmitButtonState(t.closest(l.formSelector))})),_(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?r._button.removeAttribute("disabled",!1):r._button.setAttribute("disabled",!0)})),_(this,"_handleSubmitForm",(function(e){e.preventDefault(),r._form.checkValidity()})),_(this,"_setCustomError",(function(e){var t=e.validity;if(e.setCustomValidity(""),t.valueMissing)e.setCustomValidity("Вы пропустили это поле.");else if(t.tooShort||t.tooLong){var n=e.value.length,r=e.getAttribute("minlength"),o=e.getAttribute("maxlength");e.setCustomValidity("Строка слишком короткая. Введено ".concat(n," символов, а должно быть от ").concat(r," до ").concat(o))}else t.typeMismatch&&"url"===e.type&&e.setCustomValidity("Здесь должна быть ссылка")})),_(this,"_setFieldError",(function(e){e.nextElementSibling.textContent=e.validationMessage})),_(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._validationConfig=t,this._form=n,this._button=this._form.querySelector(t.submitButtonSelector),this._inputSelector=this._form.querySelector(t.inputSelector),this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._errorList=Array.from(this._form.querySelectorAll(t.inputErrorMessage))}var t,n;return t=e,(n=[{key:"removeInputError",value:function(){this._inputList.forEach((function(e){e.textContent=""})),this._button.setAttribute("disabled",!0)}},{key:"removeInputErrorProfile",value:function(){this._inputList.forEach((function(e){e.nextElementSibling.textContent=""})),this._button.removeAttribute("disabled",!0)}}])&&d(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderer",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){this._container[t](e)}}])&&m(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add(s),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove(s),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(this.popup)}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("click",(function(t){t.target.classList.contains(f)&&e.close(),t.target.classList.contains("close-popup")&&e.close()}))}}])&&b(t.prototype,n),e}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t.popup.querySelector(".popup-image__picture"),t._caption=t.popup.querySelector(".popup-image__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._caption.textContent=t,E(L(a.prototype),"open",this).call(this)}}])&&S(t.prototype,n),a}(k);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._job=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent,id:this._id,avatar:this._avatar}}},{key:"setUserInfo",value:function(e,t,n){e&&(this._name.textContent=e),t&&(this._job.textContent=t),n&&(this._id=n)}},{key:"setAvatar",value:function(e){e&&(this._avatar.src=e)}},{key:"getId",value:function(){return this._id}}])&&j(t.prototype,n),e}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n.popup.querySelector(l.formSelector),n._handleSubmit=r,n}return t=a,(n=[{key:"renderLoading",value:function(){var e=this,t=this.popup.querySelector(".popup__save").textContent;this.popup.querySelector(".popup__save").textContent="Сохранение...",setTimeout((function(){e.popup.querySelector(".popup__save").textContent=t}),1500)}},{key:"_getInputValues",value:function(){var e=this;return this._valueArray={},this._inputArray=this._form.querySelectorAll(".popup__input"),this._inputArray.forEach((function(t){return e._valueArray[t.name]=t.value})),console.log(this._valueArray),this._valueArray}},{key:"setEventListeners",value:function(){var e=this;I(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){I(T(a.prototype),"close",this).call(this),this._form.reset()}}])&&A(t.prototype,n),a}(k);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=r,n}return t=a,(n=[{key:"open",value:function(e,t){U(H(a.prototype),"open",this).call(this),this._cardId=e,this.cardElement=t}},{key:"setEventListeners",value:function(){var e=this;U(H(a.prototype),"setEventListeners",this).call(this),this.popup.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit(e._cardId)}))}}])&&V(t.prototype,n),a}(k);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._url=t.url}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._check)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._check)}},{key:"editUserData",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._check)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._check)}},{key:"cardDelete",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._check)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._check)}},{key:"updateAvatar",value:function(e){return console.log({link:e}),fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._check)}},{key:"_check",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&J(t.prototype,n),e}();function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new y(l,document.querySelector(".popup-place__form")),K=new y(l,n),Q=new y(l,document.querySelector(".popup-avatar__form")),W=new z({url:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"1174dadd-027e-4ffe-b733-ac48b2285022","Content-Type":"application/json"}});G.enableValidation(),K.enableValidation(),Q.enableValidation();var X=new O(".popup-image"),Y=new v({renderer:function(e){var t=oe(e);Y.addItem(t,"append")}},".elements"),Z=new q(t,r,u),ee=new D(".popup_profile",{handleSubmit:function(e){W.editUserData(e.name,e.job).then((function(e){Z.setUserInfo(e.name,e.about),ee.close()})).catch((function(e){console.log(e)}))}}),te=new D(".popup-place",{handleSubmit:function(e){W.addCard(e.place,e.image).then((function(e){var t=oe(e);Y.addItem(t,"prepend"),te.close()})).catch((function(e){console.log(e)}))}}),ne=new N(".popup-delete",{handleSubmit:function(e){console.log("----------"),W.cardDelete(e).then((function(e){ne.cardElement.remove(),ne.close()})).catch((function(e){console.log(e)}))}}),re=new D(".popup-avatar",{handleSubmit:function(e){var t=e.avatar;W.updateAvatar(t).then((function(e){var t=e.avatar;Z.setAvatar(t),re.close()})).catch((function(e){console.log(e)}))}});function oe(e){var t=Z.getId(),n=new h(e,{handleCardClick:function(e,t){X.open({name:e,link:t})},handleCardDelete:function(e,t){ne.open(e,t)},handleCardLike:function(e){return W.setLike(e).then((function(e){var t=e.likes;n._likes=t,n.updateLikeCount()})).catch((function(e){console.log(e)}))},handleCardDislike:function(e){return W.removeLike(e).then((function(e){var t=e.likes;n._likes=t,n.updateLikeCount()})).catch((function(e){console.log(e)}))}},".elements-container",t);return n.generateCard()}Promise.all([W.getUserInfo(),W.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o.name,o.about,o._id),Z.setAvatar(o.avatar),Y.renderer(i)})).catch((function(e){console.log(e)})),e.addEventListener("click",(function(){var e=Z.getUserInfo();o.value=e.name,i.value=e.job,K.removeInputErrorProfile(),ee.open()})),a.addEventListener("click",(function(){G.removeInputError(),te.open()})),X.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),c.addEventListener("click",(function(){Q.removeInputError(),re.open()})),ne.setEventListeners(),re.setEventListeners()})();