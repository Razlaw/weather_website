(this.webpackJsonpweather_website=this.webpackJsonpweather_website||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r,n=a(24),c=a.n(n),o=(a(30),a(60)),i=a(6),s=a(3),u=a(4),d=a.n(u),l=(a(32),a(0)),h=a.n(l),f=a(61),p=(a(33),["title","titleId"]);function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},j.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function y(e,t){var a=e.title,n=e.titleId,c=m(e,p);return l.createElement("svg",j({id:"SVGRoot",width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},c),a?l.createElement("title",{id:n},a):null,r||(r=l.createElement("g",{stroke:"#000"},l.createElement("ellipse",{cx:5.6727,cy:5.7476,rx:3.0967,ry:3.1013,fill:"none",strokeLinecap:"square",strokeLinejoin:"round",strokeWidth:1.7101}),l.createElement("path",{d:"m9.2387 9.2405 3.7161 3.7215",fill:"none",strokeWidth:1.6549}),l.createElement("path",{d:"m9.2387 10.481-1.2387-2.481 2.4774 1.2405z",strokeLinejoin:"round",strokeWidth:.46851}))))}var b=l.forwardRef(y),O=(a.p,a(1));function v(e){var t=e.cityName,a=e.updateCityName,r=e.reloadWeather;return Object(O.jsx)("div",{className:"citySearchBar",children:Object(O.jsx)("form",{onSubmit:r,children:Object(O.jsxs)("div",{className:"formComponents",children:[Object(O.jsx)("input",{onKeyUp:function(e){"Enter"===e.key&&e.target.blur()},onChange:function(e){return a(e.target.value)},placeholder:""===t?"City":t,type:"text",id:"cityNameInput",autoFocus:!0}),Object(O.jsx)("button",{type:"submit",children:Object(O.jsx)(b,{className:"magnifyingGlassIcon"})})]})})})}var w=a(8);a(35),a(36);function x(e){var t=e.time,a=e.active,r=e.sunrise,n=e.sunset,c="hourOfDayListItem";return c=a?c+" active":c,c=t<r||t>n?c+" night":c+" day",c=t===r||t===n?c+" twilight":c,Object(O.jsx)("li",{className:c,children:Object(O.jsxs)("span",{children:[t,":00"]})})}a(37),a(38);function g(e,t,a){var r=e.canvas;e.save(),e.clearRect(0,0,r.width,r.height);var n=new Path2D(function(e,t,a,r){for(var n="M 0,0 ",c=Number.MAX_VALUE,o=-Number.MAX_VALUE,i=0;i<e.length;i++)c=Math.min(c,e[i][t]),o=Math.max(o,e[i][t]);c-=Math.max(2,.2*(o-c));for(var s=a/Math.max(10,o-c),u=r/24,d=0;d<e.length;d++)n+="H "+((e[d][t]-c)*s).toString()+" ",n+="v "+u.toString()+" ";return n+"L 0,"+(e.length*u).toString()+" z"}(t,a,r.width,r.height));e.restore(),e.save(),e.restore(),e.save(),e.clip(n),e.lineWidth=5,e.strokeStyle="rgba(255, 255, 255, 1)",e.stroke(n),e.restore()}function D(e){var t=e.data,a=e.dataKey,r=0===e.dayID?"Today":"Tomorrow",n=a.toString()+r,c=h.a.useRef();return h.a.useEffect((function(){var e=c.current.getContext("2d");requestAnimationFrame((function(){return g(e,t,a)}));var r=function(r){var c=document.getElementById(n);e.canvas.height=c.offsetHeight,e.canvas.width=c.offsetWidth,g(e,t,a)};return r(),window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}),[]),h.a.useEffect((function(){g(c.current.getContext("2d"),t,a)}),[t]),Object(O.jsx)("div",{className:"canvasContainer",id:n,children:Object(O.jsx)("canvas",{id:"canvas",ref:c})})}a(39);function N(e){var t=e.data,a=e.time,r=e.active,n=e.sunrise,c=e.sunset,o="dataListItem";return o=r?o+" active":o,o=a<n||a>c?o+" night":o+" day",o=a===n||a===c?o+" twilight":o,Object(O.jsx)("li",{className:o,children:Object(O.jsx)("span",{children:t})})}a.p;a.p;a.p;function S(e){var t=e.dayID,a=(e.plotID,e.currentHour),r=e.weatherData,n=e.dataKey,c=e.plotKey,o=(e.unit,e.sunrise),i=e.sunset;e.decimalPrecision;return Object(O.jsxs)("div",{className:"plotAndDataContainer",children:[Object(O.jsx)("div",{className:"iconContainer",children:Object(O.jsx)("ul",{children:Object(w.a)(Array(24)).map((function(e,t){return Object(O.jsx)("span",{children:"test"})}))})}),Object(O.jsx)("div",{className:"dataContainer",children:Object(O.jsx)("ul",{children:Object(w.a)(Array(24)).map((function(e,t){return Object(O.jsx)(N,{data:r[t][n],time:t,active:a===t,sunrise:o,sunset:i},t)}))})}),Object(O.jsx)("div",{className:"plotContainer",children:Object(O.jsx)(D,{data:r,dataKey:c,dayID:t})})]})}function C(e){var t=e.dayId,a=e.weatherData,r=e.currentHour,n=e.hourOfSunrise,c=e.hourOfSunset,o=0===t?"Today":"Tomorrow",i=Object(l.useState)(0),u=Object(s.a)(i,2),d=u[0],h=u[1],f=Object(l.useRef)([0,0]),p=Object(l.useRef)([0,0]);function j(e){e.preventDefault();var t=p.current[0]-f.current[0],a=p.current[1]-f.current[1],r=Math.abs(t)>Math.abs(a),n=t>50&&r;t<-50&&r&&h(d<1?d+1:0),n&&h(d>0?d-1:1)}return Object(O.jsx)("div",{className:"weatherForecastForADay",onTouchStart:function(e){return(t=e).preventDefault(),f.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY],void(p.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY]);var t},onTouchMove:function(e){return(t=e).preventDefault(),void(p.current=[t.targetTouches[0].clientX,t.targetTouches[0].clientY]);var t},onTouchEnd:function(e){return j(e)},onMouseDown:function(e){return(t=e).preventDefault(),f.current=[t.clientX,t.clientY],void(p.current=[t.clientX,t.clientY]);var t},onMouseMove:function(e){return t=e,void(p.current=[t.clientX,t.clientY]);var t},onMouseUp:function(e){return j(e)},children:Object(O.jsxs)("div",{className:"contentContainer",children:[Object(O.jsx)("div",{className:"dayDisplay",children:Object(O.jsx)("h1",{children:o})}),Object(O.jsxs)("div",{className:"forecast",children:[Object(O.jsx)("div",{className:"hoursOfDay",children:Object(O.jsx)("ul",{children:Object(w.a)(Array(24)).map((function(e,t){return Object(O.jsx)(x,{time:t,active:r===t,sunrise:n,sunset:c},t)}))})}),Object(O.jsx)("div",{className:"forecastPlot",children:Object(O.jsxs)("div",{className:"plotsContainer",children:[Object(O.jsxs)("div",{className:"temperatureAndWindPlotContainer",style:{transform:"rotateY(".concat(.25*d,"turn)")},children:[Object(O.jsx)(S,{dayID:t,plotID:"temperature",currentHour:r,weatherData:a,dataKey:"temperature",plotKey:"temperatureForPlot",unit:"\xb0C",sunrise:n,sunset:c}),Object(O.jsx)(S,{dayID:t,plotID:"wind",currentHour:r,weatherData:a,dataKey:"wind_speed",plotKey:"wind_speed",unit:"km/h",sunrise:n,sunset:c})]}),Object(O.jsxs)("div",{className:"rainPlotContainer",style:{transform:"rotateY(".concat(.25*(d-1),"turn)")},children:[Object(O.jsx)(S,{dayID:t,plotID:"probabilityOfPrecipitation",currentHour:r,weatherData:a,dataKey:"probabilityOfPrecipitation",plotKey:"probabilityOfPrecipitation",unit:"%",sunrise:n,sunset:c}),Object(O.jsx)(S,{dayID:t,plotID:"rain",currentHour:r,weatherData:a,dataKey:"rain_1h",plotKey:"rain_1h",unit:"mm",sunrise:n,sunset:c,decimalPrecision:1})]})]})})]})]})})}a(40);function T(e){e.cityName,e.weatherData;return Object(O.jsxs)("div",{className:"weatherForecastForAWeek",children:[Object(O.jsx)("div",{className:"contentContainer",children:Object(O.jsx)("h1",{children:"Forecast for a week"})}),Object(O.jsx)("div",{className:"footer",children:Object(O.jsxs)("span",{children:["The weather data displayed on this website is provided by",Object(O.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeather (TM)"})," under the",Object(O.jsx)("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",children:" Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)"}),". Data and database are open and licensed by ",Object(O.jsx)("a",{href:"https://opendatacommons.org/licenses/odbl/",children:" Open Data Commons Open Database License (ODbL)"}),"."]})})]})}var M=a(9),_=a.n(M);function I(e){var t=new Date(1e3*e),a=t.getUTCHours(),r=t.getUTCMinutes().toString();r=1===r.length?"0"+r:r;var n=t.getUTCSeconds().toString();return a+":"+r+":"+(n=1===n.length?"0"+n:n)}function k(){return window.innerHeight}var E=function(){var e=Object(i.a)(d.a.mark((function e(t){var a,r,n,c,o,i,s,u,l,h,f,p,j,m,y,b,O,v,w,x,g,D,N,S,C,T,M,k,E,H,F,P,A,L,U,Y,z;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 3:return a=e.sent,r=a.data.coord.lat,n=a.data.coord.lon,c=a.data.dt,o=a.data.dt+a.data.timezone,e.next=10,_.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(c,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 10:if(i=e.sent,s=48,u=[],l=new Date(1e3*o),h=l.getUTCHours(),!((f=i.data.hourly.length-1)<h)){e.next=25;break}return p=c-86400,e.next=20,_.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(r,"&lon=").concat(n,"&dt=").concat(p,"&units=metric&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 20:for(j=e.sent,m=h-f,console.assert(m<=j.data.hourly.length),y=j.data.hourly.length-m,b=y;b<j.data.hourly.length;b++)O="rain"in j.data.hourly[b]&&j.data.hourly[b].rain["1h"]>0||"snow"in j.data.hourly[b]&&j.data.hourly[b].snow["1h"]>0,u.push({temperature:Math.round(j.data.hourly[b].temp),wind_deg:j.data.hourly[b].wind_deg,wind_speed:Math.round(3.6*j.data.hourly[b].wind_speed),cloudiness:j.data.hourly[b].clouds,weather:j.data.hourly[b].weather,probabilityOfPrecipitation:O?100:0,rain_1h:"rain"in j.data.hourly[b]?j.data.hourly[b].rain["1h"].toFixed(1):0,snow_1h:"snow"in j.data.hourly[b]?j.data.hourly[b].snow["1h"].toFixed(1):0,timeUTC:I(j.data.hourly[b].dt),timeLocal:I(j.data.hourly[b].dt+a.data.timezone),dt:j.data.hourly[b].dt});case 25:for(v=u.length,w=f-(h-v);w<f;w++)x="rain"in i.data.hourly[w]&&i.data.hourly[w].rain["1h"]>0||"snow"in i.data.hourly[w]&&i.data.hourly[w].snow["1h"]>0,u.push({temperature:Math.round(i.data.hourly[w].temp),wind_deg:i.data.hourly[w].wind_deg,wind_speed:Math.round(3.6*i.data.hourly[w].wind_speed),cloudiness:i.data.hourly[w].clouds,weather:i.data.hourly[w].weather,probabilityOfPrecipitation:x?100:0,rain_1h:"rain"in i.data.hourly[w]?i.data.hourly[w].rain["1h"].toFixed(1):0,snow_1h:"snow"in i.data.hourly[w]?i.data.hourly[w].snow["1h"].toFixed(1):0,timeUTC:I(i.data.hourly[w].dt),timeLocal:I(i.data.hourly[w].dt+a.data.timezone),dt:i.data.hourly[w].dt});return"current,minutely,alerts",e.next=31,_.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(r,"&lon=").concat(n,"&units=metric&exclude=").concat("current,minutely,alerts","&appid=").concat("78515fbbdec3c5a2fda4e761f9f01216"));case 31:for(g=e.sent,D=s-u.length,console.assert(D<=g.data.hourly.length),N=0;N<D;N++)u.push({temperature:Math.round(g.data.hourly[N].temp),wind_deg:g.data.hourly[N].wind_deg,wind_speed:Math.round(3.6*g.data.hourly[N].wind_speed),cloudiness:g.data.hourly[N].clouds,weather:g.data.hourly[N].weather,probabilityOfPrecipitation:"pop"in g.data.hourly[N]?(100*g.data.hourly[N].pop).toFixed():0,rain_1h:"rain"in g.data.hourly[N]?g.data.hourly[N].rain["1h"].toFixed(1):0,snow_1h:"snow"in g.data.hourly[N]?g.data.hourly[N].snow["1h"].toFixed(1):0,timeUTC:I(g.data.hourly[N].dt),timeLocal:I(g.data.hourly[N].dt+a.data.timezone),dt:g.data.hourly[N].dt});for(S=0,C=23,T=function(e){for(var t=[],a=S;a<=C;a++)t.push(u[a].temperature);for(var r=Math.min.apply(Math,t),n=t.map((function(e){return e-(r-1)})),c=0,o=S;o<=C;o++)u[o].temperatureForPlot=n[c],c++;S+=24,C+=24},M=0;M<2;M++)T();for(k={hourly:u},E=Date.now(),H=E+1e3*a.data.timezone,F=new Date(H),P=F.getUTCHours(),k.currentHour=P,k.hoursOfSunrise=[],k.hoursOfSunset=[],A=0;A<2;A++)L=new Date(1e3*(g.data.daily[A].sunrise+a.data.timezone)),U=L.getUTCHours(),Y=new Date(1e3*(g.data.daily[A].sunset+a.data.timezone)),z=Y.getUTCHours(),k.hoursOfSunrise.push(U),k.hoursOfSunset.push(z);return e.abrupt("return",Promise.resolve(k));case 51:return e.prev=51,e.t0=e.catch(0),console.log("Failed to fetch weather data within getWeatherData"),console.log(e.t0),e.abrupt("return",Promise.reject(Error(e.t0)));case 56:case"end":return e.stop()}}),e,null,[[0,51]])})));return function(t){return e.apply(this,arguments)}}();var H=function(){var e=function(){var e=Object(l.useState)(k()),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(l.useEffect)((function(){function e(){var e=k();e>a&&r(e)}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),a}(),t=function(e){var t=Math.max(0,e-1),a=Object(l.useState)(0),r=Object(s.a)(a,2),n=r[0],c=r[1],o=Object(l.useRef)([0,0]),i=Object(l.useRef)(!1);return[n,function(e){e.preventDefault(),o.current=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],i.current=!0},function(e){if(e.preventDefault(),i.current){var a=[e.targetTouches[0].clientX,e.targetTouches[0].clientY],r=a[0]-o.current[0],s=a[1]-o.current[1],u=Math.abs(r)<Math.abs(s),d=s>0&&u;s<0&&u&&(c(n<t?n+1:n),i.current=!1),d&&(c(n>0?n-1:n),i.current=!1)}}]}(3),a=Object(s.a)(t,3),r=a[0],n=a[1],c=a[2],o=Object(f.a)(["cityName"]),u=Object(s.a)(o,3),h=u[0],p=u[1],j=u[2],m=Object(l.useState)(h.cityName?h.cityName:""),y=Object(s.a)(m,2),b=y[0],w=y[1],x=Object(l.useState)(),g=Object(s.a)(x,2),D=g[0],N=g[1],S=Object(l.useRef)(!1),M=function(){var e=Object(i.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S.current=!0,e.next=4,E(b);case 4:t=e.sent,p("cityName",b,{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),N(t),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Failed to fetch weather data"),console.log(e.t0),j("cityName",{path:"/",secure:!0,sameSite:"strict",maxAge:31536e3}),N();case 15:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){h.cityName&&_()}),[]),Object(O.jsx)("div",{className:"App",style:{minHeight:"".concat(e,"px")},children:Object(O.jsxs)("div",{className:"websiteContent",children:[Object(O.jsx)(v,{cityName:b,updateCityName:w,reloadWeather:M}),void 0===D?Object(O.jsx)("div",{className:"noData",children:!1===S.current?Object(O.jsxs)("h1",{children:["Search for a city name.",Object(O.jsx)("br",{}),"Get the weather forecast."]}):Object(O.jsxs)("h1",{children:["Failed to get weather data.",Object(O.jsx)("br",{}),"Try another city."]})}):Object(O.jsxs)("div",{className:"sections",onTouchStart:function(e){return n(e)},onTouchMove:function(e){return c(e)},children:[Object(O.jsx)("div",{className:"container",style:{transform:"translateY(-".concat(100*r,"%)")},children:Object(O.jsx)(C,{dayId:0,weatherData:D.hourly.slice(0,24),currentHour:D.currentHour,hourOfSunrise:D.hoursOfSunrise[0],hourOfSunset:D.hoursOfSunset[0]})}),Object(O.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(1-r),"%)")},children:Object(O.jsx)(C,{dayId:1,weatherData:D.hourly.slice(24,48),currentHour:D.currentHour,hourOfSunrise:D.hoursOfSunrise[1],hourOfSunset:D.hoursOfSunset[1]})}),Object(O.jsx)("div",{className:"container",style:{transform:"translateY(".concat(100*(2-r),"%)")},children:Object(O.jsx)(T,{cityName:h.cityName,weatherData:D})})]})]})})};c.a.render(Object(O.jsx)(o.a,{children:Object(O.jsx)(H,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.b2dafa53.chunk.js.map