"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[48866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Rancher Azure Quick Start Guide",description:"Read this step by step Rancher Azure guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached."},o=void 0,l={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/azure",id:"version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/azure",title:"Rancher Azure Quick Start Guide",description:"Read this step by step Rancher Azure guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",source:"@site/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/azure.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/azure",permalink:"/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/azure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/azure.md",tags:[],version:"2.6",lastUpdatedAt:1674508220,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{title:"Rancher Azure Quick Start Guide",description:"Read this step by step Rancher Azure guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached."},sidebar:"tutorialSidebar",previous:{title:"Rancher AWS Marketplace Quick Start",permalink:"/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},next:{title:"Rancher DigitalOcean Quick Start Guide",permalink:"/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:4},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following steps will quickly deploy a Rancher server on Azure in a single-node K3s Kubernetes cluster, with a single-node downstream Kubernetes cluster attached."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deploying to Microsoft Azure will incur charges.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Microsoft Azure Account"),": A Microsoft Azure Account is required to create resources for deploying Rancher and Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription#create-a-subscription-in-the-azure-portal"},"Microsoft Azure Subscription"),": Use this link to follow a tutorial to create a Microsoft Azure subscription if you don't have one yet."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant"},"Micsoroft Azure Tenant"),": Use this link and follow instructions to create a Microsoft Azure tenant."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal"},"Microsoft Azure Client ID/Secret"),": Use this link and follow instructions to create a Microsoft Azure client and secret."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster in Microsoft Azure.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go into the Azure folder containing the Terraform files by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/azure"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rename the ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"azure_subscription_id")," - Microsoft Azure Subscription ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"azure_client_id")," - Microsoft Azure Client ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"azure_client_secret")," - Microsoft Azure Client Secret"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"azure_tenant_id")," - Microsoft Azure Tenant ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/rancher/azure"},"Azure Quickstart Readme")," for more information. Suggestions include:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"azure_location")," - Microsoft Azure region, choose the closest instead of the default (",(0,n.kt)("inlineCode",{parentName:"li"},"East US"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prefix")," - Prefix for all created resources"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"instance_type")," - Compute instance size used, minimum is ",(0,n.kt)("inlineCode",{parentName:"li"},"Standard_DS2_v2")," but ",(0,n.kt)("inlineCode",{parentName:"li"},"Standard_DS2_v3")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Standard_DS3_v2")," could be used if within budget"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"add_windows_node")," - If true, an additional Windows worker node is added to the workload cluster"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"windows_admin_password")," - The admin password of the windows worker node"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Apply complete! Resources: 16 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ssh to the Rancher Server using the ",(0,n.kt)("inlineCode",{parentName:"p"},"id_rsa")," key generated in ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/azure"),"."))),(0,n.kt)("h4",{id:"result"},"Result"),(0,n.kt)("p",null,"Two Kubernetes clusters are deployed into your Azure account, one running Rancher Server and the other ready for experimentation deployments. Please note that while this setup is a great way to explore Rancher functionality, a production setup should follow our high availability setup guidelines. SSH keys for the VMs are auto-generated and stored in the module directory."),(0,n.kt)("h3",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,n.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/azure")," folder, execute ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}c.isMDXComponent=!0}}]);