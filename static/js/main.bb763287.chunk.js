(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(51)},28:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),c=t.n(o),i=(t(28),t(3)),s=t.n(i),l=t(6),m=t(17),u=t(18),h=t(21),v=t(19),d=t(2),f=t(22),p=(t(9),t(7)),E=t.n(p),b=function(e){var a,t,n;return void 0!==e.movieData?(a=e.movieData.movieName,t=e.movieData.audienceScode,n=e.movieData.tomatometerScore):(a="",t="",n=""),r.a.createElement("div",{className:"movieBox"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Movie name"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("th",null,"Tomatometer Score"),r.a.createElement("td",null,t)),r.a.createElement("tr",null,r.a.createElement("th",null,"Audience Score: "),r.a.createElement("td",null,n)))))},y=t(20),w=t.n(y),D=(t(50),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(v.a)(a).call(this,e))).state={moviesData:{}},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(f.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"handleChange",value:function(){var e=Object(l.a)(s.a.mark(function e(a){var t,n,r,o,c,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.value,e.next=3,E.a.get("https://s3.amazonaws.com/innovid-services-data/rtpool2019/data/movieDB.json");case 3:n=e.sent,r=n.data,o=w.a.go(t,r,{key:"movieName"}),c=o.map(function(e){return e.target}),i=r.filter(function(e){return c.includes(e.movieName)}),o[0]?this.setState({moviesData:i}):this.setState({moviesData:r});case 9:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"fetchData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var a,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://s3.amazonaws.com/innovid-services-data/rtpool2019/data/movieDB.json");case 2:a=e.sent,t=a.data,this.setState({moviesData:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"mainContainer"},r.a.createElement("div",{className:"searchBarContainer"}),r.a.createElement("div",{className:"searchBarContainer"},r.a.createElement("div",{className:"emptySearchBarBox"}),r.a.createElement("div",{className:"searchBarBox"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",className:"searchTerm",onChange:this.handleChange,placeholder:"What movie are you looking for?"}),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement("i",{className:"fa fa-search"})))),r.a.createElement("div",{className:"emptySearchBarBox"})),r.a.createElement("div",{className:"filmsContainer"},Array.isArray(this.state.moviesData)&&this.state.moviesData.map(function(e,a){return r.a.createElement(b,{movieData:e,key:a})})))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.bb763287.chunk.js.map