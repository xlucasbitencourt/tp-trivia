(this["webpackJsonptrivia-react-redux"]=this["webpackJsonptrivia-react-redux"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},31:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},47:function(e,t){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(11),i=a(13),l=(a(39),a(2)),u=a(15),m=a.n(u),p=a(19),d=a(20),g=a(3),b=a(4),h=a(6),f=a(5),v=function(e){return{type:"GET_NAME",payload:e}},y=function(e){return{type:"GET_EMAIL",payload:e}},E=function(e){return{type:"GET_SCORE",payload:e}},k=function(e){return{type:"GET_ASSERTION",payload:e}},w=a(26),O=a.n(w),j=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={nome:"",email:"",btnDisabled:!0},e.onHandle=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(d.a)({},r,n),(function(){e.activateButton()}))},e.activateButton=function(){var t=e.state,a=t.nome,n=t.email;a.length>1&&n.length>1?e.setState({btnDisabled:!1}):e.setState({btnDisabled:!0})},e.submitForm=function(t){t.preventDefault(),e.funcFetch()},e.funcFetch=Object(p.a)(m.a.mark((function t(){var a,n,r,c,o,s,i,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.nome,r=a.email,"https://opentdb.com/api_token.php?command=request",t.prev=2,t.next=5,fetch("https://opentdb.com/api_token.php?command=request");case 5:return c=t.sent,t.next=8,c.json();case 8:o=t.sent,s=e.props,i=s.dispatch,l=s.history,i(v(n)),i(y(r)),localStorage.setItem("token",o.token),l.push("/game"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])}))),e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nome,a=e.email,n=e.btnDisabled;return r.a.createElement("div",{className:"login"},r.a.createElement("header",{className:"login-header"},r.a.createElement("img",{src:O.a,className:"login-logo",alt:"logo"}),r.a.createElement("p",null,"YOUR TURN!")),r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("input",{name:"nome",value:t,onChange:this.onHandle,"data-testid":"input-player-name",type:"text",placeholder:"Name"}),r.a.createElement("br",null),r.a.createElement("input",{name:"email",value:a,onChange:this.onHandle,"data-testid":"input-gravatar-email",type:"text",placeholder:"E-mail"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"button-login",type:"submit","data-testid":"btn-play",disabled:n},"Play")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/ranking","data-testid":"btn-settings"},"Ranking"))}}]),a}(n.Component),S=Object(s.b)()(j),x=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.category,a=e.correctAnswer,n=e.answers,c=e.question,o=e.answerF,s=e.answered;return r.a.createElement("main",{className:"question"},r.a.createElement("h1",{"data-testid":"question-category"},t.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&deg/g,"\xb0").replace(/&rsquo;/g,"\xb4").replace(/&uuml;/g,"\xfc").replace(/&eacute;/g,"\xe9").replace(/&ouml;/g,"\xf6")),r.a.createElement("h2",{"data-testid":"question-text"},c.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp/g,"&").replace(/&deg/g,"\xb0").replace(/&rsquo;/g,"\xb4").replace(/&uuml;/g,"\xfc").replace(/&eacute;/g,"\xe9").replace(/&ouml;/g,"\xf6")),r.a.createElement("div",{"data-testid":"answer-options",className:"question-options"},n.map((function(e,t){return e!==a?r.a.createElement("button",{key:e,type:"button","data-testid":"wrong-answer-".concat(t),onClick:o,className:s?"question-wrong":void 0,disabled:s},e.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp/g,"&").replace(/&deg/g,"\xb0").replace(/&rsquo;/g,"\xb4").replace(/&uuml;/g,"\xfc").replace(/&eacute;/g,"\xe9").replace(/&ouml;/g,"\xf6")):r.a.createElement("button",{key:e,type:"button","data-testid":"correct-answer",onClick:o,className:s?"question-right":void 0,disabled:s},e.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp/g,"&").replace(/&deg/g,"\xb0").replace(/&rsquo;/g,"\xb4").replace(/&uuml;/g,"\xfc").replace(/&eacute;/g,"\xe9").replace(/&ouml;/g,"\xf6"))}))))}}]),a}(n.Component),N=a(28),q=a.n(N),T=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={emailString:""},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.email,t=q()(e).toString();this.setState({emailString:t})}},{key:"render",value:function(){var e=this.state.emailString,t=this.props,a=t.name,n=t.score;return r.a.createElement("header",{className:"game-header"},r.a.createElement("img",{src:"".concat("https://www.gravatar.com/avatar/").concat(e),alt:"imagem jogador","data-testid":"header-profile-picture"}),r.a.createElement("span",{"data-testid":"header-player-name"},a),r.a.createElement("span",null,"Score: "),r.a.createElement("span",{"data-testid":"header-score"},n))}}]),a}(n.Component),A=Object(s.b)((function(e){var t=e.player;return{name:t.name,score:t.score,email:t.gravatarEmail}}))(T),C=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={questions:[],category:"",correctAnswer:"",difficulty:"",answers:[],question:"",index:0,answered:!1,timer:30,next:!1,showTimer:!1},e.counter=function(){e.timeLeft=setInterval((function(){e.setState((function(e){return{timer:e.timer-1}}))}),1e3)},e.getQuestions=Object(p.a)(m.a.mark((function t(){var a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=localStorage.getItem("token"),5,n="https://opentdb.com/api.php?amount=".concat(5,"&token=").concat(a),t.next=5,fetch(n);case 5:return r=t.sent,t.next=8,r.json();case 8:c=t.sent,e.getTrivia(c);case 10:case"end":return t.stop()}}),t)}))),e.getTrivia=function(t){var a=t.results,n=t.response_code,r=e.props.history;3===n?(localStorage.setItem("token",""),r.push("/")):(e.setState({questions:a,category:a[0].category,correctAnswer:a[0].correct_answer,difficulty:a[0].difficulty,answers:a[0].incorrect_answers.concat(a[0].correct_answer).sort((function(){return Math.random()-.5})),question:a[0].question,index:0,showTimer:!0}),e.counter())},e.answer=function(t){"correct-answer"===t.target.dataset.testid&&e.setScore(),clearInterval(e.timeLeft),e.setState({timer:30,answered:!0,next:!0,showTimer:!1})},e.timesUp=function(){clearInterval(e.timeLeft),e.setState({timer:30,answered:!0,next:!0,showTimer:!1})},e.nextQuestion=function(){var t=e.state,a=t.questions,n=t.index,r=e.props.history,c=n+1;4===n?r.push("/feedback"):(e.setState({category:a[c].category,correctAnswer:a[c].correct_answer,answers:a[c].incorrect_answers.concat(a[c].correct_answer).sort((function(){return Math.random()-.5})),question:a[c].question,index:c,answered:!1,next:!1,showTimer:!0}),e.counter())},e.setScore=function(){var t=e.state,a=t.timer,n=t.difficulty,r=e.props,c=r.dispatch,o=r.score,s=r.assertions,i=0;switch(n){case"easy":i=1;break;case"medium":i=2;break;case"hard":i=3;break;default:i=0}var l=s+1;c(E(o+(10+a*i))),c(k(l))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"componentDidUpdate",value:function(){0===this.state.timer&&this.timesUp()}},{key:"render",value:function(){var e=this.state,t=e.category,a=e.correctAnswer,n=e.answers,c=e.question,o=e.answered,s=e.next,i=e.index,l=e.timer,u=e.showTimer;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"container"},r.a.createElement(x,{category:t,correctAnswer:a,answers:n,question:c,nextQuestion:this.nextQuestion,answerF:this.answer,answered:o}),s&&r.a.createElement("button",{className:"button-login next",type:"button","data-testid":"btn-next",onClick:this.nextQuestion},4===i?"Feedback":"Next"),u&&r.a.createElement("div",{className:"timer-container"},r.a.createElement("p",{className:"timer"},"Time remaining:"),r.a.createElement("p",{className:"timer"},l))))}}]),a}(n.Component),_=Object(s.b)((function(e){var t=e.player;return{name:t.name,assertions:t.assertions,score:t.score,email:t.gravatarEmail}}))(C),I=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{"data-testid":"settings-title"},"Settings")}}]),a}(n.Component),R=a(30),D=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).message=function(){return e.props.assertions<3?"Could be better...":"Well Done!"},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.assertions,a=e.score,n=e.history;return r.a.createElement("div",{className:"results"},r.a.createElement("p",{"data-testid":"feedback-text"},this.message()),r.a.createElement("span",null,"Score: "),r.a.createElement("span",{"data-testid":"feedback-total-score"},a),r.a.createElement("br",null),r.a.createElement("span",null,"Assertions: "),r.a.createElement("span",{"data-testid":"feedback-total-question"},t),r.a.createElement("br",null),r.a.createElement(i.b,{className:"button-feedback",to:"/ranking","data-testid":"btn-ranking"},"Ranking"),r.a.createElement("br",null),r.a.createElement("button",{className:"button-login play-again",onClick:function(){return n.push("/")},type:"button","data-testid":"btn-play-again"},"Play Again"))}}]),a}(n.Component),G=Object(s.b)((function(e){var t=e.player;return{assertions:t.assertions,score:t.score}}))(D),M=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).firstPlay=function(){var t=e.props,a=[{name:t.name,score:t.score}];localStorage.setItem("ranking",JSON.stringify(a))},e.otherPlay=function(){var t=e.props,a=t.name,n=t.score,r=JSON.parse(localStorage.getItem("ranking")),c={name:a,score:n},o=[].concat(Object(R.a)(r),[c]);localStorage.setItem("ranking",JSON.stringify(o))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("ranking")?this.otherPlay():this.firstPlay()}},{key:"componentWillUnmount",value:function(){var e;(0,this.props.dispatch)({type:"GET_RESET",payload:e})}},{key:"render",value:function(){var e=this.props.history;return r.a.createElement("div",{"data-testid":"feedback-text"},r.a.createElement(A,null),r.a.createElement(G,{history:e}))}}]),a}(n.Component),F=Object(s.b)((function(e){var t=e.player;return{name:t.name,score:t.score}}))(M),P=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ranking:[],first:!1},e.clearRanking=function(){localStorage.removeItem("ranking"),e.setState({first:!0})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.getItem("ranking")){var e=JSON.parse(localStorage.getItem("ranking")).sort((function(e,t){return t.score-e.score}));this.setState({ranking:e,first:!1})}else this.setState({first:!0})}},{key:"render",value:function(){var e=this.state,t=e.ranking,a=e.first,n=this.props.history;return r.a.createElement("div",{className:"ranking"},r.a.createElement("p",{"data-testid":"ranking-title"},"Ranking"),!a&&r.a.createElement("div",{className:"player-container"},t.map((function(e,t){return r.a.createElement("div",{className:"player",key:t},r.a.createElement("span",{"data-testid":"player-name-".concat(t)},e.name),r.a.createElement("span",{"data-testid":"player-score-".concat(t)},e.score))}))),r.a.createElement("br",null),r.a.createElement("button",{className:"button-login play-again",onClick:function(){return n.push("/")},type:"button","data-testid":"btn-go-home"},"Play Again"),r.a.createElement("button",{type:"button",className:"button-login clear-ranking",onClick:this.clearRanking},"Clear ranking"))}}]),a}(n.Component);var J=function(){var e=r.a.createElement("a",{href:"https://lucasbitencourt.com.br/"},"Lucas Bitencourt");return r.a.createElement("div",{className:"main-header"},r.a.createElement("p",null,"Projeto feito por"," ",e))};function L(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:S}),r.a.createElement(l.a,{path:"/game",exact:!0,component:_}),r.a.createElement(l.a,{path:"/settings",exact:!0,component:I}),r.a.createElement(l.a,{path:"/feedback",exact:!0,component:F}),r.a.createElement(l.a,{path:"/ranking",exact:!0,component:P})))}var Q=a(16),U=a(29),B=a(12),H={name:"Anonimo",assertions:0,score:0,gravatarEmail:"anonimo@email.com"},W=Object(Q.combineReducers)({player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NAME":return Object(B.a)(Object(B.a)({},e),{},{name:t.payload});case"GET_EMAIL":return Object(B.a)(Object(B.a)({},e),{},{gravatarEmail:t.payload});case"GET_SCORE":return Object(B.a)(Object(B.a)({},e),{},{score:t.payload});case"GET_ASSERTION":return Object(B.a)(Object(B.a)({},e),{},{assertions:t.payload});case"GET_RESET":return H;default:return e}}}),Y=Object(Q.legacy_createStore)(W,Object(U.composeWithDevTools)());window.Cypress&&(window.store=Y);var z=Y;o.a.render(r.a.createElement(i.a,{basename:"/tp-trivia"},r.a.createElement(s.a,{store:z},r.a.createElement(L,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.594b5193.chunk.js.map