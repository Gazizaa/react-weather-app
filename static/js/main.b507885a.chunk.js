(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{20:function(A,e,t){},40:function(A,e,t){},42:function(A,e,t){"use strict";t.r(e);var c=t(2),n=t.n(c),a=t(15),i=t.n(a),l=(t(20),t(3)),d=t(6),o=t.n(d),s=t(4),r=t.n(s),u=(t(40),t(0));var j=function(){var A,e,t,n,a,i,d,s,j,h,m=Object(c.useState)("Paris"),g=Object(l.a)(m,2),p=g[0],O=g[1],b=Object(c.useState)({}),v=Object(l.a)(b,2),x=v[0],M=v[1],w=Object(c.useState)("Paris"),E=Object(l.a)(w,2),C=E[0],f=E[1],B=Object(c.useState)("48.8534"),N=Object(l.a)(B,2),D=N[0],Q=N[1],y=Object(c.useState)("2.3488"),S=Object(l.a)(y,2),Y=S[0],k=S[1],U=function(){""===p?alert("Please enter a city name"):o.a.get("https://api.openweathermap.org/geo/1.0/direct?q=".concat(p,"&appid=cbc896ea328bdf19333c674679f10175")).then((function(A){Q(A.data[0].lat),k(A.data[0].lon),f(A.data[0])})).catch((function(A){console.log(A),alert("Wrong city name")}))};return Object(c.useEffect)((function(){U()}),[]),Object(c.useEffect)((function(){o.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(D,"&lon=").concat(Y,"&exclude=minutely&appid=cbc896ea328bdf19333c674679f10175&units=metric")).then((function(A){M(A.data)})),O("")}),[D,Y]),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"today-row",children:[Object(u.jsxs)("div",{className:"today-column",children:[Object(u.jsx)("h3",{children:r()().format("dddd")}),Object(u.jsx)("h4",{children:r()().format("MMMM Do YYYY")}),Object(u.jsxs)("h4",{children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5QYIEiYtWQpVkQAAAiVJREFUSMfFVd8rdFEUXfu6SBQR3kx5o4YkT6KUVy9KpBh34tYoKUlK/gh5kB8lXjB5Q/gD1BBK/gZKXhQpNbOXhzPufHfm+maG+r79su8+Z6+1197nnC7wn00KTaRSqfX1EAhkaAjgAAfCYQAKJQE5kZP7exAEDw/FEkus5+dfKyRJMhql6qmeJhJGyNSU8W1tnidJui6pZ3p2eWlix/llYcchdUEX9vZMobKywiZVXk7qoi7u7xueiYkiC9fVeZ1kFTZxezupozq6teV5pVLD4QAhf0yktrZAAa5rfCzmJwyFvKMgSXZ0eN53RE1Nfr7pabM+OVmAAO3TvtVVA+zs9BPFYoZobCx49OPjwcK7ukjt1u6VlWycFaDhFa/JpPksLfVvPT4CbGRjS0sOShhiqLXVBA8PmXUIxLZBvOM9lcqG2bkjkCu5urkBQLCnxywmEsYfHUEQQWR4mKoVWhGPQ2DBEgHwgpePD5N3fOwn7e2FyK3cXl+nJf3lCJRKraoi9UIv7u5MXF0dfFeam7988H5NjcdDkqyszHsH/ASOQ+qgDq6vFwz0GtERHdncNDyRyHd51ncbIiIi29sAUkgxbXNz+QtTqfPzELzhLZk0PDs7xTaQNYmSEqou63I8buKZmeC82VlSl3Tp4OALl4+/yH+BbUMYZXRjA8A5zp+eMgnoR39DA0R2Zdd1Tee5t/7HAvydShqXee/G1tZMYfLHI//X9gn7sfjbrZWm7AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0wOFQxODozODo0NSswMDowMG4wo90AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDYtMDhUMTg6Mzg6NDUrMDA6MDAfbRthAAAAAElFTkSuQmCC",alt:"location-icon"}),(null===C||void 0===C?void 0:C.name)||C]})]}),Object(u.jsxs)("div",{className:"today-column-2",children:[Object(u.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(null===x||void 0===x||null===(A=x.current)||void 0===A||null===(e=A.weather)||void 0===e?void 0:e.map((function(A){return A.icon})),"@2x.png"),alt:"icon"}),Object(u.jsxs)("p",{children:[Math.round(null===x||void 0===x||null===(t=x.current)||void 0===t?void 0:t.temp)," \xb0C"]}),Object(u.jsx)("h3",{children:null===x||void 0===x||null===(n=x.current)||void 0===n||null===(a=n.weather)||void 0===a?void 0:a.map((function(A){return A.main}))})]})]}),Object(u.jsxs)("div",{className:"location-row",children:[Object(u.jsxs)("div",{className:"location-details-row",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"FEELS LIKE"}),Object(u.jsx)("p",{children:"HUMIDITY"}),Object(u.jsx)("p",{children:"WIND"})]}),Object(u.jsxs)("div",{className:"location-details-value",children:[Object(u.jsxs)("p",{children:[Math.round(null===x||void 0===x||null===(i=x.current)||void 0===i?void 0:i.feels_like)," \xb0C"]}),Object(u.jsxs)("p",{children:[null===x||void 0===x||null===(d=x.current)||void 0===d?void 0:d.humidity," %"]}),Object(u.jsxs)("p",{children:[Math.round(null===x||void 0===x||null===(s=x.current)||void 0===s?void 0:s.wind_speed)," m/s"]})]})]}),Object(u.jsx)("div",{className:"nextday-row",children:null===x||void 0===x||null===(j=x.daily)||void 0===j||null===(h=j.slice(1,5))||void 0===h?void 0:h.map((function(A,e){var t;return Object(u.jsxs)("div",{className:"nextday-column",children:[Object(u.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(A.weather[0].icon,"@2x.png"),alt:"icon"}),Object(u.jsx)("p",{children:r()(1e3*A.dt).format("ddd")}),Object(u.jsxs)("p",{className:"nextday-row-p",children:[" ",Math.round(null===A||void 0===A||null===(t=A.temp)||void 0===t?void 0:t.day)," \xb0C"]})]},e)}))}),Object(u.jsxs)("div",{className:"location-column",children:[Object(u.jsx)("input",{type:"text",placeholder:"Change location",maxLength:"30",value:p,onChange:function(A){return O(A.target.value)}}),Object(u.jsx)("button",{onClick:U,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5QYJEjkz1uMBCQAAAotJREFUSMe9lUEo83EYx3//ta3XDhxmYqklJUlycuMiRCgOyyQHxg52cBClKNJymJMLSYqDXEjZwUnKDmoODlMm2YHRJhy0tuf59/u+h//77r/3XWRTfrffv+fp+3m+v+d5/kJ8cIBUc6q5qgqgIAVXVwHu5/6bG4DCFE6lIMlP/kQCoGmaPj4GqIVaXC4AAAwGUejRBEdGMkIgIgIgeYiHbm8BcpIzENDizs5y42ibtk9ONBCrNR9hC1mcToDe6V1KgL3sjUYBtV6tb239OE8T0gDW1zMgoBCFgkFISEiz+WNhCQlZXJxl6SzNPj1BJiPJSGVl3g5K8pN/ZUUHYS97Jyc/S4hS1O3OstrMZo+n8CcEgKIigKZo6vER4G7ujkQ+SeA6rtva0gEgIUtLCwXQC2M72zc3dScAoLz8/ziDEGJJLFmtQoiESKiqYlAMiuH5+bsAQsEv/IrFdCJu4IbcwgxCCLdwx+NCCJuwGY0aaUXFtwGE4lAcDod+N12aLuPxXABgAhOnp/ondVFddLkKt15raiHQh76uLiGUJqXp6kpzNhfgT9NYLAAv8ML9PUA7tPP6CqTX0mu1tV8WBgAoSk5PgYhofPwL5OqoOtrRAVCc4qqaNZa91Ds4qFVmNOYKp/ZT+9XVAG/wxsFB1vh52HN3l/dmhEwPpAd6enQnMpXs0d7bG8CCxcXF3/H6t1IAIB/54vGsu4tcy8v5v2Vmw3GMY3Nzmc0G9rHv4QHgdm6/vgZ4jMd2dyHVTrWzrS2z2EAxip2fZznywi/z84X2Vv4FSEjIkhINIBTKAjnkw5mZHwax2QBu5MZwOPOvkeQn//Cw8mMgSNYka+x2AVPMFAsEhIIylB0d/QYqP6T1NrgMhAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0wOVQxODo1Nzo1MSswMDowMOEDhw8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDYtMDlUMTg6NTc6NTErMDA6MDCQXj+zAAAAAElFTkSuQmCC",alt:"search-icon"})})]})]})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b507885a.chunk.js.map