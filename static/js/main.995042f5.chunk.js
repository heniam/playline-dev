(this["webpackJsonpdev-test"]=this["webpackJsonpdev-test"]||[]).push([[0],{23:function(e,s,a){},24:function(e,s,a){},26:function(e,s,a){},29:function(e,s,a){},31:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a(1),l=a.n(c),n=a(11),r=a.n(n);a(23),a(24);var i=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)("header",{className:"App-header",children:Object(t.jsx)("img",{src:"/playline-dev/assets/logo/logo@3x.png",className:"App-logo",alt:"logo"})})})},j=a(12),o=a(9),m=a.n(o),d=a(13),h=a(14),p=a(15),b=a(17),x=a(16),O=a(10),v=a(6),u=a(33),y=a(34),g=a(35),N=(a(26),function(e){Object(b.a)(a,e);var s=Object(x.a)(a);function a(){var e;Object(h.a)(this,a);for(var t=arguments.length,c=new Array(t),l=0;l<t;l++)c[l]=arguments[l];return(e=s.call.apply(s,[this].concat(c))).state={loading:!0,people:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/","https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json",e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json");case 4:return s=e.sent,e.next=7,s.json();case 7:a=e.sent,console.log(a),this.setState({people:a.players,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;function s(e){switch(e.last_name){case"James":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});case"Davis":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});case"Gordon":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Aaron Gordon -PLP59D7092156491v2.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});case"Siakam":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});case"Leonard":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});case"Lowry":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Kyle-Lowry-PLP59D70927DF104.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});case"Russell":return Object(t.jsxs)("ul",{className:"avatars",children:[" ",Object(t.jsxs)("li",{className:"avatars__item",children:[Object(t.jsx)("img",{src:"/playline-dev/assets/headshots/Dangelo Russell PLP59D709255D994v4.png",className:"avatars__img",alt:" "}),Object(t.jsx)("p",{className:"player-names",children:e.last_name})]})]});default:return Object(t.jsx)("p",{children:"xx"})}}return Object(t.jsx)("div",{className:"card-centered",children:Object(t.jsx)("div",{className:"card-position",children:Object(t.jsx)(u.a,{children:Object(t.jsx)(y.a,{md:12,xs:12,children:Object(t.jsxs)(v.a,{className:"card-style",children:[Object(t.jsx)(v.a.Img,Object(j.a)({className:"prog-bar",width:"10px",src:"/playline-dev/assets/icons/progress.svg",alt:"Progress Bar"},"alt"," ")),Object(t.jsxs)(v.a.Body,{children:[Object(t.jsx)(v.a.Title,{className:"card-title ",children:Object(t.jsx)("h1",{children:"Your playline is set !"})}),Object(t.jsx)(v.a.Subtitle,{className:"card-subtitle ",children:Object(t.jsx)("h3",{children:"come back @ 7:30PM to track it live!"})}),Object(t.jsx)("hr",{}),Object(t.jsx)(v.a.Text,{className:"card-text mb-4",children:"Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area"}),Object(t.jsx)("ul",{className:"avatars",children:this.state.people.map((function(a,c){return Object(t.jsx)("li",{className:"avatars__item",children:Object(t.jsx)("li",{children:!e.state.loading&&e.state.people.length&&a.last_name?s(a):Object(t.jsx)("p",{children:" "})},c)})}))}),Object(t.jsx)("ul",{className:"points",children:this.state.people.map((function(s,a){return Object(t.jsxs)("li",{className:"list-points",children:[!e.state.loading&&e.state.people.length&&s.points&&s.last_name?Object(t.jsxs)("span",{className:"pts ",children:[" ",s.points," "]}):Object(t.jsx)("span",{className:"pts ",children:" -- "}),Object(t.jsx)("p",{className:"player-points",children:"PTS"})]},a)}))}),Object(t.jsxs)("div",{className:"bttn",children:[Object(t.jsxs)(O.a,{className:"btn-style mr-4 d-flex justify-content-center",variant:"outline-secondary",children:[Object(t.jsx)(g.a,{className:" ml-1 mr-2 ",src:"/playline-dev/assets/icons/notify-me.svg"}),"Notify me "]}),Object(t.jsxs)(O.a,{className:"btn-style",variant:"outline-secondary",children:[Object(t.jsx)(g.a,{className:"ml-1 mr-2 ",src:"/playline-dev/assets/icons/money-bag.svg"}),"deposit"]})]}),Object(t.jsx)("hr",{}),Object(t.jsx)(v.a.Text,{className:"card-text-foot",children:"Download the app"}),Object(t.jsxs)("div",{className:"app-store",children:[Object(t.jsx)(g.a,{className:" ml-1 mr-4 ",src:"/playline-dev/assets/icons/ios-app.svg"}),Object(t.jsx)(g.a,{className:" ml-1 mr-2 ",src:"/playline-dev/assets/icons/google-play.svg"})]})]})]})})})})})}}]),a}(c.Component));a(29);var _=function(){return Object(t.jsx)("div",{children:Object(t.jsxs)("footer",{className:"App-footer",children:[Object(t.jsxs)("div",{children:[" ",Object(t.jsx)("a",{href:"https://www.playline.com/about/",children:"About"})]}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://www.playline.com/about/",children:"PLB Bonus"})}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://www.playline.com/contact-us/",children:"Contact"})}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://www.playline.com/security/",children:"Security"})}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://www.playline.com/responsible-play/",children:"Responsible Play"})}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://www.playline.com/privacy-policy-2/",children:"Privacy"})}),Object(t.jsx)("div",{children:Object(t.jsx)("a",{href:"https://www.playline.com/terms-of-use/",children:"Terms"})})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,l=s.getLCP,n=s.getTTFB;a(e),t(e),c(e),l(e),n(e)}))};a(30);r.a.render(Object(t.jsxs)(l.a.StrictMode,{children:[Object(t.jsx)(i,{}),Object(t.jsx)(N,{}),Object(t.jsx)(_,{})]}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.995042f5.chunk.js.map