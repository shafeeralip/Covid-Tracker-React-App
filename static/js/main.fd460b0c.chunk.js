(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),n=c.n(s),r=c(22),i=c.n(r),d=(c(51),c.p,c(52),c(53),c(13)),j=c(14),l=c(17),h=c(16),b=c(85),o=c(84),O=c(81),x=c(19),u=c.n(x),m=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={stateData:{},currentData:[]},a}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.covid19india.org/state_district_wise.json").then((function(t){e.setState({stateData:t.data})})),u.a.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then((function(t){console.log("helloe",t.data.regionData),e.setState({currentData:t.data.regionData})}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.stateData);t.splice(0,1);return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)(o.a,{children:t.map((function(t,c){var s=e.state.stateData[t].districtData,n=(Object.keys(s),0),r=0,i=0,d=0,j=[];for(var l in s){n+=s[l].active,r+=s[l].confirmed,i+=s[l].deceased,d+=s[l].recovered;var h=s[l];h.district_name=l,j.push(h)}return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(b.a.Header,{children:Object(a.jsxs)(o.a.Toggle,{as:O.a,variant:"primary",eventKey:t,className:"float-left",children:[t," ",Object(a.jsxs)("span",{className:"btn-dark",children:["Total Cases - ",r]}),"  ",Object(a.jsxs)("span",{className:"btn-warning",children:[" Active  - ",n]})," ",Object(a.jsxs)("span",{className:"btn-success",children:["Recoverd - ",d]})," ",Object(a.jsxs)("span",{className:"btn-danger",children:["Deaths - ",i]})]})}),Object(a.jsx)(o.a.Collapse,{eventKey:t,children:Object(a.jsx)(b.a.Body,{children:Object(a.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"District"}),Object(a.jsx)("th",{children:"Confirmed"}),Object(a.jsx)("th",{children:"Active"}),Object(a.jsx)("th",{children:"Recoverd"}),Object(a.jsx)("th",{children:"Deaths"})]})}),Object(a.jsxs)("tbody",{children:[j.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.district_name}),Object(a.jsx)("td",{children:e.confirmed}),Object(a.jsx)("td",{children:e.active}),Object(a.jsx)("td",{children:e.recovered}),Object(a.jsx)("td",{children:e.deceased})]})})),Object(a.jsx)("tr",{})]})]})})})]})}))})})})}}]),c}(s.Component),v=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={data:{}},a}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then((function(t){console.log("helloe",t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("img",{src:"https://www.countryflags.io/in/flat/64.png",alt:""}),Object(a.jsx)("h2",{children:"INDIA"})]}),Object(a.jsx)("div",{className:"col-md-12 pt-5",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsx)(b.a,{className:"badge badge-info",style:{width:"18rem"},children:Object(a.jsxs)(b.a.Body,{className:"text-center",children:[Object(a.jsx)(b.a.Title,{children:"TOTAL CASES"}),Object(a.jsx)("h3",{children:this.state.data.totalCases}),Object(a.jsx)(b.a.Text,{})]})})}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsx)(b.a,{className:"badge badge-warning",style:{width:"18rem"},children:Object(a.jsxs)(b.a.Body,{className:"text-center",children:[Object(a.jsx)(b.a.Title,{children:"ACTIVE CASES"}),Object(a.jsx)("h3",{children:this.state.data.activeCases}),Object(a.jsxs)(b.a.Text,{children:["[ TODAY : ",this.state.data.activeCasesNew," ]"]})]})})}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsx)(b.a,{className:"badge badge-success",style:{width:"18rem"},children:Object(a.jsxs)(b.a.Body,{className:"text-center",children:[Object(a.jsx)(b.a.Title,{children:"RECOVERD"}),Object(a.jsx)("h3",{children:this.state.data.recovered}),Object(a.jsx)(b.a.Text,{}),"[ TODAY : ",this.state.data.recoveredNew," ]"]})})}),Object(a.jsx)("div",{className:"col-md-3",children:Object(a.jsx)(b.a,{className:"badge badge-danger",style:{width:"18rem"},children:Object(a.jsxs)(b.a.Body,{className:"text-center",children:[Object(a.jsx)(b.a.Title,{children:"DEATHS"}),Object(a.jsx)("h3",{children:this.state.data.deaths}),Object(a.jsxs)(b.a.Text,{children:["[ TODAY : ",this.state.data.deathsNew," ]"]})]})})})]})}),Object(a.jsx)("div",{className:"col-md-12 pt-5",children:Object(a.jsx)(m,{})})]})}}]),c}(s.Component),p=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={data:[]},a}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://corona.lmao.ninja/v2/countries").then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Country"}),Object(a.jsx)("th",{children:"Today Cases"}),Object(a.jsx)("th",{children:"Total Cases"}),Object(a.jsx)("th",{children:"Recoverd"}),Object(a.jsx)("th",{children:"Death"})]})}),Object(a.jsx)("tbody",{children:this.state.data.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[e.country,Object(a.jsx)("img",{src:e.countryInfo.flag,className:"pl-3",style:{width:"50px"},alt:""})]}),Object(a.jsx)("td",{children:e.todayCases}),Object(a.jsx)("td",{children:e.cases}),Object(a.jsx)("td",{children:e.recovered}),Object(a.jsx)("td",{children:e.deaths})]})}))})]})})})}}]),c}(s.Component),f=c(23),N=c(6),g=c(83),y=c(82),D=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={},a}return Object(j.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(g.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(g.a.Brand,{href:"#home",children:"COVID-19 "}),Object(a.jsxs)(y.a,{className:"mr-auto",children:[Object(a.jsx)(f.b,{className:"nav-link",to:"/",children:"Home"}),Object(a.jsx)(f.b,{className:"nav-link",to:"/india",children:"INDIA"}),Object(a.jsx)(f.b,{className:"nav-link",to:"/world",children:"WORLD"})]})]})})}}]),c}(s.Component);var T=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(D,{}),Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{exact:!0,path:"/",children:Object(a.jsx)(v,{})}),Object(a.jsx)(N.a,{path:"/india",children:Object(a.jsx)(v,{})}),Object(a.jsx)(N.a,{path:"/world",children:Object(a.jsx)(p,{})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),w()}},[[79,1,2]]]);
//# sourceMappingURL=main.fd460b0c.chunk.js.map