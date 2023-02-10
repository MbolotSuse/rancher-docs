"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72047],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Helm Charts in Rancher"},l=void 0,i={unversionedId:"pages-for-subheaders/helm-charts-in-rancher",id:"version-2.6/pages-for-subheaders/helm-charts-in-rancher",title:"Helm Charts in Rancher",description:"In this section, you'll learn how to manage Helm chart repositories and applications in Rancher. Helm chart repositories are managed using Apps & Marketplace (Rancher before v2.6.5) or Apps (Rancher v2.6.5+). It uses a catalog-like system to import bundles of charts from repositories and then uses those charts to either deploy custom Helm applications or Rancher's tools such as Monitoring or Istio. Rancher tools come as pre-loaded repositories which deploy as standalone Helm charts. Any additional repositories are only added to the current cluster.",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/helm-charts-in-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm-charts-in-rancher",permalink:"/v2.6/pages-for-subheaders/helm-charts-in-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/helm-charts-in-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1670549188,formattedLastUpdatedAt:"Dec 9, 2022",frontMatter:{title:"Helm Charts in Rancher"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Registry and Docker Registry",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},next:{title:"Creating Apps",permalink:"/v2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps"}},s={},p=[{value:"Changes in Rancher v2.6",id:"changes-in-rancher-v26",level:3},{value:"Charts",id:"charts",level:3},{value:"Repositories",id:"repositories",level:3},{value:"Helm Compatibility",id:"helm-compatibility",level:3},{value:"Deployment and Upgrades",id:"deployment-and-upgrades",level:3},{value:"Changes in Rancher v2.6.3",id:"changes-in-rancher-v263",level:4},{value:"Limitations",id:"limitations",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=u("Tabs"),h=u("TabItem"),c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, you'll learn how to manage Helm chart repositories and applications in Rancher. Helm chart repositories are managed using ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace")," (Rancher before v2.6.5) or ",(0,n.kt)("strong",{parentName:"p"},"Apps")," (Rancher v2.6.5+). It uses a catalog-like system to import bundles of charts from repositories and then uses those charts to either deploy custom Helm applications or Rancher's tools such as Monitoring or Istio. Rancher tools come as pre-loaded repositories which deploy as standalone Helm charts. Any additional repositories are only added to the current cluster."),(0,n.kt)("h3",{id:"changes-in-rancher-v26"},"Changes in Rancher v2.6"),(0,n.kt)("p",null,"Starting in Rancher v2.6.0, a new versioning scheme for Rancher feature charts was implemented. The changes are centered around the major version of the charts and the +up annotation for upstream charts, where applicable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Major Version:")," The major version of the charts is tied to Rancher minor versions. When you upgrade to a new Rancher minor version, you should ensure that all of your ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace")," (Rancher before v2.6.5) or ",(0,n.kt)("strong",{parentName:"p"},"Apps")," (Rancher v2.6.5+) charts are also upgraded to the correct release line for the chart."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Any major versions that are less than the ones mentioned in the table below are meant for 2.5 and below only. For example, you are advised to not use <100.x.x versions of Monitoring in 2.6.x+.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Feature Charts:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Name")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Supported Minimum Version")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Supported Maximum Version")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"external-ip-webhook"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up1.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.1+up1.0.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"harvester-cloud-provider"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.2+up0.1.12"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.2+up0.1.12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"harvester-csi-driver"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.2+up0.1.11"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.2+up0.1.11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"neuvector"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up2.2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up2.2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-alerting-drivers"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-backup"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.1"),(0,n.kt)("td",{parentName:"tr",align:null},"2.1.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-cis-benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.1"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-gatekeeper"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up3.6.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.1.0+up3.7.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-istio"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up1.10.4"),(0,n.kt)("td",{parentName:"tr",align:null},"100.3.0+up1.13.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-logging"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up3.12.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.1.2+up3.17.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-longhorn"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up1.1.2"),(0,n.kt)("td",{parentName:"tr",align:null},"100.1.2+up1.2.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-monitoring"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up16.6.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.1.2+up19.0.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-sriov (experimental)"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.0+up0.1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.3+up0.1.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-vsphere-cpi"),(0,n.kt)("td",{parentName:"tr",align:null},"100.3.0+up1.2.1"),(0,n.kt)("td",{parentName:"tr",align:null},"100.3.0+up1.2.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-vsphere-csi"),(0,n.kt)("td",{parentName:"tr",align:null},"100.3.0+up2.5.1-rancher1"),(0,n.kt)("td",{parentName:"tr",align:null},"100.3.0+up2.5.1-rancher1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rancher-wins-upgrader"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0.100"),(0,n.kt)("td",{parentName:"tr",align:null},"100.0.1+up0.0.1")))),(0,n.kt)("br",null),"**Charts based on upstream:** For charts that are based on upstreams, the +up annotation should inform you of what upstream version the Rancher chart is tracking. Check the upstream version compatibility with Rancher during upgrades also.",(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"As an example, ",(0,n.kt)("inlineCode",{parentName:"p"},"100.x.x+up16.6.0")," for Monitoring tracks upstream kube-prometheus-stack ",(0,n.kt)("inlineCode",{parentName:"p"},"16.6.0")," with some Rancher patches added to it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On upgrades, ensure that you are not downgrading the version of the chart that you are using. For example, if you are using a version of Monitoring > ",(0,n.kt)("inlineCode",{parentName:"p"},"16.6.0")," in Rancher 2.5, you should not upgrade to ",(0,n.kt)("inlineCode",{parentName:"p"},"100.x.x+up16.6.0"),". Instead, you should upgrade to the appropriate version in the next release."))),(0,n.kt)("h3",{id:"charts"},"Charts"),(0,n.kt)(d,{groupId:"rancher-version",mdxType:"Tabs"},(0,n.kt)(h,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,n.kt)("p",null,"From the top-left menu select ",(0,n.kt)("strong",{parentName:"p"},"Apps")," and you will be taken to the Charts page.")),(0,n.kt)(h,{value:"Rancher before v2.6.5",mdxType:"TabItem"},(0,n.kt)("p",null,"From the top-left menu select ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace")," and you will be taken to the Charts page."))),(0,n.kt)("p",null,"The charts page contains all Rancher, Partner, and Custom Charts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rancher tools such as Logging or Monitoring are included under the Rancher label"),(0,n.kt)("li",{parentName:"ul"},"Partner charts reside under the Partners label"),(0,n.kt)("li",{parentName:"ul"},"Custom charts will show up under the name of the repository")),(0,n.kt)("p",null,"All three types are deployed and managed in the same way."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Apps managed by the Cluster Manager (the global view in the legacy Rancher UI) should continue to be managed only by the Cluster Manager, and apps managed with ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace")," (Rancher before v2.6.5) or ",(0,n.kt)("strong",{parentName:"p"},"Apps")," (Rancher v2.6.5+) in the new UI must be managed only by ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace")," or ",(0,n.kt)("strong",{parentName:"p"},"Apps"),".")),(0,n.kt)("h3",{id:"repositories"},"Repositories"),(0,n.kt)("p",null,"From the left sidebar select ",(0,n.kt)("em",{parentName:"p"},'"Repositories"'),"."),(0,n.kt)("p",null,"These items represent helm repositories, and can be either traditional helm endpoints which have an index.yaml, or git repositories which will be cloned and can point to a specific branch. In order to use custom charts, simply add your repository here and they will become available in the Charts tab under the name of the repository."),(0,n.kt)("p",null,"To add a private CA for Helm Chart repositories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP-based chart repositories"),": You must add a base64 encoded copy of the CA certificate in DER format to the spec.caBundle field of the chart repo, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"openssl x509 -outform der -in ca.pem | base64 -w0"),". Click ",(0,n.kt)("strong",{parentName:"li"},"Edit YAML")," for the chart repo and set, as in the following example:",(0,n.kt)("br",null),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[...]\nspec:\n  caBundle:\nMIIFXzCCA0egAwIBAgIUWNy8WrvSkgNzV0zdWRP79j9cVcEwDQYJKoZIhvcNAQELBQAwPzELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRQwEgYDVQQKDAtNeU9yZywgSW5jLjENMAsGA1UEAwwEcm9vdDAeFw0yMTEyMTQwODMyMTdaFw0yNDEwMDMwODMyMT\n...\nnDxZ/tNXt/WPJr/PgEB3hQdInDWYMg7vGO0Oz00G5kWg0sJ0ZTSoA10ZwdjIdGEeKlj1NlPyAqpQ+uDnmx6DW+zqfYtLnc/g6GuLLVPamraqN+gyU8CHwAWPNjZonFN9Vpg0PIk1I2zuOc4EHifoTAXSpnjfzfyAxCaZsnTptimlPFJJqAMj+FfDArGmr4=\n[...]\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Git-based chart repositories"),": You must add a base64 encoded copy of the CA certificate in DER format to the spec.caBundle field of the chart repo, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"openssl x509 -outform der -in ca.pem | base64 -w0"),". Click ",(0,n.kt)("strong",{parentName:"li"},"Edit YAML")," for the chart repo and set, as in the following example:",(0,n.kt)("br",null),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[...]\nspec:\n  caBundle:\nMIIFXzCCA0egAwIBAgIUWNy8WrvSkgNzV0zdWRP79j9cVcEwDQYJKoZIhvcNAQELBQAwPzELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRQwEgYDVQQKDAtNeU9yZywgSW5jLjENMAsGA1UEAwwEcm9vdDAeFw0yMTEyMTQwODMyMTdaFw0yNDEwMDMwODMyMT\n...\nnDxZ/tNXt/WPJr/PgEB3hQdInDWYMg7vGO0Oz00G5kWg0sJ0ZTSoA10ZwdjIdGEeKlj1NlPyAqpQ+uDnmx6DW+zqfYtLnc/g6GuLLVPamraqN+gyU8CHwAWPNjZonFN9Vpg0PIk1I2zuOc4EHifoTAXSpnjfzfyAxCaZsnTptimlPFJJqAMj+FfDArGmr4=\n[...]\n")))),(0,n.kt)("admonition",{title:"Helm chart repositories with authentication",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As of Rancher v2.6.3, a new value ",(0,n.kt)("inlineCode",{parentName:"p"},"disableSameOriginCheck")," has been added to the Repo.Spec. This allows users to bypass the same origin checks, sending the repository Authentication information as a Basic Auth Header with all API calls. This is not recommended but can be used as a temporary solution in cases of non-standard Helm chart repositories such as those that have redirects to a different origin URL."),(0,n.kt)("p",{parentName:"admonition"},"To use this feature for an existing Helm chart repository, click ",(0,n.kt)("b",null,"\u22ee > Edit YAML"),". On the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec")," portion of the YAML file, add ",(0,n.kt)("inlineCode",{parentName:"p"},"disableSameOriginCheck")," and set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\nspec:\n  disableSameOriginCheck: true\n[...]\n"))),(0,n.kt)("h3",{id:"helm-compatibility"},"Helm Compatibility"),(0,n.kt)("p",null,"Only Helm 3 compatible charts are supported."),(0,n.kt)("h3",{id:"deployment-and-upgrades"},"Deployment and Upgrades"),(0,n.kt)("p",null,"From the ",(0,n.kt)("em",{parentName:"p"},'"Charts"')," tab select a Chart to install. Rancher and Partner charts may have extra configurations available through custom pages or questions.yaml files, but all chart installations can modify the values.yaml and other basic settings. Once you click install, a Helm operation job is deployed, and the console for the job is displayed."),(0,n.kt)("p",null,"To view all recent changes, go to the ",(0,n.kt)("em",{parentName:"p"},'"Recent Operations"')," tab. From there you can view the call that was made, conditions, events, and logs."),(0,n.kt)("p",null,"After installing a chart, you can find it in the ",(0,n.kt)("em",{parentName:"p"},'"Installed Apps"')," tab. In this section you can upgrade or delete the installation, and see further details. When choosing to upgrade, the form and values presented will be the same as installation."),(0,n.kt)("p",null,"Most Rancher tools have additional pages located in the toolbar below the ",(0,n.kt)("em",{parentName:"p"},'"Apps & Marketplace"')," section to help manage and use the features. These pages include links to dashboards, forms to easily add Custom Resources, and additional information."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are upgrading your chart using ",(0,n.kt)("em",{parentName:"p"},'"Customize Helm options before upgrade"')," , please be aware that using the ",(0,n.kt)("em",{parentName:"p"},'"--force"')," option may result in errors if your chart has immutable fields. This is because some objects in Kubernetes cannot be changed once they are created. To ensure you do not get this error you can:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"use the default upgrade option ( i.e do not use ",(0,n.kt)("em",{parentName:"li"},'"--force"')," option )"),(0,n.kt)("li",{parentName:"ul"},"uninstall the existing chart and install the upgraded chart"),(0,n.kt)("li",{parentName:"ul"},"delete the resources with immutable fields from the cluster before performing the ",(0,n.kt)("em",{parentName:"li"},'"--force"')," upgrade"))),(0,n.kt)("h4",{id:"changes-in-rancher-v263"},"Changes in Rancher v2.6.3"),(0,n.kt)("p",null,"The upgrade button has been removed for legacy apps from the ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace > Installed Apps")," page."),(0,n.kt)("p",null,"If you have a legacy app installed and want to upgrade it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The legacy ",(0,n.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/enable-experimental-features"},"feature flag")," must be turned on (if it's not turned on automatically because of having a legacy app before upgrading)"),(0,n.kt)("li",{parentName:"ul"},"You can upgrade the app from cluster explorer, from the left nav section ",(0,n.kt)("strong",{parentName:"li"},"Legacy > Project > Apps")),(0,n.kt)("li",{parentName:"ul"},"For multi-cluster apps, you can go to ",(0,n.kt)("strong",{parentName:"li"},"\u2261 > Multi-cluster Apps")," and upgrade the app from there")),(0,n.kt)("h3",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/helm-charts-in-rancher"},"Dashboard apps or Rancher feature charts")," ",(0,n.kt)("strong",{parentName:"p"},"cannot")," be installed using the Rancher CLI."))}m.isMDXComponent=!0}}]);