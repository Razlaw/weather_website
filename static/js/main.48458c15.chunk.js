(this.webpackJsonpweather_website=this.webpackJsonpweather_website||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r,n=a(24),c=a.n(n),o=(a(30),a(60)),i=a(7),s=a(3),u=a(4),l=a.n(u),d=(a(32),a(1)),h=a(61),p=(a(33),["title","titleId"]);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f.apply(this,arguments)}function j(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function b(e,t){var a=e.title,n=e.titleId,c=j(e,p);return d.createElement("svg",f({id:"SVGRoot",width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),a?d.createElement("title",{id:n},a):null,r||(r=d.createElement("g",{stroke:"#000"},d.createElement("ellipse",{cx:5.6727,cy:5.7476,rx:3.0967,ry:3.1013,fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.7101}),d.createElement("path",{d:"m9.2387 9.2405 3.7161 3.7215",fill:"none",strokeWidth:1.6549}),d.createElement("path",{d:"m9.2387 10.481-1.2387-2.481 2.4774 1.2405z",strokeLinejoin:"round",strokeWidth:.46851}))))}var m=d.forwardRef(b),y=(a.p,a(0));function O(e){var t=e.isScrolling,a=e.cityName,r=e.updateCityName,n=e.reloadWeather;return Object(y.jsx)("div",{className:"citySearchBar",children:Object(y.jsx)("form",{onSubmit:n,children:Object(y.jsxs)("div",{className:"formComponents",children:[Object(y.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&e.target.blur()},onChange:function(e){return r(e.target.value)},placeholder:""===a?"City":a,type:"text",id:"cityNameInput",autoFocus:!0}),Object(y.jsxs)("span",{children:[t,"test"]}),Object(y.jsx)("button",{type:"submit",children:Object(y.jsx)(m,{className:"magnifyingGlassIcon"})})]})})})}var v=a(5);a(35),a(36);function w(e){var t=e.time,a=e.active,r=e.sunrise,n=e.sunset,c="hourOfDayListItem";return c=a?c+" active":c,c=t<r||t>n?c+" night":c+" day",c=t===r||t===n?c+" twilight":c,Object(y.jsx)("li",{className:c,children:Object(y.jsxs)("span",{children:[t,":00"]})})}a(37),a(38);a(39);function x(e){var t=e.data,a=e.time,r=e.active,n=e.sunrise,c=e.sunset,o="dataListItem";return o=r?o+" active":o,o=a<n||a>c?o+" night":o+" day",o=a===n||a===c?o+" twilight":o,Object(y.jsx)("li",{className:o,children:Object(y.jsx)("span",{children:t})})}a.p;function g(e){e.dayID,e.plotID;var t=e.currentHour,a=e.weatherData,r=e.dataKey,n=(e.plotKey,e.unit,e.sunrise),c=e.sunset;e.decimalPrecision;return Object(y.jsxs)("div",{className:"plotAndDataContainer",children:[Object(y.jsx)("div",{className:"iconContainer",children:Object(y.jsx)("ul",{children:Object(v.a)(Array(24)).map((function(e,t){return Object(y.jsx)("span",{children:t})}))})}),Object(y.jsx)("div",{className:"dataContainer",children:Object(y.jsx)("ul",{children:Object(v.a)(Array(24)).map((function(e,o){return Object(y.jsx)(x,{data:a[o][r],time:o,active:t===o,sunrise:n,sunset:c},o)}))})}),Object(y.jsx)("div",{className:"plotContainer",children:Object(y.jsx)("span",{children:"plot"})})]})}function D(e){var t=e.dayId,a=e.weatherData,r=e.currentHour,n=e.hourOfSunrise,c=e.hourOfSunset,o=0===t?"Today":"Tomorrow",i=Object(d.useState)(0),u=Object(s.a)(i,2),l=u[0],h=u[1],p=Object(d.useRef)([0,0]),f=Object(d.useRef)([0,0]);function j(){var e=f.current[0]-p.current[0],t=f.current[1]-p.current[1],a=Math.abs(e)>Math.abs(t),r=e>50&&a;e<-50&&a&&h(l<1?l+1:0),r&&h(l>0?l-1:1)}return Object(y.jsx)("div",{className:"weatherForecastForADay",onTouchStart:function(e){return(t=e).preventDefault(),p.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],void(f.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY]);var t},onTouchMove:function(e){return(t=e).preventDefault(),void(f.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY]);var t},onTouchEnd:function(){return j()},onMouseDown:function(e){return(t=e).preventDefault(),p.current=[t.clientX,t.clientY],void(f.current=[t.clientX,t.clientY]);var t},onMouseMove:function(e){return(t=e).preventDefault(),void(f.current=[t.clientX,t.clientY]);var t},onMouseUp:function(){return j()},children:Object(y.jsxs)("div",{className:"contentContainer",children:[Object(y.jsx)("div",{className:"dayDisplay",children:Object(y.jsx)("h1",{children:o})}),Object(y.jsxs)("div",{className:"forecast",children:[Object(y.jsx)("div",{className:"hoursOfDay",children:Object(y.jsx)("ul",{children:Object(v.a)(Array(24)).map((function(e,t){return Object(y.jsx)(w,{time:t,active:r===t,sunrise:n,sunset:c},t)}))})}),Object(y.jsx)("div",{className:"forecastPlot",children:Object(y.jsxs)("div",{className:"plotsContainer",children:[Object(y.jsxs)("div",{className:"temperatureAndWindPlotContainer",style:{transform:"rotateY(".concat(.25*l,"turn)")},children:[Object(y.jsx)(g,{dayID:t,plotID:"temperature",currentHour:r,weatherData:a,dataKey:"temperature",plotKey:"temperatureForPlot",unit:"\xb0C",sunrise:n,sunset:c}),Object(y.jsx)(g,{dayID:t,plotID:"wind",currentHour:r,weatherData:a,dataKey:"wind_speed",plotKey:"wind_speed",unit:"km/h",sunrise:n,sunset:c})]}),Object(y.jsxs)("div",{className:"rainPlotContainer",style:{transform:"rotateY(".concat(.25*(l-1),"turn)")},children:[Object(y.jsx)(g,{dayID:t,plotID:"probabilityOfPrecipitation",currentHour:r,weatherData:a,dataKey:"probabilityOfPrecipitation",plotKey:"probabilityOfPrecipitation",unit:"%",sunrise:n,sunset:c}),Object(y.jsx)(g,{dayID:t,plotID:"rain",currentHour:r,weatherData:a,dataKey:"rain_1h",plotKey:"rain_1h",unit:"mm",sunrise:n,sunset:c,decimalPrecision:1})]})]})})]})]})})}a(40);function N(e){e.cityName,e.weatherData;return Object(y.jsxs)("div",{className:"weatherForecastForAWeek",children:[Object(y.jsx)("div",{className:"contentContainer",children:Object(y.jsx)("h1",{children:"Forecast for a week"})}),Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("span",{children:["The weather data displayed on this website is provided by",Object(y.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeather (TM)"})," under the",Object(y.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:" Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)"}),". Data and database are open and licensed by ",Object(y.jsx)("a",{href:"https://opendatacommons.org/licenses/odbl/",children:" Open Data Commons Open Database License (ODbL)"}),"."]})})]})}var S=a(9),C=a.n(S);function T(e){var t=new Date(1e3*e),a=t.getUTCHours(),r=t.getUTCMinutes().toString();r=1===r.length?"0"+r:r;var n=t.getUTCSeconds().toString();return a+":"+r+":"+(n=1===n.length?"0"+n:n)}function _(){return window.innerHeight}var I=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,r,n,c,o,i,s,u,d,h,p,f,j,b,m,y,O,v,w,x,g,D,N,S,_,I,M,P,k,F,H,E,Y,A,L,U,K;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 3:return a=e.sent,r=a.data.coord.lat,n=a.data.coord.lon,c=a.data.dt,o=a.data.dt+a.data.timezone,e.next=10,C.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(c,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 10:if(i=e.sent,s=48,u=[],d=new Date(1e3*o),h=d.getUTCHours(),!((p=i.data.hourly.length-1)<h)){e.next=25;break}return f=c-86400,e.next=20,C.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(f,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 20:for(j=e.sent,b=h-p,console.assert(b<=j.data.hourly.length),m=j.data.hourly.length-b,y=m;y<j.data.hourly.length;y++)O="rain"in j.data.hourly[y]&&j.data.hourly[y].rain["1h"]>0||"snow"in j.data.hourly[y]&&j.data.hourly[y].snow["1h"]>0,u.push({temperature:Math.round(j.data.hourly[y].temp),wind_deg:j.data.hourly[y].wind_deg,wind_speed:Math.round(3.6*j.data.hourly[y].wind_speed),cloudiness:j.data.hourly[y].clouds,weather:j.data.hourly[y].weather,probabilityOfPrecipitation:O?100:0,rain_1h:"rain"in j.data.hourly[y]?j.data.hourly[y].rain["1h"].toFixed(1):0,snow_1h:"snow"in j.data.hourly[y]?j.data.hourly[y].snow["1h"].toFixed(1):0,timeUTC:T(j.data.hourly[y].dt),timeLocal:T(j.data.hourly[y].dt+a.data.timezone),dt:j.data.hourly[y].dt});case 25:for(v=u.length,w=p-(h-v);w<p;w++)x="rain"in i.data.hourly[w]&&i.data.hourly[w].rain["1h"]>0||"snow"in i.data.hourly[w]&&i.data.hourly[w].snow["1h"]>0,u.push({temperature:Math.round(i.data.hourly[w].temp),wind_deg:i.data.hourly[w].wind_deg,wind_speed:Math.round(3.6*i.data.hourly[w].wind_speed),cloudiness:i.data.hourly[w].clouds,weather:i.data.hourly[w].weather,probabilityOfPrecipitation:x?100:0,rain_1h:"rain"in i.data.hourly[w]?i.data.hourly[w].rain["1h"].toFixed(1):0,snow_1h:"snow"in i.data.hourly[w]?i.data.hourly[w].snow["1h"].toFixed(1):0,timeUTC:T(i.data.hourly[w].dt),timeLocal:T(i.data.hourly[w].dt+a.data.timezone),dt:i.data.hourly[w].dt});return"current,minutely,alerts",e.next=31,C.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(n,"&units=metric&exclude=").concat("current,minutely,alerts","&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 31:for(g=e.sent,console.log("nextDaysForecast"),console.log(g),D=s-u.length,console.assert(D<=g.data.hourly.length),N=0;N<D;N++)u.push({temperature:Math.round(g.data.hourly[N].temp),wind_deg:g.data.hourly[N].wind_deg,wind_speed:Math.round(3.6*g.data.hourly[N].wind_speed),cloudiness:g.data.hourly[N].clouds,weather:g.data.hourly[N].weather,probabilityOfPrecipitation:"pop"in g.data.hourly[N]?(100*g.data.hourly[N].pop).toFixed():0,rain_1h:"rain"in g.data.hourly[N]?g.data.hourly[N].rain["1h"].toFixed(1):0,snow_1h:"snow"in g.data.hourly[N]?g.data.hourly[N].snow["1h"].toFixed(1):0,timeUTC:T(g.data.hourly[N].dt),timeLocal:T(g.data.hourly[N].dt+a.data.timezone),dt:g.data.hourly[N].dt});for(S=0,_=23,I=function(e){for(var t=[],a=S;a<=_;a++)t.push(u[a].temperature);for(var r=Math.min.apply(Math,t),n=t.map((function(e){return e-(r-1)})),c=0,o=S;o<=_;o++)u[o].temperatureForPlot=n[c],c++;S+=24,_+=24},M=0;M<2;M++)I();for(P={hourly:u},k=Date.now(),F=k+1e3*a.data.timezone,H=new Date(F),E=H.getUTCHours(),P.currentHour=E,P.hoursOfSunrise=[],P.hoursOfSunset=[],Y=0;Y<2;Y++)A=new Date(1e3*(g.data.daily[Y].sunrise+a.data.timezone)),L=A.getUTCHours(),U=new Date(1e3*(g.data.daily[Y].sunset+a.data.timezone)),K=U.getUTCHours(),P.hoursOfSunrise.push(L),P.hoursOfSunset.push(K);return e.abrupt("return",Promise.resolve(P));case 53:return e.prev=53,e.t0=e.catch(0),console.log("Failed to fetch weather data within getWeatherData"),console.log(e.t0),e.abrupt("return",Promise.reject(Error(e.t0)));case 58:case"end":return e.stop()}}),e,null,[[0,53]])})));return function(t){return e.apply(this,arguments)}}();var M=function(){var e=function(){var e=Object(d.useState)(_()),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(d.useEffect)((function(){function e(){var e=_();e>a&&r(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),a}(),t=function(e){var t=Math.max(0,e-1),a=Object(d.useState)(0),r=Object(s.a)(a,2),n=r[0],c=r[1],o=Object(d.useRef)([0,0]),i=Object(d.useRef)(!1);return[n,c,function(e){e.preventDefault(),e.stopPropagation(),o.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],i.current=!0},function(e){if(e.preventDefault(),e.stopPropagation(),i.current){var a=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],r=a[0]-o.current[0],s=a[1]-o.current[1],u=Math.abs(r)<Math.abs(s),l=s>0&&u;s<0&&u&&(c(n<t?n+1:n),i.current=!1),l&&(c(n>0?n-1:n),i.current=!1)}}]}(3),a=Object(s.a)(t,4),r=a[0],n=(a[1],a[2]),c=a[3],o=Object(d.useRef)(null),u=Object(h.a)(["cityName"]),p=Object(s.a)(u,3),f=p[0],j=p[1],b=p[2],m=Object(d.useState)(f.cityName?f.cityName:""),v=Object(s.a)(m,2),w=v[0],x=v[1],g=Object(d.useState)(),S=Object(s.a)(g,2),C=S[0],T=S[1],M=Object(d.useRef)(!1),P=Object(d.useState)(0),k=Object(s.a)(P,2),F=k[0],H=k[1],E=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Y();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M.current=!0,e.next=4,I(w);case 4:t=e.sent,j("cityName",w,{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),T(t),o.current.scrollTo(0,0),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed to fetch weather data"),console.log(e.t0),b("cityName",{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),T();case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){document.body.ontouchmove=function(e){return e.preventDefault(),!1},console.log("document ",document)}),[]),Object(d.useEffect)((function(){f.cityName&&Y()}),[]),Object(y.jsx)("div",{className:"App",style:{minHeight:"".concat(e,"px")},children:Object(y.jsxs)("div",{className:"websiteContent",ref:o,children:[Object(y.jsx)(O,{isScrolling:F,cityName:w,updateCityName:x,reloadWeather:E}),void 0===C?Object(y.jsx)("div",{className:"noData",children:!1===M.current?Object(y.jsxs)("h1",{children:["Search for a city name.",Object(y.jsx)("br",{}),"Get the weather forecast."]}):Object(y.jsxs)("h1",{children:["Failed to get weather data.",Object(y.jsx)("br",{}),"Try another city."]})}):Object(y.jsxs)("div",{className:"sections",onTouchStart:function(e){return n(e)},onTouchMove:function(e){return c(e)},onScroll:function(e){return(t=e).preventDefault(),t.stopPropagation(),console.log("scroll e ",t),void H(F+1);var t},children:[Object(y.jsx)("div",{className:"container",style:{transform:"translateY(-".concat(100*r,"%)")},children:Object(y.jsx)(D,{dayId:0,weatherData:C.hourly.slice(0,24),currentHour:C.currentHour,hourOfSunrise:C.hoursOfSunrise[0],hourOfSunset:C.hoursOfSunset[0]})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(1-r),"%)")},children:Object(y.jsx)(D,{dayId:1,weatherData:C.hourly.slice(24,48),currentHour:C.currentHour,hourOfSunrise:C.hoursOfSunrise[1],hourOfSunset:C.hoursOfSunset[1]})}),Object(y.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(2-r),"%)")},children:Object(y.jsx)(N,{cityName:f.cityName,weatherData:C})})]})]})})};c.a.render(Object(y.jsx)(o.a,{children:Object(y.jsx)(M,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.48458c15.chunk.js.map