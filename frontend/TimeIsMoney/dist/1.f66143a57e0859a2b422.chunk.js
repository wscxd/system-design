webpackJsonp([1,10],{408:function(t,e,i){i(442);var n=i(162)(i(439),i(450),null,null);n.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\Sign.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Sign.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},417:function(t,e,i){i(481);var n=i(162)(i(461),i(542),null,null);n.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\Jump.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Jump.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},439:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(448),s=i.n(n),o=i(447),a=i.n(o),r=(i(164),i(29));e.default={props:["signInFromJump","signInFromMain","signUpFromMain"],components:{SIdentify:s.a,SIdentify1:a.a},data:function(){return{signIn:!1,signUp:!1,info:{username:"",password:"",mode:"",inputCode:""},wrong:!1,alert:"",identifyCode2:"",identifyCode1:"",identifyCodes:"1234567890",checkNum:"",checkNum1:""}},computed:i.i(r.b)("Personal",{personDetail:"personalInfo"}),mounted:function(){this.identifyCode2="",this.identifyCode1="",this.makeCode(this.indentifyCodes,4)},methods:{sendIndentify:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SEND_IDENTIFY",this.info).then(function(t){console.log("response"),console.log(t)}))},checkIndentify:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("CHECK_IDENTIFY",this.info).then(function(t){console.log(t),t.success&&alert("Your verify done!")}))},sendIndentify2:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SEND_IDENTIFY2",this.info).then(function(t){console.log("response"),console.log(t)}))},checkIndentify2:function(){"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("CHECK_IDENTIFY2",this.info).then(function(t){console.log(t),t.success&&alert("Your verify done!")}))},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode2="",this.identifyCode1="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var i=0;i<e;i++)this.identifyCode2+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];for(var n=0;n<e;n++)this.identifyCode1+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]},changeToSignUp:function(){this.signIn=!1,this.signUp=!0,this.info.username="",this.info.password="",this.checkNum="",this.checkNum1=""},changeToSignIn:function(){this.signUp=!1,this.signIn=!0,this.info.username="",this.info.password="",this.checkNum="",this.checkNum1=""},doSignUp:function(){var t=this;"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SIGN_UP",this.info).then(function(e){console.log("response"),console.log(e),e.success?(t.wrong=!1,t.changeToSignIn()):(t.wrong=!0,t.alert=e.msg)})),this.refreshCode()},doSignIn:function(){var t=this;"invalid"!==this.checkValid(this.info.username)&&(this.info.mode=this.checkValid(this.info.username),this.$store.dispatch("SIGN_IN",this.info).then(function(e){if(e.success){t.$emit("SignSuccess",!0),t.signIn=!1;var i={log:!0,userID:e.data,username:"$"};window.sessionStorage.setItem("LogInfo",JSON.stringify(i)),t.$router.push({path:"/main",name:"main"}),t.wrong=!1,t.$store.dispatch("Ques/GET_COLLECT_QUESLIST"),t.$store.dispatch("Ques/GET_ATTEND_QUESLIST"),t.$store.dispatch("Ques/GET_PUBLISH_QUESLIST")}else t.wrong=!0,t.alert=e.msg;t.$store.dispatch("Personal/GET_INFO").then(function(e){var i={log:JSON.parse(window.sessionStorage.getItem("LogInfo")).log,userID:JSON.parse(window.sessionStorage.getItem("LogInfo")).userID,username:t.personDetail.nickname,money:t.personDetail.asset};window.sessionStorage.setItem("LogInfo",JSON.stringify(i))})}))},checkValid:function(t){if(this.signIn&&this.checkNum!=this.identifyCode2)return this.wrong=!0,this.alert="验证码错误",this.refreshCode(),"invalid";if(""===this.info.username||""===this.info.password)return this.wrong=!0,this.alert="密码或用户名不能为空","invalid";var e=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;return/^1[34578]\d{9}$/.test(t)?"phone":e.test(t)?"email":(this.wrong=!0,this.alert="无效的用户名","invalid")}},watch:{signInFromJump:function(t,e){this.signUp=!1,this.signIn=!0},signInFromMain:function(t,e){this.signUp=!1,this.signIn=!0}}}},440:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sdisabled:!1,time:60,btntxt:"获取验证码"}},methods:{sendcode:function(){this.time=60,this.timer()},timer:function(){this.time>0?(this.sdisabled=!0,this.time--,this.btntxt=this.time+"S",setTimeout(this.timer,1e3)):(this.time=0,this.btntxt="发送验证码",this.sdisabled=!1)}}}},441:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SIdentify",props:{identifyCode:{type:String,default:"555"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas"),e=t.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var i=0;i<this.identifyCode.length;i++)this.drawText(e,this.identifyCode[i],i);this.drawLine(e),this.drawDot(e)},drawText:function(t,e,i){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var n=(i+1)*(this.contentWidth/(this.identifyCode.length+1)),s=this.randomNum(this.fontSizeMax,this.contentHeight-5),o=this.randomNum(-45,45);t.translate(n,s),t.rotate(o*Math.PI/180),t.fillText(e,0,0),t.rotate(-o*Math.PI/180),t.translate(-n,-s)},drawLine:function(t){for(var e=0;e<8;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<100;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}}},442:function(t,e){},443:function(t,e){},444:function(t,e,i){t.exports=i.p+"bd2f4356807ac29aa1f06e1da3a10040.jpg"},445:function(t,e,i){t.exports=i.p+"1eaf7a0301f0553ec03a71cac5d2e068.png"},446:function(t,e,i){t.exports=i.p+"dc0d754ef4f0236e6d7fbb5f119ce873.jpg"},447:function(t,e,i){i(443);var n=i(162)(i(440),i(451),"data-v-4a7498ab",null);n.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\components\\IdentifyFromAPI.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] IdentifyFromAPI.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},448:function(t,e,i){var n=i(162)(i(441),i(449),null,null);n.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\components\\IdentifyFromLocal.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] IdentifyFromLocal.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},449:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-canvas"},[i("canvas",{attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight}})])},staticRenderFns:[]},t.exports.render._withStripped=!0},450:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Modal",{attrs:{width:"600px"},model:{value:t.signIn,callback:function(e){t.signIn=e},expression:"signIn"}},[n("div",{attrs:{id:"headImg"}},[n("img",{attrs:{id:"img",src:i(444),alt:"正方形的原始图片"}}),t._v(" "),n("div",{staticStyle:{clear:"both"}})]),t._v(" "),n("div",{staticStyle:{float:"right"},attrs:{id:"rightPart"}},[n("div",{attrs:{id:"headBox2"}},[n("div",{attrs:{id:"headBox"}},[n("img",{attrs:{id:"head",src:i(445),alt:"正方形的原始图片",width:"150px",height:"150px"}})])]),t._v(" "),n("div",{staticClass:"allInput"},[t.wrong?n("span",{staticStyle:{color:"#ce4545"}},[t._v("*"+t._s(t.alert))]):t._e(),t._v(" "),n("Input",{staticStyle:{"margin-top":"15px"},attrs:{prefix:"ios-contact",placeholder:"用户名/手机/邮箱",type:"text"},model:{value:t.info.username,callback:function(e){t.$set(t.info,"username",e)},expression:"info.username"}}),t._v(" "),n("Input",{staticStyle:{"margin-top":"15px"},attrs:{prefix:"ios-contact",placeholder:"密码",type:"password"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignIn(e):null}},model:{value:t.info.password,callback:function(e){t.$set(t.info,"password",e)},expression:"info.password"}}),t._v(" "),n("div",[n("Input",{staticStyle:{"margin-top":"15px",width:"150px"},attrs:{prefix:"ios-contact",placeholder:"请输入验证码"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignIn(e):null}},model:{value:t.checkNum,callback:function(e){t.checkNum=e},expression:"checkNum"}}),t._v(" "),n("SIdentify",{staticStyle:{"margin-top":"15px",float:"right"},attrs:{identifyCode:t.identifyCode2},nativeOn:{click:function(e){return t.refreshCode(e)}}})],1)],1),t._v(" "),n("div",{staticClass:"allButton"},[n("div",{staticStyle:{clear:"both"}}),t._v(" "),n("Button",{staticStyle:{"margin-top":"15px"},attrs:{id:"loginBt",size:"large",long:""},nativeOn:{click:function(e){return t.doSignIn(e)}}},[t._v("登录")]),t._v(" "),n("div",{staticClass:"smallBt"},[n("Button",{staticStyle:{color:"#0066cc","border-color":"#fff"},attrs:{id:"findPass",size:"small"}},[t._v("找回密码")]),t._v(" "),n("Button",{staticStyle:{color:"#0066cc","border-color":"#fff"},attrs:{id:"signNow",size:"small"},on:{click:t.changeToSignUp}},[t._v("立即注册")])],1)],1)]),t._v(" "),n("div",{staticStyle:{clear:"both"}})]),t._v(" "),n("Modal",{attrs:{width:"600px"},model:{value:t.signUp,callback:function(e){t.signUp=e},expression:"signUp"}},[n("div",{attrs:{id:"headImg"}},[n("img",{attrs:{id:"img",src:i(446),alt:"正方形的原始图片"}}),t._v(" "),n("div",{staticStyle:{clear:"both"}})]),t._v(" "),n("div",{staticStyle:{float:"right","padding-top":"70px"},attrs:{id:"rightPart"}},[n("div",{staticClass:"allInput"},[t.wrong?n("span",{staticStyle:{color:"#ce4545"}},[t._v("*"+t._s(t.alert))]):t._e(),t._v(" "),n("Input",{staticStyle:{"margin-top":"25px"},attrs:{prefix:"ios-contact",placeholder:"请输入用户名/手机/邮箱",type:"text"},model:{value:t.info.username,callback:function(e){t.$set(t.info,"username",e)},expression:"info.username"}}),t._v(" "),n("Input",{staticStyle:{"margin-top":"25px"},attrs:{prefix:"ios-contact",placeholder:"请输入密码",type:"password"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignUp(e):null}},model:{value:t.info.password,callback:function(e){t.$set(t.info,"password",e)},expression:"info.password"}}),t._v(" "),n("div",[n("Input",{staticStyle:{"margin-top":"25px",width:"150px"},attrs:{prefix:"ios-contact",placeholder:"请输入验证码"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSignUp(e):null}},model:{value:t.info.inputCode,callback:function(e){t.$set(t.info,"inputCode",e)},expression:"info.inputCode"}}),t._v(" "),n("SIdentify1",{staticStyle:{float:"right","margin-top":"25px",height:"40px"},nativeOn:{click:function(e){return t.sendIndentify(e)}}}),t._v(" "),n("Button",{attrs:{size:"large",long:""},on:{click:t.checkIndentify}},[t._v(" 测试用 ")])],1)],1),t._v(" "),n("div",{staticClass:"allButton"},[n("div",{staticStyle:{clear:"both"}}),t._v(" "),n("Button",{staticStyle:{"margin-top":"25px"},attrs:{id:"signup",size:"large",long:""},on:{click:t.doSignUp}},[t._v("注册")]),t._v(" "),n("div",{staticClass:"smallBt"},[n("Button",{staticStyle:{color:"#0066cc","border-color":"#fff"},attrs:{id:"signNow",size:"small"},on:{click:t.changeToSignIn}},[t._v("已有账号？")])],1)],1)]),t._v(" "),n("div",{staticStyle:{clear:"both"}})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},451:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"sendCheck"}},[i("Button",{staticClass:"sendcode",staticStyle:{width:"110px"},attrs:{disabled:t.sdisabled},on:{click:t.sendcode}},[t._v("\n        "+t._s(t.btntxt)+"\n    ")])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},452:function(t,e,i){t.exports=i.p+"c46441d2e9c3e95b694bd737c6418108.png"},461:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(408),s=i.n(n);e.default={name:"helloPage",mounted:function(){this.A()},data:function(){return{signInFromJump:!1,note:{backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},show:!0,list1:[{src:"../../static/jump/question.png",title:"问卷调查",content:"在这里，你可以完成带有悬赏的问卷，提交有效问卷后既可以获得对应的金额，积少成多。如果你是问卷发布者，这里同样欢迎你提交需要调查的问卷和资金，我们会帮你保管好你的资金和问卷，为你的调查助力。"},{src:"../../static/jump/runfavor.png",title:"跑腿代购",content:"跑腿代购同样可以获得零用钱。代领快递、领外卖、购买商品……无论你是想赚钱还是想找个人替你跑腿，TIM无疑是你最优秀的选择。在这里，时间就是酬劳。"},{src:"../../static/jump/social.png",title:"聊天社交",content:"想要找到兴趣相同的朋友？想要和校内的同学搞好关系？来TIM就对了！问卷和跑腿不是全部，随时随地和附近的人聊天社交，有时间你就来，爱情与友情也是价值的体现！"}],list2:[{show:!0,src:"../../static/jump/image4.jpg",title:"在线交流，沟通更方便",text:"在这里，你可以完成带有悬赏的问卷，提交有效问卷后既可以获得对应的金额，积少成多。如果你是问卷发布者，这里同样欢迎你提交需要调查的问卷和资金，我们会帮你保管好你的资金和问卷，为你的调查助力。"},{show:!1,src:"../../static/jump/image4.jpg",title:"",text:""},{show:!1,src:"../../static/jump/image5.jpg",title:"",text:""},{show:!0,src:"../../static/jump/image5.jpg",title:"问卷跑腿，收益双保障",text:"在这里，你可以完成带有悬赏的问卷，提交有效问卷后既可以获得对应的金额，积少成多。如果你是问卷发布者，这里同样欢迎你提交需要调查的问卷和资金，我们会帮你保管好你的资金和问卷，为你的调查助力。"}],logged:!1}},methods:{handleStart:function(){JSON.parse(window.sessionStorage.getItem("LogInfo")).userID;this.$router.push({path:"/main"})},handleSign:function(){this.signInFromJump=!this.signInFromJump},A:function(){setTimeout(this.disapper,2500);var t={log:!1,userID:"",username:""};window.sessionStorage.setItem("LogInfo",JSON.stringify(t)),this.logged=!1},disapper:function(){this.$refs.moveout.style.display="none",this.$refs.showon.style.display="block"}},components:{signCom:s.a}}},481:function(t,e){},503:function(t,e,i){t.exports=i.p+"29dc8f37544096fa7d02fd10416be0a7.png"},515:function(t,e,i){t.exports=i.p+"1c0824d7c4a7419180d8e6b17ac23934.png"},542:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hellopage"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"block1"}},[n("Row",{attrs:{type:"flex",justify:"center"}},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",{ref:"moveout",attrs:{id:"moveout"}},[n("h2",[n("p",{attrs:{id:"text1"}},[t._v("从未想过 琐碎时间更值钱？")])])])]),t._v(" "),n("transition",[n("div",{ref:"showon",attrs:{id:"showon"}},[n("div",{attrs:{id:"signIn"}},[n("Button",{staticStyle:{float:"right",margin:"10px"},attrs:{shape:"circle",size:"large",ghost:""},on:{click:t.handleSign}},[t._v("SignIn")])],1),t._v(" "),n("div",{staticClass:"animated bounce"},[n("div",{attrs:{id:"logoBox"}},[n("img",{attrs:{id:"logov2",src:i(503),alt:"正方形的原始图片"}})]),t._v(" "),n("div",{attrs:{id:"titleBox"}},[n("img",{attrs:{id:"title",src:i(515),alt:"标题"}})]),t._v(" "),n("p",{attrs:{id:"title2"}},[t._v(" 让琐碎的时间更有价值 ")]),t._v(" "),n("div",{attrs:{id:"mainButton"}},[n("Button",{staticStyle:{"font-size":"25px",width:"200px"},attrs:{shape:"circle",size:"large",ghost:""},on:{click:t.handleStart}},[t._v("去赚钱")])],1)])])])],1),t._v(" "),n("Row",{staticStyle:{"text-align":"center","vertical-align":"middle",margin:"60px 0"}},[n("p",{staticStyle:{"font-size":"24px","font-weight":"300"}},[t._v("TIM是一个专为大学生建立的赚钱社区。")]),t._v(" "),n("p",{staticStyle:{"font-size":"24px","font-weight":"300"}},[t._v("在这里，你可以利用零碎时间换取收益，积少成多。")])]),t._v(" "),n("Row",{staticStyle:{background:"rgb(246,246,246)"}},[n("Row",{staticStyle:{"text-align":"center","vertical-align":"middle",margin:"40px 0"}},[n("p",{staticStyle:{"font-size":"34px","font-weight":"300",color:"#CE4545"}},[t._v("我们可以做什么？")])]),t._v(" "),n("Row",{staticStyle:{margin:"40px 80px"}},t._l(t.list1,function(e,i){return n("Col",{key:i,staticStyle:{"text-align":"center",align:"middle"},attrs:{span:"8"}},[n("img",{staticStyle:{width:"32%","border-radius":"50%",align:"middle"},attrs:{src:e.src}}),t._v(" "),n("p",{staticStyle:{width:"100%","font-size":"26px",color:"#CE4545",margin:"15px 0","font-weight":"300"}},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticStyle:{"font-size":"20px",margin:"15px 10%","text-align":"left","font-weight":"300"}},[t._v(t._s(e.content))])])}))],1),t._v(" "),n("Row",t._l(t.list2,function(e,i){return n("Col",{key:i,staticStyle:{"text-align":"center",height:"340px",margin:"auto 0"},attrs:{span:"12"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!things.show"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:e.src}}),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"things.show"}],staticStyle:{margin:"13% 10% 20px 10%","font-size":"26px",color:"#CE4545","font-weight":"300"}},[t._v(t._s(e.title))]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"things.show"}],staticStyle:{margin:"20px 10% 13% 10%","font-size":"20px","text-align":"left","font-weight":"300"}},[t._v(t._s(e.text))])])})),t._v(" "),n("Footer",{staticClass:"layout-footer-center",staticStyle:{"text-align":"center",padding:"50px 20px 24px 20px"}},[n("span",{staticStyle:{"padding-top":"50px"}},[t._v("open source "),n("img",{staticStyle:{width:"2%"},attrs:{src:i(452)}}),n("a",{staticStyle:{margin:"0 3px"},attrs:{href:"https://github.com/system-design2019"}},[t._v("blog")]),t._v("here")]),t._v(" "),n("p",{staticStyle:{width:"100%"}},[t._v("2019-2020 © TalkingDataSystem Design & Anylasis Project")])]),t._v(" "),n("signCom",{attrs:{signInFromJump:t.signInFromJump}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});