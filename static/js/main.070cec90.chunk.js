(this.webpackJsonpdischarge=this.webpackJsonpdischarge||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"dateToString",(function(){return b})),a.d(n,"addMonth",(function(){return v})),a.d(n,"addDay",(function(){return N})),a.d(n,"addSecond",(function(){return w})),a.d(n,"monthDiff",(function(){return D})),a.d(n,"dayDiff",(function(){return y})),a.d(n,"secondDiff",(function(){return k})),a.d(n,"setDay1AndMidnight",(function(){return S})),a.d(n,"secondsToString",(function(){return T})),a.d(n,"setDate",(function(){return j}));var r,c=a(0),l=a.n(c),s=a(6),o=a.n(s),i=a(2),m=a(7),u=a(1),d=a.n(u),f=function(e){var t=e.className,a=d()("navbar navbar-default navbar-fixed-top",t);return l.a.createElement("nav",{className:a},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{href:"/",className:"navbar-brand"},"\uc815\uc2e0\uacfc \uc2dc\uac04\uc758 \ubc29"),l.a.createElement("button",{className:"navbar-toggle",type:"button","data-toggle":"collapse","data-target":"#navbar-main"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}))),l.a.createElement("div",{className:"navbar-collapse collapse",id:"navbar-main"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Noverish/discharge",target:"_blank",rel:"noopener noreferrer",className:"btn btn-link"},"Github"))),l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",null,l.a.createElement("button",{type:"button",className:"btn btn-default navbar-btn","data-toggle":"modal","data-target":"#myModal"},"Settings"))))))},g=new Date("2018-04-01"),p=new Date("2018-11-01"),E=new Date("2019-06-01");function h(e){var t=new Date(e);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function b(e){var t=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return"".concat(t,"/").concat(a,"/").concat(n)}function v(e,t){return e.setMonth(e.getMonth()+t),e}function N(e,t){return e.setDate(e.getDate()+t),e}function w(e,t){return e.setSeconds(e.getSeconds()+t),e}function D(e,t){return 12*(e.getFullYear()-t.getFullYear())+e.getMonth()-t.getMonth()}function y(e,t){var a=h(t),n=h(e);return Math.ceil((n.getTime()-a.getTime())/864e5)}function k(e,t){return Math.floor((e.getTime()-t.getTime())/1e3)}function S(e){return e.setDate(1),e.setUTCHours(9),e.setUTCMinutes(0),e.setUTCSeconds(0),e.setUTCMilliseconds(0),e}function T(e){var t=(e%60).toString().padStart(2,"0"),a=Math.floor(e/60),n=(a%60).toString().padStart(2,"0"),r=Math.floor(a/60),c=(r%24).toString().padStart(2,"0"),l=Math.floor(r/24);return"".concat(l,"\uc77c ").concat(c,"\uc2dc\uac04 ").concat(n,"\ubd84 ").concat(t,"\ucd08")}function j(e,t){return e.setFullYear(t.getFullYear()),e.setMonth(t.getMonth()),e.setDate(t.getDate()),e}function M(e,t){switch(e){case r.private:return 3+(t.getTime()<E.getTime()?1:0);case r.privateFirst:return 6+(t.getTime()<p.getTime()?1:0);case r.corporal:return 6+(t.getTime()<g.getTime()?1:0);default:throw new Error("Unexpected value")}}function x(e,t){var a=function(e){var t=new Date(e.join),a=new Date(e.transfer),n=new Date(e.discharge),c=[0,0,0];e.penalty.forEach((function(e){c[e]+=1}));var l=c[0],s=c[1],o=c[2],i=M(r.private,t)+l,m=M(r.privateFirst,t)+s,u=M(r.corporal,t)+o,d=v(new Date(t),i),f=v(new Date(d),m),g=v(new Date(f),u);return d.setDate(1),f.setDate(1),g.setDate(1),{join:t,transfer:a,privateFirst:d,corporal:f,sergeant:g,discharge:n}}(e),n=function(e,t){var a=e.join,n=e.transfer,c=e.privateFirst,l=e.corporal,s=e.sergeant,o=e.discharge;if(t<a)return{rank:r.human};if(a<=t&&t<n)return{rank:r.trainee};if(n<=t&&t<c)return{grade:D(t,a)+1,rank:r.private};if(c<=t&&t<l){var i=D(l,c),m=D(t,c)+1;return{grade:m,broken:m>Math.ceil(i/2),rank:r.privateFirst}}if(l<=t&&t<s){var u=D(s,l),d=D(t,l)+1;return{grade:d,broken:d>Math.ceil(u/2),rank:r.corporal}}if(s<=t&&t<o){var f=D(t,s)+1,g=y(o,s);return{grade:f,broken:y(t,s)>Math.ceil(g/2),rank:r.sergeant}}if(o<=t)return{rank:r.fulfilled};throw new Error("Never happend")}(a,t),c=n.rank,l=n.grade,s=n.broken,o=function(e){switch(e){case r.human:return"\ubbfc\uac04\uc778";case r.trainee:return"\ud6c8\ub828\ubcd1";case r.private:return"\uc774\ubcd1";case r.privateFirst:return"\uc77c\ubcd1";case r.corporal:return"\uc0c1\ubcd1";case r.sergeant:return"\ubcd1\uc7a5";case r.fulfilled:return"\uc608\ube44\uc5ed";default:throw new Error("Unexpected value")}}(c)+(l?" ".concat(l,"\ud638\ubd09"):""),i=a.join,m=a.transfer,u=a.discharge,d=y(u,i),f=Math.min(y(t,i),d),g=Math.max(y(u,t),0),p=k(u,i),E=Math.min(k(t,i),p),h=Math.max(k(u,t),0),b=(t.getTime()-i.getTime())/(u.getTime()-i.getTime());return{join:i,transfer:m,discharge:u,rankString:o,rank:c,grade:l,broken:s,daysTotal:d,daysPast:f,daysLeft:g,secondsTotal:p,secondsPast:E,secondsLeft:h,percent:(100*Math.min(1,Math.max(b,0))).toFixed(2),name:e.name}}!function(e){e.human="human",e.trainee="trainee",e.private="private",e.privateFirst="private-first",e.corporal="corporal",e.sergeant="sergeant",e.fulfilled="fulfilled"}(r||(r={}));var O,F=n.dateToString,C=function(e){var t=e.person,a=t.name,n=t.join,r=t.transfer,c=t.discharge,s=t.rank,o=t.rankString,i=t.broken,m=t.daysLeft,u=t.percent,f=m<31,g="".concat(F(n)," \uc785\ub300 - ").concat(F(r)," \uc804\uc785 - ").concat(F(c)," \uc804\uc5ed");return l.a.createElement("div",{id:"info-pane",className:"panel"},l.a.createElement("div",{className:d()("panel-heading","rank-".concat(s),{broken:i})}),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"name-info"},l.a.createElement("strong",{className:"name"},a),l.a.createElement("span",{className:"rank"},o),l.a.createElement("div",null,"\ub2f9\uc2e0\uc758 \uc804\uc5ed\uc740"," ",l.a.createElement("span",{className:d()("bold",f?"dischargable":"not-dischargable")},f?"\uac00\ub2a5":"\ubd88\uac00"),"\ud569\ub2c8\ub2e4.")),l.a.createElement("div",{className:"date-info"},l.a.createElement("div",{className:"dday"},l.a.createElement("div",{className:d()("hex","rank-".concat(s),{broken:i})},"D-0x",l.a.createElement("span",{className:"bold"},m.toString(16).toUpperCase(),l.a.createElement("sub",null,"(16)"))),l.a.createElement("span",{className:"percentage"},u,"%")),l.a.createElement("div",null,g)),l.a.createElement("div",{style:{marginLeft:"auto",textAlign:"right"}},"\uac1c\uc778\uc815\ubcf4\ubcf4\ud638\ub97c \uc704\ud574 \uac00\uba85\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\uc774 \ub370\uc774\ud130\uc5d0 \ubcf8\uc778\uc774 \uc788\ub294 \uac83 \uac19\uc740 \uacbd\uc6b0 \uc0c1\ub2e8\uc758 Settings\ub97c \ud074\ub9ad\ud574\ubcf4\uc138\uc694.")))},I=n.dateToString,U=n.secondsToString,P=function(e){var t=e.index,a=e.person,n=e.isMe,r=a.rank,c=a.rankString,s=a.broken,o=a.percent,i=a.daysPast,m=a.daysTotal,u=a.secondsPast,f=a.secondsLeft,g=!["fulfilled","human"].includes(r.toString()),p=d()("progress",{active:g,"progress-striped":g}),E=d()("progress-bar","rank-".concat(r),{broken:s}),h=parseInt(o)>20,b=d()("text",h?"inside":"outside"),v="".concat(i,"/").concat(m," (").concat(o,"%)"),N=i>0?l.a.createElement("span",{className:b},v):null;return l.a.createElement("tr",{className:d()({me:n})},l.a.createElement("td",null,t+1),l.a.createElement("td",null,a.name),l.a.createElement("td",null,c),l.a.createElement("td",null,I(a.join)),l.a.createElement("td",null,I(a.transfer)),l.a.createElement("td",null,I(a.discharge)),l.a.createElement("td",null,U(u)),l.a.createElement("td",null,U(f)),l.a.createElement("td",null,l.a.createElement("div",{className:p},l.a.createElement("div",{className:E,style:{width:"".concat(o,"%")}},h&&N),h||N)))},L=function(e){var t=e.me,a=e.persons.map((function(e,a){var n=e.name===t.name&&e.join.toDateString()===t.join.toDateString();return l.a.createElement(P,{index:a,person:e,isMe:n,key:e.name+e.join})}));return l.a.createElement("div",{id:"people-table"},l.a.createElement("table",{className:"table table-striped table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"no"},"#"),l.a.createElement("th",{className:"name"},"\uc774\ub984"),l.a.createElement("th",{className:"rank"},"\uacc4\uae09"),l.a.createElement("th",{className:"date-start"},"\uc785\ub300\uc77c"),l.a.createElement("th",{className:"date-transfer"},"\uc804\uc785\uc77c"),l.a.createElement("th",{className:"date-end"},"\uc804\uc5ed\uc77c"),l.a.createElement("th",{className:"days-past"},"\uc9c0\ub09c\uc2dc\uac04"),l.a.createElement("th",{className:"days-left"},"\ub0a8\uc740\uc2dc\uac04"),l.a.createElement("th",{className:"progressbar"}," "))),l.a.createElement("tbody",null,a)))};!function(e){e.showing="showing",e.closing="closing",e.closed="closed"}(O||(O={}));var B=function(e){var t=e.person,a=e.status,n=e.onTransitionEnd,r=t.daysTotal,c=t.daysLeft,s=t.daysPast,o=t.broken,i=t.rank,m=(r-1/r*Math.pow(s,2))/8,u=d()("title","rank-".concat(i),{broken:o}),f=d()("date","rank-text-".concat(i),{broken:o}),g={textShadow:"white 0 0 ".concat(m,"px")};return l.a.createElement("div",{id:"welcome-layout",className:a,onTransitionEnd:n},l.a.createElement("div",{id:"welcome"},l.a.createElement("div",{className:u,style:g},l.a.createElement("strong",null,"\uc804\uc5ed")),l.a.createElement("div",{className:f},"D-",l.a.createElement("strong",null,c))))},Y=a(5),A=a(4),V=Object(Y.b)({name:"people",initialState:[],reducers:{setPeople:function(e,t){return t.payload}}}),H=Object(Y.b)({name:"now",initialState:(new Date).getTime(),reducers:{setNow:function(e,t){return t.payload},addOneSec:function(e){return e+1e3},setNowDate:function(e,t){return n.setDate(new Date(e),new Date(t.payload)).getTime()}}}),J=Object(Y.b)({name:"setting",initialState:{name:"",date:"",target:""},reducers:{setSetting:function(e,t){return t.payload}}}),R=Object(A.c)({people:V.reducer,now:H.reducer,setting:J.reducer}),_=Object(Y.a)({reducer:R}),G=H.actions,q=G.addOneSec,z=G.setNow,K=G.setNowDate,Q=V.actions.setPeople,W=J.actions.setSetting,X=a(11),Z=a(22),$=a.n(Z);function ee(e){return new Promise((function(t,a){var n,r=e?(n={},Object(X.a)(n,"x-discharge-name",encodeURI(e.name)),Object(X.a)(n,"x-discharge-date",encodeURI(e.date)),n):{};$()({url:"https://home.hyunsub.kim:4284",headers:r}).then((function(e){t(e.data)})).catch((function(e){a(e)}))}))}var te=l.a.memo((function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.setting})),a=Object(c.useState)(""),n=Object(m.a)(a,2),r=n[0],s=n[1],o=t.name,u=t.date,d=t.target,f=Object(c.useCallback)((function(){var t=document.getElementById("x-discharge-name").value,a=document.getElementById("x-discharge-date").value,n=document.getElementById("x-discharge-target-date").value;t&&a?n&&isNaN(new Date(n).getTime())?s("\uc62c\ubc14\ub978 '\ub3cc\uc544\uac00\uace0 \uc2f6\uc740 \ub0a0\uc9dc'\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."):ee({name:t,date:a}).then((function(r){if(0===r.length)s("\ud574\ub2f9 \ub370\uc774\ud130\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");else{if(n)e(K(n));else{var c=r.find((function(e){return e.name===t&&e.join===a})).transfer;e(K(c))}e(Q(r)),e(W({name:t,date:a,target:n})),document.getElementById("cancel-btn").click(),s("")}})).catch((function(e){alert(e.toString())})):s("\uc774\ub984\uacfc \uc785\ub300\uc77c\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")}),[e]);return l.a.createElement("div",{id:"myModal",className:"modal fade",role:"dialog"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7"),l.a.createElement("h4",{className:"modal-title"},"\ubcf8\uc778\uc758 \uc815\ubcf4 \uc785\ub825")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"\uc774 \ub370\uc774\ud130\uc5d0 \ubcf8\uc778\uc774 \uc788\ub294 \uac83 \uac19\uc740 \uacbd\uc6b0 \ubcf8\uc778\uc758 \uc2e4\uba85\uacfc \uc785\ub300\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),l.a.createElement("form",{id:"login-form",action:"/action_page.php"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\uc774\ub984"),l.a.createElement("input",{type:"text",className:"form-control",id:"x-discharge-name",placeholder:"\ud64d\uae38\ub3d9",defaultValue:o})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\uc785\ub300\uc77c"),l.a.createElement("input",{type:"text",className:"form-control",id:"x-discharge-date",placeholder:"2020-01-01",defaultValue:u})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"\ub3cc\uc544\uac00\uace0 \uc2f6\uc740 \ub0a0\uc9dc (Optional)"),l.a.createElement("input",{type:"text",className:"form-control",id:"x-discharge-target-date",placeholder:"2020-01-01",defaultValue:d}))),r&&l.a.createElement("p",{style:{color:"red"}},r)),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:f},"Apply"),l.a.createElement("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",id:"cancel-btn"},"Cancel")))))})),ae=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.people})),a=new Date(Object(i.c)((function(e){return e.now}))),r=n.dayDiff(new Date("2016-11-11"),new Date),s=t.length>0?n.dayDiff(new Date(t[t.length-1].discharge),new Date):n.dayDiff(new Date(Date.now()+1),new Date),o=n.dayDiff(a,new Date),m=Object(c.useCallback)((function(t){var a=parseInt(t.target.value),r=n.addDay(new Date,a);e(z(r.getTime()))}),[e]);return l.a.createElement("input",{type:"range",min:r,max:s,value:o,onChange:m})};a(51);function ne(){var e=Object(i.b)(),t=Object(c.useState)(O.showing),a=Object(m.a)(t,2),r=a[0],s=a[1],o=Object(i.c)((function(e){return e.people})),u=new Date(Object(i.c)((function(e){return e.now}))),g=Object(i.c)((function(e){return e.setting})).name;if(Object(c.useEffect)((function(){ee().then((function(t){e(Q(t)),setInterval((function(){return e(q())}),1e3)}))}),[e]),Object(c.useEffect)((function(){s(O.showing),setTimeout((function(){return s(O.closing)}),1800)}),[o]),0===o.length)return l.a.createElement("div",null);var p=o.filter((function(e){return n.dayDiff(u,new Date(e.discharge))<7})).filter((function(e){return new Date(e.transfer)<u})).map((function(e){return x(e,u)})),E=g?x(o.find((function(e){return e.name===g})),u):p[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{person:E,status:r,onTransitionEnd:function(){return s(O.closed)}}),l.a.createElement(f,{className:d()({blur:r!==O.closed})}),l.a.createElement("div",{className:d()("container-fluid",{blur:r!==O.closed}),style:{marginTop:"60px"}},l.a.createElement(C,{person:E}),l.a.createElement("h1",null,new Date(u).toLocaleString()),l.a.createElement(ae,null),l.a.createElement(L,{me:E,persons:p})),l.a.createElement(te,null))}o.a.render(l.a.createElement(i.a,{store:_},l.a.createElement(l.a.StrictMode,null,l.a.createElement(ne,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.070cec90.chunk.js.map