(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7],{479:function(e,t,n){var r=n(24),o=n(201);e.exports=r?o:function(e){return Set.prototype.values.call(e)}},486:function(e,t,n){"use strict";n(5),n(6),n(10),n(8),n(11);var r=n(7),o=n(1),l=(n(61),n(9),n(483)),c=n(482),d=n(487),h=n.n(d);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={setup:function(){return{v$:Object(c.a)()}},props:{value:{type:Object,default:null},pending:{type:Boolean,default:!1}},data:function(){return{form:{name:"",fci:null}}},validations:function(){return{form:{name:{required:l.b.withMessage("Обязательное поле",l.f)},fci:{integer:l.b.withMessage("Только цифры",l.c)}}}},computed:{isEdit:function(){return!!this.value},title:function(){return this.isEdit?"Изменение породной группы":"Создание породной группы"},submitBtnText:function(){return this.isEdit?"Изменить":"Создать"}},watch:{value:{handler:"reset",immediate:!0}},methods:{reset:function(){var e={name:"",fci:null};this.form=m(m({},e),h()(this.value||{},Object.keys(e)))},onSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.v$.$validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.v$.$reset(),e.$emit("submit",e.form);case 7:case"end":return t.stop()}}),t)})))()},onCancel:function(){this.reset(),this.$emit("cancel")}}},S=n(60),I=n(91),y=n.n(I),x=n(212),O=n(491),w=n(478),D=n(462),V=n(658),j=n(540),component=Object(S.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VCard",[n("VCardTitle",[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("VForm",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[n("VCardText",[n("VuelidateWrapper",{attrs:{validator:e.v$.form.name},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errorMessages;return[n("VTextField",{attrs:{label:"Название группы",errorMessages:r,loading:e.pending,disabled:e.pending,type:"text",required:"",placeholder:"Название"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),n("VuelidateWrapper",{attrs:{validator:e.v$.form.fci},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errorMessages;return[n("VTextField",{attrs:{label:"FCI",errorMessages:r,loading:e.pending,disabled:e.pending,type:"number",placeholder:"#"},model:{value:e.form.fci,callback:function(t){e.$set(e.form,"fci",e._n(t))},expression:"form.fci"}})]}}])})],1),e._v(" "),n("VDivider"),e._v(" "),n("VCardActions",[n("VBtn",{attrs:{color:"green",type:"submit",dark:"",loading:e.pending}},[e._v("\n        "+e._s(e.submitBtnText)+"\n      ")]),e._v(" "),n("VBtn",{attrs:{color:"secondary",loading:e.pending},on:{click:e.onCancel}},[e._v("\n        Отменить\n      ")])],1)],1)],1)}),[],!1,null,null,null),_=component.exports;y()(component,{VBtn:x.a,VCard:O.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VDivider:D.a,VForm:V.a,VTextField:j.a});var C={components:{BreedGroupForm:_},props:{opened:{type:Boolean,default:!1},value:{type:Object,default:null},pending:{type:Boolean,default:!1}},computed:{compOpened:{get:function(){return this.opened},set:function(e){this.$emit("update:opened",e)}},isEdit:function(){return!!this.value}},watch:{opened:"reset",value:"reset"},methods:{onSubmit:function(body){var e=this.isEdit?"edit":"add";this.$emit(e,body)},onCancel:function(){this.compOpened=!1},reset:function(){this.$refs.form&&this.$refs.form.reset()}}},T=n(659),E=Object(S.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VDialog",{attrs:{width:"400"},scopedSlots:e._u([{key:"activator",fn:function(t){return[e._t("default",null,null,t)]}}],null,!0),model:{value:e.compOpened,callback:function(t){e.compOpened=t},expression:"compOpened"}},[e._v(" "),n("BreedGroupForm",{ref:"form",attrs:{value:e.value,pending:e.pending},on:{submit:e.onSubmit,cancel:e.onCancel}})],1)}),[],!1,null,null,null);t.a=E.exports;y()(E,{VDialog:T.a})},488:function(e,t,n){"use strict";n.r(t),n.d(t,"headers",(function(){return r}));var r=[{text:"FCI",align:"center",value:"fci"},{text:"Название породы",align:"start",value:"name"},{text:"Кол-во подгрупп",align:"center",value:"subgroups.length"},{text:"Действия",align:"center",value:"actions",sortable:!1}]},493:function(e,t,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("50788f08",content,!0,{sourceMap:!1})},502:function(e,t,n){"use strict";n.r(t);var r=n(488),o={props:{breeds:{type:Array,default:function(){return[]}},pending:{type:Boolean,defaul:!1}},computed:{headers:function(){return r.headers}},methods:{onEdit:function(e){this.$emit("edit",e)},onDelete:function(e){this.$emit("delete",e)}}},l=n(60),c=n(91),d=n.n(c),h=n(212),f=n(471),m=n(661),v=n(185),S=n(473),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VDataTable",{attrs:{items:e.breeds,headers:e.headers,loading:e.pending},scopedSlots:e._u([{key:"item.actions",fn:function(t){var r=t.item;return[n("VRow",{staticClass:"flex-nowrap",attrs:{"no-gutters":"",justify:"center"}},[n("VCol",{staticClass:"col-auto"},[n("VBtn",{attrs:{icon:""},on:{click:function(t){return e.onEdit(r)}}},[n("VIcon",{attrs:{small:""}},[e._v("\n            fa-pencil-alt\n          ")])],1)],1),e._v(" "),n("VCol",{staticClass:"col-auto"},[n("VBtn",{attrs:{icon:""},on:{click:function(t){return e.onDelete(r)}}},[n("VIcon",{attrs:{small:""}},[e._v("\n            fa-trash\n          ")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:h.a,VCol:f.a,VDataTable:m.a,VIcon:v.a,VRow:S.a})},521:function(e,t,n){"use strict";var r=n(286),o=n(287);e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},522:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(523);r({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return l.apply(this,arguments)}})},523:function(e,t,n){"use strict";var r=n(15),o=n(42);e.exports=function(){for(var e=r(this),t=o(e.add),n=0,l=arguments.length;n<l;n++)t.call(e,arguments[n]);return e}},524:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(288);r({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return l.apply(this,arguments)}})},525:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(92),f=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{difference:function(e){var t=c(this),n=new(h(t,l("Set")))(t),r=d(n.delete);return f(e,(function(e){r.call(n,e)})),n}})},526:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(44),d=n(479),h=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{every:function(e){var t=l(this),n=d(t),r=c(e,arguments.length>1?arguments[1]:void 0,3);return!h(n,(function(e,n){if(!r(e,e,t))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},527:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(44),f=n(92),m=n(479),v=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{filter:function(e){var t=c(this),n=m(t),r=h(e,arguments.length>1?arguments[1]:void 0,3),o=new(f(t,l("Set"))),S=d(o.add);return v(n,(function(e){r(e,e,t)&&S.call(o,e)}),{IS_ITERATOR:!0}),o}})},528:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(44),d=n(479),h=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{find:function(e){var t=l(this),n=d(t),r=c(e,arguments.length>1?arguments[1]:void 0,3);return h(n,(function(e,n){if(r(e,e,t))return n(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},529:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(92),f=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(e){var t=c(this),n=new(h(t,l("Set"))),r=d(t.has),o=d(n.add);return f(e,(function(e){r.call(t,e)&&o.call(n,e)})),n}})},530:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(42),d=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(e){var t=l(this),n=c(t.has);return!d(e,(function(e,r){if(!0===n.call(t,e))return r()}),{INTERRUPTED:!0}).stopped}})},531:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(201),f=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(e){var t=h(this),n=c(e),r=n.has;return"function"!=typeof r&&(n=new(l("Set"))(e),r=d(n.has)),!f(t,(function(e,t){if(!1===r.call(n,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},532:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(42),d=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(e){var t=l(this),n=c(t.has);return!d(e,(function(e,r){if(!1===n.call(t,e))return r()}),{INTERRUPTED:!0}).stopped}})},533:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(479),d=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{join:function(e){var t=l(this),n=c(t),r=void 0===e?",":String(e),o=[];return d(n,o.push,{that:o,IS_ITERATOR:!0}),o.join(r)}})},534:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(44),f=n(92),m=n(479),v=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{map:function(e){var t=c(this),n=m(t),r=h(e,arguments.length>1?arguments[1]:void 0,3),o=new(f(t,l("Set"))),S=d(o.add);return v(n,(function(e){S.call(o,r(e,e,t))}),{IS_ITERATOR:!0}),o}})},535:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(42),d=n(479),h=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(e){var t=l(this),n=d(t),r=arguments.length<2,o=r?void 0:arguments[1];if(c(e),h(n,(function(n){r?(r=!1,o=n):o=e(o,n,n,t)}),{IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty set with no initial value");return o}})},536:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(15),c=n(44),d=n(479),h=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{some:function(e){var t=l(this),n=d(t),r=c(e,arguments.length>1?arguments[1]:void 0,3);return h(n,(function(e,n){if(r(e,e,t))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},537:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(92),f=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(e){var t=c(this),n=new(h(t,l("Set")))(t),r=d(n.delete),o=d(n.add);return f(e,(function(e){r.call(n,e)||o.call(n,e)})),n}})},538:function(e,t,n){"use strict";var r=n(4),o=n(24),l=n(52),c=n(15),d=n(42),h=n(92),f=n(41);r({target:"Set",proto:!0,real:!0,forced:o},{union:function(e){var t=c(this),n=new(h(t,l("Set")))(t);return f(e,d(n.add),{that:n}),n}})},539:function(e,t,n){var r=n(18)(!1);r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),e.exports=r},553:function(e,t,n){"use strict";n.r(t);var r=n(486),o=(n(5),n(6),n(10),n(8),n(11),n(7)),l=n(120),c=n(1),d=(n(61),n(54),n(31),n(17),n(521),n(33),n(522),n(524),n(525),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(534),n(535),n(536),n(537),n(538),n(36),n(9),n(483)),h=n(482),f=n(487),m=n.n(f),v=n(72);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={setup:function(){return{v$:Object(h.a)()}},props:{value:{type:Object,default:null},pending:{type:Boolean,default:!1}},data:function(){return{form:{name:"",fci:null,subgroups:[]}}},validations:function(){return{form:{name:{required:d.b.withMessage("Обязательное поле",d.f)},fci:{integer:d.b.withMessage("Только цифры",d.c)}}}},computed:I(I({},Object(v.c)("breed",["subBreeds"])),{},{subBreedNames:function(){var e=this.subBreeds.map((function(e){return e.name}));return Object(l.a)(new Set(e))},isEdit:function(){return!!this.value},title:function(){return this.isEdit?"Изменение породы":"Создание породы"},submitBtnText:function(){return this.isEdit?"Изменить":"Создать"}}),watch:{value:{handler:"reset",immediate:!0}},methods:{reset:function(){var e={name:"",fci:null,subgroups:[]},t=m()(this.value||{},Object.keys(e));this.form=I(I(I({},e),t),{},{subgroups:(t.subgroups||[]).map((function(e){return e.name}))})},formatForm:function(form){var e=I({},form);return e.subgroups=form.subgroups.map((function(e){return{name:e}})),e},onSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.v$.$validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.v$.$reset(),e.$emit("submit",e.formatForm(e.form));case 7:case"end":return t.stop()}}),t)})))()},onCancel:function(){this.reset(),this.$emit("cancel")}}},x=n(60),O=n(91),w=n.n(O),D=n(212),V=n(491),j=n(478),_=n(22),C=(n(70),n(119),n(203),n(39),n(43),n(62),n(151),n(121),n(493),n(489)),T=(n(71),n(540)),E=n(56),$=n(2);function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var F=k(k({},C.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),B=C.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:C.a.options.props.menuProps.type,default:function(){return F}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return k(k({},C.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object($.q)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=C.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),k(k({},F),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=C.a.options.computed.listData.call(this);return data.props=k(k({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===$.w.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===$.w.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==$.w.backspace&&e!==$.w.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,C.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=T.a.options.methods.genInput.call(this);return input.data=Object(E.a)(input.data,{attrs:{"aria-activedescendant":Object($.o)(this.$refs.menu,"activeTile.id"),autocomplete:Object($.o)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=C.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?C.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[$.w.home,$.w.end].includes(t)||C.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){C.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){C.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){C.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(t=e.clipboardData)||t.setData("text/plain",o),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}});function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A=B.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return C.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=B.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,t){var n=this,r=C.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(r.componentOptions.listeners=M(M({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),r},onChipInput:function(e){C.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(e,t){this.autoSelectFirst&&B.options.methods.onFilteredItemsChanged.call(this,e,t)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[$.w.home,$.w.end].includes(t)||C.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===$.w.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===$.w.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();B.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(B.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){var t;C.a.options.methods.setValue.call(this,null!=(t=e)?t:this.internalSearch)},updateEditing:function(){var e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),r=n>-1&&"object"===Object(_.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var o=this.internalValue.slice();o.splice(n,1),this.setValue(o)}if(t>-1)return this.internalSearch=null;this.selectItem(r),this.internalSearch=null}},onPaste:function(e){var t;if(this.multiple&&!this.searchIsDirty){var n=null==(t=e.clipboardData)?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),C.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,B.options.methods.clearableCallback.call(this)}}}),N=n(462),L=n(658),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VCard",[n("VCardTitle",[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("VForm",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[n("VCardText",[n("VuelidateWrapper",{attrs:{validator:e.v$.form.name},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errorMessages;return[n("VTextField",{attrs:{label:"Название породы",errorMessages:r,loading:e.pending,disabled:e.pending,type:"text",required:"",placeholder:"Название"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}])}),e._v(" "),n("VuelidateWrapper",{attrs:{validator:e.v$.form.fci},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errorMessages;return[n("VTextField",{attrs:{label:"FCI",errorMessages:r,loading:e.pending,disabled:e.pending,type:"number",placeholder:"#"},model:{value:e.form.fci,callback:function(t){e.$set(e.form,"fci",e._n(t))},expression:"form.fci"}})]}}])}),e._v(" "),n("VCombobox",{attrs:{items:e.subBreedNames,loading:e.pending,disabled:e.pending,label:"Подгруппы",multiple:"",chips:""},model:{value:e.form.subgroups,callback:function(t){e.$set(e.form,"subgroups",t)},expression:"form.subgroups"}})],1),e._v(" "),n("VDivider"),e._v(" "),n("VCardActions",[n("VBtn",{attrs:{color:"green",type:"submit",dark:"",loading:e.pending}},[e._v("\n        "+e._s(e.submitBtnText)+"\n      ")]),e._v(" "),n("VBtn",{attrs:{color:"secondary",loading:e.pending},on:{click:e.onCancel}},[e._v("\n        Отменить\n      ")])],1)],1)],1)}),[],!1,null,null,null),z=component.exports;w()(component,{VBtn:D.a,VCard:V.a,VCardActions:j.a,VCardText:j.c,VCardTitle:j.d,VCombobox:A,VDivider:N.a,VForm:L.a,VTextField:T.a});var U={components:{BreedForm:z},props:{opened:{type:Boolean,default:!1},value:{type:Object,default:null},pending:{type:Boolean,default:!1}},computed:{compOpened:{get:function(){return this.opened},set:function(e){this.$emit("update:opened",e)}},isEdit:function(){return!!this.value}},watch:{opened:"reset",value:"reset"},methods:{onSubmit:function(body){var e=this.isEdit?"edit":"add";this.$emit(e,body)},onCancel:function(){this.compOpened=!1},reset:function(){this.$refs.form&&this.$refs.form.reset()}}},K=n(659),W=Object(x.a)(U,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VDialog",{attrs:{width:"400"},scopedSlots:e._u([{key:"activator",fn:function(t){return[e._t("default",null,null,t)]}}],null,!0),model:{value:e.compOpened,callback:function(t){e.compOpened=t},expression:"compOpened"}},[e._v(" "),n("BreedForm",{ref:"form",attrs:{value:e.value,pending:e.pending},on:{submit:e.onSubmit,cancel:e.onCancel}})],1)}),[],!1,null,null,null),G=W.exports;w()(W,{VDialog:K.a});var J=n(502);t.default={BreedGroupEditModal:r.a,BreedEditModal:G,BreedTable:J.default}}}]);