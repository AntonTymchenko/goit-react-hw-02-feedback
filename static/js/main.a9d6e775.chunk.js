(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(8),r=n.n(i),s=n(3),o=n(4),l=n(6),u=n(5),d=n(9),b=n(0),j=function(t){var e=t.title,n=t.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e}),n]})};j.defaultProps={title:"",children:[]};var h=j,O=n(2),v=n.n(O);var f=function(t){var e=t.increaseItems,n=t.options;return Object(b.jsx)(h,{title:"Please leave Feedback",children:Object(b.jsx)("ul",{className:v.a.BtnsList,children:n.map((function(t){var n=t.id,a=t.value;return Object(b.jsx)("li",{className:v.a.items,children:Object(b.jsx)("button",{type:"button",className:v.a.btnsItem,onClick:function(){return e(a)},children:a})},n)}))})})};var p=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.persentage;return Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Good: ",e," "]}),Object(b.jsxs)("li",{children:["Neutral: ",n]}),Object(b.jsxs)("li",{children:["bad: ",a]}),Object(b.jsxs)("li",{children:["total: ",a+n+e]}),Object(b.jsxs)("li",{children:["Positive percentage: ",c," %"]})]})};var x=function(){return Object(b.jsx)("p",{children:"No Feedback given"})},m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.increaseItems=function(e){t.setState((function(t){return Object(d.a)({},e.toLowerCase(),t[e.toLowerCase()]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.bad+t.state.neutral},t.countPositiveFeedbackPercentage=function(){return t.countTotalFeedback(),0===t.countTotalFeedback()?100*t.state.good:Math.floor(100*t.state.good/t.countTotalFeedback())},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=this.countPositiveFeedbackPercentage();return Object(b.jsxs)("div",{className:v.a.container,children:[Object(b.jsx)(f,{increaseItems:this.increaseItems,options:[{value:"Good",id:"id-1"},{value:"Neutral",id:"id-2"},{value:"Bad",id:"id-3"}]}),Object(b.jsx)(h,{title:"Statistics",children:0===this.countTotalFeedback()?Object(b.jsx)(x,{}):Object(b.jsx)(p,{good:e,neutral:n,bad:a,persentage:c})})]})}}]),n}(a.Component),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(m,{})}}]),n}(a.Component);n(15);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={BtnsList:"Statistics_BtnsList__1B5XR",items:"Statistics_items__1CSwF",btnsItem:"Statistics_btnsItem__2p06v",container:"Statistics_container__2r85f"}}},[[16,1,2]]]);
//# sourceMappingURL=main.a9d6e775.chunk.js.map