(window["webpackJsonpsocial-network"]=window["webpackJsonpsocial-network"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},120:function(e,t,n){e.exports={"profile-content":"Profile_profile-content__2fr2J",img:"Profile_img__3m32G"}},121:function(e,t,n){},123:function(e,t,n){e.exports=n.p+"static/media/loading.d1f059aa.svg"},124:function(e,t,n){e.exports={header:"Header_header__2hqf0"}},125:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIpSURBVHgB7ZpLaipBFIb/XK+iA+Eq+EBRLzhw4lCHupWsITtIdpBdOdCBAycOJFFQfKHxAYoPjH+FlgSMCV1VUEp9UNj2i/761Kk6hd4dDod7AM/H9g/XzeuxPd4dhV6OG/9xG7xR6IAb4g9uDCtkOlbIdKyQ6Vgh07FCpmOFTOcvNLDf7zEej7FcLs8e9/l8SCQS8Hg8UI0WoVarhdVqdfGczWaDbDYL1SjvcpPJ5EcZwuh9F0EZlArxrQ8Gg1+fz3N5jUqUrFiZL/1+X+SOG5hT4XAYsVgMskgL9Xo9jEYjqIBSqVQKMkh1OeaLKhnnfmwySI1y0+n04vHtdotOp3N6yGAwiEwmg0AgIL5XKhXsdjuUSqXTNbPZTETKLVJClxKaI12tVhOffr9f7OMLYEQLhYKQ4oPP5/Mv163Xa8igZR4i9XpdyPDhnTc+HA7RaDREKxaLyOVyUI2W0mexWIjGauBz94lGo0gmkyJSv5mr3KBFiLlDzuUC84hclZCT9OdGLGefc45qtAmFQiExR7XbbbGPUeM297Er6hLSNijk83lUq1U0m03RHDji6ShKHbQJMQLlchndbvc0XzF/GB2v1/vtdbJLCqnShw/LOk4l7KrpdBpukcqhSCSifJEWj8chg5SQypUn78HClPeUQcnygSUQSxo3cwtFnDJIVobYX/BMxwqZjhUyHStkOlbIdKyQ6Vgh06HQG26HVwo94OPvjdcOA/P0DltR65/ibhk9AAAAAElFTkSuQmCC"},152:function(e,t,n){e.exports=n(285)},157:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(58),u=n.n(o),s=(n(157),n(21)),c=n(22),i=n(24),l=n(23),m=n(5),p=n(37),f=n(4),d={dialogs:[{id:1,name:"Alena"},{id:2,name:"Lena"},{id:3,name:"Elena"},{id:4,name:"Alex"},{id:5,name:"Olya"},{id:6,name:"Sasha"}],messages:[{id:1,message:"Hi"},{id:2,message:"Ho"},{id:3,message:"He"},{id:4,message:"Hi-hi"},{id:5,message:"Hi-ha"},{id:6,message:"Hi-he"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(p.a)(e.messages),[{id:6,message:t.message}])});default:return e}},h=n(61),E=n.n(h),b=n(11),v=n(116),O=n.n(v);var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.dialog},r.a.createElement(b.b,{to:"".concat(e.id)}," ",e.name," ")),r.a.createElement(m.b,null))},j=n(117),w=n.n(j);var A=function(e){return r.a.createElement("div",{className:w.a.message},e.message)},I=n(113),C=n(114),P=n(38),y=(n(83),["input","meta"]),U=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,u=Object(P.a)(e,y),s=a&&o;return r.a.createElement("div",{className:"form-control ".concat(s?"error":"")},r.a.createElement(u.elementtype,Object.assign({},t,u)),s&&r.a.createElement("div",null,r.a.createElement("span",null,o)))},_=function(e){return e?void 0:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f!"},k=function(e){return function(t){return t.length>e?"\u0414\u043b\u0438\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c ".concat(e):void 0}},T=k(10),L=Object(C.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(I.a,{placeholder:"add message",name:"newMessageBody",component:U,elementtype:"textarea",validate:[_,T]})),r.a.createElement("div",null,r.a.createElement("button",null," Send")))}));var N=function(e){var t=e.dialogs.map((function(e,t){return r.a.createElement(S,{key:t,name:e.name,id:e.id})})),n=e.messages.map((function(e,t){return r.a.createElement(A,{key:t,message:e.message})}));return r.a.createElement("div",{className:E.a.dialogs},r.a.createElement("div",{className:E.a.dialogsItems},t),r.a.createElement("div",{className:E.a.messages},r.a.createElement("div",null,n),r.a.createElement(L,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})))},F=n(9),x=function(e){return{isAuth:e.auth.isAuth}},G=function(e){var t=function(t){Object(i.a)(a,t);var n=Object(l.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(m.a,{to:"/login/"})}}]),a}(r.a.Component);return Object(F.b)(x)(t)},R=n(8),D=Object(R.d)(Object(F.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{sendMessage:function(e){return{type:"SEND-MESSAGE",message:e}}}),G)(N),z=n(120),M=n.n(z),B=n(81),H=n.n(B),Q=n(121),X=n.n(Q);var K=function(e){return r.a.createElement("div",{className:X.a.post},e.message," ",e.id," ",e.likeCount)},V=k(5),W=Object(C.a)({form:"profileAddPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(I.a,{placeholder:"add post",name:"newPostBody",component:U,elementtype:"textarea",validate:[_,V]})),r.a.createElement("div",null,r.a.createElement("button",null," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442 ")))}));var q=function(e){var t=e.posts.map((function(e,t){return r.a.createElement(K,{key:t+1,message:e.message,likeCount:e.likeCount})}));return r.a.createElement("div",{className:H.a.postsBlock},r.a.createElement("h3",null,"my posts"),r.a.createElement(W,{onSubmit:function(t){e.addPost(t.newPostBody)}}),r.a.createElement("div",{className:H.a.posts},t))},J=n(10),Y=n.n(J),Z=n(16),$=n(122).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0ca93344-d4dc-43d1-be1f-b09a6d443087"}}),ee={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return $.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return $.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return $.post("follow/".concat(e)).then((function(e){return e.data}))}},te=function(e){return $.get("profile/".concat(e)).then((function(e){return e.data}))},ne=function(e){return $.get("profile/status/".concat(e)).then((function(e){return e.data}))},ae=function(e){return $.put("profile/status/",{status:e}).then((function(e){return e.data}))},re=function(){return $.get("auth/me").then((function(e){return e.data}))},oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return $.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},ue=function(){return $.delete("auth/login").then((function(e){return e.data}))},se={posts:[{id:1,message:"hello",likeCount:12},{id:2,message:"Alena",likeCount:10},{id:3,message:"name",likeCount:2},{id:4,message:"family",likeCount:1}],profile:"",currentUserId:null,isFetching:!1,status:""},ce=function(e){return{type:"SET_CURRENT_USER_ID",currentUserId:e}},ie=function(e){return{type:"SET_STATUS",status:e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:1,message:t.newPostBody,likesCount:0};return Object(f.a)(Object(f.a)({},e),{},{posts:[].concat(Object(p.a)(e.posts),[n])});case"DELETE_POST":return Object(f.a)(Object(f.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USER_PROFILE":return Object(f.a)(Object(f.a)({},e),{},{profile:t.profile});case"SET_CURRENT_USER_ID":return Object(f.a)(Object(f.a)({},e),{},{currentUserId:t.currentUserId});case"TOGGLE_IS_FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case"SET_STATUS":return Object(f.a)(Object(f.a)({},e),{},{status:t.status});default:return e}},me=Object(F.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:function(e){return{type:"ADD_POST",newPostBody:e}}})(q),pe=(n(281),n(123)),fe=n.n(pe);var de=function(e){return r.a.createElement("img",{src:fe.a,alt:"\u0418\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"})},ge=n(17),he=function(e){var t=Object(a.useState)(!1),n=Object(ge.a)(t,2),o=n[0],u=n[1],s=Object(a.useState)(e.status),c=Object(ge.a)(s,2),i=c[0],l=c[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("input",{onBlur:function(){u(!1),e.updateStatus(i)},onChange:function(e){l(e.currentTarget.value)},value:i,autoFocus:!0}):r.a.createElement("div",{onDoubleClick:function(){u(!0)}},e.status||"\u0421\u0442\u0430\u0442\u0443\u0441 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"))};var Ee=function(e){return e.profile?r.a.createElement("div",{className:"profile-content"},r.a.createElement("div",{className:"img"}),r.a.createElement("img",{src:e.profile.photos.small,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),r.a.createElement("div",null,r.a.createElement(he,{status:e.status,updateStatus:e.updateStatus})),r.a.createElement("div",null,"$",e.profile.aboutMe,r.a.createElement("br",null),"$",e.profile.fullName)):r.a.createElement(de,null)};var be=function(e){return r.a.createElement("div",{className:M.a.content},r.a.createElement(Ee,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(me,null))},ve=function(e){return{userId:e.profilePage.currentUserId,authorizedUserId:e.auth.id}},Oe=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserProfileThunkCreator(this.props.currentUserId),this.props.getStatus(this.props.currentUserId)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),n}(r.a.Component),Se=Object(R.d)(Object(F.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isFetching:e.profilePage.isFetching,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{setCurrentUserId:ce,getUserProfileThunkCreator:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(e);case 2:a=t.sent,n(ie(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e);case 2:0===t.sent.resultCode&&n(ie(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),(function(e){return Object(F.b)(ve,{setCurrentUserId:ce})((function(t){var n=Object(m.i)().userId;return n||(n=t.authorizedUserId),t.setCurrentUserId(n),r.a.createElement(e,Object.assign({},t,{currentUserId:n}))}))}),G)(Oe);n(282),n(283);var je=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"item"},r.a.createElement(b.b,{to:"profile"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("div",{className:"item"},r.a.createElement(b.b,{to:"dialogs"},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),r.a.createElement("div",{className:"item"},r.a.createElement(b.b,{to:"users"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")))},we=n(124),Ae=n.n(we);var Ie=function(e){return r.a.createElement("header",{className:Ae.a.header}," ","header",r.a.createElement("div",null,e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(b.b,{to:"login"}," Login ")))},Ce=n(27),Pe={email:null,id:null,login:null,isAuth:!1},ye=function(e,t,n,a){return{type:"SET_USER_DATA",data:{email:e,id:t,login:n,isAuth:a}}},Ue=function(){return function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n,a,r,o,u;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.email,o=a.id,u=a.login,t(ye(r,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(f.a)(Object(f.a)({},e),t.data);default:return e}},ke=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(Ie,this.props)}}]),n}(r.a.Component),Te=Object(F.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(Z.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:0===e.sent.resultCode&&t(ye(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ke);var Le=function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Te,null),r.a.createElement(je,null),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(m.b,null)))},Ne=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(f.a)(Object(f.a)({},e),a):e}))},Fe={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},xe=function(e){return{type:"FOLLOW",userId:e}},Ge=function(e){return{type:"UNFOLLOW",userId:e}},Re=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},De=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},ze=function(){var e=Object(Z.a)(Y.a.mark((function e(t,n,a,r){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(De(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(De(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:Ne(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:Ne(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(f.a)(Object(f.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(p.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Be=function(e){return e.usersPage.users},He=function(e){return e.usersPage.pageSize},Qe=function(e){return e.usersPage.totalUsersCount},Xe=function(e){return e.usersPage.currentPage},Ke=function(e){return e.usersPage.isFetching},Ve=function(e){return e.usersPage.followingInProgress},We=(n(284),["portionSize"]);var qe=function(e){for(var t=e.portionSize,n=void 0===t?10:t,o=Object(P.a)(e,We),u=Math.ceil(o.totalItemsCount/o.pageSize),s=[],c=1;c<=u;c++)s.push(c);var i=Math.ceil(u/n),l=Object(a.useState)(1),m=Object(ge.a)(l,2),p=m[0],f=m[1],d=(p-1)*n+1,g=p*n;return r.a.createElement("div",{className:"paginator"},p>1&&r.a.createElement("button",{onClick:function(){f(p-1)}},"\u041d\u0430\u0437\u0430\u0434"),s.filter((function(e){return e>=d&&e<=g})).map((function(e){return r.a.createElement("span",{key:e.id,className:o.currentPage===e?"currentPage":"",onClick:function(){o.changeCurrentPage(e)}},e)})),i>p&&r.a.createElement("button",{onClick:function(){f(p+1)}},"\u0412\u043f\u0435\u0440\u0435\u0434"))},Je=n(125),Ye=n.n(Je),Ze=["user"];var $e=function(e){var t=e.user,n=Object(P.a)(e,Ze);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.b,{to:"../profile/"+t.id},r.a.createElement("img",{src:null!==t.photos.small?t.photos.small:Ye.a,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),t.followed?r.a.createElement("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)}},"Follow")),r.a.createElement("div",null,t.name," u.location.city \u0438 u.location.country"))};var et=function(e){return r.a.createElement("div",null,r.a.createElement(qe,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,changeCurrentPage:e.changeCurrentPage}),e.users.map((function(t){return r.a.createElement($e,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})})))},tt=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).changeCurrentPage=function(t){e.props.setCurrentPage(t),e.props.getUsersThunkCreator(e.props.pageSize,t)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){for(var e=Math.ceil(this.props.totalUsersCount/this.props.pageSize),t=[],n=1;n<=e;n++)t.push(n);return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(de,null):r.a.createElement(et,{pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,changeCurrentPage:this.changeCurrentPage,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),nt=Object(R.d)(Object(F.b)((function(e){return{users:Be(e),pageSize:He(e),totalUsersCount:Qe(e),currentPage:Xe(e),isFetching:Ke(e),followingInProgress:Ve(e)}}),{follow:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ze(n,e,ee.follow.bind(ee),xe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ze(n,e,ee.unfollow.bind(ee),Ge);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setIsFollowingProgress:De,getUsersThunkCreator:function(e,t){return function(){var n=Object(Z.a)(Y.a.mark((function n(a){var r;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Re(!0)),n.next=3,ee.getUsers(e,t);case 3:r=n.sent,a(Re(!1)),a({type:"SET-USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),G)(tt),at=k(30),rt=Object(C.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement(I.a,{placeholder:"Login",name:"login",component:U,elementtype:"input",validate:[_,at]}),r.a.createElement("br",null),r.a.createElement(I.a,{placeholder:"Password",name:"password",type:"password",component:U,elementtype:"input",validate:[_,at]}),r.a.createElement("br",null),r.a.createElement(I.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me",r.a.createElement("br",null),n&&r.a.createElement("div",{className:"text-error"}," ",n," "),r.a.createElement("button",null,"Login"))})),ot=Object(F.b)((function(e){return{isAuth:e.auth.isAuth,authorizedUserId:e.auth.id}}),{login:function(e,t,n){return function(){var a=Object(Z.a)(Y.a.mark((function a(r){var o,u;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,oe(e,t,n);case 2:0===(o=a.sent).resultCode?r(Ue()):(u=o.messages.length>0?o.messages[0]:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...",r(Object(Ce.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile/"+e.authorizedUserId}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login page"),r.a.createElement(rt,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}}))})),ut={isInitialized:!1},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{isInitialized:!0});default:return e}},ct=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.isInitialized?r.a.createElement(m.e,null,r.a.createElement(m.c,{path:"/",element:r.a.createElement(Le,null)},r.a.createElement(m.c,{path:"profile/",element:r.a.createElement(Se,null)},r.a.createElement(m.c,{path:":userId",element:r.a.createElement(Se,null)})),r.a.createElement(m.c,{path:"dialogs/*",element:r.a.createElement(D,null)},r.a.createElement(m.c,{path:":id",element:r.a.createElement("p",null,"message")})),r.a.createElement(m.c,{path:"users/",element:r.a.createElement(nt,null)}),r.a.createElement(m.c,{path:"login/",element:r.a.createElement(ot,null)}))):r.a.createElement(de,null)}}]),n}(r.a.Component),it=Object(F.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initializedApp:function(){return function(e){var t=e(Ue());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}})(ct);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var lt=n(126),mt=n(115),pt=Object(R.c)({profilePage:le,dialogsPage:g,usersPage:Me,auth:_e,form:mt.a,app:st}),ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,dt=Object(R.e)(pt,ft(Object(R.a)(lt.a)));window.__store__=dt;var gt=dt;u.a.render(r.a.createElement(b.a,null,r.a.createElement(F.a,{store:gt},r.a.createElement(it,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__33C2q",dialogsItems:"Dialogs_dialogsItems__npegX",active:"Dialogs_active__1FG3N",messages:"Dialogs_messages__2rzwG"}},81:function(e,t,n){},83:function(e,t,n){}},[[152,1,2]]]);
//# sourceMappingURL=main.d0191283.chunk.js.map