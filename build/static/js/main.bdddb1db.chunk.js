(this.webpackJsonpai_news=this.webpackJsonpai_news||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),c=(a(87),a(36)),o=(a(88),a(170)),s=a(162),m=a(163),d=a(164),u=a(165),p=a(166),f=a(167),g=a(160),h=Object(g.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBotton:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),b=a(73),x=a.n(b),y=function(e){var t=e.article,a=t.description,r=t.publishedAt,l=t.source,g=t.title,b=t.url,y=t.urlToImage,w=e.i,v=e.activearticle,E=h(),j=Object(n.useState)([]),N=Object(c.a)(j,2),C=N[0],O=N[1];return Object(n.useEffect)((function(){O((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;w===v&&C[v]&&(e=C[v],window.scroll(0,e.current.offsetTop-50))}),[w,v,C]),i.a.createElement(o.a,{ref:C[w],className:x()(E.card,v===w?E.activeCard:null)},i.a.createElement(s.a,{href:b,target:"_blank"},i.a.createElement(m.a,{className:E.media,image:y||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"}),i.a.createElement("div",{className:E.details},i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"h2"},l.name)),i.a.createElement(d.a,{gutterBottom:!0,variant:"h5",className:E.title},g),i.a.createElement(u.a,null,i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(p.a,{className:E.cardActions},i.a.createElement(f.a,{size:"small",color:"primary"},"Learn More"),i.a.createElement(d.a,{variant:"h5",color:"textSecondary"},w+1)))},w=a(169),v=a(168),E=Object(g.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"60vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),j=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],N=function(e){var t=e.articles,a=e.activearticle,n=E();return t.length?i.a.createElement(w.a,{in:!0},i.a.createElement(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(v.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(y,{article:e,i:t,activearticle:a}))})),";")):i.a.createElement(w.a,{in:!0},i.a.createElement(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},j.map((function(e){return i.a.createElement(v.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(d.a,{variant:"h5"},e.title),e.info?i.a.createElement(d.a,{variant:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2],":"),i.a.createElement("br",null),e.info):null,i.a.createElement(d.a,{variant:"h6"},"Try Saying: ",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))},C=a(42),O=a.n(C),S=a(25),k=Object(g.a)((function(e){return{footer:Object(S.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(S.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(S.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logocontainer:Object(S.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),logo:Object(S.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),A=a(75),B=a.n(A);var D=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(-1),o=Object(c.a)(l,2),s=o[0],m=o[1],d=k();return Object(n.useEffect)((function(){O()({key:"ebc59ff0899a394837d4670ede254dc82e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)r(a),m(-1);else if("highlight"===t)m((function(e){return e+1}));else if("open"===t){console.log(n);var i=n.length>2?B()(n,{fuzzy:!0}):n,l=a[i-1];i>20?O()().playText("PLease try again"):l&&(window.open(l.url,"_blank"),O()().playText("Opening...."))}}})}),[]),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:d.logocontainer},i.a.createElement("img",{src:"https://alan.app/voice/images/previews/preview.jpg",className:d.logo,alt:"logo"})),i.a.createElement(N,{articles:a,activearticle:s}))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root"))},82:function(e,t,a){e.exports=a(146)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.bdddb1db.chunk.js.map