(this["webpackJsonpgallery-app"]=this["webpackJsonpgallery-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(24),s=a.n(c),i=(a(22),a(31),a(6)),l=a(7),u=a(12),o=a(11),j=a(47),d=a(48),b=(a(32),a(0)),h=function(){return Object(b.jsx)("div",{className:"backgr_wrapper",children:Object(b.jsx)("div",{className:"background",children:" "})})},g=a(46),p=(a(34),function(e){var t=e.subHeaderTxt;return Object(b.jsxs)(g.a,{md:12,children:[Object(b.jsx)("h1",{children:"Fotogaleria"}),Object(b.jsxs)("h2",{className:"sub_header",children:[" ",t," "]}),Object(b.jsx)("div",{className:"sub_header_divider"})]})}),m=a(26),x=a.p+"static/media/no_photo_yet.1ed03f96.jpeg",O=(a(35),function(){return Object(b.jsx)("div",{className:"lds-css ng-scope",children:Object(b.jsxs)("div",{className:"lds-spin",children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})})]})})}),v=(a(36),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",path:"",imgFullPath:"",srcImg:x,loading:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.path,n=e.imgFullPath;this.setState({name:t,path:a,loading:!1}),"undefined"!==typeof n&&this.setState({srcImg:"http://api.programator.sk/images/300x200/".concat(n),loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.path,n=e.srcImg,r=e.loading,c=r?Object(b.jsx)(O,{}):null,s=r?null:Object(b.jsx)(f,{name:t,srcImg:n,path:a});return Object(b.jsxs)(g.a,{lg:3,md:4,sm:6,children:[c,s]})}}]),a}(n.Component)),f=function(e){var t=e.name,a=e.srcImg,n=e.path;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m.a,{to:"/".concat(n,"/"),children:Object(b.jsxs)("div",{className:"category_item",children:[Object(b.jsx)("div",{className:"categ_img",children:Object(b.jsx)("img",{src:a,alt:"img"})}),Object(b.jsxs)("div",{className:"categ_title",children:[" ",t," "]})]})})})},A=(a(42),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(g.a,{lg:3,md:4,sm:6,children:Object(b.jsxs)("div",{className:"category_item__add_categ",children:[Object(b.jsx)("a",{className:"categ_img__add_categ",href:"/#",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADs0lEQVRYhc2ZSWyNURTHf30UoUWUhFAJGiUhJFiIVbGi6UYMxUpIalyQYCOmhSGxMg+xMtauKTusxAJR0oSKkigxizmippz0fM117v1ev9fXfvySt+i53znn33fvPd+95xXU1tbSCTLANKACmAqMBYYD/TTUF+AZ8AC4CVwFbgC/ck3V07NkR0SsARYDI7M82RsYBEwE5qmtBTgNHASeeh4xZMJmjxLgAPAI2NyBuDhK1bdZRZbEPPcXSQTOB+4Dq4Fe3mjuSIxVGnNBR97ZpljG9gM13kgbn4FLwBWgAXgMfNCxAcAoYLKu07lAkfEfDJzX8bXADy8DELdJ+qpzpTfSNs17gDMqMgkirlqneHTg+XpgIfDVDoSmuAdwNiDuG7AJGA8cy0Ec+uxx9d2ksVwqNWePJAJlWquMTb616cBe4LvnkZzvGmO6xnSp0o2YVaAs2pXG1gjM0HXWVTRozEYTr8ZuHFdgSeA/eAjMAl50obgIiTlbc7gcBoaEBO5wB3SdyH/zygsd5rf5JOGlljF3TUqB32kFSuFdYQJuB2538tvJhQbN5bIsehlEAmXuC50HpNrvS0FcxD7NGVEY7YWMfpYaB9lprV6Y7qNVc7osEW3RqaTUGfisL/W0OW1qq2iaJgJnGiEX9biUNl80t0uFCJxijFf+gbi43FNFYLkx3vHc0uOuyVQuJ5ZhxtgcIydpbUv6fIFn8Yv2MPkGi43xo+eWHjZ3ceiw8F8hAj8ZQf3/oUCb+5MIfG6MYzy3Ngo6+OT7fCj3cxHYZIyTPLf0sLmbROAtY7SFO01s7puZQHGc61zA00RyzjH5rmb0xt/iGIv0RZ021abkyeX+RkbbEaeMmI3m+NXdFOqNz0U0/Yrq4BFzvJLdtCFFgevNDm7Vo3/7gfUJcMI4bdWLd3cjObaZHCdV0193ki3AG+fvPsAFc0/JRpI6ZxmiOfo49neqBSvwrXauXMqAy8BQL3T+DNUKUmYiSd/mdUgg2u44amzSQrvWxdM9WWNOMPajqqGd0GFBulh1xib9lOu60/LpcPXS1sf1QI+mLjCDQYE/tSbVG7usk13APWB5jsW8r/qI726z5tBc1aEOV1x3i4Ttt3pt70btt/c6NtC03yoD7beII51pv7ksUqGDvZH8kIqxTrtasYSm2HIOGKdt23w6WxES45C24rKKI4cedVSCRusaavGe6Bh5t4qvvDFkI7o1N5Z8f4aQ45FcW+VniBHOOpP1KYLkZwg5zkm9y/1nCOAPkYjBTPAW5/4AAAAASUVORK5CYII=",alt:"img"})}),Object(b.jsx)("div",{className:"categ_title__add_categ",children:"pridat kategoriu"})]})})}}]),a}(n.Component)),y=a(5),k=a.n(y),N=a(15),I=function(){function e(){var t=this;Object(i.a)(this,e),this.getResource=function(){var e=Object(N.a)(k.a.mark((function e(a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiUrlBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("!!!!!! COULD NOT FETCH ".concat(t._apiUrlBase,". Error status: ").concat(n.status," !!!!!!"));case 5:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllGalleries=Object(N.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/gallery");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getCertainGallery=function(){var e=Object(N.a)(k.a.mark((function e(a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/gallery/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformGallrey(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getImageExample=Object(N.a)(k.a.mark((function e(){var a,n,r,c,s=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:300,n=s.length>1&&void 0!==s[1]?s[1]:200,r=s.length>2&&void 0!==s[2]?s[2]:"DFauta/1.jpg",e.next=5,t.getResource("/images/".concat(a,"x").concat(n,"/").concat(r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),this._extractId=function(e){return e.url.match(/\/([0-9]*)$/)[1]},this._transformGallrey=function(e){return{path:t.isSet(e.path),name:t.isSet(e.name)}},this._apiUrlBase="http://api.programator.sk"}return Object(l.a)(e,[{key:"isSet",value:function(e){return e||"no data :("}}]),e}(),S=(a(44),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).galleryService=new I,e.state={galleries:null},e.renderItems=function(e){return e.map((function(e){var t=e.name,a=e.path,n=("undefined"!==typeof e.image&&e.image||{}).fullpath;return Object(b.jsx)(v,{name:t,path:a,imgFullPath:n})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.galleryService.getAllGalleries().then((function(t){e.setState({galleries:t.galleries}),console.log(e.state.galleries)}))}},{key:"render",value:function(){var e=this.state.galleries;if(!e)return Object(b.jsx)("span",{children:" Loading !!! "});var t=this.renderItems(e);return Object(b.jsx)("section",{className:"section",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(j.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p,{subHeaderTxt:"kategorie"}),t,Object(b.jsx)(A,{})]})})]})})}}]),a}(n.Component));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7b5d4475.chunk.js.map