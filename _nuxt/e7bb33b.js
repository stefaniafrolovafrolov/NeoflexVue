(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{273:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("5eb42f17",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";r(273)},276:function(t,e,r){var n=r(81)((function(i){return i[1]}));n.push([t.i,'.basket[data-v-a0dafa30]{font-family:"Montserrat","Arial",sans-serif}.basket__card[data-v-a0dafa30]{background:#fff;border-radius:30px;box-shadow:0 0 20px rgba(0,0,0,.1);display:flex;height:218px;margin-bottom:25px;position:relative;width:633px}.basket__button-trash[data-v-a0dafa30]{background:transparent;background-image:url(https://stefaniafrolovafrolov.github.io/NeoflexVue/Trash.svg);border:none;cursor:pointer;height:17px;-o-object-fit:cover;object-fit:cover;padding:0;position:absolute;right:28px;top:18px;width:21px}.basket__sum-bottom[data-v-a0dafa30]{bottom:21px;color:#1c1c27;font-size:15px;font-weight:600;line-height:18px;margin:0;position:absolute;right:28px;text-align:right}.basket__img[data-v-a0dafa30]{height:136px;margin:18px 24px 0 19px;width:147px}.basket__block-count[data-v-a0dafa30]{align-items:center;display:flex;height:30px;justify-content:space-between;margin:17px 0 17px 17px;width:126px}.basket__button-minus[data-v-a0dafa30]{cursor:pointer;height:30px;width:35px}.basket__count[data-v-a0dafa30]{color:#000;font-size:17px;font-weight:600;line-height:21px;margin:0}.basket__button-plus[data-v-a0dafa30]{cursor:pointer;height:30px;width:35px}.basket__name[data-v-a0dafa30]{color:#1c1c27;font-size:17px;font-weight:500;line-height:21px;margin:76px 0 12px}.basket__sum[data-v-a0dafa30]{color:#aaa;font-size:15px;font-weight:600;line-height:18px;margin:0}',""]),n.locals={},t.exports=n},277:function(t,e,r){"use strict";r(40),r(32),r(39),r(17),r(60),r(33),r(61);var n=r(27),o=(r(278),r(45));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={mounted:function(){!this.g_cards.length&&localStorage.getItem("myArray")&&this.m_cards(JSON.parse(localStorage.getItem("myArray")))},computed:d(d({},Object(o.b)({g_cards:"main/g_cards"})),{},{cloneArray:function(){return JSON.parse(JSON.stringify(this.g_cards))}}),methods:d(d({},Object(o.c)({m_cards:"main/m_cards"})),{},{findCardIndex:function(t){return this.g_cards.findIndex((function(e){return e.id===t.id}))}})}},278:function(t,e,r){"use strict";var n=r(2),o=r(83).findIndex,c=r(132),d="findIndex",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},281:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("4af58bed",content,!0,{sourceMap:!1})},283:function(t,e,r){"use strict";r.r(e);var n={name:"basket-card",props:{card:{type:Object,required:!0}}},o=(r(275),r(24)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"basket__card"},[e("button",{staticClass:"basket__button-trash",on:{click:function(e){return t.$emit("removeCard",t.card)}}}),t._v(" "),e("p",{staticClass:"basket__sum-bottom"},[t._v(t._s(t.card.priceSale?t.card.priceSale:t.card.price)+" ₽")]),t._v(" "),e("div",{staticClass:"basket__wrapper-block"},[e("img",{staticClass:"basket__img",attrs:{src:t.card.img,alt:"изображение наушников"}}),t._v(" "),e("div",{staticClass:"basket__block-count"},[e("img",{staticClass:"basket__button-minus",attrs:{src:"-.svg",alt:"круглая кнопочка с минусом убавления"},on:{click:function(e){return t.$emit("decreaseQuantity",t.card)}}}),t._v(" "),e("p",{staticClass:"basket__count"},[t._v(t._s(t.card.count))]),t._v(" "),e("img",{staticClass:"basket__button-plus",attrs:{src:"+.svg",alt:"круглая кнопочка с плюсом добавления"},on:{click:function(e){return t.$emit("addQuantity",t.card)}}})])]),t._v(" "),e("div",{staticClass:"basket__wrapper"},[e("p",{staticClass:"basket__name"},[t._v(t._s(t.card.title))]),t._v(" "),e("p",{staticClass:"basket__sum"},[t._v(t._s(t.card.priceSale?t.card.priceSale:t.card.price)+" ₽")])])])}),[],!1,null,"a0dafa30",null);e.default=component.exports},285:function(t,e,r){"use strict";r(281)},286:function(t,e,r){var n=r(81)((function(i){return i[1]}));n.push([t.i,'.root-wrapper[data-v-2a6a0af0]{background:#e5e5e5}.wrapper-basket[data-v-2a6a0af0]{background:#eaeaea;margin:0 auto;max-width:1440px}.root[data-v-2a6a0af0]{align-items:center;background:#e5e5e5;display:flex;justify-content:center}.basket[data-v-2a6a0af0]{background:#eaeaea;margin:0 auto;width:1120px}.basket__title[data-v-2a6a0af0]{color:#1c1c27;font-size:20px;font-weight:600;line-height:24px;margin-left:15px;margin-top:15px;max-width:326.99px}.basket__container[data-v-2a6a0af0]{display:flex;justify-content:space-between;margin:0 auto 380px;width:1109px}.basket__overlay-card[data-v-2a6a0af0],.page[data-v-2a6a0af0]{display:flex;flex-direction:column}.page[data-v-2a6a0af0]{align-items:center;background:#eaeaea;font-family:"Montserrat",Arial,sans-serif;height:100%;justify-content:center;width:1440px}.total[data-v-2a6a0af0]{background:#fff;border-radius:30px;box-shadow:0 0 20px rgba(0,0,0,.1);height:114px;width:348.98px}.total__wrapper-price[data-v-2a6a0af0]{display:flex;justify-content:space-between}.total__title[data-v-2a6a0af0]{margin:22px 0 15px 21px;max-width:56.12px}.total__price[data-v-2a6a0af0],.total__title[data-v-2a6a0af0]{color:#000;font-size:15px;font-weight:600;line-height:18px}.total__price[data-v-2a6a0af0]{margin:22px 16px 16px 0;max-width:97.14px}.total__button[data-v-2a6a0af0]{background:#101010;border-radius:20px;box-shadow:0 0 20px rgba(0,0,0,.25);color:#fff;cursor:pointer;font-size:17px;font-weight:600;height:65px;line-height:21px;text-align:center;width:348.98px}',""]),n.locals={},t.exports=n},289:function(t,e,r){"use strict";r.r(e);r(17),r(199);var n=r(283),o={name:"index",mixins:[r(277).a],components:{BasketCard:n.default},computed:{totalPrice:function(){return this.g_cards.reduce((function(t,e){return t+(0!==e.priceSale?e.priceSale:e.price)*e.count}),0)}},methods:{remove:function(t){var e=this.findCardIndex(t);-1!==e&&(this.cloneArray.splice(e,1),this.cloneArray.length?localStorage.setItem("myArray",JSON.stringify(this.cloneArray)):localStorage.removeItem("myArray"),this.m_cards(this.cloneArray))},quantityChange:function(t,e){var r=this.findCardIndex(e);-1!==r&&("add"===t?this.cloneArray[r].count++:this.cloneArray[r].count>1?this.cloneArray[r].count--:this.cloneArray[r].count,localStorage.setItem("myArray",JSON.stringify(this.cloneArray)),this.m_cards(this.cloneArray))}}},c=(r(285),r(24)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"root-wrapper"},[e("div",{staticClass:"wrapper-basket"},[e("div",{staticClass:"root"},[e("div",{staticClass:"page"},[e("main",{staticClass:"basket"},[e("h1",{staticClass:"basket__title"},[t._v("Корзина")]),t._v(" "),e("div",{staticClass:"basket__container"},[e("div",{staticClass:"basket__overlay-card"},t._l(t.g_cards,(function(r){return e("basket-card",{key:r.id,attrs:{card:r},on:{removeCard:function(e){return t.remove(e)},decreaseQuantity:function(e){return t.quantityChange("decrease",e)},addQuantity:function(e){return t.quantityChange("add",e)}}})})),1),t._v(" "),e("div",{staticClass:"total"},[e("div",{staticClass:"total__wrapper-price"},[e("p",{staticClass:"total__title"},[t._v("ИТОГО")]),t._v(" "),e("p",{staticClass:"total__price"},[t._v("₽ "+t._s(t.totalPrice))])]),t._v(" "),e("button",{staticClass:"total__button"},[t._v("Перейти к оформлению")])])])])])])])])}),[],!1,null,"2a6a0af0",null);e.default=component.exports}}]);