(this.webpackJsonpweather_website=this.webpackJsonpweather_website||[]).push([[0],{32:function(e,t,r){},33:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var a,n=r(24),o=r.n(n),c=(r(30),r(60)),i=r(7),s=r(3),u=r(4),l=r.n(u),d=(r(32),r(1)),h=r(61),f=(r(33),["title","titleId"]);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function b(e,t){var r=e.title,n=e.titleId,o=j(e,f);return d.createElement("svg",p({id:"SVGRoot",width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),r?d.createElement("title",{id:n},r):null,a||(a=d.createElement("g",{stroke:"#000"},d.createElement("ellipse",{cx:5.6727,cy:5.7476,rx:3.0967,ry:3.1013,fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.7101}),d.createElement("path",{d:"m9.2387 9.2405 3.7161 3.7215",fill:"none",strokeWidth:1.6549}),d.createElement("path",{d:"m9.2387 10.481-1.2387-2.481 2.4774 1.2405z",strokeLinejoin:"round",strokeWidth:.46851}))))}var m=d.forwardRef(b),y=(r.p,r(0));function O(e){var t=e.cityName,r=e.updateCityName,a=e.reloadWeather;return Object(y.jsx)("div",{className:"citySearchBar",children:Object(y.jsx)("form",{onSubmit:a,children:Object(y.jsxs)("div",{className:"formComponents",children:[Object(y.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&e.target.blur()},onChange:function(e){return r(e.target.value)},placeholder:""===t?"City":t,type:"text",id:"cityNameInput",autoFocus:!0}),Object(y.jsx)("button",{type:"submit",children:Object(y.jsx)(m,{className:"magnifyingGlassIcon"})})]})})})}var x=r(5);r(35),r(36);function v(e){var t=e.time,r=e.active,a=e.sunrise,n=e.sunset,o="hourOfDayListItem";return o=r?o+" active":o,o=t<a||t>n?o+" night":o+" day",o=t===a||t===n?o+" twilight":o,Object(y.jsx)("li",{className:o,children:Object(y.jsxs)("span",{children:[t,":00"]})})}r(37),r(38);function w(e,t){for(var r="M 0,0 ",a=Number.MAX_VALUE,n=-Number.MAX_VALUE,o=0;o<e.length;o++)a=Math.min(a,e[o][t]),n=Math.max(n,e[o][t]);a-=Math.max(1,.2*(n-a));for(var c=0;c<e.length;c++){r+="H "+(e[c][t]-a).toString()+" ",r+="v 1 "}return r+="L 0,"+e.length.toString()+" z"}function g(e){var t=e.dayID,r=e.plotID,a=(e.currentHour,e.weatherData),n=e.dataKey,o=r.toString()+t.toString();return Object(d.useEffect)((function(){var e=document.querySelector("."+o),t=Object(x.a)(e.children).reduce((function(e,t){var r=t.getBBox(),a=r.x,n=r.y,o=r.width,c=r.height;return(!e.xMin||a<e.xMin)&&(e.xMin=a),(!e.xMax||a+o>e.xMax)&&(e.xMax=a+o),(!e.yMin||n<e.yMin)&&(e.yMin=n),(!e.yMax||n+c>e.yMax)&&(e.yMax=n+c),e}),{}),r=t.xMin,a=t.xMax,n=t.yMin,c=t.yMax,i="".concat(r," ").concat(n," ").concat(Math.max(a-r,5)," ").concat(c-n);e.setAttribute("viewBox",i)}),[a]),Object(y.jsxs)("svg",{className:"svgPlot "+o,viewBox:"0 0 100 100",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(y.jsxs)("defs",{children:[Object(y.jsxs)("filter",{id:"inset-shadow",children:[Object(y.jsx)("feOffset",{dx:"0.1",dy:"0.1"}),Object(y.jsx)("feGaussianBlur",{stdDeviation:"0.4",result:"offset-blur"}),Object(y.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:"offset-blur",result:"inverse"}),Object(y.jsx)("feFlood",{floodColor:"black",floodOpacity:".95",result:"color"}),Object(y.jsx)("feComposite",{operator:"in",in:"color",in2:"inverse",result:"shadow"}),Object(y.jsx)("feComposite",{operator:"over",in:"shadow",in2:"SourceGraphic"})]}),Object(y.jsx)("path",{id:o,stroke:"#efefef",fill:"none",strokeWidth:"4",vectorEffect:"non-scaling-stroke",d:w(a,n)}),Object(y.jsx)("clipPath",{id:"clip"+o,children:Object(y.jsx)("use",{href:"#"+o})})]}),Object(y.jsx)("path",{className:"shadowPath",fill:"#505160",strokeWidth:"0",vectorEffect:"non-scaling-stroke",d:w(a,n),filter:"url(#inset-shadow)"}),Object(y.jsx)("use",{href:"#"+o,clipPath:"url(#clip"+o+")"})]})}var D,N;r(39);function S(e){var t=e.data,r=e.time,a=e.active,n=e.sunrise,o=e.sunset,c="dataListItem";return c=a?c+" active":c,c=r<n||r>o?c+" night":c+" day",c=r===n||r===o?c+" twilight":c,Object(y.jsx)("li",{className:c,children:Object(y.jsx)("span",{children:t})})}var M=["title","titleId"];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},C.apply(this,arguments)}function T(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E(e,t){var r=e.title,a=e.titleId,n=T(e,M);return d.createElement("svg",C({id:"SVGRoot",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?d.createElement("title",{id:a},r):null,D||(D=d.createElement("defs",null,d.createElement("linearGradient",{id:"linearGradient2123",x1:8.5366,x2:8.389,y1:1.0261,y2:14.955,gradientTransform:"matrix(1.0567 0 0 1.0567 -.1002 -.54263)",gradientUnits:"userSpaceOnUse"},d.createElement("stop",{stopColor:"#fff703",offset:0}),d.createElement("stop",{stopColor:"#ff9d03",offset:1})))),N||(N=d.createElement("g",null,d.createElement("path",{d:"m16 8a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8z",fill:"#ffffff"}),d.createElement("path",{d:"m15.558 7.9011a7.1399 7.1399 0 0 1-7.1399 7.1399 7.1399 7.1399 0 0 1-7.1399-7.1399 7.1399 7.1399 0 0 1 7.1399-7.1399 7.1399 7.1399 0 0 1 7.1399 7.1399z",fill:"url(#linearGradient2123)"}))))}var I=d.forwardRef(E);r.p;function k(e){var t=e.dayID,r=e.plotID,a=e.currentHour,n=e.weatherData,o=e.dataKey,c=e.plotKey,i=(e.unit,e.sunrise),s=e.sunset;e.decimalPrecision;return Object(y.jsxs)("div",{className:"plotAndDataContainer",children:[Object(y.jsx)("div",{className:"iconContainer",children:Object(y.jsx)("ul",{children:Object(x.a)(Array(24)).map((function(e,t){return Object(y.jsx)(I,{className:"sunnyIcon"})}))})}),Object(y.jsx)("div",{className:"dataContainer",children:Object(y.jsx)("ul",{children:Object(x.a)(Array(24)).map((function(e,t){return Object(y.jsx)(S,{data:n[t][o],time:t,active:a===t,sunrise:i,sunset:s},t)}))})}),Object(y.jsx)("div",{className:"plotContainer",children:Object(y.jsx)(g,{dayID:t,plotID:r,currentHour:a,weatherData:n,dataKey:c})})]})}function _(e){var t=e.dayId,r=e.weatherData,a=e.currentHour,n=e.hourOfSunrise,o=e.hourOfSunset,c=0===t?"Today":"Tomorrow",i=Object(d.useState)(0),u=Object(s.a)(i,2),l=u[0],h=u[1],f=Object(d.useRef)([0,0]),p=Object(d.useRef)([0,0]);function j(e){e.preventDefault();var t=p.current[0]-f.current[0],r=p.current[1]-f.current[1],a=Math.abs(t)>Math.abs(r),n=t>50&&a;t<-50&&a&&h(l<1?l+1:0),n&&h(l>0?l-1:1)}return Object(y.jsx)("div",{className:"weatherForecastForADay",onTouchStart:function(e){return(t=e).preventDefault(),f.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],void(p.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY]);var t},onTouchMove:function(e){return(t=e).preventDefault(),void(p.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY]);var t},onTouchEnd:function(e){return j(e)},onMouseDown:function(e){return(t=e).preventDefault(),f.current=[t.clientX,t.clientY],void(p.current=[t.clientX,t.clientY]);var t},onMouseMove:function(e){return t=e,void(p.current=[t.clientX,t.clientY]);var t},onMouseUp:function(e){return j(e)},children:Object(y.jsxs)("div",{className:"contentContainer",children:[Object(y.jsx)("div",{className:"dayDisplay",children:Object(y.jsx)("h1",{children:c})}),Object(y.jsxs)("div",{className:"forecast",children:[Object(y.jsx)("div",{className:"hoursOfDay",children:Object(y.jsx)("ul",{children:Object(x.a)(Array(24)).map((function(e,t){return Object(y.jsx)(v,{time:t,active:a===t,sunrise:n,sunset:o},t)}))})}),Object(y.jsx)("div",{className:"forecastPlot",children:Object(y.jsxs)("div",{className:"plotsContainer",children:[Object(y.jsxs)("div",{className:"temperatureAndWindPlotContainer",style:{transform:"rotateY(".concat(.25*l,"turn)")},children:[Object(y.jsx)(k,{dayID:t,plotID:"temperature",currentHour:a,weatherData:r,dataKey:"temperature",plotKey:"temperatureForPlot",unit:"\xb0C",sunrise:n,sunset:o}),Object(y.jsx)(k,{dayID:t,plotID:"wind",currentHour:a,weatherData:r,dataKey:"wind_speed",plotKey:"wind_speed",unit:"km/h",sunrise:n,sunset:o})]}),Object(y.jsxs)("div",{className:"rainPlotContainer",style:{transform:"rotateY(".concat(.25*(l-1),"turn)")},children:[Object(y.jsx)(k,{dayID:t,plotID:"probabilityOfPrecipitation",currentHour:a,weatherData:r,dataKey:"probabilityOfPrecipitation",plotKey:"probabilityOfPrecipitation",unit:"%",sunrise:n,sunset:o}),Object(y.jsx)(k,{dayID:t,plotID:"rain",currentHour:a,weatherData:r,dataKey:"rain_1h",plotKey:"rain_1h",unit:"mm",sunrise:n,sunset:o,decimalPrecision:1})]})]})})]})]})})}r(40);function P(e){e.cityName,e.weatherData;return Object(y.jsxs)("div",{className:"weatherForecastForAWeek",children:[Object(y.jsx)("div",{className:"contentContainer",children:Object(y.jsx)("h1",{children:"Forecast for a week"})}),Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("span",{children:["The weather data displayed on this website is provided by",Object(y.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeather (TM)"})," under the",Object(y.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:" Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)"}),". Data and database are open and licensed by ",Object(y.jsx)("a",{href:"https://opendatacommons.org/licenses/odbl/",children:" Open Data Commons Open Database License (ODbL)"}),"."]})})]})}var H=r(9),A=r.n(H);function F(e){var t=new Date(1e3*e),r=t.getUTCHours(),a=t.getUTCMinutes().toString();a=1===a.length?"0"+a:a;var n=t.getUTCSeconds().toString();return r+":"+a+":"+(n=1===n.length?"0"+n:n)}function U(){return window.innerHeight}var L=function(){var e=Object(i.a)(l.a.mark((function e(t){var r,a,n,o,c,i,s,u,d,h,f,p,j,b,m,y,O,x,v,w,g,D,N,S,M,C,T,E,I,k,_,P,H,U,L,Y,z;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 3:return r=e.sent,a=r.data.coord.lat,n=r.data.coord.lon,o=r.data.dt,c=r.data.dt+r.data.timezone,e.next=10,A.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(a,"&lon=").concat(n,"&dt=").concat(o,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 10:if(i=e.sent,s=48,u=[],d=new Date(1e3*c),h=d.getUTCHours(),!((f=i.data.hourly.length-1)<h)){e.next=25;break}return p=o-86400,e.next=20,A.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(a,"&lon=").concat(n,"&dt=").concat(p,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 20:for(j=e.sent,b=h-f,console.assert(b<=j.data.hourly.length),m=j.data.hourly.length-b,y=m;y<j.data.hourly.length;y++)O="rain"in j.data.hourly[y]&&j.data.hourly[y].rain["1h"]>0||"snow"in j.data.hourly[y]&&j.data.hourly[y].snow["1h"]>0,u.push({temperature:Math.round(j.data.hourly[y].temp),wind_deg:j.data.hourly[y].wind_deg,wind_speed:Math.round(3.6*j.data.hourly[y].wind_speed),cloudiness:j.data.hourly[y].clouds,weather:j.data.hourly[y].weather,probabilityOfPrecipitation:O?100:0,rain_1h:"rain"in j.data.hourly[y]?j.data.hourly[y].rain["1h"].toFixed(1):0,snow_1h:"snow"in j.data.hourly[y]?j.data.hourly[y].snow["1h"].toFixed(1):0,timeUTC:F(j.data.hourly[y].dt),timeLocal:F(j.data.hourly[y].dt+r.data.timezone),dt:j.data.hourly[y].dt});case 25:for(x=u.length,v=f-(h-x);v<f;v++)w="rain"in i.data.hourly[v]&&i.data.hourly[v].rain["1h"]>0||"snow"in i.data.hourly[v]&&i.data.hourly[v].snow["1h"]>0,u.push({temperature:Math.round(i.data.hourly[v].temp),wind_deg:i.data.hourly[v].wind_deg,wind_speed:Math.round(3.6*i.data.hourly[v].wind_speed),cloudiness:i.data.hourly[v].clouds,weather:i.data.hourly[v].weather,probabilityOfPrecipitation:w?100:0,rain_1h:"rain"in i.data.hourly[v]?i.data.hourly[v].rain["1h"].toFixed(1):0,snow_1h:"snow"in i.data.hourly[v]?i.data.hourly[v].snow["1h"].toFixed(1):0,timeUTC:F(i.data.hourly[v].dt),timeLocal:F(i.data.hourly[v].dt+r.data.timezone),dt:i.data.hourly[v].dt});return"current,minutely,alerts",e.next=31,A.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&units=metric&exclude=").concat("current,minutely,alerts","&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 31:for(g=e.sent,D=s-u.length,console.assert(D<=g.data.hourly.length),N=0;N<D;N++)u.push({temperature:Math.round(g.data.hourly[N].temp),wind_deg:g.data.hourly[N].wind_deg,wind_speed:Math.round(3.6*g.data.hourly[N].wind_speed),cloudiness:g.data.hourly[N].clouds,weather:g.data.hourly[N].weather,probabilityOfPrecipitation:"pop"in g.data.hourly[N]?(100*g.data.hourly[N].pop).toFixed():0,rain_1h:"rain"in g.data.hourly[N]?g.data.hourly[N].rain["1h"].toFixed(1):0,snow_1h:"snow"in g.data.hourly[N]?g.data.hourly[N].snow["1h"].toFixed(1):0,timeUTC:F(g.data.hourly[N].dt),timeLocal:F(g.data.hourly[N].dt+r.data.timezone),dt:g.data.hourly[N].dt});for(S=0,M=23,C=function(e){for(var t=[],r=S;r<=M;r++)t.push(u[r].temperature);for(var a=Math.min.apply(Math,t),n=t.map((function(e){return e-(a-1)})),o=0,c=S;c<=M;c++)u[c].temperatureForPlot=n[o],o++;S+=24,M+=24},T=0;T<2;T++)C();for(E={hourly:u},I=Date.now(),k=I+1e3*r.data.timezone,_=new Date(k),P=_.getUTCHours(),E.currentHour=P,E.hoursOfSunrise=[],E.hoursOfSunset=[],H=0;H<2;H++)U=new Date(1e3*(g.data.daily[H].sunrise+r.data.timezone)),L=U.getUTCHours(),Y=new Date(1e3*(g.data.daily[H].sunset+r.data.timezone)),z=Y.getUTCHours(),E.hoursOfSunrise.push(L),E.hoursOfSunset.push(z);return e.abrupt("return",Promise.resolve(E));case 51:return e.prev=51,e.t0=e.catch(0),console.log("Failed to fetch weather data within getWeatherData"),console.log(e.t0),e.abrupt("return",Promise.reject(Error(e.t0)));case 56:case"end":return e.stop()}}),e,null,[[0,51]])})));return function(t){return e.apply(this,arguments)}}();var Y=function(){var e=function(){var e=Object(d.useState)(U()),t=Object(s.a)(e,2),r=t[0],a=t[1];return Object(d.useEffect)((function(){function e(){var e=U();e>r&&a(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),r}(),t=function(e){var t=Math.max(0,e-1),r=Object(d.useState)(0),a=Object(s.a)(r,2),n=a[0],o=a[1],c=Object(d.useRef)([0,0]),i=Object(d.useRef)(!1);return[n,function(e){e.preventDefault(),c.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],i.current=!0},function(e){if(e.preventDefault(),i.current){var r=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],a=r[0]-c.current[0],s=r[1]-c.current[1],u=Math.abs(a)<Math.abs(s),l=s>0&&u;s<0&&u&&(o(n<t?n+1:n),i.current=!1),l&&(o(n>0?n-1:n),i.current=!1)}}]}(3),r=Object(s.a)(t,3),a=r[0],n=r[1],o=r[2],c=Object(h.a)(["cityName"]),u=Object(s.a)(c,3),f=u[0],p=u[1],j=u[2],b=Object(d.useState)(f.cityName?f.cityName:""),m=Object(s.a)(b,2),x=m[0],v=m[1],w=Object(d.useState)(),g=Object(s.a)(w,2),D=g[0],N=g[1],S=Object(d.useRef)(!1),M=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S.current=!0,e.next=4,L(x);case 4:t=e.sent,p("cityName",x,{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),N(t),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Failed to fetch weather data"),console.log(e.t0),j("cityName",{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),N();case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){f.cityName&&C()}),[]),Object(y.jsx)("div",{className:"App",style:{minHeight:"".concat(e,"px")},children:Object(y.jsxs)("div",{className:"websiteContent",children:[Object(y.jsx)(O,{cityName:x,updateCityName:v,reloadWeather:M}),void 0===D?Object(y.jsx)("div",{className:"noData",children:!1===S.current?Object(y.jsxs)("h1",{children:["Search for a city name.",Object(y.jsx)("br",{}),"Get the weather forecast."]}):Object(y.jsxs)("h1",{children:["Failed to get weather data.",Object(y.jsx)("br",{}),"Try another city."]})}):Object(y.jsxs)("div",{className:"sections",onTouchStart:function(e){return n(e)},onTouchMove:function(e){return o(e)},children:[Object(y.jsx)("div",{className:"container",style:{transform:"translateY(-".concat(100*a,"%)")},children:Object(y.jsx)(_,{dayId:0,weatherData:D.hourly.slice(0,24),currentHour:D.currentHour,hourOfSunrise:D.hoursOfSunrise[0],hourOfSunset:D.hoursOfSunset[0]})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(1-a),"%)")},children:Object(y.jsx)(_,{dayId:1,weatherData:D.hourly.slice(24,48),currentHour:D.currentHour,hourOfSunrise:D.hoursOfSunrise[1],hourOfSunset:D.hoursOfSunset[1]})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(2-a),"%)")},children:Object(y.jsx)(P,{cityName:f.cityName,weatherData:D})})]})]})})};o.a.render(Object(y.jsx)(c.a,{children:Object(y.jsx)(Y,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.7c519f6f.chunk.js.map