(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["search-appearance-GlobalSettings-vue"],{4540:function(e,t,a){"use strict";var s=a("c395"),o=a.n(s);o.a},c395:function(e,t,a){},e6cd:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aioseo-search-appearance-global"},[a("core-card",{attrs:{slug:"searchTitleSeparator","header-text":e.strings.titleSeparator}},[a("core-settings-row",{attrs:{name:e.$constants.GLOBAL_STRINGS.preview},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-google-search-preview",{attrs:{title:"#site_title #separator_sa #tagline",separator:e.options.searchAppearance.global.separator,description:"#tagline"}})]},proxy:!0}])}),a("core-settings-row",{attrs:{name:e.strings.separatorCharacter},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-settings-separator",{attrs:{"options-separator":e.options.searchAppearance.global.separator,"show-more-slug":"searchShowMoreSeparators"},on:{change:function(t){return e.options.searchAppearance.global.separator=t}}})]},proxy:!0}])})],1),a("core-card",{attrs:{slug:"searchHomePage","header-text":e.strings.homePage,id:"home-page-settings"}},[e.$aioseo.data.staticHomePage?a("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[a("span",{domProps:{innerHTML:e._s(e.strings.homePageDisabledDescription)}}),e._v(" "),a("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"staticHomePage",!0))}})]):e._e(),a("core-settings-row",{attrs:{name:e.$constants.GLOBAL_STRINGS.preview},scopedSlots:e._u([{key:"content",fn:function(){return[e.$aioseo.data.staticHomePage?a("core-google-search-preview",{attrs:{title:e.$aioseo.data.staticHomePageTitle||"#site_title",separator:e.options.searchAppearance.global.separator,description:e.$aioseo.data.staticHomePageDescription||"#tagline"}}):e._e(),e.$aioseo.data.staticHomePage?e._e():a("core-google-search-preview",{attrs:{title:e.options.searchAppearance.global.siteTitle||"#site_title",separator:e.options.searchAppearance.global.separator,description:e.options.searchAppearance.global.metaDescription||"#tagline"}})]},proxy:!0}])}),e.$aioseo.data.staticHomePage?e._e():a("core-settings-row",{attrs:{name:e.strings.siteTitle},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},on:{counter:function(t){return e.updateCount(t,"titleCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddSiteTitle)+" ")]},proxy:!0}],null,!1,3952728333),model:{value:e.options.searchAppearance.global.siteTitle,callback:function(t){e.$set(e.options.searchAppearance.global,"siteTitle",t)},expression:"options.searchAppearance.global.siteTitle"}}),a("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.titleCount,60))}})]},proxy:!0}],null,!1,2375399622)}),e.$aioseo.data.staticHomePage?e._e():a("core-settings-row",{attrs:{name:e.strings.metaDescription},scopedSlots:e._u([{key:"content",fn:function(){return[a("core-html-tags-editor",{attrs:{"line-numbers":!1,description:"","tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},on:{counter:function(t){return e.updateCount(t,"descriptionCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddSiteDescription)+" ")]},proxy:!0}],null,!1,67309675),model:{value:e.options.searchAppearance.global.metaDescription,callback:function(t){e.$set(e.options.searchAppearance.global,"metaDescription",t)},expression:"options.searchAppearance.global.metaDescription"}}),a("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.descriptionCount,160))}})]},proxy:!0}],null,!1,3174983313)}),e.options.searchAppearance.advanced.useKeywords&&!e.$aioseo.data.staticHomePage?a("core-settings-row",{attrs:{name:e.strings.keywords,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-select",{attrs:{multiple:"",taggable:"",options:e.getJsonValue(e.options.searchAppearance.global.keywords,[])||[],value:e.getJsonValue(e.options.searchAppearance.global.keywords,[])||[],"tag-placeholder":e.strings.tagPlaceholder},on:{input:function(t){return e.options.searchAppearance.global.keywords=e.setJsonValue(t)}}})]},proxy:!0}],null,!1,3821969712)}):e._e()],1),a("core-card",{attrs:{slug:"searchSchema","header-text":e.strings.knowledgeGraph},scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.knowledgeGraphDescription)+" ")]},proxy:!0}])},[e.internalOptions.internal.deprecatedOptions.includes("enableSchemaMarkup")?a("core-settings-row",{attrs:{name:e.strings.enableSchemaMarkup,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"enableSchemaMarkup",options:[{label:e.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.on,value:!0}]},model:{value:e.options.deprecated.searchAppearance.global.schema.enableSchemaMarkup,callback:function(t){e.$set(e.options.deprecated.searchAppearance.global.schema,"enableSchemaMarkup",t)},expression:"options.deprecated.searchAppearance.global.schema.enableSchemaMarkup"}})]},proxy:!0}],null,!1,1842733059)}):e._e(),a("core-settings-row",{attrs:{id:"schema-graph-site-represents",name:e.strings.personOrOrganization},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-radio-toggle",{attrs:{name:"siteRepresents",options:[{label:e.strings.person,value:"person"},{label:e.strings.organization,value:"organization"}]},model:{value:e.options.searchAppearance.global.schema.siteRepresents,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"siteRepresents",t)},expression:"options.searchAppearance.global.schema.siteRepresents"}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.personOrOrganizationDescription)+" ")])]},proxy:!0}])}),"person"===e.options.searchAppearance.global.schema.siteRepresents?a("core-settings-row",{attrs:{name:e.strings.choosePerson},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-select",{staticClass:"person-chooser",attrs:{options:e.users,value:e.getPersonOptions(e.options.searchAppearance.global.schema.person)},on:{input:function(t){return e.options.searchAppearance.global.schema.person=t.value}},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var s=t.option;return[a("div",{staticClass:"person-label"},[s.gravatar?a("div",{staticClass:"person-avatar"},[a("img",{attrs:{src:s.gravatar}})]):e._e(),a("div",{staticClass:"person-name"},[e._v(" "+e._s(s.label)+" ")])])]}},{key:"option",fn:function(t){var s=t.option;return[a("div",{staticClass:"person-label"},[s.gravatar?a("div",{staticClass:"person-avatar"},[a("img",{attrs:{src:s.gravatar}})]):e._e(),a("div",{staticClass:"person-name"},[e._v(" "+e._s(s.label)+" ")])])]}}],null,!1,1262403990)})]},proxy:!0}],null,!1,2940220138)}):e._e(),"organization"===e.options.searchAppearance.global.schema.siteRepresents?a("core-settings-row",{staticClass:"schema-graph-name",attrs:{name:e.strings.name},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-input",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.global.schema.organizationName,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"organizationName",t)},expression:"options.searchAppearance.global.schema.organizationName"}})]},proxy:!0}],null,!1,2889505989)}):e._e(),"organization"!==e.options.searchAppearance.global.schema.siteRepresents&&"manual"===e.options.searchAppearance.global.schema.person?a("core-settings-row",{staticClass:"schema-graph-name",attrs:{name:e.strings.name},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-input",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.global.schema.personName,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"personName",t)},expression:"options.searchAppearance.global.schema.personName"}})]},proxy:!0}],null,!1,3790833419)}):e._e(),"organization"===e.options.searchAppearance.global.schema.siteRepresents?a("core-settings-row",{staticClass:"schema-graph-phone",attrs:{id:"schema-graph-phone",name:e.strings.phone},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-phone",{model:{value:e.options.searchAppearance.global.schema.phone,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"phone",t)},expression:"options.searchAppearance.global.schema.phone"}})]},proxy:!0}],null,!1,2261799709)}):e._e(),"organization"===e.options.searchAppearance.global.schema.siteRepresents?a("core-settings-row",{staticClass:"schema-graph-contact-type",attrs:{name:e.strings.contactType},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-select",{attrs:{size:"medium",options:e.$constants.CONTACT_TYPES,placeholder:e.strings.chooseContactType,value:e.getContactTypeOptions(e.options.searchAppearance.global.schema.contactType)},on:{input:function(t){return e.options.searchAppearance.global.schema.contactType=t.value}}}),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.contactTypeDescription)+" ")])]},proxy:!0}],null,!1,4027546348)}):e._e(),"organization"===e.options.searchAppearance.global.schema.siteRepresents&&"manual"===e.options.searchAppearance.global.schema.contactType?a("core-settings-row",{staticClass:"schema-graph-contact-type-manual",attrs:{name:e.strings.contactType},scopedSlots:e._u([{key:"content",fn:function(){return[a("base-input",{attrs:{size:"medium"},model:{value:e.options.searchAppearance.global.schema.contactTypeManual,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"contactTypeManual",t)},expression:"options.searchAppearance.global.schema.contactTypeManual"}})]},proxy:!0}],null,!1,3975038011)}):e._e(),"organization"===e.options.searchAppearance.global.schema.siteRepresents?a("core-settings-row",{staticClass:"schema-graph-image",attrs:{name:e.strings.logo},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"image-upload"},[a("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.searchAppearance.global.schema.organizationLogo,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"organizationLogo",t)},expression:"options.searchAppearance.global.schema.organizationLogo"}}),a("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(t){return e.openUploadModal("logo",["options","searchAppearance","global","schema","organizationLogo"])}}},[a("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),a("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(t){e.options.searchAppearance.global.schema.organizationLogo=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.minimumSize)+" ")]),e.canShowImage(e.options.searchAppearance.global.schema.organizationLogo)?a("img",{attrs:{src:e.options.searchAppearance.global.schema.organizationLogo}}):e._e()]},proxy:!0}],null,!1,875742457)}):e._e(),"organization"!==e.options.searchAppearance.global.schema.siteRepresents&&"manual"===e.options.searchAppearance.global.schema.person?a("core-settings-row",{staticClass:"schema-graph-image",attrs:{name:e.strings.logo},scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"image-upload"},[a("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.searchAppearance.global.schema.personLogo,callback:function(t){e.$set(e.options.searchAppearance.global.schema,"personLogo",t)},expression:"options.searchAppearance.global.schema.personLogo"}}),a("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(t){return e.openUploadModal("logo",["options","searchAppearance","global","schema","personLogo"])}}},[a("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),a("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(t){e.options.searchAppearance.global.schema.personLogo=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),a("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.minimumSize)+" ")]),e.canShowImage(e.options.searchAppearance.global.schema.personLogo)?a("img",{attrs:{src:e.options.searchAppearance.global.schema.personLogo}}):e._e()]},proxy:!0}],null,!1,3935028215)}):e._e(),a("div",{staticClass:"aioseo-settings-row local-seo"},[a("svg-local-seo"),a("div",{staticClass:"local-seo-text"},[a("div",{domProps:{innerHTML:e._s(e.strings.goToLocalSeo)}}),a("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:e.$aioseo.urls.aio.localSeo}},[e._v(" "+e._s(e.strings.goToLocalSeoSettings)+" ")])],1)],1)],1)],1)},o=[],n=(a("99af"),a("7db0"),a("d81d"),a("d3b7"),a("25f0"),a("5530")),r=a("9c0e"),i=a("2f62"),c={mixins:[r["a"],r["d"],r["f"],r["o"]],data:function(){return{titleCount:0,descriptionCount:0,strings:{titleSeparator:this.$t.__("Title Separator",this.$td),separatorCharacter:this.$t.__("Separator Character",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("The home page settings below have been disabled because you are using a static home page. You can %1$sedit your home page settings%2$s directly to change the title and description.",this.$td),'<a href="'.concat(this.$aioseo.urls.staticHomePage,'">'),"</a>"),homePage:this.$t.__("Home Page",this.$td),siteTitle:this.$t.__("Site Title",this.$td),clickToAddSiteTitle:this.$t.__("Click on the tags below to insert variables into your site title.",this.$td),metaDescription:this.$t.__("Meta Description",this.$td),clickToAddSiteDescription:this.$t.__("Click on the tags below to insert variables into your meta description.",this.$td),knowledgeGraph:this.$t.__("Knowledge Graph",this.$td),knowledgeGraphDescription:this.$t.__("Google, Bing and other search engines use specific data from your schema markup to output data in their Knowledge Panels. This data is known as the Knowledge Graph. Use these settings to change how that data looks.",this.$td),personOrOrganization:this.$t.__("Person or Organization",this.$td),person:this.$t.__("Person",this.$td),organization:this.$t.__("Organization",this.$td),personOrOrganizationDescription:this.$t.__("Choose whether the site represents a person or an organization.",this.$td),choosePerson:this.$t.__("Choose a Person",this.$td),name:this.$t.__("Name",this.$td),phone:this.$t.__("Phone Number",this.$td),chooseContactType:this.$t.__("Choose a Contact Type",this.$td),contactType:this.$t.__("Contact Type",this.$td),contactTypeDescription:this.$t.__("Select which team or department the phone number belongs to.",this.$td),logo:this.$t.__("Logo",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),goToLocalSeo:this.$t.sprintf(this.$t.__("Go to %1$sLocal SEO Settings%2$s and set up your local business info like location address, opening hours (%3$s), and Google Maps settings (%4$s).",this.$td),"<strong>","</strong>","Pro","Pro"),goToLocalSeoSettings:this.$t.__("Go to Local SEO Settings",this.$td),enableSchemaMarkup:this.$t.__("Enable Schema Markup",this.$td),keywords:this.$t.__("Keywords",this.$td),tagPlaceholder:this.$t.__("Press enter to create a keyword",this.$td)}}},computed:Object(n["a"])(Object(n["a"])({},Object(i["e"])(["options","internalOptions"])),{},{users:function(){return[{label:this.$t.__("Manually Enter Person",this.$td),value:"manual"}].concat(this.$aioseo.users.map((function(e){return{label:"".concat(e.displayName," (").concat(e.email,")"),gravatar:e.gravatar,value:e.id}})))}}),methods:{getPersonOptions:function(e){return this.users.find((function(t){return e&&t.value.toString()===e.toString()}))},getContactTypeOptions:function(e){return this.$constants.CONTACT_TYPES.find((function(t){return t.value===e}))}}},p=c,l=(a("4540"),a("2877")),g=Object(l["a"])(p,s,o,!1,null,null,null);t["default"]=g.exports}}]);