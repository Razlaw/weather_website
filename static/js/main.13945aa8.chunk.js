(this.webpackJsonpweather_website=this.webpackJsonpweather_website||[]).push([[0],{187:function(t,e,a){},188:function(t,e,a){},190:function(t,e,a){},191:function(t,e,a){},192:function(t,e,a){},327:function(t,e,a){},345:function(t,e,a){"use strict";a.r(e);var r,n=a(60),c=a.n(n),o=(a(185),a(351)),i=a(62),s=a(15),u=a(26),l=a.n(u),d=(a(187),a(0)),h=a(353),p=(a(188),["title","titleId"]);function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},j.apply(this,arguments)}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function b(t,e){var a=t.title,n=t.titleId,c=m(t,p);return d.createElement("svg",j({id:"SVGRoot",width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},c),a?d.createElement("title",{id:n},a):null,r||(r=d.createElement("g",{stroke:"#000"},d.createElement("ellipse",{cx:5.6727,cy:5.7476,rx:3.0967,ry:3.1013,fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.7101}),d.createElement("path",{d:"m9.2387 9.2405 3.7161 3.7215",fill:"none",strokeWidth:1.6549}),d.createElement("path",{d:"m9.2387 10.481-1.2387-2.481 2.4774 1.2405z",strokeLinejoin:"round",strokeWidth:.46851}))))}var f=d.forwardRef(b),y=(a.p,a(2));function w(t){var e=t.cityName,a=t.updateCityName,r=t.reloadWeather;return Object(y.jsx)("div",{className:"citySearchBar",children:Object(y.jsx)("form",{onSubmit:r,children:Object(y.jsxs)("div",{className:"formComponents",children:[Object(y.jsx)("input",{onKeyUp:function(t){"Enter"===t.key&&t.target.blur()},onChange:function(t){return a(t.target.value)},placeholder:""===e?"City":e,type:"text",id:"cityNameInput",autoFocus:!0}),Object(y.jsx)("button",{type:"submit",children:Object(y.jsx)(f,{className:"magnifyingGlassIcon"})})]})})})}var O=a(174);a(190),a(191);function v(t){var e=t.time,a=t.active;return Object(y.jsxs)("li",{className:a?"hourOfDayListItem active":"hourOfDayListItem",children:[e,":00"]})}a(192);var g=a(347),x=a(354),N=a(172),T=a(175),D=a(169),M=a(171);function C(t){var e=t.currentHour,a=t.weatherData,r=t.dataKey,n=t.plotKey,c=t.unit;return Object(y.jsx)(g.a,{width:"100%",height:"100%",children:Object(y.jsxs)(x.a,{layout:"vertical",width:"100%",height:"100%",data:a,margin:{top:20,left:20,right:20,bottom:0},children:[Object(y.jsx)(N.a,{type:"number",hide:!0,domain:[0,"dataMax + 1"]}),Object(y.jsxs)(T.a,{dataKey:r,barSize:18,background:{fill:"#505160"},isAnimationActive:!1,children:[Object(y.jsx)(D.a,{dataKey:n,position:"right",formatter:function(t){return t.toFixed(0)+c}}),a.map((function(t,a){return Object(y.jsx)(M.a,{className:a===e?"barCell active":"barCell",fill:a===e?"#aebd38":"#598234",height:18,stroke:"#000",strokeWidth:0,radius:[0,5,5,0]},"cell-".concat(a))}))]})]})})}function _(t){var e=t.dayToDisplay,a=t.weatherData,r=t.currentHour,n=Object(d.useState)(0),c=Object(s.a)(n,2),o=c[0],i=c[1],u=Object(d.useRef)([0,0]),l=Object(d.useRef)([0,0]);function h(){var t=l.current[0]-u.current[0],e=l.current[1]-u.current[1],a=Math.abs(t)>Math.abs(e),r=t>50&&a;t<-50&&a&&i(o<2?o+1:0),r&&i(o>0?o-1:2)}return Object(y.jsx)("div",{className:"weatherForecastForADay",onTouchStart:function(t){return e=t,u.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],void(l.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]);var e},onTouchMove:function(t){return e=t,void(l.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]);var e},onTouchEnd:function(){return h()},onMouseDown:function(t){return(e=t).preventDefault(),u.current=[e.clientX,e.clientY],void(l.current=[e.clientX,e.clientY]);var e},onMouseMove:function(t){return e=t,void(l.current=[e.clientX,e.clientY]);var e},onMouseUp:function(){return h()},children:Object(y.jsxs)("div",{className:"contentContainer",children:[Object(y.jsx)("div",{className:"dayDisplay",children:Object(y.jsx)("h1",{children:e})}),Object(y.jsxs)("div",{className:"forecast",children:[Object(y.jsx)("div",{className:"hoursOfDay",children:Object(y.jsx)("ul",{children:Object(O.a)(Array(24)).map((function(t,e){return Object(y.jsx)(v,{time:e,active:r===e},e)}))})}),Object(y.jsx)("div",{className:"forecastPlot",children:Object(y.jsxs)("div",{className:"plotContainer",children:[Object(y.jsx)("div",{className:"temperaturePlot",style:{transform:"rotateY(".concat(.25*o,"turn)")},children:Object(y.jsx)(C,{currentHour:r,weatherData:a,dataKey:"temperatureForPlot",plotKey:"temperature",unit:"\xb0C"})}),Object(y.jsx)("div",{className:"windPlot",style:{transform:"rotateY(".concat(.25*(o-2),"turn)")},children:Object(y.jsx)(C,{currentHour:r,weatherData:a,dataKey:"wind_speed",plotKey:"wind_speed",unit:"m/s"})}),Object(y.jsx)("div",{className:"rainPlot",style:{transform:"rotateY(".concat(.25*(o-1),"turn)")},children:Object(y.jsx)(C,{currentHour:r,weatherData:a,dataKey:"rain_1h",plotKey:"rain_1h",unit:"mm"})})]})})]})]})})}a(327);function k(t){t.cityName,t.weatherData;return Object(y.jsxs)("div",{className:"weatherForecastForAWeek",children:[Object(y.jsx)("div",{className:"contentContainer",children:Object(y.jsx)("h1",{children:"Forecast for a week"})}),Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("span",{children:["The weather data displayed on this website is provided by",Object(y.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeather (TM)"})," under the",Object(y.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:" Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)"}),". Data and database are open and licensed by ",Object(y.jsx)("a",{href:"https://opendatacommons.org/licenses/odbl/",children:" Open Data Commons Open Database License (ODbL)"}),"."]})})]})}var S=a(70),H=a.n(S);function E(t){var e=new Date(1e3*t),a=e.getUTCHours(),r=e.getUTCMinutes().toString();r=1===r.length?"0"+r:r;var n=e.getUTCSeconds().toString();return a+":"+r+":"+(n=1===n.length?"0"+n:n)}var Y=function(){var t=Object(i.a)(l.a.mark((function t(e){var a,r,n,c,o,i,s,u,d,h,p,j,m,b,f,y,w,O,v,g,x,N,T,D,M,C,_,k,S,Y;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 3:return a=t.sent,r=a.data.coord.lat,n=a.data.coord.lon,c=a.data.dt,o=a.data.dt+a.data.timezone,t.next=10,H.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(c,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 10:if(i=t.sent,s=48,u=[],d=new Date(1e3*o),h=d.getUTCHours(),!((p=i.data.hourly.length-1)<h)){t.next=25;break}return j=c-86400,t.next=20,H.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(j,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 20:for(m=t.sent,b=h-p,console.assert(b<=m.data.hourly.length),f=m.data.hourly.length-b,y=f;y<m.data.hourly.length;y++)u.push({temperature:Math.round(m.data.hourly[y].temp),wind_deg:m.data.hourly[y].wind_deg,wind_speed:Math.round(m.data.hourly[y].wind_speed),cloudiness:m.data.hourly[y].clouds,weather:m.data.hourly[y].weather,probabilityOfPrecipitation:0,rain_1h:"rain"in m.data.hourly[y]?Math.round(m.data.hourly[y].rain["1h"]):0,snow_1h:"snow"in m.data.hourly[y]?Math.round(m.data.hourly[y].snow["1h"]):0,timeUTC:E(m.data.hourly[y].dt),timeLocal:E(m.data.hourly[y].dt+a.data.timezone),dt:m.data.hourly[y].dt});case 25:for(w=u.length,O=p-(h-w);O<p;O++)u.push({temperature:Math.round(i.data.hourly[O].temp),wind_deg:i.data.hourly[O].wind_deg,wind_speed:Math.round(i.data.hourly[O].wind_speed),cloudiness:i.data.hourly[O].clouds,weather:i.data.hourly[O].weather,probabilityOfPrecipitation:0,rain_1h:"rain"in i.data.hourly[O]?Math.round(i.data.hourly[O].rain["1h"]):0,snow_1h:"snow"in i.data.hourly[O]?Math.round(i.data.hourly[O].snow["1h"]):0,timeUTC:E(i.data.hourly[O].dt),timeLocal:E(i.data.hourly[O].dt+a.data.timezone),dt:i.data.hourly[O].dt});return"current,minutely,alerts",t.next=31,H.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(n,"&units=metric&exclude=").concat("current,minutely,alerts","&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 31:for(v=t.sent,g=s-u.length,console.assert(g<=v.data.hourly.length),x=0;x<g;x++)u.push({temperature:Math.round(v.data.hourly[x].temp),wind_deg:v.data.hourly[x].wind_deg,wind_speed:Math.round(v.data.hourly[x].wind_speed),cloudiness:v.data.hourly[x].clouds,weather:v.data.hourly[x].weather,probabilityOfPrecipitation:"pop"in v.data.hourly[x]?v.data.hourly[x].pop:0,rain_1h:"rain"in v.data.hourly[x]?Math.round(v.data.hourly[x].rain["1h"]):0,snow_1h:"snow"in v.data.hourly[x]?Math.round(v.data.hourly[x].snow["1h"]):0,timeUTC:E(v.data.hourly[x].dt),timeLocal:E(v.data.hourly[x].dt+a.data.timezone),dt:v.data.hourly[x].dt});for(N=0,T=23,D=function(t){for(var e=[],a=N;a<=T;a++)e.push(u[a].temperature);for(var r=Math.min.apply(Math,e),n=e.map((function(t){return t-(r-1)})),c=0,o=N;o<=T;o++)u[o].temperatureForPlot=n[c],c++;N+=24,T+=24},M=0;M<2;M++)D();return C={hourly:u},_=Date.now(),k=_+1e3*a.data.timezone,S=new Date(k),Y=S.getUTCHours(),C.currentHour=Y,t.abrupt("return",Promise.resolve(C));case 48:return t.prev=48,t.t0=t.catch(0),console.log("Failed to fetch weather data within getWeatherData"),console.log(t.t0),t.abrupt("return",Promise.reject(Error(t.t0)));case 53:case"end":return t.stop()}}),t,null,[[0,48]])})));return function(e){return t.apply(this,arguments)}}();function P(){var t=window;return{windowWidth:t.innerWidth,windowHeight:t.innerHeight}}var F=function(){var t=function(){var t=Object(d.useState)(P()),e=Object(s.a)(t,2),a=e[0],r=e[1];return Object(d.useEffect)((function(){function t(){var t=P();t.windowHeight>a.windowHeight&&r(t)}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}})),a}(),e=function(t){var e=Math.max(0,t-1),a=Object(d.useState)(0),r=Object(s.a)(a,2),n=r[0],c=r[1],o=Object(d.useRef)([0,0]),i=Object(d.useRef)(!1);return[n,function(t){o.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],i.current=!0},function(t){if(i.current){var a=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],r=a[0]-o.current[0],s=a[1]-o.current[1],u=Math.abs(r)<Math.abs(s),l=s>0&&u;s<0&&u&&(c(n<e?n+1:n),i.current=!1),l&&(c(n>0?n-1:n),i.current=!1)}}]}(3),a=Object(s.a)(e,3),r=a[0],n=a[1],c=a[2],o=Object(h.a)(["cityName"]),u=Object(s.a)(o,3),p=u[0],j=u[1],m=u[2],b=Object(d.useState)(p.cityName?p.cityName:""),f=Object(s.a)(b,2),O=f[0],v=f[1],g=Object(d.useState)(),x=Object(s.a)(g,2),N=x[0],T=x[1],D=Object(d.useRef)(!1),M=function(){var t=Object(i.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,C();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(i.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,D.current=!0,t.next=4,Y(O);case 4:e=t.sent,j("cityName",O,{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),T(e),t.next=15;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Failed to fetch weather data"),console.log(t.t0),m("cityName",{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),T();case 15:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(d.useEffect)((function(){p.cityName&&C()}),[]),Object(y.jsx)("div",{className:"App",style:{minHeight:"".concat(t.windowHeight,"px")},children:Object(y.jsxs)("div",{className:"websiteContent",children:[Object(y.jsx)(w,{cityName:O,updateCityName:v,reloadWeather:M}),void 0===N?Object(y.jsx)("div",{className:"noData",children:!1===D.current?Object(y.jsxs)("h1",{children:["Search for a city name.",Object(y.jsx)("br",{}),"Get the weather forecast."]}):Object(y.jsxs)("h1",{children:["Failed to get weather data.",Object(y.jsx)("br",{}),"Try another city."]})}):Object(y.jsxs)("div",{className:"sections",onTouchStart:function(t){return n(t)},onTouchMove:function(t){return c(t)},children:[Object(y.jsx)("div",{className:"container",style:{transform:"translateY(-".concat(100*r,"%)")},children:Object(y.jsx)(_,{dayToDisplay:"Today",weatherData:N.hourly.slice(0,24),currentHour:N.currentHour})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(1-r),"%)")},children:Object(y.jsx)(_,{dayToDisplay:"Tomorrow",weatherData:N.hourly.slice(24,48),currentHour:N.currentHour})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(2-r),"%)")},children:Object(y.jsx)(k,{cityName:p.cityName,weatherData:N})})]})]})})};c.a.render(Object(y.jsx)(o.a,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[345,1,2]]]);
//# sourceMappingURL=main.13945aa8.chunk.js.map