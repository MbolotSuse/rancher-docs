"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10246],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58145:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Project Administration"},c=void 0,u={unversionedId:"pages-for-subheaders/manage-projects",id:"pages-for-subheaders/manage-projects",title:"Project Administration",description:"Projects are objects introduced in Rancher that help organize namespaces in your Kubernetes cluster. You can use projects to create multi-tenant clusters, which allows a group of users to share the same underlying resources without interacting with each other's applications.",source:"@site/docs/pages-for-subheaders/manage-projects.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/manage-projects",permalink:"/pages-for-subheaders/manage-projects",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/manage-projects.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Project Administration"},sidebar:"tutorialSidebar",previous:{title:"Advanced User Guides",permalink:"/pages-for-subheaders/advanced-user-guides"},next:{title:"Rancher's CI/CD Pipelines",permalink:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"}},l={},p=[{value:"Authorization",id:"authorization",level:3},{value:"Switching between Projects",id:"switching-between-projects",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Projects")," are objects introduced in Rancher that help organize namespaces in your Kubernetes cluster. You can use projects to create multi-tenant clusters, which allows a group of users to share the same underlying resources without interacting with each other's applications."),(0,o.kt)("p",null,"In terms of hierarchy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clusters contain projects"),(0,o.kt)("li",{parentName:"ul"},"Projects contain namespaces")),(0,o.kt)("p",null,"Within Rancher, projects allow you to manage multiple namespaces as a single entity. In native Kubernetes, which does not include projects, features like role-based access rights or cluster resources are assigned to individual namespaces. In clusters where multiple namespaces require the same set of access rights, assigning these rights to each individual namespace can become tedious. Even though all namespaces require the same rights, there's no way to apply those rights to all of your namespaces in a single action. You'd have to repetitively assign these rights to each namespace!"),(0,o.kt)("p",null,"Rancher projects resolve this issue by allowing you to apply resources and access rights at the project level. Each namespace in the project then inherits these resources and policies, so you only have to assign them to the project once, rather than assigning them to each individual namespace."),(0,o.kt)("p",null,"You can use projects to perform actions like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/add-users-to-projects"},"Assign users access to a group of namespaces")),(0,o.kt)("li",{parentName:"ul"},"Assign users ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"specific roles in a project"),". A role can be owner, member, read-only, or ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"custom")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/manage-project-resource-quotas"},"Set resource quotas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/manage-namespaces"},"Manage namespaces")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reference-guides/rancher-project-tools"},"Configure tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"Set up pipelines for continuous integration and deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"},"Configure pod security policies"))),(0,o.kt)("h3",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"Non-administrative users are only authorized for project access after an ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator"),", ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner or member"),", or ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owner")," adds them to the project's ",(0,o.kt)("strong",{parentName:"p"},"Members")," tab."),(0,o.kt)("p",null,"Whoever creates the project automatically becomes a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project owner"),"."),(0,o.kt)("h2",{id:"switching-between-projects"},"Switching between Projects"),(0,o.kt)("p",null,"To switch between projects, use the drop-down available in the navigation bar. Alternatively, you can switch between projects directly in the navigation bar."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to switch projects and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the top navigation bar, select the project that you want to open.")))}d.isMDXComponent=!0}}]);