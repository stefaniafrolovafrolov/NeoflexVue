(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{273:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("5eb42f17",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";r(273)},276:function(t,e,r){var o=r(81)((function(i){return i[1]}));o.push([t.i,'.basket[data-v-a0dafa30]{font-family:"Montserrat","Arial",sans-serif}.basket__card[data-v-a0dafa30]{background:#fff;border-radius:30px;box-shadow:0 0 20px rgba(0,0,0,.1);display:flex;height:218px;margin-bottom:25px;position:relative;width:633px}.basket__button-trash[data-v-a0dafa30]{background:transparent;background-image:url(https://stefaniafrolovafrolov.github.io/NeoflexVue/Trash.svg);border:none;cursor:pointer;height:17px;-o-object-fit:cover;object-fit:cover;padding:0;position:absolute;right:28px;top:18px;width:21px}.basket__sum-bottom[data-v-a0dafa30]{bottom:21px;color:#1c1c27;font-size:15px;font-weight:600;line-height:18px;margin:0;position:absolute;right:28px;text-align:right}.basket__img[data-v-a0dafa30]{height:136px;margin:18px 24px 0 19px;width:147px}.basket__block-count[data-v-a0dafa30]{align-items:center;display:flex;height:30px;justify-content:space-between;margin:17px 0 17px 17px;width:126px}.basket__button-minus[data-v-a0dafa30]{cursor:pointer;height:30px;width:35px}.basket__count[data-v-a0dafa30]{color:#000;font-size:17px;font-weight:600;line-height:21px;margin:0}.basket__button-plus[data-v-a0dafa30]{cursor:pointer;height:30px;width:35px}.basket__name[data-v-a0dafa30]{color:#1c1c27;font-size:17px;font-weight:500;line-height:21px;margin:76px 0 12px}.basket__sum[data-v-a0dafa30]{color:#aaa;font-size:15px;font-weight:600;line-height:18px;margin:0}',""]),o.locals={},t.exports=o},283:function(t,e,r){"use strict";r.r(e);var o={name:"basket-card",props:{card:{type:Object,required:!0}}},n=(r(275),r(24)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"basket__card"},[e("button",{staticClass:"basket__button-trash",on:{click:function(e){return t.$emit("removeCard",t.card)}}}),t._v(" "),e("p",{staticClass:"basket__sum-bottom"},[t._v(t._s(t.card.priceSale?t.card.priceSale:t.card.price)+" ₽")]),t._v(" "),e("div",{staticClass:"basket__wrapper-block"},[e("img",{staticClass:"basket__img",attrs:{src:t.card.img,alt:"изображение наушников"}}),t._v(" "),e("div",{staticClass:"basket__block-count"},[e("img",{staticClass:"basket__button-minus",attrs:{src:"-.svg",alt:"круглая кнопочка с минусом убавления"},on:{click:function(e){return t.$emit("decreaseQuantity",t.card)}}}),t._v(" "),e("p",{staticClass:"basket__count"},[t._v(t._s(t.card.count))]),t._v(" "),e("img",{staticClass:"basket__button-plus",attrs:{src:"+.svg",alt:"круглая кнопочка с плюсом добавления"},on:{click:function(e){return t.$emit("addQuantity",t.card)}}})])]),t._v(" "),e("div",{staticClass:"basket__wrapper"},[e("p",{staticClass:"basket__name"},[t._v(t._s(t.card.title))]),t._v(" "),e("p",{staticClass:"basket__sum"},[t._v(t._s(t.card.priceSale?t.card.priceSale:t.card.price)+" ₽")])])])}),[],!1,null,"a0dafa30",null);e.default=component.exports}}]);