(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-partials-Breadcrumbs-Taxonomies-vue","settings-partials-Breadcrumbs-Preview-vue"],{c468:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"preview-box"},[e.label?a("span",{staticClass:"label"},[e._v(" "+e._s(e.label)+": ")]):e._e(),e._l(this.getPreviewData(),(function(t,n){return[1<e.previewLength&&n>0&&n<e.previewLength?a("span",{key:n+"sep",staticClass:"aioseo-breadcrumb-separator",domProps:{innerHTML:e._s(e.options.breadcrumbs.separator)}}):e._e(),n<e.previewLength-1?a("span",{key:n+"crumb",class:{"aioseo-breadcrumb":!t.match(/aioseo-breadcrumb/),link:t!==e.options.breadcrumbs.breadcrumbPrefix&&!t.match(/<a /)},domProps:{innerHTML:e._s(t)}}):e._e(),n===e.previewLength-1?a("span",{key:n+"crumbLast",class:{last:!0,link:e.options.breadcrumbs.linkCurrentItem&&e.useDefaultTemplate&&!t.match(/<a /),noLink:!e.options.breadcrumbs.linkCurrentItem&&e.useDefaultTemplate,"aioseo-breadcrumb":!t.match(/aioseo-breadcrumb/)},domProps:{innerHTML:e._s(t)}}):e._e()]}))],2)},s=[],o=(a("4de4"),a("d81d"),a("fb6a"),a("ac1f"),a("5319"),a("5530")),r=a("2f62"),i={props:{previewData:{type:Array,default:null},useDefaultTemplate:{type:Boolean,default:!0},label:String},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])(["options"])),{},{previewLength:function(){return this.getPreviewData()?this.getPreviewData().length:0}}),methods:{getPreviewData:function(){var e=this,t=this.previewData.filter((function(e){return!!e})).map((function(t){return e.$tags.decodeHTMLEntities(t).replace(/#breadcrumb_separator/g,'<span class="aioseo-breadcrumb-separator">'+e.options.breadcrumbs.separator+"</span>").replace(/#breadcrumb_link/g,"Permalink")}));return this.useDefaultTemplate&&!this.options.breadcrumbs.showCurrentItem&&(t=t.slice(0,t.length-1)),t}}},m=i,l=a("2877"),c=Object(l["a"])(m,n,s,!1,null,null,null);t["default"]=c.exports},e081:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},e._l(e.taxonomies,(function(t){return a("core-settings-row",{key:t.name,attrs:{name:t.label},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",[a("preview",{attrs:{"preview-data":e.getPreview(t),useDefaultTemplate:e.options.breadcrumbs.dynamic.taxonomies[t.name].useDefaultTemplate}}),a("grid-row",[a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.options.breadcrumbs.dynamic.taxonomies[t.name].useDefaultTemplate,callback:function(a){e.$set(e.options.breadcrumbs.dynamic.taxonomies[t.name],"useDefaultTemplate",a)},expression:"options.breadcrumbs.dynamic.taxonomies[taxonomy.name].useDefaultTemplate"}}),e._v(" "+e._s(e.strings.useDefaultTemplate)+" ")],1)],1),e.options.breadcrumbs.dynamic.taxonomies[t.name].useDefaultTemplate?e._e():a("grid-row",[e.options.breadcrumbs.breadcrumbPrefix&&e.options.breadcrumbs.breadcrumbPrefix.length?a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.options.breadcrumbs.dynamic.taxonomies[t.name].showPrefixCrumb,callback:function(a){e.$set(e.options.breadcrumbs.dynamic.taxonomies[t.name],"showPrefixCrumb",a)},expression:"options.breadcrumbs.dynamic.taxonomies[taxonomy.name].showPrefixCrumb"}}),e._v(" "+e._s(e.strings.showPrefixLabel)+" ")],1):e._e(),a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.options.breadcrumbs.dynamic.taxonomies[t.name].showHomeCrumb,callback:function(a){e.$set(e.options.breadcrumbs.dynamic.taxonomies[t.name],"showHomeCrumb",a)},expression:"options.breadcrumbs.dynamic.taxonomies[taxonomy.name].showHomeCrumb"}}),e._v(" "+e._s(e.strings.showHomeLabel)+" ")],1),t.hierarchical?a("grid-column",[a("base-toggle",{staticClass:"current-item",model:{value:e.options.breadcrumbs.dynamic.taxonomies[t.name].showParentCrumbs,callback:function(a){e.$set(e.options.breadcrumbs.dynamic.taxonomies[t.name],"showParentCrumbs",a)},expression:"options.breadcrumbs.dynamic.taxonomies[taxonomy.name].showParentCrumbs"}}),e._v(" "+e._s(e.strings.showParentLabel)+" ")],1):e._e(),a("grid-column",[a("core-settings-row",{attrs:{name:t.hierarchical&&e.options.breadcrumbs.dynamic.taxonomies[t.name].showParentCrumbs?e.strings.singleTemplateLabel:"",leftSize:"12",rightSize:"12"},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-html-tags-editor",{attrs:{"line-numbers":!0,checkUnfilteredHtml:"","tags-context":"breadcrumbs-taxonomy-"+t.name,"minimum-line-numbers":3,"default-tags":["breadcrumb_taxonomy_title","breadcrumb_link"]},model:{value:e.options.breadcrumbs.dynamic.taxonomies[t.name].template,callback:function(a){e.$set(e.options.breadcrumbs.dynamic.taxonomies[t.name],"template",a)},expression:"options.breadcrumbs.dynamic.taxonomies[taxonomy.name].template"}})]},proxy:!0}],null,!0)})],1),t.hierarchical&&e.options.breadcrumbs.dynamic.taxonomies[t.name].showParentCrumbs?a("grid-column",[a("core-settings-row",{attrs:{name:e.strings.parentTemplateLabel,leftSize:"12",rightSize:"12"},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-html-tags-editor",{attrs:{"line-numbers":!0,checkUnfilteredHtml:"","tags-context":"breadcrumbs-taxonomy-"+t.name,"minimum-line-numbers":3,"default-tags":["breadcrumb_taxonomy_title","breadcrumb_link"]},model:{value:e.options.breadcrumbs.dynamic.taxonomies[t.name].parentTemplate,callback:function(a){e.$set(e.options.breadcrumbs.dynamic.taxonomies[t.name],"parentTemplate",a)},expression:"options.breadcrumbs.dynamic.taxonomies[taxonomy.name].parentTemplate"}})]},proxy:!0}],null,!0)})],1):e._e()],1)],1)]},proxy:!0}],null,!0)})})),1)},s=[],o=(a("4de4"),a("caad"),a("b0c0"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("5530")),r=a("2f62"),i=a("c468"),m={components:{preview:i["default"]},data:function(){return{strings:{useDefaultTemplate:this.$t.__("Use a default template",this.$td),showHomeLabel:this.$t.__("Show homepage link",this.$td),showPrefixLabel:this.$t.__("Show prefix link",this.$td),showParentLabel:this.$t.__("Show parent item link",this.$td),singleTemplateLabel:this.$t.__("Single item template",this.$td),parentTemplateLabel:this.$t.__("Parent item template",this.$td)}}},methods:{getPreview:function(e){var t=this.options.breadcrumbs,a=t.dynamic.taxonomies[e.name],n=a.useDefaultTemplate;return[n&&t.breadcrumbPrefix||!n&&a.showPrefixCrumb?t.breadcrumbPrefix:"",n&&t.homepageLink||!n&&a.showHomeCrumb?t.homepageLabel?t.homepageLabel:"Home":"",["category","post_tag"].includes(e.name)&&t.showBlogHome&&this.$aioseo.data.staticBlogPage?"Blog Home":"",this.taxonomyHasArchive(e)?e.label:"",e.hierarchical&&(n||!n&&a.showParentCrumbs)?this.getTaxonomyParentTemplate(e):"",this.getTaxonomyTemplate(e)]},taxonomyHasArchive:function(e){return 0<this.$aioseo.postData.taxonomies.filter((function(t){return t.name===e.name&&t.hasArchive})).length},getTaxonomyParentTemplate:function(e){var t=this.options.breadcrumbs.dynamic.taxonomies[e.name].useDefaultTemplate?this.$aioseo.breadcrumbs.defaultTemplates.taxonomies[e.name]:this.options.breadcrumbs.dynamic.taxonomies[e.name].parentTemplate;return t.replace(new RegExp("#breadcrumb_taxonomy_title","g"),e.singular+" Parent")},getTaxonomyTemplate:function(e){var t=this.options.breadcrumbs.dynamic.taxonomies[e.name].useDefaultTemplate?this.$aioseo.breadcrumbs.defaultTemplates.taxonomies[e.name]:this.options.breadcrumbs.dynamic.taxonomies[e.name].template;return t.replace(new RegExp("#breadcrumb_taxonomy_title","g"),e.singular)}},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])(["options"])),{},{taxonomies:function(){return this.$aioseo.postData.taxonomies}})},l=m,c=a("2877"),u=Object(c["a"])(l,n,s,!1,null,null,null);t["default"]=u.exports}}]);