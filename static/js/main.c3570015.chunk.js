(this["webpackJsonpreact-click-game"]=this["webpackJsonpreact-click-game"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"image":"/images/Aragorn.jpg","key":"1","isActive":false},{"image":"/images/Arwen.jpg","key":"2","isActive":false},{"image":"/images/Balrog.jpg","key":"3","isActive":false},{"image":"/images/Boromir.jpg","key":"4","isActive":false},{"image":"/images/Legolas.jpg","key":"5","isActive":false},{"image":"/images/Eomer.jpg","key":"6","isActive":false},{"image":"/images/Eowyn.jpg","key":"7","isActive":false},{"image":"/images/Frodo.jpg","key":"8","isActive":false},{"image":"/images/Galadriel.jpg","key":"9","isActive":false},{"image":"/images/Gandalf.jpg","key":"10","isActive":false},{"image":"/images/Gimli.jpg","key":"11","isActive":false},{"image":"/images/gollum.jpg","key":"12","isActive":false}]')},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(8),s=t.n(r),c=t(1),l=t(2),m=t(4),o=t(3),g=t(5);t(15);var u=function(e){return n.a.createElement("div",{className:"card",onClick:e.clickShuffle},n.a.createElement("img",{src:e.image,alt:e.image}))},f=(t(16),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"cards-container"},this.props.list.map((function(a){return n.a.createElement(u,{className:"card",key:a.key,image:a.image,clickShuffle:function(){return e.props.action(a.isActive,a.key)}})})))}}]),a}(i.Component));t(17);var p=function(e){return n.a.createElement("div",{className:"guide-container"},n.a.createElement("header",null,"Lord of the Rings ",n.a.createElement("br",null),"Memory Challenge"),n.a.createElement("section",{className:"instructions"},n.a.createElement("p",null,"Click on an image until all 12 images are clicked, but don't click on any more than once!")),n.a.createElement("section",{className:"score"},n.a.createElement("h3",null,"Images clicked: ",n.a.createElement("span",null,e.score))))},y=t(9),k=t(6),v=t.n(k),A=(t(19),function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={imagesArray:y,score:0},t.handleClick=function(e,a){if(e){var i=t.state.imagesArray.map((function(e){return e.isActive=!1,e}));t.setState({imagesArray:i,score:0})}else{var n=t.state.imagesArray.map((function(e){return e.key===a?(e.isActive=!0,e):e}));t.setState({imagesArray:n,score:t.state.score+1})}t.setState({imagesArray:v()(t.state.imagesArray)})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({imagesArray:v()(this.state.imagesArray)})}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(p,{score:this.state.score}),n.a.createElement(f,{action:this.handleClick,list:this.state.imagesArray}))}}]),a}(i.Component));var h=function(){return n.a.createElement(A,null)};s.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c3570015.chunk.js.map