(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{356:function(e,t,a){e.exports=a.p+"assets/img/release-state.d624ea8f.png"},357:function(e,t,a){e.exports=a.p+"assets/img/dependency-graph.af2c38de.png"},371:function(e,t,a){"use strict";a.r(t);var n=a(44),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"contributing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),n("p",[e._v("When updating the schema (links below), the tools need to be updated at the same time.")]),e._v(" "),n("p",[e._v("Schema links:\n"),n("a",{attrs:{href:"https://github.com/thematerials-network/EN10168-schemas",target:"_blank",rel:"noopener noreferrer"}},[e._v("EN10168"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/thematerials-network/E-CoC-schemas",target:"_blank",rel:"noopener noreferrer"}},[e._v("E-CoC"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/thematerials-network/CoA-schemas",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoA"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://github.com/thematerials-network/CDN-schemas",target:"_blank",rel:"noopener noreferrer"}},[e._v("CDN"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Process:")]),e._v(" "),n("ol",[n("li",[e._v("Update the schema in question")]),e._v(" "),n("li",[e._v("Generate the types ("),n("code",[e._v("certificate.ts")]),e._v(") using the "),n("code",[e._v("create-schema-interfaces")]),e._v(" CLI tool ("),n("code",[e._v("npm run fixtures:interfaces")]),e._v(") in the "),n("code",[e._v("schema-tools")]),e._v(" repository")]),e._v(" "),n("li",[e._v("If necessary, make changes in "),n("code",[e._v("generateContent.ts")]),e._v(" in "),n("code",[e._v("schema-tools/packages/generate-coa-pdf-template/src/generateContent.ts")]),e._v(" and run "),n("code",[e._v("npm run build")]),e._v(".\nIf "),n("code",[e._v("generateContent.ts")]),e._v(" has been changed and built, copy the contents of "),n("code",[e._v("dist/generateContent.js")]),e._v(" to the schema repository and replace the contents of "),n("code",[e._v("generate-pdf.min.js")]),e._v(" in the schema repository with the new minified code")]),e._v(" "),n("li",[e._v("For a new Release Candidate, add a new fixture (used for testing). See how to add fixtures "),n("a",{attrs:{href:"https://github.com/s1seven/schema-tools#fixtures",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("If there have been no changes in "),n("code",[e._v("certificate-model, certificate-summary, extract-emails, generate-html, generate-pdf, types, utils, validate")]),e._v(" in the "),n("code",[e._v("schema-tools")]),e._v(" repository, there is no need to update the "),n("code",[e._v("schema-tools")]),e._v(" release.")]),e._v(" "),n("li",[e._v("If you need to edit the html generation:\n"),n("ul",[n("li",[e._v("update "),n("code",[e._v("/packages/generate-html/src/index.ts")]),e._v(" if necessary")]),e._v(" "),n("li",[e._v("new handlebars helpers go in the above file in the "),n("code",[e._v("handlebarsBaseOptions")]),e._v(" function")]),e._v(" "),n("li",[e._v("add any new helpers to "),n("code",[e._v("template.hbs")]),e._v(" in the schema repository if necessary")]),e._v(" "),n("li",[e._v("after making changes in a package in "),n("code",[e._v("schema-tools")]),e._v(", run the "),n("code",[e._v("build")]),e._v(" script, then the root "),n("code",[e._v("bootstrap")]),e._v(" script")])])])]),e._v(" "),n("h3",{attrs:{id:"release-state-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#release-state-diagram"}},[e._v("#")]),e._v(" Release state diagram")]),e._v(" "),n("p",[n("img",{attrs:{src:a(356),alt:"Release state diagram"}})]),e._v(" "),n("h3",{attrs:{id:"dependency-graph"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependency-graph"}},[e._v("#")]),e._v(" Dependency graph")]),e._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:"Dependency graph"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);