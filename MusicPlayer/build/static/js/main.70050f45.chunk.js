(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{27:function(t,n,e){},36:function(t,n,e){"use strict";e.r(n);var r,a,i,c,o,s,d,l,u,b,p,h,j,g,f,m,x,O,v,w,y,k,S,C,z=e(1),I=e.n(z),T=e(18),A=e.n(T),P=e(2),L=e(8),M=e(5),R=e(10),D=e(6),E=e.n(D),F=e(3),N=(e(27),e(9)),B=e(7),G=e(0),J={cursor:"pointer"},U=F.a.div(r||(r=Object(P.a)(["\n\tmin-height: 20vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))),W=F.a.div(a||(a=Object(P.a)(["\n\tmargin-top: 5vh;\n\twidth: 50%;\n\tdisplay: flex;\n\t@media screen and (max-width: 768px) {\n\t\twidth: 90%;\n\t}\n"]))),X=F.a.div(i||(i=Object(P.a)(["\n\tbackground: lightblue;\n\twidth: 100%;\n\theight: 1rem;\n\tposition: relative;\n\tborder-radius: 1rem;\n\toverflow: hidden;\n\tbackground: linear-gradient(to right, ",", ",");\n"])),(function(t){return t.currentSong.color[0]}),(function(t){return t.currentSong.color[1]})),_=F.a.div(c||(c=Object(P.a)(["\n\tbackground: rgb(204, 204, 204);\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\ttransform: translateX(",");\n\tpointer-events: none;\n"])),(function(t){return Math.round(100*t.songInfo.currentTime/t.songInfo.duration)+"%"})),K=F.a.input(o||(o=Object(P.a)(["\n\twidth: 100%;\n\t-webkit-appearance: none;\n\tbackground: transparent;\n\tcursor: pointer;\n\t/* padding-top: 1rem;\n\tpadding-bottom: 1rem; */\n\t&:focus {\n\t\toutline: none;\n\t\t-webkit-appearance: none;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\t&::-webkit-slider-thumb {\n\t\t\theight: 48px;\n\t\t\twidth: 48px;\n\t\t}\n\t}\n\t&::-webkit-slider-thumb {\n\t\t-webkit-appearance: none;\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\tbackground: transparent;\n\t\tborder: none;\n\t}\n\t&::-moz-range-thumb {\n\t\t-webkit-appearance: none;\n\t\tbackground: transparent;\n\t\tborder: none;\n\t}\n\t&::-ms-thumb {\n\t\t-webkit-appearance: none;\n\t\tbackground: transparent;\n\t\tborder: none;\n\t}\n\t&::-moz-range-thumb {\n\t\t-webkit-appearance: none;\n\t\tbackground: transparent;\n\t\tborder: none;\n\t}\n"]))),V=F.a.p(s||(s=Object(P.a)(["\n\tpadding: 0 1rem 0 1rem;\n\tuser-select: none;\n"]))),q=F.a.div(d||(d=Object(P.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1rem;\n\twidth: 30%;\n\t@media screen and (max-width: 768px) {\n\t\twidth: 60%;\n\t}\n"]))),H=function(t){var n=t.currentSong,e=t.setCurrentSong,r=t.isPlaying,a=t.setIsPlaying,i=t.audioRef,c=t.songInfo,o=t.setSongInfo,s=t.songs,d=t.setSongs,l=function(t){var n=Math.floor(t/60),e=("0"+Math.floor(t%60)).slice(-2);return"".concat(n,":").concat(e)},u=function(){var t=Object(L.a)(E.a.mark((function t(a){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=s.findIndex((function(t){return t.id===n.id})),"skip-forward"!==a){t.next=7;break}return t.next=4,e(s[(c+1)%s.length]);case 4:b(s[(c+1)%s.length]),t.next=17;break;case 7:if("skip-back"!==a){t.next=17;break}if((c-1)%s.length!==-1){t.next=14;break}return t.next=11,e(s[s.length-1]);case 11:b(s[s.length-1]),t.next=17;break;case 14:return t.next=16,e(s[(c-1)%s.length]);case 16:b(s[(c-1)%s.length]);case 17:r&&i.current.play();case 18:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),b=function(t){var n=s.map((function(n){return n.id===t.id?Object(M.a)(Object(M.a)({},n),{},{active:!0}):Object(M.a)(Object(M.a)({},n),{},{active:!1})}));d(n)};return Object(G.jsxs)(U,{children:[Object(G.jsxs)(W,{children:[Object(G.jsx)(V,{children:l(c.currentTime||0)}),Object(G.jsxs)(X,{currentSong:n,children:[Object(G.jsx)(K,{onChange:function(t){i.current.currentTime=t.target.value,o(Object(M.a)(Object(M.a)({},c),{},{currentTime:t.target.value}))},min:0,max:c.duration||0,value:c.currentTime,type:"range"}),Object(G.jsx)(_,{songInfo:c})]}),Object(G.jsx)(V,{children:l(c.duration||0)})]}),Object(G.jsxs)(q,{children:[Object(G.jsx)(N.a,{onClick:function(){return u("skip-back")},className:"skip-back",icon:B.a,size:"2x",style:J}),Object(G.jsx)(N.a,{onClick:function(){r?(i.current.pause(),a(!r)):(i.current.play(),a(!r))},className:"play",icon:r?B.d:B.e,size:"2x",style:J}),Object(G.jsx)(N.a,{onClick:function(){return u("skip-forward")},className:"skip-forward",icon:B.b,size:"2x",style:J})]})]})},Q=F.a.div(l||(l=Object(P.a)(["\n\tmargin-top: 10vh;\n\tmin-height: 50vh;\n\tmax-height: 60vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]))),Y=F.a.img(u||(u=Object(P.a)(["\n\twidth: 20%;\n\tborder-radius: 50%;\n\t@media screen and (max-width: 768px) {\n\t\twidth: 50%;\n\t}\n"]))),Z=F.a.h2(b||(b=Object(P.a)(["\n\tpadding: 3rem 1rem 1rem 1rem;\n"]))),$=F.a.h3(p||(p=Object(P.a)(["\n\tfont-size: 1rem;\n"]))),tt=function(t){var n=t.currentSong;return Object(G.jsxs)(Q,{children:[Object(G.jsx)(Y,{src:n.cover,alt:n.name}),Object(G.jsx)(Z,{children:n.name}),Object(G.jsx)($,{children:n.artist})]})},nt=F.a.div(h||(h=Object(P.a)(["\n\tpadding: 0 2rem 0 2rem;\n\theight: 100px;\n\twidth: 100%;\n\tdisplay: flex;\n\ttransition: all 0.3s ease;\n\tbackground-color: ",";\n\t&:hover {\n\t\tbackground-color: lightblue;\n\t\ttransition: all 0.3s ease;\n\t}\n\t&.active {\n\t\tbackground-color: pink;\n\t}\n"])),(function(t){return t.isActive?"pink":"white"})),et=F.a.div(j||(j=Object(P.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n"]))),rt=F.a.img(g||(g=Object(P.a)(["\n\tmargin: 20px 0;\n\theight: 60px;\n"]))),at=F.a.h3(f||(f=Object(P.a)(["\n\tpadding-left: 1rem;\n\tfont-size: 1rem;\n"]))),it=F.a.h4(m||(m=Object(P.a)(["\n\tpadding-left: 1rem;\n\tfont-size: 0.7rem;\n"]))),ct=function(t){var n=t.song,e=t.setCurrentSong,r=t.audioRef,a=t.isPlaying,i=t.songs,c=t.setSongs,o=function(){var t=Object(L.a)(E.a.mark((function t(){var o,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(n);case 2:o=n,s=i.map((function(t){return t.id===o.id?Object(M.a)(Object(M.a)({},t),{},{active:!0}):Object(M.a)(Object(M.a)({},t),{},{active:!1})})),c(s),a&&r.current.play();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(G.jsxs)(nt,{onClick:o,isActive:n.active,children:[Object(G.jsx)(rt,{src:n.cover,alt:n.name}),Object(G.jsxs)(et,{children:[Object(G.jsx)(at,{children:n.name}),Object(G.jsx)(it,{children:n.artist})]})]})},ot=F.a.div(x||(x=Object(P.a)(["\n\tposition: fixed;\n\tz-index: 9;\n\ttop: 0;\n\tleft: 0;\n\twidth: 20rem;\n\theight: 100%;\n\tbackground-color: white;\n\tbox-shadow: 2px 2px 50px rgb(204, 204, 204);\n\tuser-select: none;\n\toverflow: scroll;\n\ttransform: translateX(",");\n\ttransition: all 0.5s ease;\n\topacity: ",";\n\tscrollbar-width: thin;\n\tscrollbar-color: rgba(155, 155, 155, 0.5) tranparent;\n\t&::-webkit-scrollbar {\n\t\twidth: 5px;\n\t}\n\t&::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: rgba(155, 155, 155, 0.5);\n\t\tborder-radius: 20px;\n\t\tborder: transparent;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\twidth: 100%;\n\t\tz-index: 9;\n\t}\n"])),(function(t){return t.libraryStatus?"0%":"-100%"}),(function(t){return t.libraryStatus?"100":"0"})),st=F.a.div(O||(O=Object(P.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: white;\n"]))),dt=F.a.h2(v||(v=Object(P.a)(["\n\tpadding: 2rem;\n"]))),lt=function(t){var n=t.songs,e=(t.currentSong,t.setCurrentSong),r=t.audioRef,a=t.isPlaying,i=t.setSongs,c=t.libraryStatus;return Object(G.jsxs)(ot,{libraryStatus:c,children:[Object(G.jsx)(dt,{children:"Library"}),Object(G.jsx)(st,{children:n.map((function(t){return Object(G.jsx)(ct,{song:t,songs:n,setCurrentSong:e,audioRef:r,isPlaying:a,setSongs:i},t.id)}))})]})},ut=F.a.div(w||(w=Object(P.a)(["\n\tmin-height: 10vh;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\t@media screen and (max-width: 768px) {\n\t\tposition: fixed;\n\t\tz-index: 10;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t}\n"]))),bt=F.a.h1(y||(y=Object(P.a)(["\n\ttransition: all 0.5s ease;\n\n\t@media screen and (max-width: 768px) {\n\t\tvisibility: ",";\n\t\topacity: ",";\n\t\ttransition: all 0.5s ease;\n\t}\n"])),(function(t){return t.libraryStatus?"hidden":"visible"}),(function(t){return t.libraryStatus?"0":"100"})),pt=F.a.button(k||(k=Object(P.a)(["\n\tbackground: transparent;\n\tborder: none;\n\tcursor: pointer;\n\tborder: 2px solid rgb(65, 65, 65);\n\tpadding: 0.5rem;\n\ttransition: all 0.3s ease;\n\t&:hover {\n\t\tbackground: rgb(65, 65, 65);\n\t\tcolor: white;\n\t}\n"]))),ht=function(t){var n=t.libraryStatus,e=t.setLibraryStatus;return Object(G.jsxs)(ut,{children:[Object(G.jsx)(bt,{libraryStatus:n,children:"Now playing"}),Object(G.jsxs)(pt,{onClick:function(){return e(!n)},children:["Library",Object(G.jsx)(N.a,{icon:B.c})]})]})},jt=F.a.div(S||(S=Object(P.a)(["\n\tuser-select: none;\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n\tjustify-content: flex-end;\n\tz-index: 12;\n\tbottom: 5px;\n\tright: 5px;\n\tcolor: rgb(155, 155, 155);\n\tfont-size: 0.75rem;\n"]))),gt=F.a.a(C||(C=Object(P.a)(["\n\tcolor: rgb(155, 155, 155);\n"]))),ft=function(){return Object(G.jsxs)(jt,{children:[Object(G.jsx)(gt,{href:"https://www.wilsonle.me",target:"_blank",children:"Made by Wilson"}),Object(G.jsx)("br",{}),Object(G.jsx)(gt,{href:"https://github.com/WilsonLe/react-music-player",target:"_blank",children:"Github repository"})]})},mt=e(38);var xt,Ot=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(mt.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(mt.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(mt.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(mt.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(mt.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(mt.a)(),active:!1}]},vt=F.a.div(xt||(xt=Object(P.a)(["\n\ttransition: all 0.5s ease;\n\tmargin-left: ",";\n\t@media screen and (max-width: 768px) {\n\t\tmargin-left: 0;\n\t}\n"])),(function(t){return t.libraryStatus?"20rem":"0"})),wt=function(){var t=Object(z.useRef)(null),n=Object(z.useState)(Ot()),e=Object(R.a)(n,2),r=e[0],a=e[1],i=Object(z.useState)(r[0]),c=Object(R.a)(i,2),o=c[0],s=c[1],d=Object(z.useState)(!1),l=Object(R.a)(d,2),u=l[0],b=l[1],p=Object(z.useState)(!1),h=Object(R.a)(p,2),j=h[0],g=h[1],f=Object(z.useState)({currentTime:0,duration:0}),m=Object(R.a)(f,2),x=m[0],O=m[1],v=function(t){var n=t.target.currentTime,e=t.target.duration;O(Object(M.a)(Object(M.a)({},x),{},{currentTime:n,duration:e}))},w=function(){var n=Object(L.a)(E.a.mark((function n(){var e,i,c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.findIndex((function(t){return t.id===o.id})),i=r[(e+1)%r.length],n.next=4,s(i);case 4:c=r.map((function(t){return t.id===i.id?Object(M.a)(Object(M.a)({},t),{},{active:!0}):Object(M.a)(Object(M.a)({},t),{},{active:!1})})),a(c),u&&t.current.play();case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(G.jsxs)(vt,{libraryStatus:j,children:[Object(G.jsx)(ht,{libraryStatus:j,setLibraryStatus:g}),Object(G.jsx)(tt,{currentSong:o}),Object(G.jsx)(H,{isPlaying:u,setIsPlaying:b,currentSong:o,setCurrentSong:s,audioRef:t,songInfo:x,setSongInfo:O,songs:r,setSongs:a}),Object(G.jsx)(lt,{songs:r,setCurrentSong:s,audioRef:t,isPlaying:u,setSongs:a,libraryStatus:j}),Object(G.jsx)(ft,{}),Object(G.jsx)("audio",{onLoadedMetadata:v,onTimeUpdate:v,onEnded:w,ref:t,src:o.audio})]})},yt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,39)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),a(t),i(t),c(t)}))};A.a.render(Object(G.jsx)(I.a.StrictMode,{children:Object(G.jsx)(wt,{})}),document.getElementById("root")),yt()}},[[36,1,2]]]);
//# sourceMappingURL=main.70050f45.chunk.js.map