(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(82)},78:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r,a,i,o,s,l,u,c,p=n(0),m=n(19),h=n(15),d=n(23),f=n(1),y=n(2),b=n(14),v=(n(42),n(6)),E=(r=function(){function e(){Object(f.a)(this,e),Object(d.a)(this,"error",a,this),Object(d.a)(this,"errorText",i,this),Object(d.a)(this,"busy",o,this),Object(d.a)(this,"verified",s,this)}return Object(y.a)(e,[{key:"request",value:function(t,n,r,a){var i=this;return this.busy=!0,e.doFetch(t,n,r).then(function(e){return i.busy=!1,a[e.status]?a[e.status](e):200==e.status?e.json():e.json().then(function(e){return i.setError(e.message)})}).catch(function(e){return i.busy=!1,i.setError(e.message)})}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,t,n)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,{},t)}},{key:"setError",value:function(e){return this.error=!0,this.errorText=e,Promise.reject(e)}},{key:"clearError",value:function(){this.error=!1,this.errorText=""}},{key:"storeOption",value:function(e){var t=this;return this.post("storeOption",{key:this.verified.profile.verificationKey,option:e}).then(function(e){t.verified.profile=e})}},{key:"storeTimeOption",value:function(e){var t=this;return this.post("storeTimeOption",{key:this.verified.profile.verificationKey,time:e}).then(function(e){t.verified.profile=e})}},{key:"storeHoliday",value:function(e){var t=this;return this.post("storeHoliday",{key:this.verified.profile.verificationKey,holiday:e}).then(function(e){t.verified.profile=e})}},{key:"storeFriends",value:function(e){var t=this;return this.post("storeFriends",{key:this.verified.profile.verificationKey,friends:e}).then(function(e){t.verified.profile=e})}},{key:"storeUserDetails",value:function(e,t){var n=this;return this.post("storeUserDetails",{key:this.verified.profile.verificationKey,username:e,surname:t}).then(function(e){n.verified.profile=e})}},{key:"signup",value:function(e){var t={409:function(e){return e.json().then(function(e){return Promise.resolve({exists:!0,token:e.token})})}};return this.post("signup",{username:e.username,email:e.email,recaptcha:e.recaptcha},t).then(function(e){return e.exists?e:{exists:!1,profile:e}})}},{key:"requestEmail",value:function(e){return this.post("resendEmail",e)}},{key:"unsubscribe",value:function(){var e=this;return this.post("unsubscribe",{key:this.verified.profile.verificationKey}).then(function(){e.verified.verified=!1,e.verified.profile})}},{key:"hasRole",value:function(e){return!!this.verified&&(!e||this.verified.profile.roles.some(function(t){return t===e}))}},{key:"checkUser",value:function(e){return this.verified&&this.verified.verified&&this.verified.profile&&this.verified.profile.verificationKey===e}},{key:"verify",value:function(e,t){var n=this;return this.checkUser(e)&&this.hasRole(t)?Promise.resolve(this.verified):this.get("verify?key="+e).then(function(e){return n.verified={verified:!0,profile:e},n.verified})}},{key:"turnout",value:function(){return this.get("turnout?key="+this.verified.profile.verificationKey).then(function(e){return e.result})}},{key:"rollUsers",value:function(){return this.post("rollUsers",{key:this.verified.profile.verificationKey})}},{key:"sendBeginWeekEmail",value:function(){return this.post("sendBeginWeekEmail",{key:this.verified.profile.verificationKey})}},{key:"sendReminderEmail",value:function(){return this.post("sendReminderEmail",{key:this.verified.profile.verificationKey})}},{key:"sendFinalEmail",value:function(){return this.post("sendFinalEmail",{key:this.verified.profile.verificationKey})}},{key:"sendCustomEmail",value:function(e,t){return this.post("sendCustomEmail",{key:this.verified.profile.verificationKey,text:e,allUsers:t})}}],[{key:"doFetch",value:function(e,t,n){var r=new Headers;switch(r.append("Content-Type","application/json"),e){case"GET":return fetch("/api/"+t,{method:"GET"});case"POST":return fetch("/api/"+t,{method:"POST",body:JSON.stringify(n),headers:r});default:throw"Unknown method: "+e}}}]),e}(),a=Object(b.a)(r.prototype,"error",[v.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=Object(b.a)(r.prototype,"errorText",[v.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),o=Object(b.a)(r.prototype,"busy",[v.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),s=Object(b.a)(r.prototype,"verified",[v.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{verified:!1}}}),Object(b.a)(r.prototype,"setError",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"setError"),r.prototype),Object(b.a)(r.prototype,"clearError",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"clearError"),r.prototype),Object(b.a)(r.prototype,"storeOption",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"storeOption"),r.prototype),Object(b.a)(r.prototype,"storeTimeOption",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"storeTimeOption"),r.prototype),Object(b.a)(r.prototype,"storeHoliday",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"storeHoliday"),r.prototype),Object(b.a)(r.prototype,"storeFriends",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"storeFriends"),r.prototype),Object(b.a)(r.prototype,"storeUserDetails",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"storeUserDetails"),r.prototype),Object(b.a)(r.prototype,"signup",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"signup"),r.prototype),Object(b.a)(r.prototype,"requestEmail",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"requestEmail"),r.prototype),Object(b.a)(r.prototype,"unsubscribe",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"unsubscribe"),r.prototype),Object(b.a)(r.prototype,"verify",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"verify"),r.prototype),Object(b.a)(r.prototype,"turnout",[v.c],Object.getOwnPropertyDescriptor(r.prototype,"turnout"),r.prototype),r),k=n(11),O=n(4),g=n(3),j=n(5),w=Object(k.b)("controller")(l=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Oh dear something went wrong!"),p.createElement("p",null,"You can try refreshing, otherwise please try again later."),p.createElement("p",null,"If you unsubscribed, links you were sent in email will no longer work. You should ",p.createElement(h.b,{to:"/"},"subscribe again"),"."),p.createElement("pre",null,this.props.controller.errorText))}}]),t}(p.Component))||l,N=n(12),C=n(8),S=n(73),A=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={username:"",email:"",surname:"",emailExists:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"signUp",value:function(){var e=this;this.setState({emailExists:!1}),this.props.controller.signup({username:this.state.username,surname:this.state.surname,email:this.state.email,recaptcha:this.state.recaptcha}).then(function(t){if(!t.exists)return e.props.history.push("/welcome/"+t.profile.verificationKey);e.setState({emailExists:!0,emailResendToken:t.token})})}},{key:"resendEmail",value:function(){var e=this;this.setState({requestEmail:!0}),this.props.controller.requestEmail({email:this.state.email,token:this.state.emailResendToken}).then(function(){return e.props.history.push("/resentEmail")})}},{key:"updateUsername",value:function(e){this.setState({username:e.target.value})}},{key:"updateSurname",value:function(e){this.setState({surname:e.target.value})}},{key:"updateEmail",value:function(e){this.setState({emailExists:!1,email:e.target.value})}},{key:"verifyCallback",value:function(e){this.setState({recaptcha:e})}},{key:"render",value:function(){var e=this,t=this.updateUsername.bind(this),n=this.updateEmail.bind(this),r=this.resendEmail.bind(this),a=this.signUp.bind(this),i=this.verifyCallback.bind(this);return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Welcome to Kensal Rise Backgammon. The club meets every Thursday at The Island pub from 8.30pm."),p.createElement("p",null,"To register your interest please enter your name and email below. We send weekly reminder emails to members."),p.createElement("form",{className:"pure-form pure-form-stacked"},p.createElement("fieldset",null,p.createElement("legend",null,"Sign up to Kensal Rise Backgammon"),p.createElement("label",{htmlFor:"username"},"First Name"),p.createElement("input",{id:"username",type:"text",placeholder:"Enter your name",required:!0,onChange:t,value:this.state.username}),p.createElement("label",{htmlFor:"surname"},"Surname (optional)"),p.createElement("input",{id:"surname",type:"text",placeholder:"Surname or first initial",onChange:function(t){return e.updateSurname(t)},value:this.state.surname}),p.createElement("label",{htmlFor:"email"},"Email"),p.createElement("input",{id:"email",type:"email",placeholder:"Enter your email",onChange:n,value:this.state.email}),this.state.emailExists&&p.createElement("div",{className:"Error"},"This email is already registered. Enter a different email or\xa0",p.createElement("a",{href:"#",onClick:r},"request an email")," you can then use to manage your profile."),this.state.requestEmail||p.createElement("div",{className:"Recaptcha"},p.createElement(S,{render:"explicit",onloadCallback:function(e){},verifyCallback:i,sitekey:"6LeVoTMUAAAAAEsZ1Pr5kaTV-18vSfm1jsB04nbQ"})),p.createElement("button",{type:"button",className:"pure-button pure-button-primary",onClick:a,disabled:void 0==this.state.email||void 0==this.state.recaptcha},this.props.controller.busy&&p.createElement(C.ScaleLoader,{color:"white",height:12,loading:!0}),this.props.controller.busy||p.createElement("span",null,"Sign Up!")))))}}]),t}(p.Component),T=Object(k.b)("controller")(Object(N.d)(A)),F=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"You've been subscribed to Kensal Rise Backgammon!"),p.createElement("p",null,"We've sent you a welcome email to the email address you provided. Use the link in the email to manage your settings or unsubscribe."),p.createElement("p",null,"Or go straight to your ",p.createElement(Q,{verificationKey:this.props.match.params.key},"Profile")))}}]),t}(p.Component),U=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={busy:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.setState({friends:this.props.controller.verified.profile.friends})}},{key:"changeOption",value:function(e){this.setState({saved:!1,friends:e.target.value})}},{key:"storeFriends",value:function(e){var t=this;this.setState({saved:!1,busy:!0}),this.props.controller.storeFriends(e?void 0:this.state.friends).then(function(){t.setState({saved:!0,busy:!1})}).catch(function(){})}},{key:"clearFriends",value:function(){this.setState({friends:void 0}),this.storeFriends(!0)}},{key:"resetFriends",value:function(){this.setState({friends:this.props.controller.verified.profile.friends})}},{key:"render",value:function(){var e=this,t=this.props.controller.verified.profile;return p.createElement("form",{className:"pure-form App-standoff"},p.createElement("fieldset",null,p.createElement("legend",null,"Bringing a friend?"),p.createElement("div",null,"If you're planning to bring a friend or two along this week, tell us how many."),this.state.saved&&p.createElement("div",{className:"App-confirmsave"},p.createElement("span",null,"Your friend count was ",this.state.friends?"saved":"removed")),this.state.busy&&p.createElement("div",{className:"App-standoff"},p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))||p.createElement("div",{className:"pure-control-group control-group-inline App-standoff"},"I'm planning to bring along \xa0",p.createElement("select",{value:this.state.friends,onChange:function(t){return e.changeOption(t)}},p.createElement("option",{hidden:void 0!=t.friends,selected:void 0===this.state.friends,value:void 0},"-"),[1,2,3,4,5].map(function(e){return p.createElement("option",{key:"option-"+e,value:e},e)})),p.createElement("span",{className:"App-selectlabel"},"friend(s)"),p.createElement("button",{type:"button",onClick:function(t){return e.storeFriends()},hidden:this.state.friends===t.friends,className:"pure-button pure-button-primary"},"Save"),p.createElement("button",{type:"button",onClick:function(t){return e.clearFriends()},hidden:void 0==t.friends||this.state.friends!==t.friends,className:"pure-button"},"Remove Friends"),p.createElement("button",{type:"button",onClick:function(t){return e.resetFriends()},hidden:this.state.friends===t.friends,className:"pure-button"},"Cancel"))))}}]),t}(p.Component),R=Object(k.c)(u=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={confirmed:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.option;this.props.controller.storeOption(t).then(function(){e.setState({confirmed:!0})}).catch()}},{key:"render",value:function(){var e=this.props.match.params.option,t=this.props.controller.verified.profile;return e&&!this.state.confirmed?p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Hold tight ",t.username,", storing your selection!"),p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0})):p.createElement("section",null,p.createElement("p",{className:"App-intro"},"yes"===e&&p.createElement("span",null,"You've confirmed you will come this week!"),"no"===e&&p.createElement("span",null,"Sorry you can't make it this week!")),"yes"==e&&p.createElement(U,{controller:this.props.controller}),p.createElement("p",null,p.createElement(h.b,{className:"pure-button pure-button-primary",to:"/confirmed/"+this.props.match.params.key},"See who else is coming")))}}]),t}(p.Component))||u,x=n(36);function D(e,t){return Object(k.b)("controller")(Object(N.d)(function(n){function r(){var e,t;Object(f.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=Object(O.a)(this,(e=Object(g.a)(r)).call.apply(e,[this].concat(a)))).state={verified:!1},t}return Object(j.a)(r,n),Object(y.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.props.controller.verify(this.props.match.params.key,t).then(function(t){e.setState(t)})}},{key:"render",value:function(){var t=this.props,n=(t.name,Object(x.a)(t,["name"])),r="withHoc(".concat(e.displayName||e.name,")");return this.state.verified?p.createElement(e,Object.assign({name:r},n)):p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Fetching your details"),p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))}}]),r}(p.Component)))}!function(e){e.t2000="8pm",e.t2030="8.30pm",e.t2100="9pm",e.t2130="9.30pm"}(c||(c={}));var P,K,I=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.filter(function(t){return t.option==e.props.option}).reduce(function(e,t){var n="yes"===t.option&&t.friends||0;return Number(e+1)+Number(n)},0);return p.createElement("span",null,function(e){return e>1?"are "+e+" people":0==e?"are no people":"is one person"}(t))}}]),t}(p.Component),H=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.controller.turnout().then(function(t){return e.setState({turnout:t,ready:!0})})}},{key:"renderGroup",value:function(e){return this.state.turnout.filter(function(t){return t.option===e}).map(function(t,n){return p.createElement("div",{className:"App-userbadge",key:e+"-"+n},(r=t).surname&&r.useSurname?r.username+" "+r.surname:r.surname&&r.surname.length?r.username+" "+r.surname.charAt(0):r.username,t.friends&&"yes"===t.option&&p.createElement("span",null," + ",t.friends));var r})}},{key:"render",value:function(){return this.state.ready&&p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Current responses for this week"),p.createElement("p",null,"Regular start time is 8.30pm"),p.createElement("form",{className:"pure-form pure-form-stacked"},p.createElement("fieldset",null,p.createElement("legend",null,"There ",p.createElement(I,{items:this.state.turnout,option:"yes"})," confirmed"),this.renderGroup("yes")),p.createElement("fieldset",null,p.createElement("legend",null,"There ",p.createElement(I,{items:this.state.turnout,option:"no"})," who cannot make it"),this.renderGroup("no"))),p.createElement("p",null,"There are currently ",this.state.turnout.length," people on the email list."),p.createElement("p",null,"If you need to update your status for this week, view your ",p.createElement(Q,{verificationKey:this.props.match.params.key},"Profile"),"."))||p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Fetching information for this week"),p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))}}]),t}(p.Component),B=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"A welcome email has been re-sent to your email address."),p.createElement("p",null,"Use the link in the email to manage your profile."))}}]),t}(p.Component),Y=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={unsubscribeConfirmation:!1,busy:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"unsubscribePrelim",value:function(){this.setState({unsubscribeConfirmation:!0})}},{key:"unsubscribeCancel",value:function(){this.setState({unsubscribeConfirmation:!1})}},{key:"unsubscribeProper",value:function(){var e=this;this.props.controller.unsubscribe().then(function(){return e.setState({busy:!1,unsubscribeConfirmation:!1}),e.props.history.push("/unsubscribed")})}},{key:"render",value:function(){var e=this.unsubscribePrelim.bind(this),t=this.unsubscribeProper.bind(this),n=this.unsubscribeCancel.bind(this);return p.createElement("form",{className:"pure-form App-standoff-large"},p.createElement("fieldset",null,p.createElement("legend",null,"... this is getting a bit much"),this.state.busy&&p.createElement("div",{className:"App-standoff"},p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))||p.createElement("div",null,p.createElement("div",null,"If you no longer want to receive club emails, click the button below. You won't receive the weekly emails but you can still play if you want, and you can subscribe again at any time!"),this.state.unsubscribeConfirmation&&p.createElement("div",{className:"App-standoff"},"Are you sure you want to unsubscribe?",p.createElement("div",{className:"pure-control-group"},p.createElement("button",{type:"button",className:"pure-button pure-button-primary",onClick:t},p.createElement("span",null,"Confirm")),p.createElement("button",{type:"button",className:"pure-button",onClick:n},"Cancel"))),this.state.unsubscribeConfirmation||p.createElement("div",{className:"pure-control-group"},p.createElement("button",{type:"button",className:"pure-button pure-button-primary",onClick:e},p.createElement("span",null,"Unsubscribe"))))))}}]),t}(p.Component),L=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={unsubscribeConfirmation:!1,optionChanged:!1,busy:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"setOption",value:function(e){var t=this;this.setState({optionChanged:!1,busy:!0}),this.props.controller.storeOption(e).then(function(){t.setState({optionChanged:!0,busy:!1})})}},{key:"setOptionYes",value:function(){this.setOption("yes")}},{key:"setOptionNo",value:function(){this.setOption("no")}},{key:"render",value:function(){var e=this.setOptionYes.bind(this),t=this.setOptionNo.bind(this),n=this.props.controller.verified.profile.option;return p.createElement("div",null,p.createElement("form",{className:"pure-form"},p.createElement("fieldset",null,"yes"===n&&p.createElement("legend",null,"You've said you're coming this week!"),"no"===n&&p.createElement("legend",null,"You've said you're not coming this week."),void 0===n&&p.createElement("legend",null,"You haven't let us know this week..."),this.state.busy&&p.createElement("div",{className:"App-standoff"},p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))||p.createElement("div",{className:"pure-control-group"},p.createElement("button",{type:"button",hidden:"yes"===n,onClick:e,className:"pure-button pure-button-primary"},"I'll be there"),p.createElement("button",{type:"button",hidden:"no"===n,onClick:t,className:"pure-button pure-button-primary"},"I can't come"),"\xa0"))))}}]),t}(p.Component),W=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={busy:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.setState({holiday:this.props.controller.verified.profile.holiday})}},{key:"changeOption",value:function(e){this.setState({saved:!1,holiday:e.target.value})}},{key:"storeHoliday",value:function(e){var t=this;this.setState({saved:!1,busy:!0}),this.props.controller.storeHoliday(e?void 0:this.state.holiday).then(function(){t.setState({saved:!0,busy:!1})}).catch(function(){})}},{key:"clearHoliday",value:function(){this.setState({holiday:void 0}),this.storeHoliday(!0)}},{key:"resetHoliday",value:function(){this.setState({holiday:this.props.controller.verified.profile.holiday})}},{key:"render",value:function(){var e=this,t=this.props.controller.verified.profile;return p.createElement("form",{className:"pure-form App-standoff"},p.createElement("fieldset",null,p.createElement("legend",null,"Take a break from emails"),p.createElement("div",null,"If you're going on holiday or know you can't come for a while, opt out of the weekly emails."),this.state.saved&&p.createElement("div",{className:"App-confirmsave"},p.createElement("span",null,"Your email opt out was ",this.state.holiday?"saved":"removed")),this.state.busy&&p.createElement("div",{className:"App-standoff"},p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))||p.createElement("div",{className:"pure-control-group control-group-inline"},p.createElement("select",{value:this.state.holiday,onChange:function(t){return e.changeOption(t)}},p.createElement("option",{hidden:void 0!=t.holiday,selected:void 0===this.state.holiday,value:void 0},"-"),[1,2,3,4,5,6,7,8,9,10].map(function(e){return p.createElement("option",{key:"option-"+e,value:e},e)})),p.createElement("span",{className:"App-selectlabel"},"Weeks"),p.createElement("button",{type:"button",onClick:function(t){return e.storeHoliday()},hidden:this.state.holiday===t.holiday,className:"pure-button pure-button-primary"},"Save"),p.createElement("button",{type:"button",onClick:function(t){return e.clearHoliday()},hidden:void 0==t.holiday||this.state.holiday!==t.holiday,className:"pure-button"},"Remove Opt Out"),p.createElement("button",{type:"button",onClick:function(t){return e.resetHoliday()},hidden:this.state.holiday===t.holiday,className:"pure-button"},"Cancel"))))}}]),t}(p.Component),q=n(35),M=n(22),G=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).state={busy:!1,username:"",surname:"",saved:!1},n.updateInput=n.updateInput.bind(Object(M.a)(Object(M.a)(n))),n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.updateStateFromController()}},{key:"updateStateFromController",value:function(){this.setState({busy:!1,username:this.profile.username,surname:this.profile.surname})}},{key:"updateInput",value:function(e){this.setState(Object(q.a)({saved:!1},e.target.name,e.target.value))}},{key:"storeDetails",value:function(){var e=this;this.setState({saved:!1,busy:!0}),this.props.controller.storeUserDetails(this.state.username,this.state.surname).then(function(){e.setState({saved:!0,busy:!1}),e.updateStateFromController()}).catch(function(){})}},{key:"resetDetails",value:function(){this.setState({username:this.profile.username,surname:this.profile.surname})}},{key:"render",value:function(){var e=this;return p.createElement("form",{className:"pure-form pure-form-stacked"},p.createElement("fieldset",null,p.createElement("legend",null,"Change your details"),this.state.saved&&p.createElement("div",{className:"App-confirmsave"},p.createElement("span",null,"Your details were saved")),this.state.busy&&p.createElement("div",{className:"App-standoff"},p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0}))||p.createElement("div",null,p.createElement("div",{className:"pure-g"},p.createElement("div",{className:"pure-u-1 pure-u-sm-1-2"},p.createElement("label",{htmlFor:"username"},"First Name"),p.createElement("input",{name:"username",id:"username",type:"text",placeholder:"Enter your name",required:!0,onChange:this.updateInput,value:this.state.username})),p.createElement("div",{className:"pure-u-1 pure-u-sm-1-2"},p.createElement("label",{htmlFor:"surname"},"Surname (optional)"),p.createElement("input",{name:"surname",id:"surname",type:"text",placeholder:"Surname or initial",onChange:this.updateInput,value:this.state.surname||""}))),p.createElement("button",{type:"button",onClick:function(t){return e.storeDetails()},hidden:this.pristine,className:"pure-button pure-button-primary"},"Save"),p.createElement("button",{type:"button",onClick:function(t){return e.resetDetails()},hidden:this.pristine,className:"pure-button"},"Cancel"))))}},{key:"profile",get:function(){return this.props.controller.verified.profile}},{key:"pristine",get:function(){return this.state.username===this.profile.username&&this.state.surname===this.profile.surname}}]),t}(p.Component),z=Object(k.c)(P=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.controller,t=e.verified.profile,n=t.username,r=t.option;return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Hello ",n,", this is your Kensal Rise Backgammon profile"),p.createElement("p",null,"The club meets Thursdays at The Island pub in Kensal Rise. Regular start time is 8.30pm."),p.createElement("div",null,p.createElement(L,{controller:e}),"yes"==r&&p.createElement(U,{controller:e}),p.createElement("form",{className:"pure-form App-standoff"},p.createElement("fieldset",null,p.createElement("legend",null,"Want to know who's coming?"),p.createElement(h.b,{className:"pure-button pure-button-primary",to:"/confirmed/"+this.props.match.params.key},"Show me"))),p.createElement(W,{controller:e}),p.createElement(G,{controller:e}),e.verified.profile.roles.some(function(e){return"admin"===e})&&p.createElement("div",null,p.createElement("form",{className:"pure-form App-standoff"},p.createElement("p",null),p.createElement("fieldset",null,p.createElement("legend",null,"Looks like you're an admin"),p.createElement(h.b,{className:"pure-button pure-button-primary",to:"/admin/"+e.verified.profile.verificationKey},"Go to Admin")))),p.createElement(Y,{controller:e,history:this.props.history})))}}]),t}(p.Component))||P,J=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"You've been unsubscribed"),p.createElement("p",null,"You'll no longer receive emails from us."),p.createElement("p",null,"If you want to subscribe again at any point just ",p.createElement(h.b,{to:"/"},"use the form on our homepage"),"."),p.createElement("p",null,"Note that if you bookmarked your profile page or added it to your homescreen, these links will no longer work."))}}]),t}(p.Component),V=Object(k.c)(K=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={emailText:"",allUsers:!1},n}return Object(j.a)(t,e),Object(y.a)(t,[{key:"sendRollUsers",value:function(){return this.props.controller.rollUsers()}},{key:"sendBeginWeekEmail",value:function(){return this.props.controller.sendBeginWeekEmail()}},{key:"sendReminderEmail",value:function(){return this.props.controller.sendReminderEmail()}},{key:"sendFinalEmail",value:function(){return this.props.controller.sendFinalEmail()}},{key:"handleEmailTextChange",value:function(e){this.setState({emailText:e.target.value})}},{key:"updateAllUsersFlag",value:function(){this.setState({allUsers:!this.state.allUsers})}},{key:"sendCustomEmail",value:function(){return this.props.controller.sendCustomEmail(this.state.emailText,this.state.allUsers)}},{key:"render",value:function(){var e=this,t=this.sendBeginWeekEmail.bind(this),n=this.sendReminderEmail.bind(this),r=this.sendFinalEmail.bind(this);return p.createElement("div",null,p.createElement("p",{className:"App-intro"},"Welcome to admin"),p.createElement("form",{className:"pure-form pure-form-stacked"},p.createElement("fieldset",null,p.createElement("legend",null,"Send a message to all subscribers (not formatted)"),p.createElement("textarea",{className:"App-email-message",value:this.state.emailText,onChange:function(t){return e.handleEmailTextChange(t)},rows:10}),this.props.controller.busy||p.createElement("div",{className:"pure-control-group"},p.createElement("button",{type:"button",onClick:function(){return e.sendCustomEmail()},className:"pure-button pure-button-primary"},"Send"),p.createElement("input",{type:"checkbox",name:"allUsers",onClick:function(){return e.updateAllUsersFlag()},checked:this.state.allUsers})," Include opted out users")),p.createElement("fieldset",null,p.createElement("legend",null,"Manually send weekly emails"),this.props.controller.busy&&p.createElement(C.ScaleLoader,{color:"blue",height:12,loading:!0})||p.createElement("div",{className:"pure-control-group App-evenbuttons"},p.createElement("button",{type:"button",onClick:function(){return e.sendRollUsers()},className:"pure-button pure-button-primary"},"Roll Users"),p.createElement("button",{type:"button",onClick:t,className:"pure-button pure-button-primary"},"Begin Week"),p.createElement("button",{type:"button",onClick:n,className:"pure-button pure-button-primary"},"Reminder"),p.createElement("button",{type:"button",onClick:r,className:"pure-button pure-button-primary"},"Final")))),p.createElement("p",null,p.createElement(Q,{verificationKey:this.props.controller.verified.profile.verificationKey},"Back to safety...")))}}]),t}(p.Component))||K,Q=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return p.createElement(h.b,{to:"/profile/"+this.props.verificationKey},this.props.children)}}]),t}(p.Component),Z=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return this.props.controller.error?(console.log("CONTROLLER IN ERROR - SHOW ERROR DISPLAY"),p.createElement(w,null)):p.createElement("div",null,p.createElement(N.a,{exact:!0,path:"/",component:T}),p.createElement(N.a,{path:"/admin/:key",component:D(V)}),p.createElement(N.a,{path:"/resentEmail",component:B}),p.createElement(N.a,{path:"/welcome/:key",component:D(F)}),p.createElement(N.a,{path:"/profile/:key",component:D(z)}),p.createElement(N.a,{path:"/status/:key/:option",component:D(R)}),p.createElement(N.a,{path:"/confirmed/:key",component:D(H)}),p.createElement(N.a,{path:"/unsubscribed",component:J}))}}]),t}(p.Component),$=Object(k.b)("controller")(Object(N.d)(Object(k.c)(Z)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(74),n(76),n(78),n(80);var X=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return p.createElement("div",{className:"App"},p.createElement("div",{className:"pure-g"},p.createElement("div",{className:"pure-u-1 pure-u-md-1-5"}),p.createElement("div",{className:"pure-u-1 pure-u-md-3-5"},p.createElement("div",{className:"BodyContent"},this.props.children)),p.createElement("div",{className:"pure-u-1 pure-u-md-1-5"})))}}]),t}(p.Component),_=new E;m.render(p.createElement(k.a,{controller:_},p.createElement(h.a,null,p.createElement("div",null,p.createElement(X,null,p.createElement($,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,2,1]]]);