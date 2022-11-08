"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8430],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,f=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},67199:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"Working with Taints and Tolerations"},s=void 0,c={unversionedId:"integrations-in-rancher/logging/taints-and-tolerations",id:"integrations-in-rancher/logging/taints-and-tolerations",title:"Working with Taints and Tolerations",description:'"Tainting" a Kubernetes node causes pods to repel running on that node.',source:"@site/docs/integrations-in-rancher/logging/taints-and-tolerations.md",sourceDirName:"integrations-in-rancher/logging",slug:"/integrations-in-rancher/logging/taints-and-tolerations",permalink:"/integrations-in-rancher/logging/taints-and-tolerations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/logging/taints-and-tolerations.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Working with Taints and Tolerations"},sidebar:"tutorialSidebar",previous:{title:"rancher-logging Helm Chart Options",permalink:"/integrations-in-rancher/logging/logging-helm-chart-options"},next:{title:"Custom Resource Configuration",permalink:"/pages-for-subheaders/custom-resource-configuration"}},d={},u=[{value:"Default Implementation in Rancher&#39;s Logging Stack",id:"default-implementation-in-ranchers-logging-stack",level:3},{value:"Adding NodeSelector Settings and Tolerations for Custom Taints",id:"adding-nodeselector-settings-and-tolerations-for-custom-taints",level:3}],p={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'"Tainting" a Kubernetes node causes pods to repel running on that node.'),(0,a.kt)("p",null,"Unless the pods have a ",(0,a.kt)("inlineCode",{parentName:"p"},"toleration")," for that node's taint, they will run on other nodes in the cluster."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"Taints and tolerations")," can work in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"field")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"PodSpec"),", which enables the ",(0,a.kt)("em",{parentName:"p"},"opposite")," effect of a taint."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," gives pods an affinity towards certain nodes."),(0,a.kt)("p",null,"Both provide choice for the what node(s) the pod will run on."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-implementation-in-rancher-s-logging-stack"},"Default Implementation in Rancher's Logging Stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"))),(0,a.kt)("h3",{id:"default-implementation-in-ranchers-logging-stack"},"Default Implementation in Rancher's Logging Stack"),(0,a.kt)("p",null,"By default, Rancher taints all Linux nodes with ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle.io/os=linux"),", and does not taint Windows nodes.\nThe logging stack pods have ",(0,a.kt)("inlineCode",{parentName:"p"},"tolerations")," for this taint, which enables them to run on Linux nodes.\nMoreover, most logging stack pods run on Linux only and have a ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," added to ensure they run on Linux nodes."),(0,a.kt)("p",null,"This example Pod YAML file shows a nodeSelector being used with a toleration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n# metadata...\nspec:\n  # containers...\n  tolerations:\n    - key: cattle.io/os\n      operator: "Equal"\n      value: "linux"\n      effect: NoSchedule\n  nodeSelector:\n    kubernetes.io/os: linux\n')),(0,a.kt)("p",null,"In the above example, we ensure that our pod only runs on Linux nodes, and we add a ",(0,a.kt)("inlineCode",{parentName:"p"},"toleration")," for the taint we have on all of our Linux nodes."),(0,a.kt)("p",null,"You can do the same with Rancher's existing taints, or with your own custom ones."),(0,a.kt)("h3",{id:"adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"),(0,a.kt)("p",null,"If you would like to add your own ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector")," settings, or if you would like to add ",(0,a.kt)("inlineCode",{parentName:"p"},"tolerations")," for additional taints, you can pass the following to the chart's values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n  # insert tolerations...\nnodeSelector:\n  # insert nodeSelector...\n")),(0,a.kt)("p",null,"These values will add both settings to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fluentd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fluentbit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-operator")," containers.\nEssentially, these are global settings for all pods in the logging stack."),(0,a.kt)("p",null,"However, if you would like to add tolerations for ",(0,a.kt)("em",{parentName:"p"},"only")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"fluentbit")," container, you can add the following to the chart's values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"fluentbit_tolerations:\n  # insert tolerations list for fluentbit containers only...\n")))}g.isMDXComponent=!0}}]);