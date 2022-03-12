(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[19],{1119:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(90),r=n.n(a),i=function(e){return e<2?{label:"Poor",color:r.a.errorMain}:e<3?{label:"Weak",color:r.a.warningDark}:e<4?{label:"Normal",color:r.a.orangeMain}:e<5?{label:"Good",color:r.a.successMain}:e<6?{label:"Strong",color:r.a.successDark}:{label:"Poor",color:r.a.errorMain}},c=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},1120:function(e,t,n){"use strict";t.a=n.p+"static/media/img-a2-signup.66f0729d.svg"},1797:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n(24),i=n(374),c=n(171),o=n(378),s=n(126),l=n(58),d=n(195),u=n(535),b=n(536),j=n(202),m=n(4),p=n(64),h=n.n(p),x=n(109),O=n(13),f=n(0),g=n(29),v=n(21),y=n(412),k=n(415),w=n(416),C=n(397),S=n(418),z=n(403),M=n(424),I=n(425),B=n(453),P=n(407),R=n(445),N=n(444),V=n(145),D=n(114),E=n(550),F=n(1119),H=n(17),A=n(685),W=n.n(A),L=n(865),T=n.n(L),_=n(1),q=function(e){var t=Object.assign({},e),n=Object(r.a)(),o=Object(v.e)(),d=Object(E.a)(),u=Object(g.c)(),b=Object(i.a)(n.breakpoints.down("md")),j=Object(f.useState)(!1),p=Object(O.a)(j,2),A=p[0],L=p[1],q=Object(f.useState)(!0),G=Object(O.a)(q,2),J=G[0],U=G[1],Y=Object(f.useState)(0),Z=Object(O.a)(Y,2),$=Z[0],K=Z[1],Q=Object(f.useState)(),X=Object(O.a)(Q,2),ee=X[0],te=X[1],ne=Object(D.a)().register,ae=function(){L(!A)},re=function(e){e.preventDefault()},ie=function(e){var t=Object(F.b)(e);K(t),te(Object(F.a)(t))};return Object(f.useEffect)((function(){ie("123456")}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(c.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:Object(_.jsx)(c.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(_.jsx)(s.a,{sx:{mb:2},children:Object(_.jsx)(l.a,{variant:"subtitle1",children:"Sign up with Email address"})})})}),Object(_.jsx)(N.b,{initialValues:{email:"",password:"",firstName:"",lastName:"",submit:null},validationSchema:R.d().shape({email:R.f().email("Must be a valid email").max(255).required("Email is required"),password:R.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(x.a)(h.a.mark((function e(t,n){var a,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,r=n.setStatus,i=n.setSubmitting,e.prev=1,e.next=4,ne(t.email,t.password,t.firstName,t.lastName);case 4:d.current&&(r({success:!0}),i(!1),u({type:H.H,open:!0,message:"Your registration has been successfully completed.",variant:"alert",alertSeverity:"success"}),setTimeout((function(){o("/activationrequest",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),d.current&&(r({success:!1}),a({submit:e.t0.message}),i(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,o=e.handleChange,d=e.handleSubmit,u=e.isSubmitting,j=e.touched,p=e.values;return Object(_.jsxs)("form",Object(m.a)(Object(m.a)({noValidate:!0,onSubmit:d},t),{},{children:[Object(_.jsxs)(c.a,{container:!0,spacing:b?0:2,children:[Object(_.jsx)(c.a,{item:!0,xs:12,sm:6,children:Object(_.jsx)(y.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"firstName",type:"text",value:p.firstName,onBlur:i,onChange:o,sx:Object(m.a)({},n.typography.customInput)})}),Object(_.jsx)(c.a,{item:!0,xs:12,sm:6,children:Object(_.jsx)(y.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lastName",type:"text",value:p.lastName,onBlur:i,onChange:o,sx:Object(m.a)({},n.typography.customInput)})})]}),Object(_.jsxs)(k.a,{fullWidth:!0,error:Boolean(j.email&&r.email),sx:Object(m.a)({},n.typography.customInput),children:[Object(_.jsx)(w.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(_.jsx)(C.a,{id:"outlined-adornment-email-register",type:"email",value:p.email,name:"email",onBlur:i,onChange:o,inputProps:{}}),j.email&&r.email&&Object(_.jsx)(S.a,{error:!0,id:"standard-weight-helper-text--register",children:r.email})]}),Object(_.jsxs)(k.a,{fullWidth:!0,error:Boolean(j.password&&r.password),sx:Object(m.a)({},n.typography.customInput),children:[Object(_.jsx)(w.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(_.jsx)(C.a,{id:"outlined-adornment-password-register",type:A?"text":"password",value:p.password,name:"password",label:"Password",onBlur:i,onChange:function(e){o(e),ie(e.target.value)},endAdornment:Object(_.jsx)(z.a,{position:"end",children:Object(_.jsx)(M.a,{"aria-label":"toggle password visibility",onClick:ae,onMouseDown:re,edge:"end",size:"large",children:A?Object(_.jsx)(W.a,{}):Object(_.jsx)(T.a,{})})}),inputProps:{}}),j.password&&r.password&&Object(_.jsx)(S.a,{error:!0,id:"standard-weight-helper-text-password-register",children:r.password})]}),0!==$&&Object(_.jsx)(k.a,{fullWidth:!0,children:Object(_.jsx)(s.a,{sx:{mb:2},children:Object(_.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",children:[Object(_.jsx)(c.a,{item:!0,children:Object(_.jsx)(s.a,{style:{backgroundColor:null===ee||void 0===ee?void 0:ee.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(_.jsx)(c.a,{item:!0,children:Object(_.jsx)(l.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===ee||void 0===ee?void 0:ee.label})})]})})}),Object(_.jsx)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(_.jsx)(c.a,{item:!0,children:Object(_.jsx)(I.a,{control:Object(_.jsx)(B.a,{checked:J,onChange:function(e){return U(e.target.checked)},name:"checked",color:"primary"}),label:Object(_.jsxs)(l.a,{variant:"subtitle1",children:["Agree with \xa0",Object(_.jsx)(l.a,{variant:"subtitle1",component:a.b,to:"#",children:"Terms & Condition."})]})})})}),r.submit&&Object(_.jsx)(s.a,{sx:{mt:3},children:Object(_.jsx)(S.a,{error:!0,children:r.submit})}),Object(_.jsx)(s.a,{sx:{mt:2},children:Object(_.jsx)(V.a,{children:Object(_.jsx)(P.a,{disableElevation:!0,disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})},G=n(539),J=n(537),U=n(538),Y=n(1120),Z=[{title:"Discount Fair",description:"Un outil de fid\xe9lisation puissant gr\xe2ce au digital"},{title:"Discount Fair",description:"Pour \xe9conomiser sur vos achats et faire profiter vos relations"},{title:"Discount Fair",description:"Vous avez le choix du meilleur produit au bout des doigts"}];t.default=function(){var e=Object(r.a)(),t=Object(i.a)(e.breakpoints.down("md")),n=Object(i.a)(e.breakpoints.down("lg"));return Object(_.jsx)(u.a,{children:Object(_.jsxs)(c.a,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[Object(_.jsx)(c.a,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:Object(_.jsxs)(c.a,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[Object(_.jsx)(c.a,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:Object(_.jsx)(a.b,{to:"#",children:Object(_.jsx)(j.a,{})})}),Object(_.jsx)(c.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:Object(_.jsxs)(o.a,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[Object(_.jsx)(s.a,{component:a.b,to:"/home",sx:{display:{xs:"block",md:"none"}},children:Object(_.jsx)(j.a,{})}),Object(_.jsx)(b.a,{border:n,children:Object(_.jsxs)(c.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(_.jsx)(c.a,{item:!0,xs:12,children:Object(_.jsxs)(o.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(_.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),Object(_.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})}),Object(_.jsx)(c.a,{item:!0,xs:12,children:Object(_.jsx)(q,{})}),Object(_.jsx)(c.a,{item:!0,xs:12,children:Object(_.jsx)(d.a,{})}),Object(_.jsx)(c.a,{item:!0,xs:12,children:Object(_.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(_.jsx)(l.a,{component:a.b,to:"/pages/login/login2",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})]})}),Object(_.jsx)(c.a,{item:!0,xs:12,sx:{m:3},children:Object(_.jsx)(J.a,{})})]})}),Object(_.jsx)(c.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(_.jsx)(G.a,{children:Object(_.jsxs)(c.a,{item:!0,container:!0,justifyContent:"center",children:[Object(_.jsx)(c.a,{item:!0,xs:12,children:Object(_.jsx)(c.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(_.jsx)(c.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(_.jsx)(U.a,{items:Z})})})}),Object(_.jsx)(c.a,{item:!0,xs:12,children:Object(_.jsx)("img",{alt:"Auth method",src:Y.a,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}},432:function(e,t,n){"use strict";var a=n(13),r=n(5),i=n(7),c=n(2),o=n(0),s=(n(10),n(8)),l=n(125),d=n(15),u=n(105),b=n(9),j=n(6),m=n(11),p=n(108),h=n(19),x=n(58),O=n(86),f=n(106);function g(e){return Object(O.a)("MuiLink",e)}var v=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(x.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return Object(c.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(u.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),S=o.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),r=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,x=void 0===j?"a":j,O=n.onBlur,f=n.onFocus,v=n.TypographyClasses,w=n.underline,S=void 0===w?"always":w,z=n.variant,M=void 0===z?"inherit":z,I=Object(i.a)(n,k),B=Object(p.a)(),P=B.isFocusVisibleRef,R=B.onBlur,N=B.onFocus,V=B.ref,D=o.useState(!1),E=Object(a.a)(D,2),F=E[0],H=E[1],A=Object(h.a)(t,V),W=Object(c.a)({},n,{color:u,component:x,focusVisible:F,underline:S,variant:M}),L=function(e){var t=e.classes,n=e.component,a=e.focusVisible,r=e.underline,i={root:["root","underline".concat(Object(b.a)(r)),"button"===n&&"button",a&&"focusVisible"]};return Object(l.a)(i,g,t)}(W);return Object(y.jsx)(C,Object(c.a)({className:Object(s.default)(L.root,r),classes:v,color:u,component:x,onBlur:function(e){R(e),!1===P.current&&H(!1),O&&O(e)},onFocus:function(e){N(e),!0===P.current&&H(!0),f&&f(e)},ref:A,ownerState:W,variant:M},I))}));t.a=S},453:function(e,t,n){"use strict";var a=n(5),r=n(7),i=n(2),c=n(0),o=(n(10),n(125)),s=n(105),l=n(146),d=n(28),u=n(1),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=n(9),h=n(11),x=n(6),O=n(86),f=n(106);function g(e){return Object(O.a)("MuiCheckbox",e)}var v=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(p.a)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return Object(i.a)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(a.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:n.palette[r.color].main}),Object(a.a)(t,"&.".concat(v.disabled),{color:n.palette.action.disabled}),t))})),w=Object(u.jsx)(j,{}),C=Object(u.jsx)(b,{}),S=Object(u.jsx)(m,{}),z=c.forwardRef((function(e,t){var n,a,s=Object(h.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?w:l,b=s.color,j=void 0===b?"primary":b,m=s.icon,x=void 0===m?C:m,O=s.indeterminate,f=void 0!==O&&O,v=s.indeterminateIcon,z=void 0===v?S:v,M=s.inputProps,I=s.size,B=void 0===I?"medium":I,P=Object(r.a)(s,y),R=f?z:x,N=f?z:d,V=Object(i.a)({},s,{color:j,indeterminate:f,size:B}),D=function(e){var t=e.classes,n=e.indeterminate,a=e.color,r={root:["root",n&&"indeterminate","color".concat(Object(p.a)(a))]},c=Object(o.a)(r,g,t);return Object(i.a)({},t,c)}(V);return Object(u.jsx)(k,Object(i.a)({type:"checkbox",inputProps:Object(i.a)({"data-indeterminate":f},M),icon:c.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:B}),checkedIcon:c.cloneElement(N,{fontSize:null!=(a=N.props.fontSize)?a:B}),ownerState:V,ref:t},P,{classes:D}))}));t.a=z},535:function(e,t,n){"use strict";var a=n(5),r=n(6),i=Object(r.a)("div")((function(e){var t=e.theme;return Object(a.a)({backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.background.paper,minHeight:"100vh"},t.breakpoints.down("lg"),{backgroundColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light})}));t.a=i},536:function(e,t,n){"use strict";var a=n(4),r=n(63),i=n(126),c=n(143),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(r.a)(e,s);return Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},537:function(e,t,n){"use strict";var a=n(378),r=n(58),i=n(432),c=n(1);t.a=function(){return Object(c.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(c.jsx)(r.a,{variant:"subtitle2",component:i.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},538:function(e,t,n){"use strict";var a=n(4),r=n(171),i=n(58),c=n(503),o=n.n(c),s=n(1);t.a=function(e){var t=e.items;return Object(s.jsx)(o.a,Object(a.a)(Object(a.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(s.jsxs)(r.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"h1",children:e.title})}),Object(s.jsx)(r.a,{item:!0,children:Object(s.jsx)(i.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},539:function(e,t,n){"use strict";var a=n(24),r=n(126),i=n.p+"static/media/img-a2-grid.51f4cf81.svg",c=n.p+"static/media/img-a2-grid-dark.ee5f31a9.svg",o=n(1);t.a=function(e){var t=e.children,n=Object(a.a)();return Object(o.jsx)(r.a,{component:"span",sx:{display:"flex",minHeight:"100%",height:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(c,")"):"url(".concat(i,")"),position:"absolute",backgroundPosition:"bottom left",backgroundRepeat:"no-repeat",overflow:"hidden",m:"0 0 0 auto",p:"100px 0",top:0,left:0,right:0,bottom:0,"& > *":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",top:0,left:0,right:0,zIndex:1,bottom:0,bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:n.palette.primary.light,opacity:"dark"===n.palette.mode?.85:.9}},children:t})}},550:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},685:function(e,t,n){"use strict";var a=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(87)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},865:function(e,t,n){"use strict";var a=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(87)),i=n(1),c=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c}}]);
//# sourceMappingURL=19.e41b9c7b.chunk.js.map