webpackJsonp([4],{131:function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(s(2),s(37),s(210)),r=i(n),o=s(208),a=i(o),l=s(209),u=i(l),c=s(211),d=i(c);t.default={data:function(){return{alert:!1,currentStep:0}},components:{SetQues:r.default,EditQues:a.default,Pay:u.default,Success:d.default},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?(console.log(1),t.$store.dispatch("Ques/createQues/POST_QUESTIONNAIRE",t.formValidate),t.$Message.success("发布成功!"),t.$router.push("questionnaire")):t.$Message.error("发布失败！请完善信息后再次尝试")})},showStep:function(e){return e===this.currentStep},handleReset:function(e){this.$refs[e].resetFields()},back:function(){this.alert=!1,this.$store.commit("Ques/createQues/CLEAR"),this.$router.go(-1)},nextStep:function(e){this.currentStep=this.currentStep+e}}}},146:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(2);s(37);t.default={data:function(){return{title:"",curr:0,pos:0}},computed:(0,i.mapState)("Ques/createQues",{formContent:"formContent",questions:"questions"}),mounted:function(){},methods:{addQues:function(e){var t=parseInt(e),s="题目"+String(this.questions.length+1);if(1===e){var i={mode:t,theorder:0,title:s,fill:!1};this.questions.push(i)}else{var n={mode:t,theorder:0,title:s,maxchoose:1,choices:["选项1","选项2"],fill:!1};this.questions.push(n)}},getMode:function(e){return 1===e?"填空题":"选择题"},addOption:function(){var e="选项"+String(this.questions[this.curr].choices.length+1);this.questions[this.curr].choices.push(e)},deleteOption:function(){this.questions[this.curr].choices.length>2?this.questions[this.curr].choices.pop():this.$Message.info("已经无法删除选项了~")},changeOrder:function(){var e=this.questions[this.curr],t=this.curr;if(this.curr=this.pos-1,this.questions.splice(t,1),1===this.pos)this.questions.unshift(e);else if(this.pos===this.questions.length+1)this.questions.push(e);else{for(var s=this.questions.length;s!=this.pos-1;)this.questions[s]=this.questions[s-1],s--;this.questions[s]=e}},deleteQues:function(){var e=this.curr;this.curr=0,this.questions.splice(e,1)},goahead:function(){for(var e={title:this.title,number:this.questions.length,tians:[],xuans:[]},t=0,s=0,i=0;i<this.questions.length;++i)this.questions[i].theorder=i+1,1===this.questions[i].mode?(this.questions[i].tianID=++t,e.tians.push(this.questions[i])):2===this.questions[i].mode&&(this.questions[i].xuanID=++s,e.xuans.push(this.questions[i]));this.$store.commit("Ques/createQues/SET_CONTENT",e),this.$emit("changeStep",1)}}}},147:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(2);s(37),s(38);t.default={data:function(){return{}},computed:(0,i.mapState)({formValidate:function(e){return e.Ques.createQues.formValidate},formContent:function(e){return e.Ques.createQues.formContent},personDetail:function(e){return e.Personal.personalInfo}}),methods:{changeStep:function(e){var t=this;this.$store.dispatch("Personal/GET_INFO").then(function(s){var i={log:JSON.parse(window.sessionStorage.getItem("LogInfo")).log,userID:JSON.parse(window.sessionStorage.getItem("LogInfo")).userID,username:t.personDetail.nickname,money:t.personDetail.asset};if(window.sessionStorage.setItem("LogInfo",JSON.stringify(i)),t.personDetail.asset>=t.formValidate.reward*t.formValidate.quantity){var n='{"formValidate":'+JSON.stringify(t.formValidate)+',"formContent":'+JSON.stringify(t.formContent)+"}";console.log(n);var r=JSON.parse(n);t.$store.dispatch("Ques/CREATE_QUES",r),t.$emit("changeStep",e)}else t.$Message.error("M币不足，请修改后重新发布！")})}}}},148:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(2),s(37);t.default={data:function(){return{ruleValidate:{detail:[{required:!1,trigger:"blur"}],command:[{required:!1,trigger:"blur"}],quantity:[{required:!0,trigger:"blur"},{type:"number",message:"输入必须为整数",trigger:"change",transform:function(e){return Number(e)}}],reward:[{required:!0,message:"报酬不能为空",trigger:"blur"},{type:"number",message:"输入必须为整数",trigger:"blur",transform:function(e){return Number(e)}}],info:[{required:!0,type:"array",min:1,message:"至少选择显示一个联系方式",trigger:"change"},{type:"array",trigger:"change"}],startdate:[{required:!0,type:"date",message:"Please select the date",trigger:"change"}],starttime:[{required:!0,type:"string",message:"Please select time",trigger:"change"}],enddate:[{required:!0,type:"date",message:"Please select the date",trigger:"change"}],endtime:[{required:!0,type:"string",message:"Please select time",trigger:"change"}]},formValidate:{title:"1111",detail:"",command:"",reward:0,quantity:0,info:[],startdate:"",starttime:"",enddate:"",endtime:"",number:0}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.$store.commit("Ques/createQues/SET_VALIDATE",t.formValidate),console.log("shezhi: "+JSON.stringify(t.formValidate)),t.$emit("changeStep",1)):t.$Message.error("设置失败！请完善信息后再次尝试")})},handleReset:function(e){this.$refs[e].resetFields()},changeStep:function(e){this.$emit("changeStep",e)}}}},149:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(2),s(37);t.default={data:function(){return{}},mounted:function(){var e=this;setTimeout(function(){e.$router.push("/questionnaire")},3e3)}}},155:function(e,t){},159:function(e,t){},160:function(e,t){},168:function(e,t){},170:function(e,t){},208:function(e,t,s){s(168);var i=s(36)(s(146),s(231),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\createQues\\EditQues.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] EditQues.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},209:function(e,t,s){s(155);var i=s(36)(s(147),s(216),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\createQues\\Pay.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Pay.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},210:function(e,t,s){s(170);var i=s(36)(s(148),s(233),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\createQues\\SetQues.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] SetQues.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},211:function(e,t,s){s(159);var i=s(36)(s(149),s(221),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\createQues\\Success.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Success.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},216:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{width:"100%","text-align":"center"}},[s("p",{staticStyle:{"font-size":"20px","margin-top":"20px"}},[e._v("你需要支付"),s("span",{staticStyle:{"font-size":"20px",color:"#ce4545"}},[e._v("￥"+e._s(e.formValidate.reward*e.formValidate.quantity))]),e._v("M币，确认支付？")]),e._v(" "),s("p",[e._v("支付作为押金及填写酬金，未使用部分可退回")]),e._v(" "),s("Button",{on:{click:function(t){e.changeStep(1)}}},[e._v("确认支付")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},221:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{width:"100%","text-align":"center"}},[s("p",{staticStyle:{"font-size":"30px","font-weight":"700",margin:"20px 0"}},[e._v("发布成功")]),e._v(" "),s("p",[e._v("3s后自动跳转")])])}]},e.exports.render._withStripped=!0},222:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{width:"100%",background:"#ffffff",margin:"auto",padding:"10px"}},[s("div",{staticStyle:{margin:"0px 15%"}},[s("div",{staticStyle:{width:"100%",overflow:"hidden",height:"70px",position:"relative","margin-top":"20px","padding-bottom":"10px"}},[s("div",{staticStyle:{width:"5%",float:"left"}},[s("Icon",{staticStyle:{float:"left",bottom:"5px"},attrs:{type:"ios-arrow-back",size:"24"},on:{click:function(t){e.alert=!e.alert}}})],1),e._v(" "),s("div",{staticStyle:{width:"95%",float:"right",background:"#ffffff"}},[s("Steps",{attrs:{current:e.currentStep}},[s("Step",{staticStyle:{background:"#ffffff"},attrs:{title:"问卷编辑",content:"编辑问卷内容"}}),e._v(" "),s("Step",{attrs:{title:"问卷设置",content:"设置问卷发布的相关参数"}}),e._v(" "),s("Step",{attrs:{title:"押金支付",content:"支付押金"}}),e._v(" "),s("Step",{attrs:{title:"发布成功",content:"发布成功"}})],1)],1)]),e._v(" "),s("div",{staticStyle:{"margin-top":"40px",overflow:"hidden"}},[e.showStep(0)?s("EditQues",{on:{changeStep:e.nextStep}}):e.showStep(1)?s("SetQues",{on:{changeStep:e.nextStep}}):e.showStep(2)?s("Pay",{on:{changeStep:e.nextStep}}):s("Success")],1),e._v(" "),s("Modal",{attrs:{title:"提示",styles:{top:"100px"}},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[s("p",{staticStyle:{"text-align":"center",margin:"10px","font-size":"15px"}},[e._v("此时返回系统不会保存已经填写的内容。确认返回？")]),e._v(" "),s("button",{staticStyle:{width:"100px","font-size":"15px","margin-bottom":"20px","margin-left":"200px"},on:{click:e.back}},[e._v("确认")])])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},231:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{width:"100%"}},[s("div",{staticStyle:{overflow:"hidden"}},[s("div",{staticStyle:{float:"left",width:"10%",position:"relative； border: 2px"}},[s("Button",{staticStyle:{"margin-bottom":"10px"},on:{click:function(t){e.addQues(1)}}},[e._v("+填空题")]),e._v(" "),s("Button",{on:{click:function(t){e.addQues(2)}}},[e._v("+选择题")])],1),e._v(" "),s("div",{staticStyle:{float:"right",width:"90%"}},[s("div",{staticStyle:{float:"left",width:"70%",position:"relative",border:"2px #000000"}},[s("Input",{staticStyle:{"font-size":"28px",height:"40px",width:"100%"},attrs:{placeholder:"问卷标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),s("Divider"),e._v(" "),s("div",e._l(e.questions,function(t,i){return s("Card",{key:i,staticStyle:{margin:"5px 0"},nativeOn:{click:function(t){e.curr=i}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.fill,expression:"q.fill"}],staticStyle:{color:"#ce4545"}},[e._v("* ")]),s("span",{staticStyle:{margin:"5px 5px 10px 0"}},[e._v(e._s(i+1)+"."+e._s(t.title))]),e._v(" "),1===t.mode?s("div",[s("Input")],1):s("div",e._l(t.choices,function(t,i){return s("Checkbox",{staticStyle:{width:"100%",margin:"5px 0"}},[e._v(e._s(t))])}))])}))],1),e._v(" "),s("div",{staticStyle:{float:"left",width:"30%",position:"relative",padding:"0 1%"}},[s("Card",[s("p",[e._v("类型："+e._s(e.getMode(e.questions[e.curr].mode)))]),s("Divider"),e._v(" "),s("p",[e._v("标题")]),s("Input",{model:{value:e.questions[e.curr].title,callback:function(t){e.$set(e.questions[e.curr],"title",t)},expression:"questions[curr].title"}}),s("Divider"),e._v(" "),2===e.questions[e.curr].mode?s("div",[e._l(e.questions[e.curr].choices,function(t,i){return s("div",{staticStyle:{margin:"15px 0"}},[s("span",[e._v("选项"+e._s(i+1)+":")]),s("Input",{model:{value:e.questions[e.curr].choices[i],callback:function(t){e.$set(e.questions[e.curr].choices,i,t)},expression:"questions[curr].choices[index]"}})],1)}),e._v(" "),s("Button",{on:{click:function(t){e.addOption()}}},[e._v("添加选项")]),e._v(" "),s("Button",{on:{click:function(t){e.deleteOption()}}},[e._v("移除选项")]),e._v(" "),s("div",{staticStyle:{"margin-top":"10px"}},[s("span",[e._v("最多可选：")]),s("InputNumber",{attrs:{max:e.questions[e.curr].choices.length,min:1},model:{value:e.questions[e.curr].choose,callback:function(t){e.$set(e.questions[e.curr],"choose",t)},expression:"questions[curr].choose"}})],1),e._v(" "),s("Divider")],2):e._e(),e._v(" "),s("div",[s("span",[e._v("修改顺序：")]),s("InputNumber",{attrs:{max:e.questions.length,min:1},model:{value:e.pos,callback:function(t){e.pos=t},expression:"pos"}}),e._v(" "),s("Button",{on:{click:function(t){e.changeOrder()}}},[e._v("确定")]),s("Divider")],1),e._v(" "),s("div",[s("span",[e._v("必填：")]),s("i-switch",{model:{value:e.questions[e.curr].fill,callback:function(t){e.$set(e.questions[e.curr],"fill",t)},expression:"questions[curr].fill"}}),s("Divider")],1),e._v(" "),s("div",[s("Button",{on:{click:function(t){e.deleteQues()}}},[e._v("删除此问题")])],1)],1)],1)])]),e._v(" "),s("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"20px"}},[s("Button",{on:{click:function(t){e.goahead()}}},[e._v("下一步")])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},233:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{width:"100%"}},[s("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[s("FormItem",{attrs:{label:"简介",prop:"detail"}},[s("Input",{attrs:{placeholder:"输入问卷简介"},model:{value:e.formValidate.detail,callback:function(t){e.$set(e.formValidate,"detail",t)},expression:"formValidate.detail"}})],1),e._v(" "),s("FormItem",{attrs:{label:"要求",prop:"command"}},[s("Input",{attrs:{placeholder:"输入问卷填写者限制，如：大学生"},model:{value:e.formValidate.command,callback:function(t){e.$set(e.formValidate,"command",t)},expression:"formValidate.command"}})],1),e._v(" "),s("FormItem",{attrs:{label:"酬金",prop:"reward"}},[s("Input",{attrs:{placeholder:"输入每份问卷填写报酬"},model:{value:e.formValidate.reward,callback:function(t){e.$set(e.formValidate,"reward",t)},expression:"formValidate.reward"}})],1),e._v(" "),s("FormItem",{attrs:{label:"招募数量",prop:"quantity"}},[s("Input",{attrs:{placeholder:"输入目标收集数量"},model:{value:e.formValidate.quantity,callback:function(t){e.$set(e.formValidate,"quantity",t)},expression:"formValidate.quantity"}})],1),e._v(" "),s("FormItem",{attrs:{label:"开始时间"}},[s("Row",[s("Col",{attrs:{span:"6"}},[s("FormItem",{attrs:{prop:"startdate"}},[s("DatePicker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formValidate.startdate,callback:function(t){e.$set(e.formValidate,"startdate",t)},expression:"formValidate.startdate"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"6"}},[s("FormItem",{attrs:{prop:"starttime"}},[s("TimePicker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.formValidate.starttime,callback:function(t){e.$set(e.formValidate,"starttime",t)},expression:"formValidate.starttime"}})],1)],1)],1)],1),e._v(" "),s("FormItem",{attrs:{label:"结束时间"}},[s("Row",[s("Col",{attrs:{span:"6"}},[s("FormItem",{attrs:{prop:"enddate"}},[s("DatePicker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formValidate.enddate,callback:function(t){e.$set(e.formValidate,"enddate",t)},expression:"formValidate.enddate"}})],1)],1),e._v(" "),s("Col",{attrs:{span:"6"}},[s("FormItem",{attrs:{prop:"endtime"}},[s("TimePicker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.formValidate.endtime,callback:function(t){e.$set(e.formValidate,"endtime",t)},expression:"formValidate.endtime"}})],1)],1)],1)],1),e._v(" "),s("FormItem",{attrs:{label:"个人信息展示",prop:"info"}},[s("CheckboxGroup",{model:{value:e.formValidate.info,callback:function(t){e.$set(e.formValidate,"info",t)},expression:"formValidate.info"}},[s("Checkbox",{attrs:{label:"微信"}}),e._v(" "),s("Checkbox",{attrs:{label:"电话"}}),e._v(" "),s("Checkbox",{attrs:{label:"QQ"}}),e._v(" "),s("Checkbox",{attrs:{label:"个性签名"}})],1)],1)],1),e._v(" "),s("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"105px"}},[s("Button",{staticStyle:{"margin-right":"10px"},on:{click:function(t){e.changeStep(-1)}}},[e._v("上一步")]),s("Button",{on:{click:function(t){e.handleSubmit("formValidate")}}},[e._v("下一步")])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},87:function(e,t,s){s(160);var i=s(36)(s(131),s(222),null,null);i.options.__file="E:\\Git\\workspace\\system-design\\frontend\\TimeIsMoney\\src\\views\\CreateQues.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] CreateQues.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports}});