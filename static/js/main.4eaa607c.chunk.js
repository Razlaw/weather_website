(this.webpackJsonpweather_website=this.webpackJsonpweather_website||[]).push([[0],{32:function(e,t,r){},33:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var a,n=r(24),o=r.n(n),i=(r(30),r(59)),s=r(7),c=r(4),l=r(3),u=r.n(l),d=(r(32),r(1)),h=r(60),f=(r(33),["title","titleId"]);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m(e,t){var r=e.title,n=e.titleId,o=y(e,f);return d.createElement("svg",p({id:"SVGRoot",width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),r?d.createElement("title",{id:n},r):null,a||(a=d.createElement("g",{stroke:"#000"},d.createElement("ellipse",{cx:5.6727,cy:5.7476,rx:3.0967,ry:3.1013,fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.7101}),d.createElement("path",{d:"m9.2387 9.2405 3.7161 3.7215",fill:"none",strokeWidth:1.6549}),d.createElement("path",{d:"m9.2387 10.481-1.2387-2.481 2.4774 1.2405z",strokeLinejoin:"round",strokeWidth:.46851}))))}var j=d.forwardRef(m),b=(r.p,r(0));function x(e){var t=e.cityName,r=e.updateCityName,a=e.reloadWeather;return Object(b.jsx)("div",{className:"citySearchBar",children:Object(b.jsx)("form",{onSubmit:a,children:Object(b.jsxs)("div",{className:"formComponents",children:[Object(b.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&e.target.blur()},onChange:function(e){return r(e.target.value)},placeholder:""===t?"City":t,type:"text",id:"cityNameInput",autoFocus:!0}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)(j,{className:"magnifyingGlassIcon"})})]})})})}var O=r(5);r(35),r(36);function v(e){var t=e.time,r=e.active,a=e.sunrise,n=e.sunset,o="hourOfDayListItem";return o=r?o+" active":o,o=t<a||t>n?o+" night":o+" day",o=t===a||t===n?o+" twilight":o,Object(b.jsx)("li",{className:o,children:Object(b.jsxs)("span",{children:[t,":00"]})})}r(37);function w(e,t){for(var r="M 0,0 ",a=Number.MAX_VALUE,n=-Number.MAX_VALUE,o=0;o<e.length;o++)a=Math.min(a,e[o][t]),n=Math.max(n,e[o][t]);a-=Math.max(1,.2*(n-a));for(var i=0;i<e.length;i++){r+="H "+(e[i][t]-a).toString()+" ",r+="v 1 "}return r+="L 0,"+e.length.toString()+" z"}function g(e){var t=e.dayID,r=e.plotID,a=(e.currentHour,e.weatherData),n=e.dataKey,o=r.toString()+t.toString();return Object(d.useEffect)((function(){var e=document.querySelector("."+o),t=Object(O.a)(e.children).reduce((function(e,t){var r=t.getBBox(),a=r.x,n=r.y,o=r.width,i=r.height;return(!e.xMin||a<e.xMin)&&(e.xMin=a),(!e.xMax||a+o>e.xMax)&&(e.xMax=a+o),(!e.yMin||n<e.yMin)&&(e.yMin=n),(!e.yMax||n+i>e.yMax)&&(e.yMax=n+i),e}),{}),r=t.xMin,a=t.xMax,n=t.yMin,i=t.yMax,s="".concat(r," ").concat(n," ").concat(Math.max(a-r,5)," ").concat(i-n);e.setAttribute("viewBox",s)}),[a]),Object(b.jsxs)("svg",{className:"svgPlot "+o,viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsxs)("defs",{children:[Object(b.jsxs)("filter",{id:"inset-shadow",children:[Object(b.jsx)("feOffset",{dx:"0.1",dy:"0.1"}),Object(b.jsx)("feGaussianBlur",{stdDeviation:"0.4",result:"offset-blur"}),Object(b.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:"offset-blur",result:"inverse"}),Object(b.jsx)("feFlood",{floodColor:"black",floodOpacity:".95",result:"color"}),Object(b.jsx)("feComposite",{operator:"in",in:"color",in2:"inverse",result:"shadow"}),Object(b.jsx)("feComposite",{operator:"over",in:"shadow",in2:"SourceGraphic"})]}),Object(b.jsx)("path",{id:o,stroke:"#efefef",fill:"none",strokeWidth:"4",vectorEffect:"non-scaling-stroke",d:w(a,n)}),Object(b.jsx)("clipPath",{id:"clip"+o,children:Object(b.jsx)("use",{href:"#"+o})})]}),Object(b.jsx)("path",{className:"shadowPath",fill:"#505160",strokeWidth:"0",vectorEffect:"non-scaling-stroke",d:w(a,n),filter:"url(#inset-shadow)"}),Object(b.jsx)("use",{href:"#"+o,clipPath:"url(#clip"+o+")"})]})}var k;r(38);function D(e){var t=e.data,r=e.time,a=e.active,n=e.sunrise,o=e.sunset,i="dataListItem";return i=a?i+" active":i,i=r<n||r>o?i+" night":i+" day",i=r===n||r===o?i+" twilight":i,Object(b.jsx)("li",{className:i,children:Object(b.jsx)("span",{children:t})})}var N=["title","titleId"];function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},S.apply(this,arguments)}function C(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E(e,t){var r=e.title,a=e.titleId,n=C(e,N);return d.createElement("svg",S({id:"SVGRoot",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?d.createElement("title",{id:a},r):null,d.createElement("defs",null,d.createElement("linearGradient",{id:"linearGradient1407",x1:9.6003,x2:6.8909,y1:.92964,y2:14.12,gradientTransform:"matrix(1.0567 0 0 1.0567 -.1002 -.54263)",gradientUnits:"userSpaceOnUse"},k||(k=d.createElement("stop",{stopColor:"#fff703",offset:0})),d.createElement("stop",{stopColor:"#ff9d03",style:{stopColor:"#ffba03"},offset:1})),d.createElement("linearGradient",{id:"linearGradient1464",x1:9.7033,x2:6.8973,y1:.78426,y2:14.425,gradientTransform:"matrix(1.0567 0 0 1.0567 -.1002 -.54263)",gradientUnits:"userSpaceOnUse"},d.createElement("stop",{stopColor:"#fff703",style:{stopColor:"#ffeb03"},offset:0}),d.createElement("stop",{stopColor:"#ff9d03",style:{stopColor:"#ffc603"},offset:1}))),d.createElement("g",{style:{stroke:"url(#linearGradient1407)"}},d.createElement("g",{style:{stroke:"url(#linearGradient1464)"}},d.createElement("path",{d:"m5.6575 10.164a3.2257 3.2257 0 0 1-0.50894-3.7257 3.2257 3.2257 0 0 1 3.3659-1.6764 3.2257 3.2257 0 0 1 2.6669 2.6509 3.2257 3.2257 0 0 1-1.6562 3.3759",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m11.413 13.284 0.3205 0.49871",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m14.195 9.2001 0.47167 0.093357",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m2.7224 11.482-0.45254 0.30119",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m7.4029 11.775-0.13444 0.563",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m1.2873 6.4551 0.53279 0.12057",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m13.72 4.1626-0.45696 0.30413",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m4.4848 2.6989-0.30021-0.45107",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}),d.createElement("path",{d:"m9.3942 1.7904 0.11881-0.52502",style:{fill:"none",strokeLinecap:"round",strokeWidth:1.5,stroke:"url(#linearGradient1464)"}}))))}var M=d.forwardRef(E);r.p;function I(e){var t=e.dayID,r=e.plotID,a=e.currentHour,n=e.weatherData,o=e.dataKey,i=e.plotKey,s=(e.unit,e.sunrise),c=e.sunset;e.decimalPrecision;return Object(b.jsxs)("div",{className:"plotAndDataContainer",children:[Object(b.jsx)("div",{className:"iconContainer",children:Object(b.jsx)("ul",{children:Object(O.a)(Array(24)).map((function(e,t){return Object(b.jsx)(M,{className:"sunnyIcon"})}))})}),Object(b.jsx)("div",{className:"dataContainer",children:Object(b.jsx)("ul",{children:Object(O.a)(Array(24)).map((function(e,t){return Object(b.jsx)(D,{data:n[t][o],time:t,active:a===t,sunrise:s,sunset:c},t)}))})}),Object(b.jsx)("div",{className:"plotContainer",children:Object(b.jsx)(g,{dayID:t,plotID:r,currentHour:a,weatherData:n,dataKey:i})})]})}function _(e){var t=e.dayId,r=e.weatherData,a=e.currentHour,n=e.hourOfSunrise,o=e.hourOfSunset,i=e.slideID,s=0===t?"Today":"Tomorrow";return Object(b.jsx)("div",{className:"weatherForecastForADay",children:Object(b.jsxs)("div",{className:"contentContainer",children:[Object(b.jsx)("div",{className:"dayDisplay",children:Object(b.jsx)("h1",{children:s})}),Object(b.jsxs)("div",{className:"forecast",children:[Object(b.jsx)("div",{className:"hoursOfDay",children:Object(b.jsx)("ul",{children:Object(O.a)(Array(24)).map((function(e,t){return Object(b.jsx)(v,{time:t,active:a===t,sunrise:n,sunset:o},t)}))})}),Object(b.jsx)("div",{className:"forecastPlot",children:Object(b.jsxs)("div",{className:"plotsContainer",children:[Object(b.jsxs)("div",{className:"temperatureAndWindPlotContainer",style:{transform:"rotateY(".concat(.25*i,"turn)")},children:[Object(b.jsx)(I,{dayID:t,plotID:"temperature",currentHour:a,weatherData:r,dataKey:"temperature",plotKey:"temperatureForPlot",unit:"\xb0C",sunrise:n,sunset:o}),Object(b.jsx)(I,{dayID:t,plotID:"wind",currentHour:a,weatherData:r,dataKey:"wind_speed",plotKey:"wind_speed",unit:"km/h",sunrise:n,sunset:o})]}),Object(b.jsxs)("div",{className:"rainPlotContainer",style:{transform:"rotateY(".concat(.25*(i-1),"turn)")},children:[Object(b.jsx)(I,{dayID:t,plotID:"probabilityOfPrecipitation",currentHour:a,weatherData:r,dataKey:"probabilityOfPrecipitation",plotKey:"probabilityOfPrecipitation",unit:"%",sunrise:n,sunset:o}),Object(b.jsx)(I,{dayID:t,plotID:"rain",currentHour:a,weatherData:r,dataKey:"rain_1h",plotKey:"rain_1h",unit:"mm",sunrise:n,sunset:o,decimalPrecision:1})]})]})})]})]})})}r(39);function P(e){e.cityName,e.weatherData;return Object(b.jsxs)("div",{className:"weatherForecastForAWeek",children:[Object(b.jsx)("div",{className:"contentContainer",children:Object(b.jsx)("h1",{children:"Forecast for a week"})}),Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("span",{children:["The weather data displayed on this website is provided by",Object(b.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeather (TM)"})," under the",Object(b.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:" Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)"}),". Data and database are open and licensed by ",Object(b.jsx)("a",{href:"https://opendatacommons.org/licenses/odbl/",children:" Open Data Commons Open Database License (ODbL)"}),"."]})})]})}var L=r(9),T=r.n(L);function G(e){var t=new Date(1e3*e),r=t.getUTCHours(),a=t.getUTCMinutes().toString();a=1===a.length?"0"+a:a;var n=t.getUTCSeconds().toString();return r+":"+a+":"+(n=1===n.length?"0"+n:n)}function H(){return window.innerHeight}var W=function(){var e=Object(s.a)(u.a.mark((function e(t){var r,a,n,o,i,s,c,l,d,h,f,p,y,m,j,b,x,O,v,w,g,k,D,N,S,C,E,M,I,_,P,L,H,W,A,F,U;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 3:return r=e.sent,a=r.data.coord.lat,n=r.data.coord.lon,o=r.data.dt,i=r.data.dt+r.data.timezone,e.next=10,T.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(a,"&lon=").concat(n,"&dt=").concat(o,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 10:if(s=e.sent,c=48,l=[],d=new Date(1e3*i),h=d.getUTCHours(),!((f=s.data.hourly.length-1)<h)){e.next=25;break}return p=o-86400,e.next=20,T.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(a,"&lon=").concat(n,"&dt=").concat(p,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 20:for(y=e.sent,m=h-f,console.assert(m<=y.data.hourly.length),j=y.data.hourly.length-m,b=j;b<y.data.hourly.length;b++)x="rain"in y.data.hourly[b]&&y.data.hourly[b].rain["1h"]>0||"snow"in y.data.hourly[b]&&y.data.hourly[b].snow["1h"]>0,l.push({temperature:Math.round(y.data.hourly[b].temp),wind_deg:y.data.hourly[b].wind_deg,wind_speed:Math.round(3.6*y.data.hourly[b].wind_speed),cloudiness:y.data.hourly[b].clouds,weather:y.data.hourly[b].weather,probabilityOfPrecipitation:x?100:0,rain_1h:"rain"in y.data.hourly[b]?y.data.hourly[b].rain["1h"].toFixed(1):0,snow_1h:"snow"in y.data.hourly[b]?y.data.hourly[b].snow["1h"].toFixed(1):0,timeUTC:G(y.data.hourly[b].dt),timeLocal:G(y.data.hourly[b].dt+r.data.timezone),dt:y.data.hourly[b].dt});case 25:for(O=l.length,v=f-(h-O);v<f;v++)w="rain"in s.data.hourly[v]&&s.data.hourly[v].rain["1h"]>0||"snow"in s.data.hourly[v]&&s.data.hourly[v].snow["1h"]>0,l.push({temperature:Math.round(s.data.hourly[v].temp),wind_deg:s.data.hourly[v].wind_deg,wind_speed:Math.round(3.6*s.data.hourly[v].wind_speed),cloudiness:s.data.hourly[v].clouds,weather:s.data.hourly[v].weather,probabilityOfPrecipitation:w?100:0,rain_1h:"rain"in s.data.hourly[v]?s.data.hourly[v].rain["1h"].toFixed(1):0,snow_1h:"snow"in s.data.hourly[v]?s.data.hourly[v].snow["1h"].toFixed(1):0,timeUTC:G(s.data.hourly[v].dt),timeLocal:G(s.data.hourly[v].dt+r.data.timezone),dt:s.data.hourly[v].dt});return"current,minutely,alerts",e.next=31,T.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&units=metric&exclude=").concat("current,minutely,alerts","&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 31:for(g=e.sent,k=c-l.length,console.assert(k<=g.data.hourly.length),D=0;D<k;D++)l.push({temperature:Math.round(g.data.hourly[D].temp),wind_deg:g.data.hourly[D].wind_deg,wind_speed:Math.round(3.6*g.data.hourly[D].wind_speed),cloudiness:g.data.hourly[D].clouds,weather:g.data.hourly[D].weather,probabilityOfPrecipitation:"pop"in g.data.hourly[D]?(100*g.data.hourly[D].pop).toFixed():0,rain_1h:"rain"in g.data.hourly[D]?g.data.hourly[D].rain["1h"].toFixed(1):0,snow_1h:"snow"in g.data.hourly[D]?g.data.hourly[D].snow["1h"].toFixed(1):0,timeUTC:G(g.data.hourly[D].dt),timeLocal:G(g.data.hourly[D].dt+r.data.timezone),dt:g.data.hourly[D].dt});for(N=0,S=23,C=function(e){for(var t=[],r=N;r<=S;r++)t.push(l[r].temperature);for(var a=Math.min.apply(Math,t),n=t.map((function(e){return e-(a-1)})),o=0,i=N;i<=S;i++)l[i].temperatureForPlot=n[o],o++;N+=24,S+=24},E=0;E<2;E++)C();for(M={hourly:l},I=Date.now(),_=I+1e3*r.data.timezone,P=new Date(_),L=P.getUTCHours(),M.currentHour=L,M.hoursOfSunrise=[],M.hoursOfSunset=[],H=0;H<2;H++)W=new Date(1e3*(g.data.daily[H].sunrise+r.data.timezone)),A=W.getUTCHours(),F=new Date(1e3*(g.data.daily[H].sunset+r.data.timezone)),U=F.getUTCHours(),M.hoursOfSunrise.push(A),M.hoursOfSunset.push(U);return e.abrupt("return",Promise.resolve(M));case 51:return e.prev=51,e.t0=e.catch(0),console.log("Failed to fetch weather data within getWeatherData"),console.log(e.t0),e.abrupt("return",Promise.reject(Error(e.t0)));case 56:case"end":return e.stop()}}),e,null,[[0,51]])})));return function(t){return e.apply(this,arguments)}}();var A=function(){var e=function(){var e=Object(d.useState)(H()),t=Object(c.a)(e,2),r=t[0],a=t[1];return Object(d.useEffect)((function(){function e(){var e=H();e>r&&a(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),r}(),t=function(e,t){var r={x:0,y:0},a=Math.max(0,e-1),n=Math.max(0,t-1),o=Object(d.useState)(r),i=Object(c.a)(o,2),s=i[0],l=i[1],u=Object(d.useRef)([0,0]),h=Object(d.useRef)(!1);return[s,function(e){e.preventDefault(),u.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],h.current=!0},function(e){if(e.preventDefault(),h.current){var t=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],o=t[0]-u.current[0],i=t[1]-u.current[1];if(Math.abs(o)>Math.abs(i)){var c=o<0;if(o>0){var d=s.x>r.x?s.x-1:s.x;l({x:d,y:s.y})}if(c){var f=s.x<a?s.x+1:s.x;l({x:f,y:s.y})}h.current=!1}else{var p=i<0;if(i>0){var y=s.y>r.y?s.y-1:s.y;l({x:r.x,y:y})}if(p){var m=s.y<n?s.y+1:s.y;l({x:r.x,y:m})}h.current=!1}}}]}(2,3),r=Object(c.a)(t,3),a=r[0],n=r[1],o=r[2],i=Object(h.a)(["cityName"]),l=Object(c.a)(i,3),f=l[0],p=l[1],y=l[2],m=Object(d.useState)(f.cityName?f.cityName:""),j=Object(c.a)(m,2),O=j[0],v=j[1],w=Object(d.useState)(),g=Object(c.a)(w,2),k=g[0],D=g[1],N=Object(d.useRef)(!1),S=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N.current=!0,e.next=4,W(O);case 4:t=e.sent,p("cityName",O,{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),D(t),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Failed to fetch weather data"),console.log(e.t0),y("cityName",{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),D();case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){f.cityName&&C()}),[]),Object(b.jsx)("div",{className:"App",style:{minHeight:"".concat(e,"px")},children:Object(b.jsxs)("div",{className:"websiteContent",children:[Object(b.jsx)(x,{cityName:O,updateCityName:v,reloadWeather:S}),void 0===k?Object(b.jsx)("div",{className:"noData",children:!1===N.current?Object(b.jsxs)("h1",{children:["Search for a city name.",Object(b.jsx)("br",{}),"Get the weather forecast."]}):Object(b.jsxs)("h1",{children:["Failed to get weather data.",Object(b.jsx)("br",{}),"Try another city."]})}):Object(b.jsxs)("div",{className:"sections",onTouchStart:function(e){return n(e)},onTouchMove:function(e){return o(e)},children:[Object(b.jsx)("div",{className:"container",style:{transform:"translateY(-".concat(100*a.y,"%)")},children:Object(b.jsx)(_,{dayId:0,weatherData:k.hourly.slice(0,24),currentHour:k.currentHour,hourOfSunrise:k.hoursOfSunrise[0],hourOfSunset:k.hoursOfSunset[0],slideID:a.x})}),Object(b.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(1-a.y),"%)")},children:Object(b.jsx)(_,{dayId:1,weatherData:k.hourly.slice(24,48),currentHour:k.currentHour,hourOfSunrise:k.hoursOfSunrise[1],hourOfSunset:k.hoursOfSunset[1],slideID:a.x})}),Object(b.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(2-a.y),"%)")},children:Object(b.jsx)(P,{cityName:f.cityName,weatherData:k})})]})]})})};o.a.render(Object(b.jsx)(i.a,{children:Object(b.jsx)(A,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4eaa607c.chunk.js.map