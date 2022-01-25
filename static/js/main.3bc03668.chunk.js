(this.webpackJsonpweather_website=this.webpackJsonpweather_website||[]).push([[0],{187:function(t,e,a){},188:function(t,e,a){},190:function(t,e,a){},191:function(t,e,a){},192:function(t,e,a){},327:function(t,e,a){},345:function(t,e,a){"use strict";a.r(e);var r,n=a(60),c=a.n(n),o=(a(185),a(351)),i=a(62),s=a(16),u=a(26),l=a.n(u),d=(a(187),a(0)),h=a(353),p=(a(188),["title","titleId"]);function j(){return j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},j.apply(this,arguments)}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},c=Object.keys(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function b(t,e){var a=t.title,n=t.titleId,c=m(t,p);return d.createElement("svg",j({id:"SVGRoot",width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},c),a?d.createElement("title",{id:n},a):null,r||(r=d.createElement("g",{stroke:"#000"},d.createElement("ellipse",{cx:5.6727,cy:5.7476,rx:3.0967,ry:3.1013,fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.7101}),d.createElement("path",{d:"m9.2387 9.2405 3.7161 3.7215",fill:"none",strokeWidth:1.6549}),d.createElement("path",{d:"m9.2387 10.481-1.2387-2.481 2.4774 1.2405z",strokeLinejoin:"round",strokeWidth:.46851}))))}var f=d.forwardRef(b),y=(a.p,a(2));function O(t){var e=t.cityName,a=t.updateCityName,r=t.reloadWeather;return Object(y.jsx)("div",{className:"citySearchBar",children:Object(y.jsx)("form",{onSubmit:r,children:Object(y.jsxs)("div",{className:"formComponents",children:[Object(y.jsx)("input",{onChange:function(t){return a(t.target.value)},placeholder:""===e?"City":e,type:"text",id:"cityNameInput",autoFocus:!0}),Object(y.jsx)("button",{type:"submit",children:Object(y.jsx)(f,{className:"magnifyingGlassIcon"})})]})})})}var v=a(174);a(190),a(191);function w(t){var e=t.time,a=t.active;return Object(y.jsxs)("li",{className:a?"hourOfDayListItem active":"hourOfDayListItem",children:[e,":00"]})}a(192);var x=a(347),g=a(354),N=a(172),T=a(175),D=a(169),M=a(171);function C(t){var e=t.currentHour,a=t.weatherData,r=t.dataKey,n=t.plotKey,c=t.unit;return Object(y.jsx)(x.a,{width:"100%",height:"100%",children:Object(y.jsxs)(g.a,{layout:"vertical",width:"100%",height:"100%",data:a,margin:{top:20,left:20,right:20,bottom:0},children:[Object(y.jsx)(N.a,{type:"number",hide:!0,domain:[0,"dataMax + 1"]}),Object(y.jsxs)(T.a,{dataKey:r,barSize:18,background:{fill:"#efefef"},isAnimationActive:!1,children:[Object(y.jsx)(D.a,{dataKey:n,position:"right",formatter:function(t){return t.toFixed(0)+c}}),a.map((function(t,a){return Object(y.jsx)(M.a,{className:a===e?"barCell active":"barCell",fill:a===e?"#aebd38":"#598234",height:18,stroke:"#000",strokeWidth:0,radius:[0,5,5,0]},"cell-".concat(a))}))]})]})})}function _(t){var e=t.dayToDisplay,a=t.weatherData,r=t.currentHour,n=Object(d.useState)(0),c=Object(s.a)(n,2),o=c[0],i=c[1],u=Object(d.useRef)([0,0]),l=Object(d.useRef)([0,0]);function h(){var t=l.current[0]-u.current[0],e=l.current[1]-u.current[1],a=Math.abs(t)>Math.abs(e),r=t>50&&a;t<-50&&a&&i(o<2?o+1:0),r&&i(o>0?o-1:2)}return Object(y.jsx)("div",{className:"weatherForecastForADay",onTouchStart:function(t){return e=t,u.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],void(l.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]);var e},onTouchMove:function(t){return e=t,void(l.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]);var e},onTouchEnd:function(){return h()},onMouseDown:function(t){return(e=t).preventDefault(),u.current=[e.clientX,e.clientY],void(l.current=[e.clientX,e.clientY]);var e},onMouseMove:function(t){return e=t,void(l.current=[e.clientX,e.clientY]);var e},onMouseUp:function(){return h()},children:Object(y.jsxs)("div",{className:"contentContainer",children:[Object(y.jsx)("div",{className:"dayDisplay",children:Object(y.jsx)("h1",{children:e})}),Object(y.jsxs)("div",{className:"forecast",children:[Object(y.jsx)("div",{className:"hoursOfDay",children:Object(y.jsx)("ul",{children:Object(v.a)(Array(24)).map((function(t,e){return Object(y.jsx)(w,{time:e,active:r===e},e)}))})}),Object(y.jsx)("div",{className:"forecastPlot",children:Object(y.jsxs)("div",{className:"plotContainer",children:[Object(y.jsx)("div",{className:"temperaturePlot",style:{transform:"rotateY(".concat(.25*o,"turn)")},children:Object(y.jsx)(C,{currentHour:r,weatherData:a,dataKey:"temperatureForPlot",plotKey:"temperature",unit:"\xb0C"})}),Object(y.jsx)("div",{className:"windPlot",style:{transform:"rotateY(".concat(.25*(o-2),"turn)")},children:Object(y.jsx)(C,{currentHour:r,weatherData:a,dataKey:"wind_speed",plotKey:"wind_speed",unit:"m/s"})}),Object(y.jsx)("div",{className:"rainPlot",style:{transform:"rotateY(".concat(.25*(o-1),"turn)")},children:Object(y.jsx)(C,{currentHour:r,weatherData:a,dataKey:"rain_1h",plotKey:"rain_1h",unit:"mm"})})]})})]})]})})}a(327);function k(t){t.cityName,t.weatherData;return Object(y.jsxs)("div",{className:"weatherForecastForAWeek",children:[Object(y.jsx)("div",{className:"contentContainer",children:Object(y.jsx)("h1",{children:"Forecast for a week"})}),Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("span",{children:["The weather data displayed on this website is provided by",Object(y.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeather (TM)"})," under the",Object(y.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:" Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)"}),". Data and database are open and licensed by ",Object(y.jsx)("a",{href:"https://opendatacommons.org/licenses/odbl/",children:" Open Data Commons Open Database License (ODbL)"}),"."]})})]})}var S=a(70),Y=a.n(S);function P(t){var e=new Date(1e3*t),a=e.getUTCHours(),r=e.getUTCMinutes().toString();r=1===r.length?"0"+r:r;var n=e.getUTCSeconds().toString();return a+":"+r+":"+(n=1===n.length?"0"+n:n)}var H=function(){var t=Object(i.a)(l.a.mark((function t(e){var a,r,n,c,o,i,s,u,d,h,p,j,m,b,f,y,O,v,w,x,g,N,T,D,M,C,_,k,S,H;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 3:return a=t.sent,r=a.data.coord.lat,n=a.data.coord.lon,c=a.data.dt,o=a.data.dt+a.data.timezone,t.next=10,Y.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(c,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 10:if(i=t.sent,s=48,u=[],d=new Date(1e3*o),h=d.getUTCHours(),!((p=i.data.hourly.length-1)<h)){t.next=25;break}return j=c-86400,t.next=20,Y.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(j,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 20:for(m=t.sent,b=h-p,console.assert(b<=m.data.hourly.length),f=m.data.hourly.length-b,y=f;y<m.data.hourly.length;y++)u.push({temperature:Math.round(m.data.hourly[y].temp),wind_deg:m.data.hourly[y].wind_deg,wind_speed:Math.round(m.data.hourly[y].wind_speed),cloudiness:m.data.hourly[y].clouds,weather:m.data.hourly[y].weather,probabilityOfPrecipitation:0,rain_1h:"rain"in m.data.hourly[y]?Math.round(m.data.hourly[y].rain["1h"]):0,snow_1h:"snow"in m.data.hourly[y]?Math.round(m.data.hourly[y].snow["1h"]):0,timeUTC:P(m.data.hourly[y].dt),timeLocal:P(m.data.hourly[y].dt+a.data.timezone),dt:m.data.hourly[y].dt});case 25:for(O=u.length,v=p-(h-O);v<p;v++)u.push({temperature:Math.round(i.data.hourly[v].temp),wind_deg:i.data.hourly[v].wind_deg,wind_speed:Math.round(i.data.hourly[v].wind_speed),cloudiness:i.data.hourly[v].clouds,weather:i.data.hourly[v].weather,probabilityOfPrecipitation:0,rain_1h:"rain"in i.data.hourly[v]?Math.round(i.data.hourly[v].rain["1h"]):0,snow_1h:"snow"in i.data.hourly[v]?Math.round(i.data.hourly[v].snow["1h"]):0,timeUTC:P(i.data.hourly[v].dt),timeLocal:P(i.data.hourly[v].dt+a.data.timezone),dt:i.data.hourly[v].dt});return"current,minutely,alerts",t.next=31,Y.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(n,"&units=metric&exclude=").concat("current,minutely,alerts","&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 31:for(w=t.sent,x=s-u.length,console.assert(x<=w.data.hourly.length),g=0;g<x;g++)u.push({temperature:Math.round(w.data.hourly[g].temp),wind_deg:w.data.hourly[g].wind_deg,wind_speed:Math.round(w.data.hourly[g].wind_speed),cloudiness:w.data.hourly[g].clouds,weather:w.data.hourly[g].weather,probabilityOfPrecipitation:"pop"in w.data.hourly[g]?w.data.hourly[g].pop:0,rain_1h:"rain"in w.data.hourly[g]?Math.round(w.data.hourly[g].rain["1h"]):0,snow_1h:"snow"in w.data.hourly[g]?Math.round(w.data.hourly[g].snow["1h"]):0,timeUTC:P(w.data.hourly[g].dt),timeLocal:P(w.data.hourly[g].dt+a.data.timezone),dt:w.data.hourly[g].dt});for(N=0,T=23,D=function(t){for(var e=[],a=N;a<=T;a++)e.push(u[a].temperature);for(var r=Math.min.apply(Math,e),n=e.map((function(t){return t-(r-1)})),c=0,o=N;o<=T;o++)u[o].temperatureForPlot=n[c],c++;N+=24,T+=24},M=0;M<2;M++)D();return C={hourly:u},_=Date.now(),k=_+1e3*a.data.timezone,S=new Date(k),H=S.getUTCHours(),C.currentHour=H,t.abrupt("return",Promise.resolve(C));case 48:return t.prev=48,t.t0=t.catch(0),console.log("Failed to fetch weather data within getWeatherData"),console.log(t.t0),t.abrupt("return",Promise.reject(Error(t.t0)));case 53:case"end":return t.stop()}}),t,null,[[0,48]])})));return function(e){return t.apply(this,arguments)}}();var F=function(){var t=function(t){var e=Math.max(0,t-1),a=Object(d.useState)(0),r=Object(s.a)(a,2),n=r[0],c=r[1],o=Object(d.useRef)([0,0]),i=Object(d.useRef)(!1);return[n,function(t){o.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],i.current=!0},function(t){if(i.current){var a=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],r=a[0]-o.current[0],s=a[1]-o.current[1],u=Math.abs(r)<Math.abs(s),l=s>0&&u;s<0&&u&&(c(n<e?n+1:n),i.current=!1),l&&(c(n>0?n-1:n),i.current=!1)}}]}(3),e=Object(s.a)(t,3),a=e[0],r=e[1],n=e[2],c=Object(h.a)(["cityName"]),o=Object(s.a)(c,3),u=o[0],p=o[1],j=o[2],m=Object(d.useState)(u.cityName?u.cityName:""),b=Object(s.a)(m,2),f=b[0],v=b[1],w=Object(d.useState)(),x=Object(s.a)(w,2),g=x[0],N=x[1],T=Object(d.useRef)(!1),D=function(){var t=Object(i.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,M();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(i.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T.current=!0,t.next=4,H(f);case 4:e=t.sent,p("cityName",f,{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),N(e),t.next=15;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("Failed to fetch weather data"),console.log(t.t0),j("cityName",{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),N();case 15:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(d.useEffect)((function(){u.cityName&&M()}),[]),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("div",{className:"websiteContent",children:[Object(y.jsx)(O,{cityName:f,updateCityName:v,reloadWeather:D}),void 0===g?Object(y.jsx)("div",{className:"noData",children:!1===T.current?Object(y.jsxs)("h1",{children:["Search for a city name.",Object(y.jsx)("br",{}),"Get the weather forecast."]}):Object(y.jsxs)("h1",{children:["Failed to get weather data.",Object(y.jsx)("br",{}),"Try another city."]})}):Object(y.jsxs)("div",{className:"sections",onTouchStart:function(t){return r(t)},onTouchMove:function(t){return n(t)},children:[Object(y.jsx)("div",{className:"container",style:{transform:"translateY(-".concat(100*a,"%)")},children:Object(y.jsx)(_,{dayToDisplay:"Today",weatherData:g.hourly.slice(0,24),currentHour:g.currentHour})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(1-a),"%)")},children:Object(y.jsx)(_,{dayToDisplay:"Tomorrow",weatherData:g.hourly.slice(24,48),currentHour:g.currentHour})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(2-a),"%)")},children:Object(y.jsx)(k,{cityName:u.cityName,weatherData:g})})]})]})})};c.a.render(Object(y.jsx)(o.a,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[345,1,2]]]);
//# sourceMappingURL=main.3bc03668.chunk.js.map