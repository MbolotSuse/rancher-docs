"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"Concepts"},p=void 0,o={unversionedId:"reference-guides/pipelines/concepts",id:"version-2.6/reference-guides/pipelines/concepts",title:"Concepts",description:"The purpose of this page is to explain common concepts and terminology related to pipelines.",source:"@site/versioned_docs/version-2.6/reference-guides/pipelines/concepts.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/concepts",permalink:"/v2.6/reference-guides/pipelines/concepts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/pipelines/concepts.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Concepts"},sidebar:"tutorialSidebar",previous:{title:"Pipelines",permalink:"/v2.6/pages-for-subheaders/pipelines"},next:{title:"Pipeline Configuration Reference",permalink:"/v2.6/reference-guides/pipelines/pipeline-configuration"}},s={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The purpose of this page is to explain common concepts and terminology related to pipelines."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pipeline:")),(0,i.kt)("p",{parentName:"li"},"  A ",(0,i.kt)("em",{parentName:"p"},"pipeline")," is a software delivery process that is broken into different stages and steps. Setting up a pipeline can help developers deliver new software as quickly and efficiently as possible. Within Rancher, you can configure pipelines for each of your Rancher projects. A pipeline is based on a specific repository. It defines the process to build, test, and deploy your code. Rancher uses the ",(0,i.kt)("a",{parentName:"p",href:"https://jenkins.io/doc/book/pipeline-as-code/"},"pipeline as code")," model. Pipeline configuration is represented as a pipeline file in the source code repository, using the file name ",(0,i.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yaml"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stages:")),(0,i.kt)("p",{parentName:"li"},"  A pipeline stage consists of multiple steps. Stages are executed in the order defined in the pipeline file. The steps in a stage are executed concurrently. A stage starts when all steps in the former stage finish without failure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Steps:")),(0,i.kt)("p",{parentName:"li"},"  A pipeline step is executed inside a specified stage. A step fails if it exits with a code other than ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". If a step exits with this failure code, the entire pipeline fails and terminates.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Workspace:")),(0,i.kt)("p",{parentName:"li"},"  The workspace is the working directory shared by all pipeline steps. In the beginning of a pipeline, source code is checked out to the workspace. The command for every step bootstraps in the workspace. During a pipeline execution, the artifacts from a previous step will be available in future steps. The working directory is an ephemeral volume and will be cleaned out with the executor pod when a pipeline execution is finished."))),(0,i.kt)("p",null,"Typically, pipeline stages include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Build:")),(0,i.kt)("p",{parentName:"li"},"  Each time code is checked into your repository, the pipeline automatically clones the repo and builds a new iteration of your software. Throughout this process, the software is typically reviewed by automated tests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Publish:")),(0,i.kt)("p",{parentName:"li"},"  After the build is completed, either a Docker image is built and published to a Docker registry or a catalog template is published.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Deploy:")),(0,i.kt)("p",{parentName:"li"},"  After the artifacts are published, you would release your application so users could start using the updated product."))))}u.isMDXComponent=!0}}]);