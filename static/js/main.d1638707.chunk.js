(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={form:"FeedbackOptions_form__9ivgf",label:"FeedbackOptions_label__2vI6T",title:"FeedbackOptions_title__1LdU_"}},,function(e,t,a){e.exports={section:"Section_section__JnqA1",title:"Section_title__3ak2q"}},,,,,,function(e,t,a){e.exports={statistics:"Statistics_statistics__ORlpg"}},function(e,t,a){e.exports={message:"Notification_message__1UZky"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),o=(a(18),a(6)),r=a(7),l=a(8),d=a(13),b=a(12),u=a(4),j=a.n(u),h=a(0);function O(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:j.a.section,children:[t&&Object(h.jsx)("h1",{className:j.a.title,children:t}),a]})}var f=a(2),v=a.n(f);function k(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("form",{className:v.a.form,children:Object(h.jsxs)("div",{role:"group","arial-labelby":"title",children:[Object(h.jsx)("p",{className:v.a.title,id:"title",children:"Please leave feedback"}),t.map((function(e){return Object(h.jsxs)("label",{className:v.a.label,htmlFor:"radio-".concat(e),children:[Object(h.jsx)("input",{id:"radio-".concat(e),type:"radio",name:"feedback",value:e,onChange:function(t){a(e)}}),e]},e)}))]})})})}var x=a(10),g=a.n(x);function m(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.countPositivePercentage;return Object(h.jsxs)("ul",{className:g.a.statistics,children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",a]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",n]}),Object(h.jsxs)("li",{children:["Positive feedback: ",s,"%"]})]})}var p=a(11),_=a.n(p);function F(e){var t=e.message;return Object(h.jsx)("p",{className:_.a.message,children:t})}var y=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good;return Math.round(100*e/this.countTotalFeedback())||0}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,n=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{children:Object(h.jsx)(k,{options:n,onLeaveFeedback:this.leaveFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:0!==this.countTotalFeedback()?Object(h.jsx)(m,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),countPositivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(F,{message:"There is no feedback"})})]})}}]),a}(c.Component),P=y;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d1638707.chunk.js.map