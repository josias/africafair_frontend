(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[60],{1119:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(90),a=n.n(r),o=function(e){return e<2?{label:"Poor",color:a.a.errorMain}:e<3?{label:"Weak",color:a.a.warningDark}:e<4?{label:"Normal",color:a.a.orangeMain}:e<5?{label:"Good",color:a.a.successMain}:e<6?{label:"Strong",color:a.a.successDark}:{label:"Poor",color:a.a.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},1782:function(e,t,n){"use strict";n.r(t);var r=n(39),a=n(24),o=n(374),i=n(171),s=n(378),c=n(126),l=n(58),d=n(535),u=n(536),b=n(202),j=n(4),m=n(64),p=n.n(m),h=n(109),f=n(13),x=n(0),O=n(415),g=n(416),v=n(397),w=n(403),y=n(424),k=n(418),C=n(407),P=n(445),S=n(444),M=n(550),z=n(145),E=n(1119),R=n(685),B=n.n(R),I=n(865),W=n.n(I),D=n(1),V=function(e){var t=Object.assign({},e),n=Object(a.a)(),r=Object(M.a)(),o=Object(x.useState)(!1),s=Object(f.a)(o,2),d=s[0],u=s[1],b=Object(x.useState)(0),m=Object(f.a)(b,2),R=m[0],I=m[1],V=Object(x.useState)(),A=Object(f.a)(V,2),F=A[0],H=A[1],_=function(){u(!d)},L=function(e){e.preventDefault()},N=function(e){var t=Object(E.b)(e);I(t),H(Object(E.a)(t))};return Object(x.useEffect)((function(){N("123456")}),[]),Object(D.jsx)(S.b,{initialValues:{email:"info@codedthemes.com",password:"123456",confirmPassword:"123456",submit:null},validationSchema:P.d().shape({password:P.f().max(255).required("Password is required"),confirmPassword:P.f().when("password",{is:function(e){return!!(e&&e.length>0)},then:P.f().oneOf([P.e("password")],"Both Password must be match!")})}),onSubmit:function(){var e=Object(h.a)(p.a.mark((function e(t,n){var a,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,o=n.setStatus,i=n.setSubmitting;try{r.current&&(o({success:!0}),i(!1))}catch(t){console.error(t),r.current&&(o({success:!1}),a({submit:t.message}),i(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,a=e.handleBlur,o=e.handleChange,s=e.handleSubmit,u=e.isSubmitting,b=e.touched,m=e.values;return Object(D.jsxs)("form",Object(j.a)(Object(j.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(D.jsxs)(O.a,{fullWidth:!0,error:Boolean(b.password&&r.password),sx:Object(j.a)({},n.typography.customInput),children:[Object(D.jsx)(g.a,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),Object(D.jsx)(v.a,{id:"outlined-adornment-password-reset",type:d?"text":"password",value:m.password,name:"password",onBlur:a,onChange:function(e){o(e),N(e.target.value)},endAdornment:Object(D.jsx)(w.a,{position:"end",children:Object(D.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:_,onMouseDown:L,edge:"end",size:"large",children:d?Object(D.jsx)(B.a,{}):Object(D.jsx)(W.a,{})})}),inputProps:{}})]}),b.password&&r.password&&Object(D.jsx)(O.a,{fullWidth:!0,children:Object(D.jsx)(k.a,{error:!0,id:"standard-weight-helper-text-reset",children:r.password})}),0!==R&&Object(D.jsx)(O.a,{fullWidth:!0,children:Object(D.jsx)(c.a,{sx:{mb:2},children:Object(D.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",children:[Object(D.jsx)(i.a,{item:!0,children:Object(D.jsx)(c.a,{style:{backgroundColor:null===F||void 0===F?void 0:F.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(D.jsx)(i.a,{item:!0,children:Object(D.jsx)(l.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===F||void 0===F?void 0:F.label})})]})})}),Object(D.jsxs)(O.a,{fullWidth:!0,error:Boolean(b.confirmPassword&&r.confirmPassword),sx:Object(j.a)({},n.typography.customInput),children:[Object(D.jsx)(g.a,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(D.jsx)(v.a,{id:"outlined-adornment-confirm-password",type:"password",value:m.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:a,onChange:o,inputProps:{}})]}),b.confirmPassword&&r.confirmPassword&&Object(D.jsx)(O.a,{fullWidth:!0,children:Object(D.jsxs)(k.a,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",r.confirmPassword," "]})}),r.submit&&Object(D.jsx)(c.a,{sx:{mt:3},children:Object(D.jsx)(k.a,{error:!0,children:r.submit})}),Object(D.jsx)(c.a,{sx:{mt:1},children:Object(D.jsx)(z.a,{children:Object(D.jsx)(C.a,{disableElevation:!0,disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})},A=n(539),F=n(537),H=n(538),_=n.p+"static/media/img-a2-resetpass.67b5c20b.svg",L=[{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(a.a)(),t=Object(o.a)(e.breakpoints.down("md")),n=Object(o.a)(e.breakpoints.down("lg"));return Object(D.jsx)(d.a,{children:Object(D.jsxs)(i.a,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[Object(D.jsx)(i.a,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:Object(D.jsxs)(i.a,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[Object(D.jsx)(i.a,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:Object(D.jsx)(r.b,{to:"#",children:Object(D.jsx)(b.a,{})})}),Object(D.jsx)(i.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:Object(D.jsxs)(s.a,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[Object(D.jsx)(c.a,{component:r.b,to:"#",sx:{display:{xs:"block",md:"none"}},children:Object(D.jsx)(b.a,{})}),Object(D.jsx)(u.a,{border:n,children:Object(D.jsxs)(i.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(D.jsx)(i.a,{item:!0,xs:12,children:Object(D.jsxs)(s.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(D.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset Password"}),Object(D.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Please choose your new password"})]})}),Object(D.jsx)(i.a,{item:!0,xs:12,children:Object(D.jsx)(V,{})})]})})]})}),Object(D.jsx)(i.a,{item:!0,xs:12,sx:{m:3},children:Object(D.jsx)(F.a,{})})]})}),Object(D.jsx)(i.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(D.jsx)(A.a,{children:Object(D.jsxs)(i.a,{item:!0,container:!0,justifyContent:"center",children:[Object(D.jsx)(i.a,{item:!0,xs:12,children:Object(D.jsx)(i.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(D.jsx)(i.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(D.jsx)(H.a,{items:L})})})}),Object(D.jsx)(i.a,{item:!0,xs:12,children:Object(D.jsx)("img",{alt:"Auth method",src:_,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}},432:function(e,t,n){"use strict";var r=n(13),a=n(5),o=n(7),i=n(2),s=n(0),c=(n(10),n(8)),l=n(125),d=n(15),u=n(105),b=n(9),j=n(6),m=n(11),p=n(108),h=n(19),f=n(58),x=n(86),O=n(106);function g(e){return Object(x.a)("MuiLink",e)}var v=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(1),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(d.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(u.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),P=s.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),a=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,f=void 0===j?"a":j,x=n.onBlur,O=n.onFocus,v=n.TypographyClasses,k=n.underline,P=void 0===k?"always":k,S=n.variant,M=void 0===S?"inherit":S,z=Object(o.a)(n,y),E=Object(p.a)(),R=E.isFocusVisibleRef,B=E.onBlur,I=E.onFocus,W=E.ref,D=s.useState(!1),V=Object(r.a)(D,2),A=V[0],F=V[1],H=Object(h.a)(t,W),_=Object(i.a)({},n,{color:u,component:f,focusVisible:A,underline:P,variant:M}),L=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(b.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(o,g,t)}(_);return Object(w.jsx)(C,Object(i.a)({className:Object(c.default)(L.root,a),classes:v,color:u,component:f,onBlur:function(e){B(e),!1===R.current&&F(!1),x&&x(e)},onFocus:function(e){I(e),!0===R.current&&F(!0),O&&O(e)},ref:H,ownerState:_,variant:M},z))}));t.a=P},535:function(e,t,n){"use strict";var r=n(5),a=n(6),o=Object(a.a)("div")((function(e){var t=e.theme;return Object(r.a)({backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.background.paper,minHeight:"100vh"},t.breakpoints.down("lg"),{backgroundColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light})}));t.a=o},536:function(e,t,n){"use strict";var r=n(4),a=n(63),o=n(126),i=n(143),s=n(1),c=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,c);return Object(s.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(o.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},537:function(e,t,n){"use strict";var r=n(378),a=n(58),o=n(432),i=n(1);t.a=function(){return Object(i.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(i.jsx)(a.a,{variant:"subtitle2",component:o.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(i.jsx)(a.a,{variant:"subtitle2",component:o.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},538:function(e,t,n){"use strict";var r=n(4),a=n(171),o=n(58),i=n(503),s=n.n(i),c=n(1);t.a=function(e){var t=e.items;return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(c.jsxs)(a.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(c.jsx)(a.a,{item:!0,children:Object(c.jsx)(o.a,{variant:"h1",children:e.title})}),Object(c.jsx)(a.a,{item:!0,children:Object(c.jsx)(o.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},539:function(e,t,n){"use strict";var r=n(24),a=n(126),o=n.p+"static/media/img-a2-grid.51f4cf81.svg",i=n.p+"static/media/img-a2-grid-dark.ee5f31a9.svg",s=n(1);t.a=function(e){var t=e.children,n=Object(r.a)();return Object(s.jsx)(a.a,{component:"span",sx:{display:"flex",minHeight:"100%",height:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(i,")"):"url(".concat(o,")"),position:"absolute",backgroundPosition:"bottom left",backgroundRepeat:"no-repeat",overflow:"hidden",m:"0 0 0 auto",p:"100px 0",top:0,left:0,right:0,bottom:0,"& > *":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",top:0,left:0,right:0,zIndex:1,bottom:0,bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:n.palette.primary.light,opacity:"dark"===n.palette.mode?.85:.9}},children:t})}},550:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},685:function(e,t,n){"use strict";var r=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(87)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},865:function(e,t,n){"use strict";var r=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(87)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i}}]);
//# sourceMappingURL=60.affa28f1.chunk.js.map