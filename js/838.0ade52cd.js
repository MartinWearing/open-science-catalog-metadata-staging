"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[838,58],{7101:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},[t.thumbnail&&t.thumbnailShown?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia},on:{error:t.hideBrokenImg}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),a("b-card-text",[a("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("formatTemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("formatTimestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?a("b-card-text",[t._l(t.fileFormats,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("formatMediaType")(e)))])})),t.isDeprecated?a("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},s=[],r=a(629),n=a(7179),o=a(9898),l=a(5834),c=a(5108),m={name:"Item",components:{StacLink:n["default"]},filters:{formatMediaType:l.formatMediaType,formatTemporalExtent:l.formatTemporalExtent,formatTimestamp:l.formatTimestamp},props:{item:{type:Object,required:!0}},data(){return{thumbnailShown:!1}},computed:{...(0,r.rn)(["crossOriginMedia"]),...(0,r.Se)(["getStac"]),data(){return this.item instanceof o.Z?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,a)=>a.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof o.Z&&Boolean(this.data.properties.deprecated)}},methods:{hideBrokenImg(t){c.log(`Hiding item thumbnail for ${t.srcElement.src} as it can't be loaded.`),this.thumbnailShown=null},load(t){t&&null!==this.thumbnailShown&&(this.thumbnailShown=!0),this.item instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=m,h=a(1001),d=(0,h.Z)(p,i,s,!1,null,null,null),u=d.exports},4119:function(t,e,a){a.d(e,{Z:function(){return w}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"items mb-4"},[a("h2",[a("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():a("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():a("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?a("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[a("b-icon-search"),t._v(" Filter ")],1):t._e(),a("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?a("ItemFilter",t._b({attrs:{stac:t.stac,value:t.filters,collectionOnly:!0},on:{input:t.emitFilter}},"ItemFilter",t.filterComponentProps,!1)):t._e()],1)]:t._e(),a("section",{staticClass:"list"},[t.loading?a("Loading",{attrs:{fill:"",top:""}}):t._e(),t.chunkedItems.length>0?a("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(t){return a("Item",{key:t.href,attrs:{item:t}})})),1):a("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v("No items found for the given filters.")]:[t._v("No items available for this collection.")]],2)],1),t.showPagination?a("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},s=[],r=a(7101),n=a(4830),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{class:t.classes},[a("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),a("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),a("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},l=[],c={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},m=c,p=a(1001),h=(0,p.Z)(m,o,l,!1,null,null,null),d=h.exports,u=a(1688),f=a(8019),g=a(8661),b=a(9898),v=a(2510),I={name:"Items",components:{BCollapse:u.k,BIconSearch:f.Lln,Item:r["default"],ItemFilter:()=>Promise.all([a.e(353),a.e(449),a.e(981),a.e(204),a.e(58)]).then(a.bind(a,8204)),Loading:n.Z,Pagination:d,SortButtons:()=>a.e(418).then(a.bind(a,7418))},mixins:[(0,v.ZP)(!0)],props:{items:{type:Array,required:!0},loading:{type:Boolean,default:!1},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===g.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>b.Z.getDisplayTitle(t).localeCompare(b.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&g.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},y=I,_=(0,p.Z)(y,i,s,!1,null,"169072a6",null),w=_.exports},9936:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search d-flex flex-column"},[t.root?t.supportsSearch?a("b-row",[a("b-col",{staticClass:"left"},[a("ItemFilter",t._b({attrs:{stac:t.root,title:"",value:t.filters},on:{input:t.setFilters}},"ItemFilter",t.filterComponentProps,!1))],1),a("b-col",{staticClass:"right"},[null===t.loading?a("b-alert",{attrs:{variant:"info",show:""}},[t._v("Please modify the search criteria.")]):!0===t.loading?a("Loading"):0===t.apiItems.length?a("b-alert",{attrs:{variant:"warning",show:""}},[t._v("No items found for the given filters.")]):[a("div",{attrs:{id:"search-map"}},[a("Map",{attrs:{stac:t.root,stacLayerData:t.itemCollection,scrollWheelZoom:""},on:{mapClicked:t.mapClicked,viewChanged:t.resetSelectedItem}})],1),a("Items",{attrs:{stac:t.root,items:t.apiItems,api:!0,allowFilter:!1,pagination:t.itemPages,loading:t.apiItemsLoading},on:{paginate:t.paginateItems}})]],2)],1):a("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Item Search is not supported by the API.")]):a("Loading",{attrs:{stretch:""}}),t.selectedItem?a("b-popover",{key:t.selectedItem.key,attrs:{placement:"left",triggers:"manual",show:null!==t.selectedItem,target:t.selectedItem.target,boundary:"search-map",container:"search-map"}},[a("section",{staticClass:"items"},[a("b-card-group",{staticClass:"count-1",attrs:{columns:""}},[a("Item",{attrs:{item:t.selectedItem.item}})],1)],1),a("div",{staticClass:"text-center"},[a("b-button",{attrs:{target:"_blank",variant:"danger"},on:{click:t.resetSelectedItem}},[t._v(" Close ")])],1)]):t._e()],1)},s=[],r=a(4119),n=a(629),o=a(8661),l=a(2510),c=a(8204),m=a(4830),p=a(4505);const h="Search";var d={name:"Search",components:{BPopover:p.x,ItemFilter:c["default"],Item:()=>Promise.resolve().then(a.bind(a,7101)),Items:r.Z,Loading:m.Z,Map:()=>a.e(190).then(a.bind(a,3190))},mixins:[(0,l.ZP)(!1)],props:{loadRoot:{type:String,default:null}},data(){return{loading:null,filters:{},selectedItem:null}},computed:{...(0,n.rn)(["apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter","apiItemsLoading"]),...(0,n.Se)(["root","searchLink","supportsSearch","fromBrowserPath"]),itemCollection(){return{type:"FeatureCollection",features:this.apiItems,links:[]}},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&(t.first=o.ZP.addFiltersToLink(this.apiItemsLink,this.apiItemsFilter)),t}},watch:{supportsSearch:{immediate:!0,handler(){this.supportsSearch&&this.showPage()}}},created(){if(this.loadRoot&&!this.root){let t=this.fromBrowserPath(this.loadRoot);this.$store.commit("config",{catalogUrl:t})}},methods:{async setFilters(t,e=!1){this.filters=t,e?(this.$store.commit("resetApiItems"),this.loading=null):await this.filterItems(t)},showPage(){this.$store.commit("showPage",{title:h}),this.$store.commit("setApiItemsLink",this.searchLink)},async paginateItems(t){try{let e=await this.$store.dispatch("loadApiItems",{link:t,show:!0});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,"Sorry, loading the list of STAC Items failed.")}},async filterItems(t){this.loading=!0;try{let e=await this.$store.dispatch("loadApiItems",{link:this.searchLink,show:!0,filters:t});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,"Sorry, loading a filtered list of STAC Items failed.")}finally{this.loading=!1}},handleResponse(t){t&&this.$store.commit("showPage",{title:h,url:t.config.url})},resetSelectedItem(){this.selectedItem&&this.selectedItem.oldStyle&&this.selectedItem.layer.setStyle(this.selectedItem.oldStyle),this.selectedItem=null},mapClicked(t,e){this.resetSelectedItem(),"Feature"===t.type&&(this.selectedItem={item:t.data,target:e.originalEvent.srcElement,layer:e.layer,key:e.layer._leaflet_id},e.layer&&(this.selectedItem.oldStyle=Object.assign({},e.layer.options),e.layer.setStyle(Object.assign({},e.layer.options,{color:"#dc3545"}))))}}},u=d,f=a(1001),g=(0,f.Z)(u,i,s,!1,null,"33f3b186",null),b=g.exports},2510:function(t,e,a){var i=a(629);const s="http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core",r="http://www.opengis.net/spec/cql2/1.*/conf/cql2-text",n="http://www.opengis.net/spec/cql2/1.*/conf/cql2-json",o="https://api.stacspec.org/v1.*/item-search#sort",l="https://api.stacspec.org/v1.*/ogcapi-features#sort",c="https://api.stacspec.org/v1.*/item-search#filter*",m="http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter";e["ZP"]=t=>({computed:{...(0,i.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(s)},canFilterCql(){return this.supportsConformance(t?m:c)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(r)&&t.push("Text"),this.supportsConformance(n)&&t.push("JSON"),t},filterComponentProps(){return{canSort:this.canSort,canFilterCql:this.canFilterCql,canFilterExtents:this.canFilterExtents}}}})}}]);
//# sourceMappingURL=838.0ade52cd.js.map