(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60bb3ba6"],{1170:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("CDrawer",t._g(t._b({attrs:{closeOnClickModal:!t.confirmingData||t.failed||t.finished,closeOnPressEscape:!t.confirmingData||t.failed||t.finished}},"CDrawer",t.$attrs,!1),t.$listeners),[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("transactions.details.title")))]),t.steps?n("div",{staticClass:"scroll"},t._l(t.steps,(function(a,i){var e;return n("div",{key:a.chainId,staticClass:"step"},[null!=a.chainId?[n("img",{staticClass:"step-icon",class:(e={},e[t.getStepStatus(i)]=!0,e),attrs:{src:t.statusIcons[t.getStepStatus(i)]}}),i!==t.steps.length-1?n("div",{staticClass:"step-line"}):t._e(),n("div",{staticClass:"step-title"},[t._v(t._s(t.$formatEnum(a.chainId,{type:"chainName"})))]),n("div",{staticClass:"description"},[t._v(" "+t._s(t.$t("transactions.details."+t.getStepStatus(i),{chainName:t.$formatEnum(a.chainId,{type:"chainName"})}))+" ")]),n("div",{staticClass:"progress"},[n("ElProgress",{staticClass:"progress-bar",attrs:{percentage:100*(a.blocks/a.needBlocks||0),showText:!1}}),n("span",{staticClass:"progress-text"},[t._v(" "+t._s(t.$t("transactions.details.confirmation",{blocks:null!=a.blocks?a.blocks:"-",needBlocks:null!=a.needBlocks?a.needBlocks:"-"}))+" ")])],1),n("CLink",{staticClass:"link",attrs:{href:t.$format(t.getChain(a.chainId).explorerUrl,{txHash:a.hash}),target:"_blank",disabled:!a.hash}},[t._v(" "+t._s(t.$t("transactions.details.hash",{hash:t.$formatLongText(a.hash||"N/A",{headTailLength:16})}))+" ")])]:a.failed?[n("img",{staticClass:"step-icon failed",attrs:{src:s("e65e")}}),i!==t.steps.length-1?n("div",{staticClass:"step-line"}):t._e(),n("div",{staticClass:"failed-title"},[t._v(t._s(t.$t("transactions.details.failedTitle")))]),t.confirmingData?n("CLink",{staticClass:"link",attrs:{to:{name:"transactions"}}},[t._v(" "+t._s(t.$t("transactions.details.gotoHistory"))+" ")]):t._e()]:a.finished?[n("img",{staticClass:"step-icon succeeded",attrs:{src:s("eb39")}}),i!==t.steps.length-1?n("div",{staticClass:"step-line"}):t._e(),n("div",{staticClass:"finished-title"},[t._v(t._s(t.$t("transactions.details.finishedTitle")))]),t.confirmingData?n("CLink",{staticClass:"link",attrs:{to:{name:"transactions"}}},[t._v(" "+t._s(t.$t("transactions.details.gotoHistory"))+" ")]):t._e()]:t._e()],2)})),0):t._e()])])},i=[],e=s("1da1"),r=s("2909"),c=(s("96cf"),s("99af"),s("b00c")),o=s("4245"),l={name:"Details",inheritAttrs:!1,props:{hash:String,confirmingData:Object},computed:{mergedHash:function(){return this.hash||this.confirmingData&&this.confirmingData.transactionHash},transaction:function(){return this.$store.getters.getTransaction(this.mergedHash)},mergedTransaction:function(){return this.transaction||this.confirmingData&&{steps:[{hash:this.confirmingData.transactionHash,chainId:this.confirmingData.fromChainId},{chainId:c["a"].Poly},{chainId:this.confirmingData.toChainId}]}},steps:function(){if(!this.mergedTransaction)return null;var t=this.mergedTransaction.steps;return this.failed&&(t=[].concat(Object(r["a"])(t),[{failed:this.failed}])),this.finished&&(t=[].concat(Object(r["a"])(t),[{finished:this.finished}])),t},failed:function(){return!!this.confirmingData&&this.confirmingData.transactionStatus===c["b"].Failed},finished:function(){return!!this.transaction&&this.transaction.status===c["c"].Finished},closeable:function(){return!this.confirmingData||this.failed||this.finished},statusIcons:function(){return{waiting:s("d577"),pending:s("d889"),succeeded:s("eb39"),failed:s("e65e")}}},watch:{mergedHash:function(){this.getTransaction()}},created:function(){var t=this;this.interval=setInterval((function(){t.getTransaction()}),5e3)},beforeDestroy:function(){clearInterval(this.interval)},methods:{getChain:function(t){return this.$store.getters.getChain(t)},getStepStatus:function(t){if(!this.steps)return null;if(this.failed&&0===t)return"failed";var a=this.steps[t];if(a.blocks>=a.needBlocks)return"succeeded";var s=this.steps[t-1];return!s||s.blocks>=s.needBlocks?"pending":"waiting"},getTransaction:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.mergedHash||!t.$attrs.visible){a.next=12;break}return a.prev=1,a.next=4,t.$store.dispatch("getTransaction",t.mergedHash);case 4:a.next=12;break;case 6:if(a.prev=6,a.t0=a["catch"](1),!(a.t0 instanceof o["c"])){a.next=11;break}if(a.t0.code!==o["c"].CODES.BAD_REQUEST){a.next=11;break}return a.abrupt("return");case 11:throw a.t0;case 12:case"end":return a.stop()}}),a,null,[[1,6]])})))()}}},h=l,d=(s("66bd"),s("2877")),u=Object(d["a"])(h,n,i,!1,null,"42c67f5f",null);a["a"]=u.exports},6273:function(t,a,s){"use strict";s("ee68")},"66bd":function(t,a,s){"use strict";s("f979")},8281:function(t,a,s){t.exports=s.p+"img/arrow-right.666ab870.svg"},eb54:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("Page",{staticClass:"transactions"},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-inner"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("transactions.index.title")))]),t.transactions.items&&t.transactions.items.length>0?n("div",{staticClass:"table-wrapper"},[n("ElTable",{attrs:{data:t.transactions.items}},[n("ElTableColumn",{attrs:{width:"20"}}),n("ElTableColumn",{attrs:{label:t.$t("transactions.index.fromChain"),"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[n("div",{staticClass:"chain"},[n("img",{staticClass:"chain-icon",attrs:{src:t.getChain(s.fromChainId).icon}}),n("span",[t._v(t._s(t.$formatEnum(s.fromChainId,{type:"chainName"})))])]),n("CLink",{staticClass:"hash",attrs:{href:t.$format(t.getChain(s.fromChainId).explorerUrl,{txHash:s.fromTransactionHash}),target:"_blank",disabled:!s.fromTransactionHash}},[t._v(" "+t._s(t.$t("transactions.index.hash",{hash:t.$formatLongText(s.fromTransactionHash||"N/A")}))+" ")])]}}],null,!1,1294843684)}),n("ElTableColumn",{attrs:{label:t.$t("transactions.index.toChain"),"min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[n("div",{staticClass:"chain"},[n("img",{staticClass:"chain-icon",attrs:{src:t.getChain(s.toChainId).icon}}),n("span",[t._v(t._s(t.$formatEnum(s.toChainId,{type:"chainName"})))])]),n("CLink",{staticClass:"hash",attrs:{href:t.$format(t.getChain(s.toChainId).explorerUrl,{txHash:s.toTransactionHash}),target:"_blank",disabled:!s.toTransactionHash}},[t._v(" "+t._s(t.$t("transactions.index.hash",{hash:t.$formatLongText(s.toTransactionHash||"N/A")}))+" ")])]}}],null,!1,642014184)}),n("ElTableColumn",{attrs:{"min-width":"120",label:t.$t("transactions.index.amount")},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[t._v(" "+t._s(t.$formatNumber(s.amount))+" "+t._s(s.tokenBasicName)+" ")]}}],null,!1,223756921)}),n("ElTableColumn",{attrs:{"min-width":"120",label:t.$t("transactions.index.fee")},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[t._v(" "+t._s(t.$formatNumber(s.fee))+" "+t._s(s.txfeeToken.name)+" ")]}}],null,!1,2464817933)}),n("ElTableColumn",{attrs:{label:t.$t("transactions.index.time"),"min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[t._v(" "+t._s(t.$formatTime(s.time))+" ")]}}],null,!1,2426019673)}),n("ElTableColumn",{attrs:{label:t.$t("transactions.index.status"),align:"right"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[n("CButton",{staticClass:"view-details",on:{click:function(a){return t.viewDetails(s)}}},[t._v(" "+t._s(t.$formatEnum(s.status,{type:"transactionStatus"}))+" ")])]}}],null,!1,1645981542)}),n("ElTableColumn",{attrs:{width:"20"}})],1),n("div",{staticClass:"pagination"},[n("CButton",{attrs:{disabled:t.page<=1||null==t.transactions.pageCount},on:{click:function(a){t.page--}}},[n("img",{attrs:{src:s("f6db")}})]),n("span",[t._v(t._s(t.$t("transactions.index.pagination",{page:t.page,pageCount:t.transactions.pageCount||1})))]),n("CButton",{attrs:{disabled:!(t.page<t.transactions.pageCount)},on:{click:function(a){t.page++}}},[n("img",{attrs:{src:s("8281")}})])],1)],1):t._e()])]),n("TransactionDetails",{attrs:{visible:t.transactionDetailsVisible,hash:t.transactionHash},on:{"update:visible":function(a){t.transactionDetailsVisible=a}}})],1)},i=[],e=(s("d81d"),s("4de4"),s("2ef0")),r=s.n(e),c=s("c879"),o=s("1170"),l={name:"Transactions",components:{Page:c["a"],TransactionDetails:o["a"]},data:function(){return{transactionDetailsVisible:!1,transactionHash:null,page:1,pageSize:10}},computed:{addressHexs:function(){return this.$store.getters.wallets.filter((function(t){return t.addressHex})).map((function(t){return t.addressHex}))},getTransactionsParams:function(){return{addressHexs:this.addressHexs,page:this.page,pageSize:this.pageSize,vary:["pageSize"]}},transactions:function(){return this.$store.getters.getTransactions(this.getTransactionsParams)||{}}},watch:{getTransactionsParams:{handler:function(t,a){r.a.isEqual(t,a)||this.$store.dispatch("getTransactions",t)},immediate:!0}},methods:{getChain:function(t){return this.$store.getters.getChain(t)},viewDetails:function(t){this.transactionHash=t.hash,this.transactionDetailsVisible=!0}}},h=l,d=(s("6273"),s("2877")),u=Object(d["a"])(h,n,i,!1,null,"d95ca4b6",null);a["default"]=u.exports},ee68:function(t,a,s){},f6db:function(t,a,s){t.exports=s.p+"img/arrow-left.f343ba91.svg"},f979:function(t,a,s){}}]);