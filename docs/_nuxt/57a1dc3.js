(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,e,n){var content=n(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("04818b40",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(303)},331:function(t,e,n){(e=n(60)(!1)).push([t.i,".profile{list-style:none;display:flex;align-items:center;background-color:#f8f8f8;padding-bottom:14px}.avatar,.links,.name{margin-top:15px}.name{font-size:27px}.button{padding:10px 30px;border:2px solid transparent;border-radius:4px;color:#fff;margin-right:30px}.social-media-button{display:flex;justify-content:flex-start;align-items:center}.twitter{background-color:#00acee}.github{background-color:#24292e}.linkedin{background-color:#0e76a8}.avatar{width:200px;height:200px;border-radius:50%;margin-right:30px}.left-main{display:flex;justify-content:space-between}.main{margin-right:20px}.text{font-size:17px;margin-top:10px}.profile{justify-content:space-between}.markdown{display:flex;justify-content:center;align-items:center}.qrcode{margin-right:24px}@media (max-width:1098px){.button{padding:10px;margin:0 5px}.social-media-button{justify-content:center}.profile{display:flex}.left-main,.profile{align-items:center;justify-content:center;flex-wrap:wrap}.qrcode{margin-right:32px}}",""]),t.exports=e},332:function(t,e,n){"use strict";n.r(e);n(8),n(17),n(6),n(16),n(21),n(51);var r=n(20),o=n(335),c=n(336),l=new(n.n(c).a)({toc:!0,sanitize:!0}),d={components:{Timeline:o.Timeline},props:{slug:{type:String,default:""},mentor:{type:Boolean,default:!1},name:{type:String,default:""},twitter:{type:String,default:""},github:{type:String,default:""},linkedin:{type:String,default:""},avatar:{type:String,default:""},interests:{type:String,default:""},goals:{type:String,default:""}},data:function(){return{markdown:""}},computed:{twitterHandle:function(){return this.twitter.split("twitter.com/")[1]}},created:function(){this.github.length&&this.renderMarkdown()},methods:{renderMarkdown:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,html;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.github.replace(/\/$/gi,"").split("/").pop(),e.next=3,fetch("https://raw.githubusercontent.com/".concat(n,"/").concat(n,"/master/README.md")).then((function(t){return 200===t.status?t.text():""}));case 3:return r=e.sent,e.next=6,l.toMarkup(r);case 6:o=e.sent,html=o.html,t.markdown=html;case 9:case"end":return e.stop()}}),e)})))()}}},m=(n(330),n(52)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("ul",{staticClass:"profile"},[n("div",{staticClass:"left-main"},[t.avatar.length?n("li",[n("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:t.name}})]):t._e(),t._v(" "),n("div",{staticClass:"main"},[t.name?n("li",{staticClass:"name"},[t._v("\n            "+t._s(t.name)+"\n          ")]):t._e(),t._v(" "),n("hr"),t._v(" "),t.interests&&t.interests.length?n("li",{staticClass:"text"},[n("b",[t._v("Interests:")]),t._v(" "+t._s(t.interests)+"\n          ")]):t._e(),t._v(" "),t.goals&&t.goals.length?n("li",{staticClass:"text"},[n("b",[t._v("Goals:")]),t._v(" "+t._s(t.goals)+"\n          ")]):t._e(),t._v(" "),n("div",{staticClass:"social-media-button"},[t.twitter.length?n("li",{staticClass:"links"},[n("a",{attrs:{href:t.twitter,target:"_blank"}},[n("button",{staticClass:"button twitter"},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"],color:"white"}}),t._v("\n                  Twitter\n                ")],1)])]):t._e(),t._v(" "),t.github.length?n("li",{staticClass:"links"},[n("a",{attrs:{href:t.github,target:"_blank"}},[n("button",{staticClass:"button github"},[n("font-awesome-icon",{attrs:{icon:["fab","github"],color:"white"}}),t._v("\n                  GitHub\n                ")],1)])]):t._e(),t._v(" "),t.linkedin.length?n("li",{staticClass:"links"},[n("a",{attrs:{href:t.linkedin,target:"_blank"}},[n("button",{staticClass:"button linkedin"},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"],color:"white"}}),t._v("\n                  LinkedIn\n                ")],1)])]):t._e()])])]),t._v(" "),n("li",{staticClass:"text"},[n("a",{attrs:{href:"https://findmentor.network/"+(t.mentor?"mentor/":"mentee/")+t.slug,target:"_blank",rel:"noopener noreferrer"}},[n("qrcode",{staticClass:"qrcode",attrs:{value:"https://findmentor.network/"+(t.mentor?"mentor/":"mentee/")+t.slug,options:{width:200}}})],1)])]),t._v(" "),t.markdown.length?n("h2",[t._v("\n      GitHub\n      "),n("hr")]):t._e(),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.markdown)}}),t._v(" "),n("hr"),t._v(" "),t.twitter.length?n("Timeline",{attrs:{id:t.twitterHandle,"source-type":"profile",options:{tweetLimit:"5"}}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},724:function(t,e,n){"use strict";n.r(e);n(8),n(15);var r=n(39),o=(n(51),n(20)),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,c=t.error,e.next=3,n("mentors").where({slug:{$eq:o.slug}}).fetch();case 3:if(l=e.sent,d=Object(r.a)(l,1),m=d[0]){e.next=8;break}return e.abrupt("return",c({statusCode:404,message:"Not found"}));case 8:return e.abrupt("return",{doc:m});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.doc.name,meta:[{hid:"description",name:"description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"twitter:title",name:"twitter:title",content:this.doc.name},{hid:"twitter:description",name:"twitter:description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"twitter:image",name:"twitter:image",content:this.doc.avatar},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.doc.name},{hid:"og:title",property:"og:title",content:this.doc.name},{hid:"og:description",property:"og:description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"og:image",property:"og:image",content:this.doc.avatar},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.doc.avatar},{hid:"og:image:alt",property:"og:image:alt",content:this.doc.name}]}}},l=n(52),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Person",{attrs:{slug:this.doc.slug,mentor:!0,name:this.doc.name,twitter:this.doc.twitter_handle,linkedin:this.doc.linkedin,github:this.doc.github,avatar:this.doc.avatar}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Person:n(332).default})}}]);