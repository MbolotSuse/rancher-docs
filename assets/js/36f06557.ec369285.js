"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13297],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13261:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Global DNS"},s=void 0,d={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns",title:"Global DNS",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"10/29/2022",frontMatter:{title:"Global DNS"},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Example Custom Chart Creation",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial"},next:{title:"Deploying Applications across Clusters",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/deploy-apps-across-clusters"}},p={},u=[{value:"Global DNS Providers",id:"global-dns-providers",level:2},{value:"Global DNS Entries",id:"global-dns-entries",level:2},{value:"Permissions for Global DNS Providers and Entries",id:"permissions-for-global-dns-providers-and-entries",level:2},{value:"Setting up Global DNS for Applications",id:"setting-up-global-dns-for-applications",level:2},{value:"Adding a Global DNS Entry",id:"adding-a-global-dns-entry",level:2},{value:"Editing a Global DNS Provider",id:"editing-a-global-dns-provider",level:2},{value:"Editing a Global DNS Entry",id:"editing-a-global-dns-entry",level:2},{value:"Global DNS Entry Configuration",id:"global-dns-entry-configuration",level:2},{value:"DNS Provider Configuration",id:"dns-provider-configuration",level:2},{value:"Route53",id:"route53",level:3},{value:"CloudFlare",id:"cloudflare",level:3},{value:"AliDNS",id:"alidns",level:3},{value:"Adding Annotations to Ingresses to program the External DNS",id:"adding-annotations-to-ingresses-to-program-the-external-dns",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,l.kt)("p",null,"Rancher's Global DNS feature provides a way to program an external DNS provider to route traffic to your Kubernetes applications. Since the DNS programming supports spanning applications across different Kubernetes clusters, Global DNS is configured at a global level. An application can become highly available as it allows you to have one application run on different Kubernetes clusters. If one of your Kubernetes clusters goes down, the application would still be accessible."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Global DNS is only available in ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes installations")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," cluster enabled.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#global-dns-providers"},"Global DNS Providers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#global-dns-entries"},"Global-DNS-Entries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#permissions-for-global-dns-providers-and-entries"},"Permissions for Global DNS Providers and Entries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#setting-up-global-dns-for-applications"},"Setting up Global DNS for Applications")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#adding-a-global-dns-entry"},"Adding a Global DNS Entry")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#editing-a-global-dns-provider"},"Editing a Global DNS Provider")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#global-dns-entry-configuration"},"Global DNS Entry Configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dns-provider-configuration"},"DNS Provider Configuration"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#route53"},"Route53")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cloudflare"},"CloudFlare")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alidns"},"AliDNS")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#adding-annotations-to-ingresses-to-program-the-external-dns"},"Adding Annotations to Ingresses to program the External DNS"))),(0,l.kt)("h2",{id:"global-dns-providers"},"Global DNS Providers"),(0,l.kt)("p",null,"Before adding in Global DNS entries, you will need to configure access to an external provider."),(0,l.kt)("p",null,"The following table lists the first version of Rancher each provider debuted."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"DNS Provider"),(0,l.kt)("th",{parentName:"tr",align:null},"Available as of"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/route53/"},"AWS Route53")),(0,l.kt)("td",{parentName:"tr",align:null},"v2.2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.cloudflare.com/dns/"},"CloudFlare")),(0,l.kt)("td",{parentName:"tr",align:null},"v2.2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/product/dns"},"AliDNS")),(0,l.kt)("td",{parentName:"tr",align:null},"v2.2.0")))),(0,l.kt)("h2",{id:"global-dns-entries"},"Global DNS Entries"),(0,l.kt)("p",null,"For each application that you want to route traffic to, you will need to create a Global DNS Entry. This entry will use a fully qualified domain name (a.k.a FQDN) from a global DNS provider to target applications. The applications can either resolve to a single ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/deploy-apps-across-clusters"},"multi-cluster application")," or to specific projects. You must ",(0,l.kt)("a",{parentName:"p",href:"#adding-annotations-to-ingresses-to-program-the-external-dns"},"add specific annotation labels")," to the ingresses in order for traffic to be routed correctly to the applications. Without this annotation, the programming for the DNS entry will not work."),(0,l.kt)("h2",{id:"permissions-for-global-dns-providers-and-entries"},"Permissions for Global DNS Providers and Entries"),(0,l.kt)("p",null,"By default, only ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global administrators")," and the creator of the Global DNS provider or Global DNS entry have access to use, edit and delete them. When creating the provider or entry, the creator can add additional users in order for those users to access and manage them. By default, these members will get ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner")," role to manage them."),(0,l.kt)("h2",{id:"setting-up-global-dns-for-applications"},"Setting up Global DNS for Applications"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"From the ",(0,l.kt)("strong",{parentName:"li"},"Global View"),", select ",(0,l.kt)("strong",{parentName:"li"},"Tools > Global DNS Providers"),"."),(0,l.kt)("li",{parentName:"ol"},"To add a provider, choose from the available provider options and configure the Global DNS Provider with necessary credentials and an optional domain. For help, see ",(0,l.kt)("a",{parentName:"li",href:"#dns-provider-configuration"},"DNS Provider Configuration.")),(0,l.kt)("li",{parentName:"ol"},"(Optional) Add additional users so they could  use the provider when creating Global DNS entries as well as manage the Global DNS provider."),(0,l.kt)("li",{parentName:"ol"},"(Optional) Pass any custom values in the Additional Options section.")),(0,l.kt)("h2",{id:"adding-a-global-dns-entry"},"Adding a Global DNS Entry"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"From the ",(0,l.kt)("strong",{parentName:"li"},"Global View"),", select ",(0,l.kt)("strong",{parentName:"li"},"Tools > Global DNS Entries"),"."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Add DNS Entry"),"."),(0,l.kt)("li",{parentName:"ol"},"Fill out the form. For help, refer to ",(0,l.kt)("a",{parentName:"li",href:"#global-dns-entry-configuration"},"Global DNS Entry Configuration.")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create."))),(0,l.kt)("h2",{id:"editing-a-global-dns-provider"},"Editing a Global DNS Provider"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global administrators"),", creator of the Global DNS provider and any users added as ",(0,l.kt)("inlineCode",{parentName:"p"},"members")," to a Global DNS provider, have ",(0,l.kt)("em",{parentName:"p"},"owner")," access to that provider. Any members can edit the following fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Root Domain"),(0,l.kt)("li",{parentName:"ul"},"Access Key & Secret Key"),(0,l.kt)("li",{parentName:"ul"},"Members"),(0,l.kt)("li",{parentName:"ul"},"Custom values")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("strong",{parentName:"p"},"Global View"),", select ",(0,l.kt)("strong",{parentName:"p"},"Tools > Global DNS Providers"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For the Global DNS provider that you want to edit, click the ",(0,l.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),"."))),(0,l.kt)("h2",{id:"editing-a-global-dns-entry"},"Editing a Global DNS Entry"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global administrators"),", creator of the Global DNS entry and any users added as ",(0,l.kt)("inlineCode",{parentName:"p"},"members")," to a Global DNS entry, have ",(0,l.kt)("em",{parentName:"p"},"owner")," access to that DNS entry. Any members can edit the following fields:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"FQDN"),(0,l.kt)("li",{parentName:"ul"},"Global DNS Provider"),(0,l.kt)("li",{parentName:"ul"},"Target Projects or Multi-Cluster App"),(0,l.kt)("li",{parentName:"ul"},"DNS TTL"),(0,l.kt)("li",{parentName:"ul"},"Members")),(0,l.kt)("p",null,"Any users who can access the Global DNS entry can ",(0,l.kt)("strong",{parentName:"p"},"only")," add target projects that they have access to. However, users can remove ",(0,l.kt)("strong",{parentName:"p"},"any")," target project as there is no check to confirm if that user has access to the target project."),(0,l.kt)("p",null,"Permission checks are relaxed for removing target projects in order to support situations where the user's permissions might have changed before they were able to delete the target project. Another use case could be that the target project was removed from the cluster before being removed from a target project of the Global DNS entry."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("strong",{parentName:"p"},"Global View"),", select ",(0,l.kt)("strong",{parentName:"p"},"Tools > Global DNS Entries"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"For the Global DNS entry that you want to edit, click the ",(0,l.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),"."))),(0,l.kt)("h2",{id:"global-dns-entry-configuration"},"Global DNS Entry Configuration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FQDN"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the ",(0,l.kt)("strong",{parentName:"td"},"FQDN")," you wish to program on the external DNS.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"Select a Global DNS ",(0,l.kt)("strong",{parentName:"td"},"Provider")," from the list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Resolves To"),(0,l.kt)("td",{parentName:"tr",align:null},"Select if this DNS entry will be for a ",(0,l.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/deploy-apps-across-clusters"},"multi-cluster application")," or for workloads in different ",(0,l.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-Cluster App Target"),(0,l.kt)("td",{parentName:"tr",align:null},"The target for the global DNS entry. You will need to ensure that ",(0,l.kt)("a",{parentName:"td",href:"#adding-annotations-to-ingresses-to-program-the-external-dns"},"annotations are added to any ingresses")," for the applications that you want to target.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DNS TTL"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure the DNS time to live value in seconds. By default, it will be 300 seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Member Access"),(0,l.kt)("td",{parentName:"tr",align:null},"Search for any users that you want to have the ability to manage this Global DNS entry.")))),(0,l.kt)("h2",{id:"dns-provider-configuration"},"DNS Provider Configuration"),(0,l.kt)("h3",{id:"route53"},"Route53"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the provider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Root Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Enter the ",(0,l.kt)("strong",{parentName:"td"},"Root Domain")," of the hosted zone on AWS Route53. If this is not provided, Rancher's Global DNS Provider will work with all hosted zones that the AWS keys can access.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Credential Path"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-where"},"AWS credential path."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Role ARN"),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"},"Amazon Resource Name."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Region"),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions"},"AWS region."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zone"),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.AvailabilityZones"},"AWS zone."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Access Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the AWS ",(0,l.kt)("strong",{parentName:"td"},"Access Key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the AWS ",(0,l.kt)("strong",{parentName:"td"},"Secret Key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Member Access"),(0,l.kt)("td",{parentName:"tr",align:null},"Under ",(0,l.kt)("strong",{parentName:"td"},"Member Access"),", search for any users that you want to have the ability to use this provider. By adding this user, they will also be able to manage the Global DNS Provider entry.")))),(0,l.kt)("h3",{id:"cloudflare"},"CloudFlare"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the provider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Root Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Enter the ",(0,l.kt)("strong",{parentName:"td"},"Root Domain"),". In case this is not provided, Rancher's Global DNS Provider will work with all domains that the keys can access.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy Setting"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to yes, the global DNS entry that gets created for the provider has proxy settings on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API Email"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the CloudFlare ",(0,l.kt)("strong",{parentName:"td"},"API Email"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the CloudFlare ",(0,l.kt)("strong",{parentName:"td"},"API Key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Member Access"),(0,l.kt)("td",{parentName:"tr",align:null},"Search for any users that you want to have the ability to use this provider. By adding this user, they will also be able to manage the Global DNS Provider entry.")))),(0,l.kt)("h3",{id:"alidns"},"AliDNS"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Alibaba Cloud SDK uses TZ data. It needs to be present on ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/share/zoneinfo")," path of the nodes running ",(0,l.kt)("inlineCode",{parentName:"li"},"local")," cluster, and it is mounted to the external DNS pods. If it is not available on the nodes, please follow the ",(0,l.kt)("a",{parentName:"li",href:"https://www.ietf.org/timezones/tzdb-2018f/tz-link.html"},"instruction")," to prepare it."),(0,l.kt)("li",{parentName:"ul"},"Different versions of AliDNS have different allowable TTL range, where the default TTL for a global DNS entry may not be valid. Please see the ",(0,l.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/doc-detail/34338.htm"},"reference")," before adding an AliDNS entry."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter a ",(0,l.kt)("strong",{parentName:"td"},"Name")," for the provider.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Root Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional: Enter the ",(0,l.kt)("strong",{parentName:"td"},"Root Domain"),". In case this is not provided, Rancher's Global DNS Provider will work with all domains that the keys can access.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Access Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the ",(0,l.kt)("strong",{parentName:"td"},"Access Key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the ",(0,l.kt)("strong",{parentName:"td"},"Secret Key"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Member Access"),(0,l.kt)("td",{parentName:"tr",align:null},"Search for any users that you want to have the ability to use this provider. By adding this user, they will also be able to manage the Global DNS Provider entry.")))),(0,l.kt)("h2",{id:"adding-annotations-to-ingresses-to-program-the-external-dns"},"Adding Annotations to Ingresses to program the External DNS"),(0,l.kt)("p",null,"In order for Global DNS entries to be programmed, you will need to add a specific annotation on an ingress in your application or target project."),(0,l.kt)("p",null,"For any application that you want targeted for your Global DNS entry, find an ingress associated with the application."),(0,l.kt)("p",null,"This ingress needs to use a specific ",(0,l.kt)("inlineCode",{parentName:"p"},"hostname")," and an annotation that should match the FQDN of the Global DNS entry."),(0,l.kt)("p",null,"In order for the DNS to be programmed, the following requirements must be met:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ingress routing rule must be set to use a ",(0,l.kt)("inlineCode",{parentName:"li"},"hostname")," that matches the FQDN of the Global DNS entry."),(0,l.kt)("li",{parentName:"ul"},"The ingress must have an annotation (",(0,l.kt)("inlineCode",{parentName:"li"},"rancher.io/globalDNS.hostname"),") and the value of this annotation should match the FQDN of the Global DNS entry.")),(0,l.kt)("p",null,"Once the ingress in your ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/deploy-apps-across-clusters"},"multi-cluster application")," or in your target projects is in an ",(0,l.kt)("inlineCode",{parentName:"p"},"active")," state, the FQDN will be programmed on the external DNS against the Ingress IP addresses."))}c.isMDXComponent=!0}}]);