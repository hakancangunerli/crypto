(this.webpackJsonpcrypto_track=this.webpackJsonpcrypto_track||[]).push([[0],{19:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){},41:function(e,c,a){"use strict";a.r(c);var n=a(2),s=a.n(n),t=a(13),i=a.n(t),r=(a(19),a(4)),o=a(14),l=a.n(o),j=(a(38),a(39),a(0)),d=function(e){var c=e.name,a=e.price,n=e.symbol,s=e.image,t=e.priceChange;return Object(j.jsxs)("div",{className:"cryptoCoin",children:[Object(j.jsx)("img",{src:s,alt:"".concat(c),className:"coinLogo"}),Object(j.jsxs)("div",{className:"coinNameWrap",children:[Object(j.jsx)("h1",{className:"coinName",children:c}),Object(j.jsx)("p",{className:"coinSymbol",children:n})]}),Object(j.jsxs)("p",{className:"coinPrice",children:["$",a.toLocaleString()]}),t<0?Object(j.jsxs)("div",{className:"priceContainerDOWN",children:[Object(j.jsx)("i",{className:"fas fa-angle-down fa-2x"}),Object(j.jsxs)("p",{className:"priceChange",children:[t.toFixed(3),"%"]})]}):Object(j.jsxs)("div",{className:"priceContainerUP",children:[Object(j.jsx)("i",{className:"fas fa-angle-up fa-2x"}),Object(j.jsxs)("p",{className:"priceChange",children:[t.toFixed(3),"%"]})]})]})};var p=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),a=c[0],s=c[1],t=Object(n.useState)(""),i=Object(r.a)(t,2),o=i[0],p=i[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){s(e.data),console.log("gud job!")})).catch((function(e){return console.log("fucked up here.")}))}),[]);var m=a.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{className:"brand",children:"kripto"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{className:"inputField",type:"text",onChange:function(e){p(e.target.value)},placeholder:"Search coins"})})]}),Object(j.jsx)("div",{className:"coinsContainer",children:m.map((function(e){return Object(j.jsx)(d,{name:e.name,price:e.current_price,symbol:e.symbol,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.33519243.chunk.js.map