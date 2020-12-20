(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,n){},69:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),r=n.n(a),c=n(24),i=n.n(c),o=n(8),l=(n(69),n(70),n(13)),u=n(10),d=n.n(u),h=n(18),j=n(7),p=n(9),m=n(12),b=n(11),g=n(25),f=n(14),O=n.n(f),x=new(function(){function e(){Object(j.a)(this,e),this.auth=O.a.create({baseURL:"https://find-me-out.herokuapp.com",withCredentials:!0})}return Object(p.a)(e,[{key:"signup",value:function(e){var t=e.name,n=e.email,s=e.password;return this.auth.post("/auth/signup",{name:t,email:n,password:s}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,n=e.password;return this.auth.post("/auth/login",{email:t,password:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),v=r.a.createContext(),y=v.Consumer,N=v.Provider,k=function(e){return function(t){Object(m.a)(a,t);var n=Object(b.a)(a);function a(){return Object(j.a)(this,a),n.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsx)(y,{children:function(n){var a=n.login,r=n.signup,c=n.user,i=n.logout,o=n.isLoggedin;return Object(s.jsx)(e,Object(g.a)({login:a,signup:r,user:c,logout:i,isLoggedin:o},t.props))}})}}]),a}(r.a.Component)},w=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var n=t.name,s=t.email,a=t.password;x.signup({name:n,email:s,password:a}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var n=t.response;return e.setState({message:n.data.statusMessage})}))},e.login=function(t){var n=t.email,s=t.password;x.login({email:n,password:s}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){x.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedin,a=e.user,r=this.login,c=this.logout,i=this.signup;return t?Object(s.jsx)("div",{children:"Loading"}):Object(s.jsx)(N,{value:{isLoggedin:n,user:a,login:r,logout:c,signup:i},children:this.props.children})}}]),n}(r.a.Component),C=n(105),U=n(106),L=n(104),S=k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={users:[]},e.fetchUsers=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("".concat("https://find-me-out.herokuapp.com","/user"));case 3:n=t.sent,e.setState({users:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.logout,a=e.isLoggedin;return Object(s.jsxs)(C.a,{bg:"light",variant:"light",children:[Object(s.jsx)(C.a.Brand,{children:Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("img",{alt:"Logo",src:"https://res.cloudinary.com/mscsam/image/upload/v1607444982/LogoFMO_bprcp6.png",width:"80",height:"80"})})}),Object(s.jsx)(U.a,{className:"mr-auto",children:a?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(L.a,{title:t.name,id:"basic-nav-dropdown",children:[Object(s.jsx)(L.a.Item,{children:Object(s.jsx)(o.b,{to:"/user/userDetail",children:"Edit Profile"})}),Object(s.jsx)(L.a.Item,{children:Object(s.jsx)(o.b,{to:"/pro/".concat(this.props.user._id),children:"Public Profile"})}),Object(s.jsx)(L.a.Divider,{}),Object(s.jsx)(L.a.Item,{children:Object(s.jsx)("button",{className:"btn-nav",onClick:n,children:"Logout"})})]}),Object(s.jsx)(U.a.Link,{children:Object(s.jsx)(o.b,{to:"/private",children:Object(s.jsx)("img",{alt:"user-icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607444982/icons8-test-account-50_i0v3ow.png"})})})]}):Object(s.jsxs)("div",{className:"group-btn",children:[Object(s.jsx)(o.b,{to:"/login",children:Object(s.jsx)("p",{className:"btn-nav",children:"Login"})}),Object(s.jsx)(o.b,{to:"/signup",children:Object(s.jsx)("p",{className:"btn-nav",children:"Sign Up"})})]})}),Object(s.jsx)(o.b,{to:"/findApro",children:Object(s.jsx)(U.a.Link,{href:"#link",children:"Find a professional"})})]})}}]),n}(a.Component));var _=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("section",{className:"signup",children:Object(s.jsx)("div",{className:"container-page",children:Object(s.jsxs)("div",{className:"signup-content",children:[Object(s.jsxs)("div",{className:"homepage",children:[Object(s.jsx)("h2",{className:"form-title",children:"Welcome"}),Object(s.jsxs)("form",{method:"POST",className:"register-form",id:"register-form",children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("h3",{children:["Are you a ",Object(s.jsx)("span",{style:{textDecoration:"underline"},children:" pro"}),"grammer? So here is the best place for you to build your profile with all the important information about you!"]})}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)(o.b,{to:"/login",children:Object(s.jsx)("h6",{className:"form-submit",style:{backgroundColor:"#fe6225"},children:"Start Now"})})})]})]}),Object(s.jsx)("div",{className:"signup-image",children:Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:"https://res.cloudinary.com/mscsam/image/upload/v1607708997/homepage_dmphdx.jpg",alt:"homepage"})})})]})})})})},P=n(27),I=(n(59),k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.name,a=n.email,r=n.password;e.props.signup({name:s,email:a,password:r})},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(P.a)({},s,a))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.password;return Object(s.jsx)("div",{children:Object(s.jsx)("section",{className:"signup",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"signup-content",children:[Object(s.jsxs)("div",{className:"signup-form",children:[Object(s.jsx)("h2",{className:"form-title",children:"Sign up"}),Object(s.jsxs)("form",{className:"register-form",id:"register-form",onSubmit:this.handleFormSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"name",children:Object(s.jsx)("i",{className:"zmdi zmdi-account material-icons-name"})}),Object(s.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange,id:"name",placeholder:"Your Name"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:Object(s.jsx)("i",{className:"zmdi zmdi-email"})}),Object(s.jsx)("input",{type:"text",name:"email",value:n,onChange:this.handleChange,id:"email",placeholder:"Your Email"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"pass",children:Object(s.jsx)("i",{className:"zmdi zmdi-lock"})}),Object(s.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange,id:"pass",placeholder:"Password"})]}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)("input",{type:"submit",id:"signup",className:"form-submit",value:"Register"})})]})]}),Object(s.jsxs)("div",{className:"signup-image",children:[Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:"https://res.cloudinary.com/mscsam/image/upload/v1607708503/signup-image_c2jq4x.jpg",alt:"sing up"})}),Object(s.jsx)(o.b,{to:"/login",children:Object(s.jsx)("div",{class:"signup-image-link",children:"I have an account"})})]})]})})})})}}]),n}(a.Component))),F=k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,s=n.email,a=n.password;e.props.login({email:s,password:a})},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(P.a)({},s,a))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(s.jsx)("div",{children:Object(s.jsx)("section",{className:"sign-in",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"signin-content",children:[Object(s.jsxs)("div",{className:"signin-image",children:[Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:"https://res.cloudinary.com/mscsam/image/upload/v1607708503/signin-image_eotjjw.jpg",alt:"sing up"})}),Object(s.jsx)(o.b,{to:"/signup",children:Object(s.jsx)("div",{className:"signup-image-link",children:"Create an account"})})]}),Object(s.jsxs)("div",{className:"signin-form",children:[Object(s.jsx)("h2",{className:"form-title",children:"Login"}),Object(s.jsxs)("form",{className:"register-form",id:"login-form",onSubmit:this.handleFormSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"your_email",children:Object(s.jsx)("i",{className:"zmdi zmdi-account material-icons-name"})}),Object(s.jsx)("input",{type:"text",name:"email",value:t,onChange:this.handleChange,id:"your_name",placeholder:"Your Email"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"your_pass",children:Object(s.jsx)("i",{className:"zmdi zmdi-lock"})}),Object(s.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,id:"your_pass",placeholder:"Password"})]}),Object(s.jsx)("div",{className:"form-group form-button",children:Object(s.jsx)("input",{type:"submit",id:"signin",className:"form-submit",value:"Log in"})})]})]})]})})})})}}]),n}(a.Component)),D=k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"deleteUser",value:function(){var e=this,t=this.props.user._id;O.a.delete("".concat("https://find-me-out.herokuapp.com","/user/delete/").concat(t),{withCredentials:!0}).then((function(t){e.props.logout()}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"btn-delete",onClick:function(){window.confirm("Are you sure to delete your account?")&&e.deleteUser(e.props.user._id)},children:"Delete my account"})})}}]),n}(a.Component)),z=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={userInfo:{}},e}return Object(p.a)(n,[{key:"getId",value:function(){var e=this;O.a.get("".concat("https://find-me-out.herokuapp.com","/user/userCreated/").concat(this.props.user._id),{withCredentials:!0}).then((function(t){return e.setState({userInfo:t.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getId()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("section",{className:"signup",children:Object(s.jsx)("div",{className:"container-page",children:Object(s.jsxs)("div",{className:"signup-content",children:[Object(s.jsxs)("div",{className:"signup-form",children:[Object(s.jsxs)("h2",{children:["Hello ",Object(s.jsx)("b",{children:this.state.userInfo.name}),","]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{alt:"avatar_img",src:this.state.userInfo.photo,id:"profilePhoto",style:{borderRadius:"50%",backgroundImage:"url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')",backgroundSize:"cover"}})}),Object(s.jsx)("h4",{children:Object(s.jsx)("b",{children:this.state.userInfo.email})}),Object(s.jsx)("br",{}),Object(s.jsx)("h4",{children:"Here you can personalize your profile and check all the information you want to display on your public profile."}),Object(s.jsx)("div",{children:Object(s.jsx)(o.b,{to:"/user/userDetail",children:Object(s.jsx)("h6",{className:"btn-user",children:"Edit profile"})})}),Object(s.jsx)("div",{children:Object(s.jsx)(o.b,{to:"/pro/".concat(this.props.user._id),children:Object(s.jsx)("h6",{className:"btn-user",children:"View Public Profile"})})}),Object(s.jsx)(D,{})]}),Object(s.jsx)("div",{className:"signup-image",children:Object(s.jsx)("figure",{children:Object(s.jsx)("img",{src:"https://res.cloudinary.com/mscsam/image/upload/v1607711275/settings_rkqex1.jpg",alt:"signup"})})})]})})})})}}]),n}(a.Component);z.defaultProps={refresh:function(){return null}};var M=k(z),R=n(43),A=k((function(e){var t=e.component,n=e.isLoggedin,a=Object(R.a)(e,["component","isLoggedin"]);return Object(s.jsx)(l.b,Object(g.a)(Object(g.a)({},a),{},{render:function(e){return n?Object(s.jsx)(l.a,{to:"/private"}):Object(s.jsx)(t,Object(g.a)({},e))}}))}));var E=k((function(e){var t=e.component,n=e.isLoggedin,a=Object(R.a)(e,["component","isLoggedin"]);return Object(s.jsx)(l.b,Object(g.a)(Object(g.a)({},a),{},{render:function(e){return n?Object(s.jsx)(t,Object(g.a)({},e)):Object(s.jsx)(l.a,{to:"/login"})}}))})),V=new function e(){var t=this;Object(j.a)(this,e),this.handleUpload=function(){var e=Object(h.a)(d.a.mark((function e(n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.post("/upload",n);case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.saveNewEvent=function(){var e=Object(h.a)(d.a.mark((function e(n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.post("/components/userProfilePhoto",n);case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.getEvents=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.get("/UserDetails");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.service=O.a.create({baseURL:"".concat("https://find-me-out.herokuapp.com")})},T=new function e(){var t=this;Object(j.a)(this,e),this.handleUploadCv=function(){var e=Object(h.a)(d.a.mark((function e(n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fileupload.post("/uploadCv",n);case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.saveNewEvent=function(){var e=Object(h.a)(d.a.mark((function e(n){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fileupload.post("/components/userProfileCv",n);case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.getEvents=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fileupload.get("/UserDetailsCv");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.fileupload=O.a.create({baseURL:"".concat("https://find-me-out.herokuapp.com")})},Y=n(34),B=(n(97),k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={photo:"",name:"",position:"",technologies:"",uploadCV:"",linkedin:"",github:"",stack:"",medium:"",reddit:"",codePen:"",project1:"",project2:"",project3:"",selectedFile:null},e.handleInput=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(P.a)({},s,a))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),O.a.put("".concat("https://find-me-out.herokuapp.com","/user/update-user/").concat(e.props.user._id),e.state,{withCredentials:!0}).then((function(t){e.props.history.push("/pro/".concat(e.props.user._id))})).catch((function(e){Y.b.error("upload fail")}))},e.handleFileUpload=function(){var t=Object(h.a)(d.a.mark((function t(n){var s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("photo",n.target.files[0]),t.prev=2,t.next=5,V.handleUpload(s);case 5:a=t.sent,e.checkMimeType(n)&&e.checkFileSize(n)&&e.setState({photo:a.secure_url}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("Error while uploading the file: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e.handleCvUpload=function(){var t=Object(h.a)(d.a.mark((function t(n){var s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("uploadCV",n.target.files[0]),t.prev=2,t.next=5,T.handleUploadCv(s);case 5:a=t.sent,e.checkMimeType(n)&&e.checkFileSize(n)&&e.setState({uploadCV:a.secure_url}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("Error while uploading the file: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e.checkFileSize=function(e){for(var t=e.target.files,n=[],s=0;s<t.length;s++)t[s].size>2e6&&(n[s]=t[s].type+"is too large, please pick a smaller file\n");for(var a=0;a<n.length;a++)Y.b.error(n[a]),e.target.value=null;return!0},e.checkMimeType=function(e){for(var t=e.target.files,n=[],s=["image/png","image/jpeg","image/gif","application/pdf"],a=0;a<t.length;a++)s.every((function(e){return t[a].type!==e}))&&(n[a]=t[a].type+" is not a supported format\n");for(var r=0;r<n.length;r++)e.target.value=null,Y.b.error(n[r]);return!0},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("".concat("https://find-me-out.herokuapp.com","/user/").concat(this.props.user._id),{withCredentials:!0}).then((function(t){e.setState({name:t.data.name,photo:t.data.photo,position:t.data.position,technologies:t.data.technologies,uploadCV:t.data.uploadCV,linkedin:t.data.linkedin,github:t.data.github,stack:t.data.stack,medium:t.data.medium,reddit:t.data.reddit,codePen:t.data.codePen,project1:t.data.project1,project2:t.data.project2,project3:t.data.project3})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{className:"form-title",style:{textAlign:"center"},children:["Ensure you fill this form with all the information you want to be seen! ",Object(s.jsx)("h6",{children:"(only filled fields will be displayed)"})]}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("h6",{children:"Profile picture"})}),Object(s.jsx)("img",{width:200,alt:"avatar_img",src:this.state.photo,style:{backgroundImage:"url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')",backgroundSize:"cover"}}),Object(s.jsx)("div",{className:"form-group files color",children:Object(s.jsx)("input",{type:"file",name:"photo",onChange:this.handleFileUpload})}),Object(s.jsx)("span",{class:"helper-message",children:"Upload an image of maxium 2MB."}),Object(s.jsx)("div",{class:"form-group",children:Object(s.jsx)(Y.a,{})}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Name"}),Object(s.jsx)("input",{placeholder:"Full Name",type:"text",name:"name",value:this.state.name,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Position"}),Object(s.jsx)("input",{placeholder:"eg. Frontend/Backend Developer","data-msg":"form.characters_remaining","data-max":30,type:"text",name:"position",value:this.state.position,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:" Technologies"}),Object(s.jsx)("input",{placeholder:"eg. HTML, CSS, JS, React, etc.","data-msg":"form.characters_remaining","data-max":185,type:"text",name:"technologies",value:this.state.technologies,onChange:this.handleInput})]}),Object(s.jsxs)("h6",{className:"form-group",style:{color:"grey"},children:[Object(s.jsx)("h6",{children:"Main Projects: "}),Object(s.jsx)("p",{children:"Select 3 of your best project to be displayed!"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Project number 1"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Project URL",type:"text",name:"project1",value:this.state.project1,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Project number 2"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Project URL",type:"text",name:"project2",value:this.state.projec21,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Project number 3"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Project URL",type:"text",name:"project3",value:this.state.project3,onChange:this.handleInput})]}),Object(s.jsx)("h6",{className:"form-group",style:{color:"grey"},children:Object(s.jsx)("u",{children:"Channels:"})}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Linkedin"}),Object(s.jsx)("input",{className:"form-control",placeholder:"URL profile",type:"text",name:"linkedin",value:this.state.linkedin,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Github"}),Object(s.jsx)("input",{className:"form-control",placeholder:"URL profile",type:"text",name:"github",value:this.state.github,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Stack Overflow"}),Object(s.jsx)("input",{className:"form-control",placeholder:"URL profile",type:"text",name:"stack",value:this.state.stack,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Medium"}),Object(s.jsx)("input",{className:"form-control",placeholder:"URL profile",type:"text",name:"medium",value:this.state.medium,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"Reddit"}),Object(s.jsx)("input",{className:"form-control",placeholder:"URL profile",type:"text",name:"reddit",value:this.state.reddit,onChange:this.handleInput})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h6",{children:"CodePen"}),Object(s.jsx)("input",{className:"form-control",placeholder:"URL profile",type:"text",name:"codePen",value:this.state.codePen,onChange:this.handleInput})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"form-group files color",children:[Object(s.jsx)("h6",{children:"Upload Your CV"}),Object(s.jsx)("input",{type:"file",name:"uploadCV",onChange:this.handleCvUpload})]}),Object(s.jsx)("div",{class:"form-group",children:Object(s.jsx)(Y.a,{})})]}),Object(s.jsx)("button",{className:"btn-userForm",type:"submit",children:"UPDATE PROFILE"})]})})]})}}]),n}(a.Component))),q=k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).getUserData=function(){console.log("this.props.user",e.props.user),O.a.get("".concat("https://find-me-out.herokuapp.com","/user/").concat(e.props.match.params.id),{withCredentials:!0}).then((function(t){e.setState({user:t.data}),console.log("userSTATEDATA",t.data)}))},e.state={user:{}},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.props.isLoggedin,t=this.state.user;return Object(s.jsx)("div",{children:Object(s.jsx)("section",{class:"sign-in",children:Object(s.jsxs)("div",{class:"container-page",children:[Object(s.jsx)("br",{}),Object(s.jsx)("h2",{className:"form-title",style:{textAlign:"center"},children:t.name}),Object(s.jsxs)("div",{class:"signin-content",children:[Object(s.jsxs)("div",{className:"public-profileImg",children:[Object(s.jsx)("img",{id:"profilePhoto",src:t.photo,alt:"profile img"}),Object(s.jsx)("div",{children:Object(s.jsx)("h6",{children:"Main Projects: "})}),Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("div",{className:"form-group",children:t.project1&&Object(s.jsx)("a",{href:t.project1,children:Object(s.jsx)("img",{alt:"project1 icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1608134461/programming_1_gunkad.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.project2&&Object(s.jsx)("a",{href:t.project2,children:Object(s.jsx)("img",{alt:"project2 icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1608134199/education_uttglw.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.project3&&Object(s.jsx)("a",{href:t.project3,children:Object(s.jsx)("img",{alt:"project3 icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1608134467/startup_ibr1lf.png",className:"icon"})})})]}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("div",{className:"icon-column",children:[Object(s.jsx)("div",{className:"form-group",children:t.uploadCV&&Object(s.jsx)("a",{href:t.uploadCV,children:Object(s.jsx)("img",{alt:"cv icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607965243/cv_tiajef.png",width:"60",height:"60"})})}),Object(s.jsx)("div",{className:"form-group",children:t.linkedin&&Object(s.jsx)("a",{href:t.linkedin,children:Object(s.jsx)("img",{alt:"linkedin icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607964569/linkedin_1_onlwzs.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.github&&Object(s.jsx)("a",{href:t.github,children:Object(s.jsx)("img",{alt:"github icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607964569/github_b4hlmu.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.stack&&Object(s.jsx)("a",{href:t.stack,children:Object(s.jsx)("img",{alt:"stack icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607964569/stack-overflow_wjnd5o.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.medium&&Object(s.jsx)("a",{href:t.medium,children:Object(s.jsx)("img",{alt:"medium icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607964568/medium_bgjn7s.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.codePen&&Object(s.jsx)("a",{href:t.codePen,children:Object(s.jsx)("img",{alt:"codePen",src:"https://res.cloudinary.com/mscsam/image/upload/v1607964569/codepen_znqvpf.png",className:"icon"})})}),Object(s.jsx)("div",{className:"form-group",children:t.reddit&&Object(s.jsx)("a",{href:t.reddit,children:Object(s.jsx)("img",{alt:"medium icon",src:"https://res.cloudinary.com/mscsam/image/upload/v1607964570/reddit_yob9m2.png",className:"icon"})})})]}),Object(s.jsxs)("div",{className:"profile-column",children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("h3",{children:Object(s.jsx)("b",{children:t.position})})}),Object(s.jsx)("div",{className:"form-group",style:{maxWidth:150,margin:"auto",marginTop:45},children:Object(s.jsx)("h3",{children:t.technologies})}),e?Object(s.jsx)("div",{className:"profile-btn",children:Object(s.jsx)(o.b,{to:"/user/userDetail",children:Object(s.jsx)("button",{className:"btn-user",children:"update your profile"})})}):Object(s.jsx)(s.Fragment,{})]})]})]})})})}}]),n}(a.Component)),H=n(36),J=n(107),W=k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.listUser;return Object(s.jsx)("div",{className:"grid",children:e?e.map((function(e){return Object(s.jsxs)(J.a,{className:"box",style:{width:"18rem"},children:[Object(s.jsx)("img",{className:"card-img-top",src:e.photo,alt:"img",style:{width:417,height:298,backgroundImage:"url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')",backgroundSize:"cover"}}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:e.name}),Object(s.jsx)("p",{className:"card-text",children:e.technologies}),Object(s.jsx)(o.b,{to:"/pro/".concat(e._id),children:Object(s.jsx)("button",{href:"#",className:"btn btn-primary",children:"check it"})})]})]})})):Object(s.jsx)("h3",{children:"Users are Loading"})})}}]),n}(a.Component)),G=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"filterUpdate",value:function(){var e=this.myValue.value.toLowerCase(),t=this.props.users.filter((function(t){return t.name.toLowerCase().includes(e)}));console.log(this.props.users,this.props.newFilteredUsers),this.props.filterUpdate(t),console.log(e)}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",ref:function(t){e.myValue=t},placeholder:"search...",onChange:this.filterUpdate.bind(this)})})}}]),n}(a.Component),K=k(function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).fetchUsers=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("".concat("https://find-me-out.herokuapp.com","/user"));case 3:n=t.sent,e.setState({users:n.data,filteredUsers:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.state={users:[],filteredUsers:[]},e.refresh=e.refresh.bind(Object(H.a)(e)),e.fetchUsers=e.fetchUsers.bind(Object(H.a)(e)),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"refresh",value:function(){this.fetchUsers()}},{key:"filterUpdate",value:function(e){this.setState({filteredUsers:e})}},{key:"render",value:function(){return console.log("allUsers state from parent component",this.state.allUsers),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container-page",children:[Object(s.jsx)(G,{filterdUsers:this.state.filteredUsers,users:this.state.users,filterUpdate:this.filterUpdate.bind(this)})," ",Object(s.jsx)(W,{refresh:this.refresh,listUser:this.state.filteredUsers,allUsers:this.state.allUsers})]})})}}]),n}(a.Component));var Q=function(){var e=(new Date).getFullYear();return Object(s.jsxs)("footer",{children:[Object(s.jsxs)("p",{children:["Copyright Find Me Out \u24d2 ",e]}),Object(s.jsx)("p",{children:"by Samantha Martins"})]})};var X=function(){return Object(s.jsxs)(w,{children:[Object(s.jsx)(S,{}),Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{exact:!0,path:"/",component:_}),Object(s.jsx)(A,{exact:!0,path:"/signup",component:I}),Object(s.jsx)(A,{exact:!0,path:"/login",component:F}),Object(s.jsx)(E,{exact:!0,path:"/user/userDetail",component:B}),Object(s.jsx)(E,{exact:!0,path:"/private",component:M}),Object(s.jsx)(l.b,{exact:!0,path:"/pro/:id",component:q}),Object(s.jsx)(l.b,{exact:!0,path:"/findApro",component:K})]}),Object(s.jsx)(Q,{})]})};i.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(X,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.67577eb8.chunk.js.map