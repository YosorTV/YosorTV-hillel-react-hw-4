(this.webpackJsonpdesk=this.webpackJsonpdesk||[]).push([[0],{14:function(e,n,t){},20:function(e,n,t){e.exports=t(42)},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),o=t.n(c),i=t(16),u=t(18),d=t(19),s=t(17),l=t.n(s).a.create({baseURL:"https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers"}),m=(t(14),function(e){var n=e.onAddSticker;return r.a.createElement("header",{className:"header_desk"},r.a.createElement("button",{onClick:n,className:"add_sticker"},"Add Sticker"))}),f=t(3),v=function(e){var n=e.sticker,t=e.onChange,a=e.onRemove,c=e.onSave,o={x:0,y:0},i=function(e){var a=e.clientX,r=e.clientY,c=n.x,i=n.y;t(n.id,{x:c+(a-o.x),y:i+(r-o.y)})},u=function e(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)};return r.a.createElement("div",{style:function(){var e=n.x;return{top:n.y,left:e}}(),className:"sticker"},r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{onMouseDown:function(e){var n=e.clientX,t=e.clientY;o={x:n,y:t},document.addEventListener("mousemove",i),document.addEventListener("mouseup",u)},onMouseUp:function(){return c(n.id)}},r.a.createElement("i",{className:"far fa-dot-circle"})),r.a.createElement("span",null,"Sticker - ",n.id),r.a.createElement("button",{onClick:function(){return a(n.id)}},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))),r.a.createElement("textarea",{name:"description",value:n.description,onChange:function(e){var a=e.target,r=a.name,c=a.value;t(n.id,Object(f.a)({},r,c))},onBlur:function(){return c(n.id)}}))},p=function(e){var n=e.stickers,t=e.onChange,c=e.onRemove,o=e.onSave;return r.a.createElement(a.Fragment,null,n.map((function(e){return r.a.createElement(v,{key:e.id,sticker:e,onChange:t,onRemove:c,onSave:o})})))},E=function(){var e=Object(a.useState)([{id:"",description:"",x:0,y:0}]),n=Object(d.a)(e,2),t=n[0],c=n[1];Object(a.useEffect)((function(){l.get("/").then((function(e){var n=e.data;return c(n)}))}),[]);return r.a.createElement(a.Fragment,null,r.a.createElement(m,{onAddSticker:function(){return l.post("",{id:"",description:"",x:0,y:0}).then((function(e){var n=e.data;return c([].concat(Object(u.a)(t),[n]))}))}}),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(p,{stickers:t,onRemove:function(e){var n=t.filter((function(n){return n.id!==e}));l.delete(e).then((function(){return c(n)}))},onSave:function(e){var n=t.find((function(n){return n.id===e}));l.put(e,n)},onChange:function(e,n){var a=t.find((function(n){return n.id===e}));!function(e){var n=t.map((function(n){return n.id===e.id?e:n}));c(n)}(a=Object(i.a)({},a,{},n))}})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a5068bef.chunk.js.map