(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{488:function(t,e,n){"use strict";n.r(e),n.d(e,"headers",(function(){return o}));var o=[{text:"FCI",align:"center",value:"fci"},{text:"Название породы",align:"start",value:"name"},{text:"Кол-во подгрупп",align:"center",value:"subgroups.length"},{text:"Действия",align:"center",value:"actions",sortable:!1}]},502:function(t,e,n){"use strict";n.r(e);var o=n(488),r={props:{breeds:{type:Array,default:function(){return[]}},pending:{type:Boolean,defaul:!1}},computed:{headers:function(){return o.headers}},methods:{onEdit:function(t){this.$emit("edit",t)},onDelete:function(t){this.$emit("delete",t)}}},l=n(60),c=n(91),d=n.n(c),f=n(212),V=n(471),h=n(658),m=n(185),v=n(473),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VDataTable",{attrs:{items:t.breeds,headers:t.headers,loading:t.pending},scopedSlots:t._u([{key:"item.actions",fn:function(e){var o=e.item;return[n("VRow",{staticClass:"flex-nowrap",attrs:{"no-gutters":"",justify:"center"}},[n("VCol",{staticClass:"col-auto"},[n("VBtn",{attrs:{icon:""},on:{click:function(e){return t.onEdit(o)}}},[n("VIcon",{attrs:{small:""}},[t._v("\n            fa-pencil-alt\n          ")])],1)],1),t._v(" "),n("VCol",{staticClass:"col-auto"},[n("VBtn",{attrs:{icon:""},on:{click:function(e){return t.onDelete(o)}}},[n("VIcon",{attrs:{small:""}},[t._v("\n            fa-trash\n          ")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VCol:V.a,VDataTable:h.a,VIcon:m.a,VRow:v.a})}}]);