"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96363],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Rancher Equinix Metal Quick Start"},s=void 0,u={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",id:"getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",title:"Rancher Equinix Metal Quick Start",description:"This tutorial walks you through the following:",source:"@site/docs/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Rancher Equinix Metal Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Vagrant Quick Start",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},next:{title:"Helm CLI Quick Start",permalink:"/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"}},p={},c=[{value:"This tutorial walks you through the following:",id:"this-tutorial-walks-you-through-the-following",level:2},{value:"Quick Start Outline",id:"quick-start-outline",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Provision a Equinix Metal Host",id:"1-provision-a-equinix-metal-host",level:3},{value:"2. Install Rancher",id:"2-install-rancher",level:3},{value:"3. Log In",id:"3-log-in",level:3},{value:"4. Create the Cluster",id:"4-create-the-cluster",level:3},{value:"Finished",id:"finished",level:4},{value:"What&#39;s Next?",id:"whats-next",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"this-tutorial-walks-you-through-the-following"},"This tutorial walks you through the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provisioning an Equinix Metal Server"),(0,i.kt)("li",{parentName:"ul"},"Installation of Rancher 2.x"),(0,i.kt)("li",{parentName:"ul"},"Creation of your first cluster"),(0,i.kt)("li",{parentName:"ul"},"Deployment of an application, Nginx")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. The Docker install is not recommended for production environments. For comprehensive setup instructions, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"Installation"),"."))),(0,i.kt)("h2",{id:"quick-start-outline"},"Quick Start Outline"),(0,i.kt)("p",null,"This Quick Start Guide is divided into different tasks for easier consumption."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/accounts/users/"},"Equinix Metal account")),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/accounts/projects/"},"Equinix Metal project"))),(0,i.kt)("h3",{id:"1-provision-a-equinix-metal-host"},"1. Provision a Equinix Metal Host"),(0,i.kt)("p",null," Begin deoploying an Equinix Metal Host. Equinix Metal Servers can be provisioned by either the Equinix Metal console, api, or cli. You can find instructions on how to deploy with each deployment type on the ",(0,i.kt)("a",{parentName:"p",href:"https://metal.equinix.com/developers/docs/deploy/on-demand/"},"Equinix Metal deployment documentation"),". Yopu can find additional documentation on Equinix Metal server types and prices below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/servers/about/"},"Equinix Metal Server Types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://metal.equinix.com/developers/docs/servers/server-specs/"},"Equinix Metal Pricing"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"When provisioning a new Equinix Metal Server via the CLI or API you will need to be able to provide the following information:  project-id, plan, metro, and the operating-system"),(0,i.kt)("li",{parentName:"ul"},"When using a cloud-hosted virtual machine you need to allow inbound TCP communication to ports 80 and 443.  Please see your cloud-host's documentation for information regarding port configuration."),(0,i.kt)("li",{parentName:"ul"},"For a full list of port requirements, refer to ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"Docker Installation"),"."),(0,i.kt)("li",{parentName:"ul"},"Provision the host according to our ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/installation-requirements"},"Requirements"),".")))),(0,i.kt)("h3",{id:"2-install-rancher"},"2. Install Rancher"),(0,i.kt)("p",null,"To install Rancher on your Equinix Metal host, connect to it and then use a shell to install."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to your Equinix Metal host using your preferred shell, such as PuTTy or a remote Terminal connection.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From your shell, enter the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is installed."),(0,i.kt)("h3",{id:"3-log-in"},"3. Log In"),(0,i.kt)("p",null,"Log in to Rancher to begin using the application. After you log in, you'll make some one-time configurations."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a web browser and enter the IP address of your host: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<SERVER_IP>"),"."),(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<SERVER_IP>")," with your host IP address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When prompted, create a password for the default ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," account there cowpoke!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("strong",{parentName:"p"},"Rancher Server URL"),". The URL can either be an IP address or a host name. However, each node added to your cluster must be able to connect to this URL.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you use a hostname in the URL, this hostname must be resolvable by DNS on the nodes you want to add to you cluster."))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"4-create-the-cluster"},"4. Create the Cluster"),(0,i.kt)("p",null,"Welcome to Rancher! You are now able to create your first Kubernetes cluster."),(0,i.kt)("p",null,"In this task, you can use the versatile ",(0,i.kt)("strong",{parentName:"p"},"Custom")," option. This option lets you add ",(0,i.kt)("em",{parentName:"p"},"any")," Linux host (cloud-hosted VM, on-prem VM, or bare-metal) to be used in a cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("strong",{parentName:"p"},"Custom"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a ",(0,i.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Skip ",(0,i.kt)("strong",{parentName:"p"},"Member Roles")," and ",(0,i.kt)("strong",{parentName:"p"},"Cluster Options"),". We'll tell you about them later.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From ",(0,i.kt)("strong",{parentName:"p"},"Node Role"),", select ",(0,i.kt)("em",{parentName:"p"},"all")," the roles: ",(0,i.kt)("strong",{parentName:"p"},"etcd"),", ",(0,i.kt)("strong",{parentName:"p"},"Control"),", and ",(0,i.kt)("strong",{parentName:"p"},"Worker"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional"),": Rancher auto-detects the IP addresses used for Rancher communication and cluster communication. You can override these using ",(0,i.kt)("inlineCode",{parentName:"p"},"Public Address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Internal Address")," in the ",(0,i.kt)("strong",{parentName:"p"},"Node Address")," section.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Skip the ",(0,i.kt)("strong",{parentName:"p"},"Labels")," stuff. It's not important for now.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you finish running the command on your Linux host, click ",(0,i.kt)("strong",{parentName:"p"},"Done"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("p",null,"Your cluster is created and assigned a state of ",(0,i.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,i.kt)("p",null,"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"p"},"Active"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,i.kt)("h4",{id:"finished"},"Finished"),(0,i.kt)("p",null,"Congratulations! You have created your first cluster."),(0,i.kt)("h4",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."))}d.isMDXComponent=!0}}]);