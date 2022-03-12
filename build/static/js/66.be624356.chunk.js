(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[66],{1121:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=["ms","s","m","h","d"],n=i.findIndex((function(t){return t===e})),r=[1e3,60,60,24,1],s=[1,1e3,6e4,36e5,864e5];return i.reduce((function(e,i,o){return e[i]=o>n?0:o===n?Math.floor(t/s[o]):Math.floor(t/s[o])%r[o],e}),{ms:0,s:0,m:0,h:0,d:0})}},1228:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(1121)),s=n(i(1625)),o=n(i(1626)),a=function(){function t(t){var e=t.initialTime,i=t.direction,n=t.timeToUpdate,r=t.lastUnit,a=t.checkpoints,c=t.onChange;this.internalTime=s.default(),this.initialTime=e,this.time=e,this.direction=i,this.timeToUpdate=n,this.lastUnit=r,this.checkpoints=a,this.innerState=new o.default(c),this.onChange=c,this.timerId=null}return Object.defineProperty(t.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),t.prototype.getTimeParts=function(t){return r.default(t,this.lastUnit)},t.prototype.setTime=function(t){this.internalTime=s.default(),this.initialTime=t,this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.getTime=function(){return this.time},t.prototype.setLastUnit=function(t){this.innerState.isPlaying()?(this.pause(),this.lastUnit=t,this.resume(!0)):this.lastUnit=t},t.prototype.setTimeToUpdate=function(t){this.innerState.isPlaying()?(this.pause(),this.timeToUpdate=t,this.resume()):this.timeToUpdate=t},t.prototype.setDirection=function(t){this.direction=t},t.prototype.setCheckpoints=function(t){this.checkpoints=t},t.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},t.prototype.resume=function(t){void 0===t&&(t=!1),!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval(t)},t.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},t.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},t.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},t.prototype.setTimerInterval=function(t){var e=this;void 0===t&&(t=!1),this.timerId&&clearInterval(this.timerId),this.internalTime=s.default();t&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval((function(){var t=e.time,i=e.computeTime();e.onChange(e.getTimeParts(i)),e.checkpoints.map((function(n){var r=n.time,s=n.callback,o=r>t&&r<=i,a=r<t&&r>=i;("backward"===e.direction?a:o)&&s()}))}),this.timeToUpdate)},t.prototype.computeTime=function(){if(this.innerState.isPlaying()){var t=s.default(),e=Math.abs(t-this.internalTime);switch(this.direction){case"forward":return this.time=this.time+e,this.internalTime=t,this.time;case"backward":return this.time=this.time-e,this.internalTime=t,this.time<0?(this.stop(),0):this.time;default:return this.time}}return this.time},t}();e.TimerModel=a},1623:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(i(1624)),s=n(i(1121));e.getTimeParts=s.default;var o=i(1627);e.useTimer=o.useTimer,e.default=r.default},1624:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=s(i(0)),a=i(1228),c=o.default.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(t){return String(t)}}),u=function(t){var e=t.unit,i=t.formatValue;return o.default.createElement(f.Consumer,null,(function(t){return(i||t.formatValue)(t[e])||null}))},l=function(t){return o.default.createElement(u,r({unit:"ms"},t))},m=function(t){return o.default.createElement(u,r({unit:"s"},t))},d=function(t){return o.default.createElement(u,r({unit:"m"},t))},p=function(t){return o.default.createElement(u,r({unit:"h"},t))},h=function(t){return o.default.createElement(u,r({unit:"d"},t))},f=function(t){function e(e){var i=t.call(this,e)||this,n=i.props,s=n.initialTime,o=n.direction,c=n.timeToUpdate,u=n.lastUnit,l=n.checkpoints;return i.timer=new a.TimerModel({initialTime:s,direction:o,timeToUpdate:c,lastUnit:u,checkpoints:l,onChange:i.setState.bind(i)}),i.state=r({},i.timer.timeParts,{timerState:"INITED"}),i.start=i.start.bind(i),i.pause=i.pause.bind(i),i.resume=i.resume.bind(i),i.stop=i.stop.bind(i),i.reset=i.reset.bind(i),i.setTime=i.setTime.bind(i),i.getTime=i.getTime.bind(i),i.getTimerState=i.getTimerState.bind(i),i.setDirection=i.setDirection.bind(i),i.setCheckpoints=i.setCheckpoints.bind(i),i}return n(e,t),e.getUI=function(t,e){if(null===t)return null;if(Array.isArray(t)||o.default.isValidElement(t))return t;if(t.prototype&&t.prototype.isReactComponent)return o.default.createElement(t,e);if("function"===typeof t)return t(e);throw new Error("Please use one of the supported APIs for children")},e.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},e.prototype.componentWillUnmount=function(){this.timer.stop()},e.prototype.render=function(){var t=this,i=t.start,n=t.pause,r=t.resume,s=t.stop,a=t.reset,u=t.getTime,l=t.getTimerState,m=t.setTime,d=t.setDirection,p=t.setCheckpoints,h=this.state,f=h.ms,b=h.s,j=h.m,g=h.h,v=h.d,y=h.timerState,T=this.props,O=T.formatValue,x=T.children;return o.default.createElement(c.Provider,{value:{ms:f,s:b,m:j,h:g,d:v,formatValue:O}},e.getUI(x,{start:i,resume:r,pause:n,stop:s,reset:a,getTime:u,getTimerState:l,setTime:m,setDirection:d,setCheckpoints:p,timerState:y}))},e.prototype.setTime=function(t){this.timer.setTime(t)},e.prototype.getTime=function(){return this.timer.getTime()},e.prototype.getTimerState=function(){return this.timer.state},e.prototype.setDirection=function(t){this.timer.setDirection(t)},e.prototype.setCheckpoints=function(t){this.timer.setCheckpoints(t)},e.prototype.start=function(){this.timer.start(),this.props.onStart()},e.prototype.stop=function(){this.timer.stop(),this.props.onStop()},e.prototype.pause=function(){this.timer.pause(),this.props.onPause()},e.prototype.reset=function(){this.timer.reset(),this.props.onReset()},e.prototype.resume=function(){this.timer.resume(),this.props.onResume()},e.Consumer=c.Consumer,e.Milliseconds=l,e.Seconds=m,e.Minutes=d,e.Hours=p,e.Days=h,e.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(t){return String(t)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},e}(o.default.PureComponent);e.default=f},1625:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return"undefined"!==typeof window&&"performance"in window?performance.now():Date.now()}},1626:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.INITED="INITED",e.PLAYING="PLAYING",e.PAUSED="PAUSED",e.STOPPED="STOPPED";var n=function(){function t(t){var i=this;void 0===t&&(t=function(t){}),this.state=e.INITED,this.onChange=function(){return t({state:i.state})},this.state=e.INITED}return t.prototype.getState=function(){return this.state},t.prototype.setInited=function(){return this.state!==e.INITED&&(this.state=e.INITED,this.onChange(),!0)},t.prototype.isInited=function(){return this.state===e.INITED},t.prototype.setPlaying=function(){return this.state!==e.PLAYING&&(this.state=e.PLAYING,this.onChange(),!0)},t.prototype.isPlaying=function(){return this.state===e.PLAYING},t.prototype.setPaused=function(){return this.state===e.PLAYING&&(this.state=e.PAUSED,this.onChange(),!0)},t.prototype.isPaused=function(){return this.state===e.PAUSED},t.prototype.setStopped=function(){return this.state!==e.INITED&&(this.state=e.STOPPED,this.onChange(),!0)},t.prototype.isStopped=function(){return this.state===e.STOPPED},t}();e.default=n},1627:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),o=i(1228),a=r(i(1121));e.useTimer=function(t){var e=void 0===t?{}:t,i=e.initialTime,r=void 0===i?0:i,c=e.direction,u=void 0===c?"forward":c,l=e.timeToUpdate,m=void 0===l?1e3:l,d=e.startImmediately,p=void 0===d||d,h=e.lastUnit,f=void 0===h?"d":h,b=e.checkpoints,j=void 0===b?[]:b,g=e.onStart,v=e.onResume,y=e.onPause,T=e.onStop,O=e.onReset,x=s.useState(n({},a.default(r<0?0:r,f),{state:"INITED"})),P=x[0],C=x[1],S=s.useMemo((function(){return new o.TimerModel({initialTime:r,direction:u,timeToUpdate:m,lastUnit:f,checkpoints:j,onChange:function(t){return C((function(e){return n({},e,t)}))}})}),[]),I=s.useCallback((function(t){return S.setTime(t)}),[S]),k=s.useCallback((function(){return S.getTime()}),[S]),_=s.useCallback((function(){return S.state}),[S]),M=s.useCallback((function(t){return S.setDirection(t)}),[S]),w=s.useCallback((function(t){return S.setLastUnit(t)}),[S]),D=s.useCallback((function(t){return S.setCheckpoints(t)}),[S]),U=s.useCallback((function(t){return S.setTimeToUpdate(t)}),[S]),E=s.useCallback((function(){S.start(),g&&g()}),[S,g]),N=s.useCallback((function(){S.stop(),T&&T()}),[S,T]),A=s.useCallback((function(){S.pause(),y&&y()}),[S,y]),R=s.useCallback((function(){S.reset(),O&&O()}),[S,O]),z=s.useCallback((function(){S.resume(),v&&v()}),[S,v]),L=s.useMemo((function(){return{start:E,stop:N,pause:A,reset:R,resume:z,setTime:I,getTime:k,getTimerState:_,setDirection:M,setLastUnit:w,setTimeToUpdate:U,setCheckpoints:D}}),[E,N,A,R,z,I,k,_,M,w,U,D]);return s.useEffect((function(){return p&&E(),function(){N()}}),[]),{controls:L,value:P}}},1628:function(t,e,i){"use strict";var n=i(73);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i(87)),s=i(1),o=(0,r.default)([(0,s.jsx)("path",{d:"M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z",opacity:".3"},"0"),(0,s.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"},"1")],"NotificationsActiveTwoTone");e.default=o},1765:function(t,e,i){"use strict";i.r(e);var n=i(6),r=i(24),s=i(198),o=i(246),a=i(171),c=i(58),u=i(496),l=i(412),m=i(407),d=i(1623),p=i.n(d),h=i(145),f=i(48),b=i.p+"static/media/img-soon-grid.c03c8e42.svg",j=i.p+"static/media/img-soon-grid-dark.ddd4a6fb.svg",g=i.p+"static/media/img-soon-block.575db758.svg",v=i.p+"static/media/img-soon-blue-block.1e9f64d4.svg",y=i.p+"static/media/img-soon-purple-block.8b0303a8.svg",T=i(1628),O=i.n(T),x=i(1),P=Object(n.a)("div")({maxWidth:720,margin:"0 auto",position:"relative"}),C=Object(n.a)("div")({maxWidth:450,margin:"0 auto",textAlign:"center"}),S=Object(n.a)("div")({maxWidth:450,margin:"0 auto"}),I=Object(n.a)(s.a)({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}),k=Object(n.a)("div")((function(t){var e=t.theme;return{background:"dark"===e.palette.mode?e.palette.dark.main:e.palette.secondary.light,color:"dark"===e.palette.mode?e.palette.dark.light:e.palette.secondary.main,borderRadius:"12px",padding:"24px 0",textAlign:"center",fontWeight:700,fontSize:"3rem"}})),_=Object(n.a)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"8s blink ease-in-out infinite"}),M=Object(n.a)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"15s wings ease-in-out infinite"}),w=Object(n.a)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"12s wings ease-in-out infinite"});e.default=function(){var t=Object(r.a)();return Object(x.jsx)(I,{children:Object(x.jsx)(o.a,{children:Object(x.jsxs)(a.a,{container:!0,justifyContent:"center",spacing:f.c,children:[Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)(C,{children:Object(x.jsxs)(a.a,{container:!0,spacing:f.c,children:[Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)(c.a,{variant:"h1",children:"Coming Soon"})}),Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)(c.a,{variant:"body1",children:"Something new is on it's way"})})]})})}),Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsxs)(P,{children:[Object(x.jsx)(u.a,{component:"img",image:"dark"===t.palette.mode?j:b,title:"Slider5 image"}),Object(x.jsx)(_,{src:g,title:"Slider 1 image"}),Object(x.jsx)(M,{src:v,title:"Slider 2 image"}),Object(x.jsx)(w,{src:y,title:"Slider 3 image"})]})}),Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)(p.a,{initialTime:863999e3,direction:"backward",children:function(){return Object(x.jsx)(S,{children:Object(x.jsxs)(a.a,{container:!0,spacing:f.c,children:[Object(x.jsx)(a.a,{item:!0,xs:3,children:Object(x.jsx)(k,{children:Object(x.jsx)(p.a.Days,{})})}),Object(x.jsx)(a.a,{item:!0,xs:3,children:Object(x.jsx)(k,{children:Object(x.jsx)(p.a.Hours,{})})}),Object(x.jsx)(a.a,{item:!0,xs:3,children:Object(x.jsx)(k,{children:Object(x.jsx)(p.a.Minutes,{})})}),Object(x.jsx)(a.a,{item:!0,xs:3,children:Object(x.jsx)(k,{children:Object(x.jsx)(p.a.Seconds,{})})})]})})}})}),Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)(C,{children:Object(x.jsxs)(a.a,{container:!0,spacing:f.c,alignItems:"center",children:[Object(x.jsx)(a.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(x.jsx)(l.a,{fullWidth:!0,label:"Email Address"})}),Object(x.jsx)(a.a,{item:!0,children:Object(x.jsx)(h.a,{children:Object(x.jsxs)(m.a,{variant:"contained",size:"large",children:[Object(x.jsx)(O.a,{sx:{fontSize:"1.3rem",mr:.75}})," Notify Me"]})})})]})})})]})})})}},496:function(t,e,i){"use strict";var n=i(7),r=i(2),s=i(0),o=(i(10),i(8)),a=i(125),c=i(11),u=i(6),l=i(86),m=i(106);function d(t){return Object(l.a)("MuiCardMedia",t)}Object(m.a)("MuiCardMedia",["root","media","img"]);var p=i(1),h=["children","className","component","image","src","style"],f=Object(u.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState,n=i.isMediaComponent,r=i.isImageComponent;return[e.root,n&&e.media,r&&e.img]}})((function(t){var e=t.ownerState;return Object(r.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})})),b=["video","audio","picture","iframe","img"],j=["picture","img"],g=s.forwardRef((function(t,e){var i=Object(c.a)({props:t,name:"MuiCardMedia"}),s=i.children,u=i.className,l=i.component,m=void 0===l?"div":l,g=i.image,v=i.src,y=i.style,T=Object(n.a)(i,h),O=-1!==b.indexOf(m),x=!O&&g?Object(r.a)({backgroundImage:'url("'.concat(g,'")')},y):y,P=Object(r.a)({},i,{component:m,isMediaComponent:O,isImageComponent:-1!==j.indexOf(m)}),C=function(t){var e=t.classes,i={root:["root",t.isMediaComponent&&"media",t.isImageComponent&&"img"]};return Object(a.a)(i,d,e)}(P);return Object(p.jsx)(f,Object(r.a)({className:Object(o.default)(C.root,u),as:m,role:!O&&g?"image":void 0,ref:e,style:x,ownerState:P,src:O?g||v:void 0},T,{children:s}))}));e.a=g}}]);
//# sourceMappingURL=66.be624356.chunk.js.map