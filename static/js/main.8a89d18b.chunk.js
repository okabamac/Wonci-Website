(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/kheigl.808fdea7.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header.e98023c7.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.dec1445b.jpg"},,function(e,t,a){e.exports=a.p+"static/media/cherish.45cb0d12.jpg"},function(e,t,a){e.exports=a.p+"static/media/pablo(1).c3f5465b.jpg"},function(e,t,a){e.exports=a.p+"static/media/pablo(2).c3620270.jpg"},function(e,t,a){e.exports=a.p+"static/media/pablo(3).00c0d7c3.jpg"},function(e,t,a){e.exports=a.p+"static/media/pablo(4).f97dd396.jpg"},function(e,t,a){e.exports=a.p+"static/media/pablo(5).82190b2a.jpg"},function(e,t,a){e.exports=a.p+"static/media/pablo(6).ee2dd31a.jpg"},function(e,t,a){e.exports=a.p+"static/media/landscape.b4580ad8.jpg"},function(e,t,a){e.exports=a.p+"static/media/ninecakes.d34b534d.png"},function(e,t,a){e.exports=a.p+"static/media/caramel.74dd94ad.jpg"},,,,function(e,t,a){e.exports=a(43)},,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(16),l=a.n(i),s=a(5),r=a(6),c=a(8),m=a(7),p=a(9),f=(a(39),a(44)),d=a(45),u=a(31),h=a(10),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={windowWidth:window.innerWidth,position:null},a.updateWidth=a.updateWidth.bind(Object(h.a)(a)),a.updatePosition=a.updatePosition.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"updateWidth",value:function(e){this.setState({windowWidth:window.innerWidth})}},{key:"updatePosition",value:function(e){var t=window.scrollY;this.setState({position:t})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth),window.addEventListener("scroll",this.updatePosition)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth),window.removeEventListener("scroll",this.updatePosition)}},{key:"render",value:function(){return(0,this.props.children)({windowWidth:this.state.windowWidth,position:this.state.position})}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={on:!1},a.toggle=function(){a.setState({on:!a.state.on})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return(0,this.props.children)({on:this.state.on,toggle:this.toggle})}}]),t}(n.Component),b=a(17),v=a.n(b),w=a(18),x=a.n(w),y=a(46),N=function(){var e={borderBottom:"3px solid #0EB3CE",borderTop:"3px solid #0EB3CE"};return o.a.createElement(E,null,function(t){var a=t.windowWidth,n=t.position;return o.a.createElement("div",null,o.a.createElement(g,null,function(t){var i=t.on,l=t.toggle;return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("div",{style:{width:a>970&&"970px",height:"inherit",position:"relative",margin:"auto"}},o.a.createElement("img",{src:x.a,className:"logo",alt:"logo",style:{display:a<=970&&"none"}}),o.a.createElement("p",{style:{paddingLeft:a<970&&"1em"}},"Bee's Treats"),o.a.createElement("div",{onClick:l,className:"hamburger-icon "+(i&&"close"),id:""+(a>970&&"hide")},o.a.createElement("div",{className:"btn-line line-1"}),o.a.createElement("div",{className:"btn-line line-2"}),o.a.createElement("div",{className:"btn-line line-3"})))),o.a.createElement("div",{className:"Navigation"},o.a.createElement("nav",{style:{width:a>970&&"970px",height:a>970&&"100px"}},o.a.createElement("ul",{className:" "+(a>970?"horizontal "+(n>30&&"show-horizontal"):"vertical"),id:""+(i&&"open")},o.a.createElement("li",{onClick:l},o.a.createElement(y.a,{exact:!0,to:"/Wonci-Website/",activeStyle:e},"Home")),o.a.createElement("li",{onClick:l},o.a.createElement(y.a,{exact:!0,to:"/Wonci-Website/gallery",activeStyle:e},"Gallery")),o.a.createElement("li",{onClick:l},o.a.createElement(y.a,{exact:!0,to:"/Wonci-Website/press",activeStyle:e},"Press")),o.a.createElement("li",{onClick:l},o.a.createElement(y.a,{exact:!0,to:"/Wonci-Website/contact",activeStyle:e},"Contact"))))),o.a.createElement("div",{className:"header-image",style:{top:a<=698&&"57px"}},o.a.createElement("img",{src:v.a,alt:"Dripping chocolate",className:"chocolate",style:{width:a<=970&&"120vw",top:a<=970&&"-15%"}})))}))})},k=(a(12),function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("a",{href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-2x fa-facebook"})),o.a.createElement("a",{href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-2x fa-instagram"})),o.a.createElement("a",{href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-2x fa-twitter"})),o.a.createElement("a",{href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fa fa-2x fa-snapchat"})))}),W=a(20),j=a.n(W),C=a(21),O=a.n(C),I=a(22),S=a.n(I),B=a(23),q=a.n(B),P=a(24),M=a.n(P),D=a(25),L=a.n(D),T=a(26),H=a.n(T),J=a(27),A=a.n(J),_=a(28),Q=a.n(_),V=a(29),z=a.n(V),U=function(){return o.a.createElement("div",null,o.a.createElement(E,null,function(e){var t=e.windowWidth;return o.a.createElement("div",{className:"Container",style:{width:t>970&&"970px"}},o.a.createElement("div",{className:"title"},o.a.createElement("h2",null,"Bee's Treats"),o.a.createElement("p",null,"We speak standard"),o.a.createElement("hr",{className:"hr"})),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"box item1"},o.a.createElement("div",{className:"box a"},o.a.createElement("img",{src:j.a,alt:"Cake"})),o.a.createElement("div",{className:"box b"},o.a.createElement("img",{src:M.a,alt:"Cake"})),o.a.createElement("div",{className:"box c"},o.a.createElement("img",{src:L.a,alt:"Cake"})),o.a.createElement("div",{className:"box d"},o.a.createElement("img",{src:H.a,alt:"Cake"}))),o.a.createElement("div",{className:"box item2 e"}," ",o.a.createElement("img",{src:O.a,alt:"Cake"})),o.a.createElement("div",{className:"box item3 f"},o.a.createElement("img",{src:S.a,alt:"Cake"})),o.a.createElement("div",{className:"item4"},o.a.createElement("div",{className:"box g"},o.a.createElement("img",{src:q.a,alt:"Cake"})),o.a.createElement("div",{className:"box h"},o.a.createElement("img",{src:A.a,alt:"Cake"})),o.a.createElement("div",{className:"box i"},o.a.createElement("img",{src:z.a,alt:"Cake"})),o.a.createElement("div",{className:"box j"},o.a.createElement("img",{src:Q.a,alt:"Cake"})))),o.a.createElement("div",{className:"about",style:{gridTemplateColumns:t<=970&&"1fr",padding:t<=600&&"1.4rem"}},o.a.createElement("div",{className:"vl",style:{borderBottom:t<=970&&"2px solid #664840",borderRight:t<=970&&"none",padding:t<=698&&"2em"}},o.a.createElement("h3",null,"About Us"),o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")),o.a.createElement("div",null,o.a.createElement("h3",null,"We Deliver"),o.a.createElement("div",{className:"services"},o.a.createElement("span",null,o.a.createElement("i",{className:"material-icons"},"flip_to_front")),o.a.createElement("span",{className:"drop-cap"},"Wedding publishing software like Aldus PageMaker including versions of Lorem Ipsum")),o.a.createElement("div",{className:"services"},o.a.createElement("span",null,o.a.createElement("i",{className:"material-icons"},"flip_to_front")),o.a.createElement("span",{className:"drop-cap"},"Birthday publishing software like Aldus PageMaker including versions of Lorem Ipsum")),o.a.createElement("div",{className:"services"},o.a.createElement("span",null,o.a.createElement("i",{className:"material-icons"},"flip_to_front")),o.a.createElement("span",{className:"drop-cap"},"Anniversary publishing software like Aldus PageMaker including versions of Lorem Ipsum")),o.a.createElement("div",{className:"services"},o.a.createElement("span",null,o.a.createElement("i",{className:"material-icons"},"flip_to_front")),o.a.createElement("span",{className:"drop-cap"},"Cupcakes publishing software like Aldus PageMaker including versions of Lorem Ipsum")))),o.a.createElement(k,null))}))},R=function(e){var t=e.image,a={backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 80%"};return o.a.createElement("div",{className:"slide",style:a})},F=function(e){return o.a.createElement("div",{className:"backArrow arrow",onClick:e.goToPrevSlide},o.a.createElement("i",{className:"fa fa-angle-double-left"}))},G=function(e){return o.a.createElement("div",{className:"nextArrow arrow",onClick:e.goToNextSlide},o.a.createElement("i",{class:"fa fa-angle-double-right"}))},K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).goToPrevSlide=function(){0!==a.state.currentIndex&&a.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+a.slideWidth()}})},a.goToNextSlide=function(){if(a.state.currentIndex===a.state.images.length-1)return a.setState({currentIndex:0,translateValue:0});a.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-a.slideWidth()}})},a.slideWidth=function(){return document.querySelector(".slide").clientWidth},a.state={images:["https://images.unsplash.com/photo-1533060297263-15151706e239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1549656163-a46bce0968fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80","https://images.unsplash.com/photo-1517398728403-7869db88bd93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80","https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1459663561442-984db4f334e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80","https://images.unsplash.com/photo-1464941913535-1f37bfb72880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1541779680529-138e9bf8d659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1508736375612-66c03035c629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80","https://images.unsplash.com/photo-1549254800-381c9c6f4ee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1541701381-f6d253df6560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"],currentIndex:0,translateValue:0},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"slider"},o.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.images.map(function(e,t){return o.a.createElement(R,{key:t,image:e})})),o.a.createElement(F,{goToPrevSlide:this.goToPrevSlide}),o.a.createElement(G,{goToNextSlide:this.goToNextSlide}))}}]),t}(n.Component),X=function(){return o.a.createElement("div",null,o.a.createElement(E,null,function(e){var t=e.windowWidth;return o.a.createElement("div",{className:"Container",style:{width:t>970&&"970px"}},o.a.createElement(K,null),o.a.createElement(k,null))}))},Y=a(11),$=a.n(Y),Z=function(){return o.a.createElement("div",null,o.a.createElement(E,null,function(e){var t=e.windowWidth;return o.a.createElement("div",{className:"Container",style:{width:t>970&&"970px"}},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"timeline-item",nameIs:"Julia Roberts"},o.a.createElement("img",{src:$.a,className:"pressImage",alt:"people"}),o.a.createElement("p",null,"lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof")),o.a.createElement("div",{className:"timeline-item",nameIs:"Kathryn Heigl"},o.a.createElement("img",{src:$.a,className:"pressImage",alt:"people"}),o.a.createElement("p",null,"lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof")),o.a.createElement("div",{className:"timeline-item",nameIs:"Ann Hathaway"},o.a.createElement("img",{src:$.a,className:"pressImage",alt:"people"}),o.a.createElement("p",null,"lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof")),o.a.createElement("div",{className:"timeline-item",nameIs:"Tina Fey"},o.a.createElement("img",{src:$.a,className:"pressImage",alt:"people"}),o.a.createElement("p",null,"lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof"))),o.a.createElement(k,null))}))},ee=a(30),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={name:"",email:"",phone:"",event:"",date:"",location:"",message:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(ee.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){alert("Thanks for getting in touch, we will get back to you"),e.preventDefault(),this.setState({name:"",email:"",phone:"",event:"",date:"",location:"",message:""})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E,null,function(t){var a=t.windowWidth;return o.a.createElement("div",{className:"Container",style:{width:a>970&&"970px"}},o.a.createElement("div",{className:"contact",style:{top:a<=698&&"10px"}},o.a.createElement("div",{className:"contact-details"},o.a.createElement("h2",null,"Contact Us "),o.a.createElement("p",null,"No. 12 Green Street, Behind Navy Quarters ",o.a.createElement("br",null),"Kubwa Phase II, Site, Abuja",o.a.createElement("br",null),o.a.createElement("i",{className:"fa fa-phone"}),"+2349059564447, +2349099779460")),o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"name",value:e.state.name,onChange:e.handleChange,required:!0}),o.a.createElement("label",{for:"name"},"Name")),o.a.createElement("div",null,o.a.createElement("input",{type:"email",name:"email",value:e.state.email,onChange:e.handleChange,required:!0}),o.a.createElement("label",{for:"email"},"Email")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"phone",value:e.state.phone,onChange:e.handleChange,required:!0}),o.a.createElement("label",{for:"phone"},"Phone Number")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"event",value:e.state.event,onChange:e.handleChange,required:!0}),o.a.createElement("label",{for:"event"},"Event")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"date",value:e.state.date,onChange:e.handleChange,required:!0}),o.a.createElement("label",{for:"date"},"Date")),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"location",value:e.state.location,onChange:e.handleChange,required:!0}),o.a.createElement("label",{for:"location"},"Location")),o.a.createElement("div",{class:"textarea"},o.a.createElement("textarea",{name:"message",value:e.state.message,onChange:e.handleChange}),o.a.createElement("label",{for:"message"},"Message")),o.a.createElement("div",{className:"btn-div"},o.a.createElement("button",{type:"submit"},"Send")))),o.a.createElement(k,null))}))}}]),t}(n.Component),ae=function(){return o.a.createElement(E,null,function(e){var t=e.windowWidth;return o.a.createElement("div",{className:"Container",style:{width:t>970&&"970px"}},o.a.createElement("h2",null,"Uh oh! This page doesn't seem to exist"))})},ne=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(d.a,null,o.a.createElement(u.a,{exact:!0,path:"/Wonci-Website/",component:U}),o.a.createElement(u.a,{exact:!0,path:"/Wonci-Website/gallery",component:X}),o.a.createElement(u.a,{exact:!0,path:"/Wonci-Website/contact",component:te}),o.a.createElement(u.a,{exact:!0,path:"/Wonci-Website/press",component:Z}),o.a.createElement(u.a,{exact:!0,path:"/Wonci-Website*",component:ae}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[33,1,2]]]);
//# sourceMappingURL=main.8a89d18b.chunk.js.map