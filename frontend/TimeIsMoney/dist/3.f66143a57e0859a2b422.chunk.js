webpackJsonp([3,10],{408:function(t,e,n){n(442);var i=n(162)(n(439),n(450),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\Sign.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Sign.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},418:function(t,e,n){n(484);var i=n(162)(n(462),n(546),"data-v-22480539",null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\Main.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},439:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(448),o=n.n(i),s=n(447),a=n.n(s),r=(n(164),n(29));e.default={props:["signInFromJump","signInFromMain","signUpFromMain"],components:{SIdentify:o.a,SIdentify1:a.a},data:function(){return{signIn:!1,signUp:!1,info:{username:"",password:"",mode:"",inputCode:""},wrong:!1,alert:"",identifyCode2:"",identifyCode1:"",identifyCodes:"1234567890",checkNum:"",checkNum1:""}},computed:n.i(r.b)("Personal",{personDetail:"personalInfo"}),mounted:function(){this.identifyCode2="",this.identifyCode1="",this.makeCode(this.indentifyCodes,4)},methods:{sendIndentify:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SEND_IDENTIFY",this.info).then(function(t){console.log("response"),console.log(t)}))},checkIndentify:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("CHECK_IDENTIFY",this.info).then(function(t){console.log(t),t.success&&alert("Your verify done!")}))},sendIndentify2:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SEND_IDENTIFY2",this.info).then(function(t){console.log("response"),console.log(t)}))},checkIndentify2:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("CHECK_IDENTIFY2",this.info).then(function(t){console.log(t),t.success&&alert("Your verify done!")}))},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode2="",this.identifyCode1="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var n=0;n<e;n++)this.identifyCode2+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];for(var i=0;i<e;i++)this.identifyCode1+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]},changeToSignUp:function(){this.signIn=!1,this.signUp=!0,this.info.username="",this.info.password="",this.checkNum="",this.checkNum1=""},changeToSignIn:function(){this.signUp=!1,this.signIn=!0,this.info.username="",this.info.password="",this.checkNum="",this.checkNum1=""},doSignUp:function(){var t=this;"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SIGN_UP",this.info).then(function(e){console.log("response"),console.log(e),e.success?(t.wrong=!1,t.changeToSignIn()):(t.wrong=!0,t.alert=e.msg)})),this.refreshCode()},doSignIn:function(){var t=this;"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SIGN_IN",this.info).then(function(e){if(e.success){t.$emit("SignSuccess",!0),t.signIn=!1;var n={log:!0,userID:e.data,username:"$"};window.sessionStorage.setItem("LogInfo",JSON.stringify(n)),t.$router.push({path:"/main",name:"main"}),t.wrong=!1,t.$store.dispatch("Ques/GET_COLLECT_QUESLIST"),t.$store.dispatch("Ques/GET_ATTEND_QUESLIST"),t.$store.dispatch("Ques/GET_PUBLISH_QUESLIST")}else t.wrong=!0,t.alert=e.msg;t.$store.dispatch("Personal/GET_INFO").then(function(e){var n={log:JSON.parse(window.sessionStorage.getItem("LogInfo")).log,userID:JSON.parse(window.sessionStorage.getItem("LogInfo")).userID,username:t.personDetail.nickname,money:t.personDetail.asset};window.sessionStorage.setItem("LogInfo",JSON.stringify(n))})}))},checkValid:function(t){if(this.signIn&&this.checkNum!=this.identifyCode2)return this.wrong=!0,this.alert="验证码错误",this.refreshCode(),"invalid";if(""===this.info.username||""===this.info.password)return this.wrong=!0,this.alert="密码或用户名不能为空","invalid";var e=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;return/^1[34578]\d{9}$/.test(t)?"phone":e.test(t)?"email":(this.wrong=!0,this.alert="无效的用户名","invalid")}},watch:{signInFromJump:function(t,e){this.signUp=!1,this.signIn=!0},signInFromMain:function(t,e){this.signUp=!1,this.signIn=!0}}}},440:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sdisabled:!1,time:60,btntxt:"获取验证码"}},methods:{sendcode:function(){this.time=60,this.timer()},timer:function(){this.time>0?(this.sdisabled=!0,this.time--,this.btntxt=this.time+"S",setTimeout(this.timer,1e3)):(this.time=0,this.btntxt="发送验证码",this.sdisabled=!1)}}}},441:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SIdentify",props:{identifyCode:{type:String,default:"555"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas"),e=t.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var n=0;n<this.identifyCode.length;n++)this.drawText(e,this.identifyCode[n],n);this.drawLine(e),this.drawDot(e)},drawText:function(t,e,n){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var i=(n+1)*(this.contentWidth/(this.identifyCode.length+1)),o=this.randomNum(this.fontSizeMax,this.contentHeight-5),s=this.randomNum(-45,45);t.translate(i,o),t.rotate(s*Math.PI/180),t.fillText(e,0,0),t.rotate(-s*Math.PI/180),t.translate(-i,-o)},drawLine:function(t){for(var e=0;e<8;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<100;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}}},442:function(t,e){},443:function(t,e){},444:function(t,e,n){t.exports=n.p+"bd2f4356807ac29aa1f06e1da3a10040.jpg"},445:function(t,e,n){t.exports=n.p+"1eaf7a0301f0553ec03a71cac5d2e068.png"},446:function(t,e,n){t.exports=n.p+"dc0d754ef4f0236e6d7fbb5f119ce873.jpg"},447:function(t,e,n){n(443);var i=n(162)(n(440),n(451),"data-v-4a7498ab",null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\components\\IdentifyFromAPI.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] IdentifyFromAPI.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},448:function(t,e,n){var i=n(162)(n(441),n(449),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\components\\IdentifyFromLocal.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] IdentifyFromLocal.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},449:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-canvas"},[n("canvas",{attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight}})])},staticRenderFns:[]},t.exports.render._withStripped=!0},450:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{width:"600px"},model:{value:t.signIn,callback:function(e){t.signIn=e},expression:"signIn"}},[i("div",{attrs:{id:"headImg"}},[i("img",{attrs:{id:"img",src:n(444),alt:"正方形的原始图片"}}),t._v(" "),i("div",{staticStyle:{clear:"both"}})]),t._v(" "),i("div",{staticStyle:{float:"right"},attrs:{id:"rightPart"}},[i("div",{attrs:{id:"headBox2"}},[i("div",{attrs:{id:"headBox"}},[i("img",{attrs:{id:"head",src:n(445),alt:"正方形的原始图片",width:"150px",height:"150px"}})])]),t._v(" "),i("div",{staticClass:"allInput"},[t.wrong?i("span",{staticStyle:{color:"#ce4545"}},[t._v("*"+t._s(t.alert))]):t._e(),t._v(" "),i("Input",{staticStyle:{"margin-top":"15px"},attrs:{prefix:"ios-contact",placeholder:"用户名/手机/邮箱",type:"text"},model:{value:t.info.username,callback:function(e){t.$set(t.info,"username",e)},expression:"info.username"}}),t._v(" "),i("Input",{staticStyle:{"margin-top":"15px"},attrs:{prefix:"ios-contact",placeholder:"密码",type:"password"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignIn(e):null}},model:{value:t.info.password,callback:function(e){t.$set(t.info,"password",e)},expression:"info.password"}}),t._v(" "),i("div",[i("Input",{staticStyle:{"margin-top":"15px",width:"150px"},attrs:{prefix:"ios-contact",placeholder:"请输入验证码"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignIn(e):null}},model:{value:t.checkNum,callback:function(e){t.checkNum=e},expression:"checkNum"}}),t._v(" "),i("SIdentify",{staticStyle:{"margin-top":"15px",float:"right"},attrs:{identifyCode:t.identifyCode2},nativeOn:{click:function(e){return t.refreshCode(e)}}})],1)],1),t._v(" "),i("div",{staticClass:"allButton"},[i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("Button",{staticStyle:{"margin-top":"15px"},attrs:{id:"loginBt",size:"large",long:""},nativeOn:{click:function(e){return t.doSignIn(e)}}},[t._v("登录")]),t._v(" "),i("div",{staticClass:"smallBt"},[i("Button",{staticStyle:{color:"#0066cc","border-color":"#fff"},attrs:{id:"findPass",size:"small"}},[t._v("找回密码")]),t._v(" "),i("Button",{staticStyle:{color:"#0066cc","border-color":"#fff"},attrs:{id:"signNow",size:"small"},on:{click:t.changeToSignUp}},[t._v("立即注册")])],1)],1)]),t._v(" "),i("div",{staticStyle:{clear:"both"}})]),t._v(" "),i("Modal",{attrs:{width:"600px"},model:{value:t.signUp,callback:function(e){t.signUp=e},expression:"signUp"}},[i("div",{attrs:{id:"headImg"}},[i("img",{attrs:{id:"img",src:n(446),alt:"正方形的原始图片"}}),t._v(" "),i("div",{staticStyle:{clear:"both"}})]),t._v(" "),i("div",{staticStyle:{float:"right","padding-top":"70px"},attrs:{id:"rightPart"}},[i("div",{staticClass:"allInput"},[t.wrong?i("span",{staticStyle:{color:"#ce4545"}},[t._v("*"+t._s(t.alert))]):t._e(),t._v(" "),i("Input",{staticStyle:{"margin-top":"25px"},attrs:{prefix:"ios-contact",placeholder:"请输入用户名/手机/邮箱",type:"text"},model:{value:t.info.username,callback:function(e){t.$set(t.info,"username",e)},expression:"info.username"}}),t._v(" "),i("Input",{staticStyle:{"margin-top":"25px"},attrs:{prefix:"ios-contact",placeholder:"请输入密码",type:"password"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignUp(e):null}},model:{value:t.info.password,callback:function(e){t.$set(t.info,"password",e)},expression:"info.password"}}),t._v(" "),i("div",[i("Input",{staticStyle:{"margin-top":"25px",width:"150px"},attrs:{prefix:"ios-contact",placeholder:"请输入验证码"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignUp(e):null}},model:{value:t.info.inputCode,callback:function(e){t.$set(t.info,"inputCode",e)},expression:"info.inputCode"}}),t._v(" "),i("SIdentify1",{staticStyle:{float:"right","margin-top":"25px",height:"40px"},nativeOn:{click:function(e){return t.sendIndentify(e)}}}),t._v(" "),i("Button",{attrs:{size:"large",long:""},on:{click:t.checkIndentify}},[t._v(" 测试用 ")])],1)],1),t._v(" "),i("div",{staticClass:"allButton"},[i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("Button",{staticStyle:{"margin-top":"25px"},attrs:{id:"signup",size:"large",long:""},on:{click:t.doSignUp}},[t._v("注册")]),t._v(" "),i("div",{staticClass:"smallBt"},[i("Button",{staticStyle:{color:"#0066cc","border-color":"#fff"},attrs:{id:"signNow",size:"small"},on:{click:t.changeToSignIn}},[t._v("已有账号？")])],1)],1)]),t._v(" "),i("div",{staticStyle:{clear:"both"}})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},451:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sendCheck"}},[n("Button",{staticClass:"sendcode",staticStyle:{width:"110px"},attrs:{disabled:t.sdisabled},on:{click:t.sendcode}},[t._v("\n        "+t._s(t.btntxt)+"\n    ")])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},452:function(t,e,n){t.exports=n.p+"c46441d2e9c3e95b694bd737c6418108.png"},462:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(408),o=n.n(i),s=n(29);e.default={inject:["reload"],components:{signCom:o.a},data:function(){return{signInFromMain:!1,navLeftTags:[{name:"1",icon:"md-home",text:"首页",link:"home"},{name:"2",icon:"md-paper",text:"问卷",link:"questionnaire"},{name:"3",icon:"md-walk",text:"跑腿",link:"favor"}],navRightTags1:[{name:"6",icon:"md-exit",text:"个人中心",link:"out"},{name:"5",icon:"md-person",text:"个人中心",link:"no"},{name:"4",icon:"md-mail",text:"收件箱",link:"receiveBox"}],navRightTags0:{name:"6",icon:"md-person",text:"登录/注册",link:"in"},dropList:[{name:"personal",title:"我的M币",link:"account"},{name:"personal",title:"我参与的",link:"attend"},{name:"personal",title:"我发布的",link:"publish"},{name:"personal",title:"我收藏的",link:"collect"},{name:"personal",title:"信息管理",link:"personal"}]}},computed:n.i(s.b)({logged:function(){return JSON.parse(window.sessionStorage.getItem("LogInfo")).log},activeNav:function(){return{home:0,questionnaire:1,favor:2,receiveBox:5,personal:4}[this.$route.path.split("/")[1]]}}),methods:{changePageByLink:function(t,e){if("in"===t)this.signInFromMain=!this.signInFromMain;else if("out"===t){var n={log:!1,userID:""};window.sessionStorage.setItem("LogInfo",JSON.stringify(n)),this.reload()}else if("no"!==t){JSON.parse(window.sessionStorage.getItem("LogInfo")).userID;this.$router.push({name:t})}},getSign:function(t){t&&this.reload()},backtoindex:function(){this.$router.push("/")},addClass:function(t){return t===this.activeNav?"ivu-menu-item-active1":""}},mounted:function(){}}},484:function(t,e){},516:function(t,e,n){t.exports=n.p+"b43cfa23baae431eda8ef7998d68ee65.png"},546:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout"},[i("Layout",[i("Header",{staticStyle:{background:"#ffffff"}},[i("Menu",{staticStyle:{background:"#ffffff"},attrs:{mode:"horizontal","active-name":"1"}},[i("div",{staticClass:"layout-logo",staticStyle:{width:"230px"}},[i("img",{staticStyle:{height:"40px"},attrs:{src:n(516)},on:{click:function(e){t.backtoindex()}}})]),t._v(" "),i("div",{staticClass:"layout-nav",staticStyle:{float:"left"}},t._l(t.navLeftTags,function(e,n){return i("MenuItem",{key:n,class:t.addClass(n),attrs:{name:e.name},nativeOn:{click:function(i){t.changePageByLink(e.link,n)}}},[i("Icon",{attrs:{type:e.icon,size:"27"}}),t._v(" "),i("span",[t._v(t._s(e.text))])],1)})),t._v(" "),i("div",{staticClass:"layout-nav",staticStyle:{float:"right","text-align":"right"},nativeOn:{click:function(e){t.changePageByLink(t.tag.link)}}},[t.logged?i("div",t._l(t.navRightTags1,function(e,n){return i("MenuItem",{key:n,class:t.addClass(n+3),staticStyle:{float:"right"},attrs:{name:e.name},nativeOn:{click:function(i){t.changePageByLink(e.link,n+3)}}},[i("Dropdown",{attrs:{trigger:"click"}},[i("Icon",{attrs:{type:e.icon,size:"27"}}),t._v(" "),1==n?i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.dropList,function(e,o){return i("DropdownItem",{staticStyle:{"text-align":"center",padding:"10px 5px","font-size":"15px!important"},nativeOn:{click:function(i){t.changePageByLink(e.link,n+3)}}},[t._v(t._s(e.title))])})):t._e()],1)],1)})):i("MenuItem",{class:t.addClass(3),staticStyle:{float:"right"},attrs:{name:t.navRightTags0.name},nativeOn:{click:function(e){t.changePageByLink(t.navRightTags0.link,3)}}},[i("Icon",{attrs:{type:t.navRightTags0.icon,size:"27"}}),t._v(" "),i("span",[t._v(t._s(t.navRightTags0.text))])],1)],1)])],1),t._v(" "),i("Content",{staticStyle:{padding:"'30px 150px'","min-height":"800px",height:"auto",overflow:"hidden"}},[i("router-view",{staticStyle:{height:"auto"}})],1),t._v(" "),i("signCom",{attrs:{signInFromMain:t.signInFromMain},on:{SignSuccess:t.getSign}}),t._v(" "),i("Footer",{staticClass:"layout-footer-center",staticStyle:{"text-align":"center",padding:"50px 20px 24px 20px"}},[i("span",{staticStyle:{"padding-top":"50px"}},[t._v("open source "),i("img",{staticStyle:{width:"2%"},attrs:{src:n(452)}}),i("a",{staticStyle:{margin:"0 3px"},attrs:{href:"https://github.com/system-design2019"}},[t._v("blog")]),t._v("here")]),t._v(" "),i("p",{staticStyle:{width:"100%"}},[t._v("2019-2020 © TalkingDataSystem Design & Anylasis Project")])])],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});