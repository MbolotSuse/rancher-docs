"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(r),k=n,m=s["".concat(i,".").concat(k)]||s[k]||u[k]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},65809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Backing up Rancher Installed with Docker"},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",title:"Backing up Rancher Installed with Docker",description:"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster.",source:"@site/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",tags:[],version:"current",lastUpdatedAt:1668729802,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{title:"Backing up Rancher Installed with Docker"},sidebar:"tutorialSidebar",previous:{title:"Migrating Rancher to a New Cluster",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},next:{title:"Restoring Backups\u2014Docker Installs",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"}},i={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Creating a Backup",id:"creating-a-backup",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster."),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"During the creation of your backup, you'll enter a series of commands, replacing placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,n.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run --name busybox-backup-<DATE> --volumes-from rancher-data-<DATE> -v $PWD:/backup busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,n.kt)("p",null,"In this command, ",(0,n.kt)("inlineCode",{parentName:"p"},"<DATE>")," is a placeholder for the date that the data container and backup were created. ",(0,n.kt)("inlineCode",{parentName:"p"},"9-27-18")," for example."),(0,n.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the ",(0,n.kt)("a",{parentName:"p",href:"#creating-a-backup"},"procedure below"),"."),(0,n.kt)("sup",null,"Terminal ",(0,n.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," and ",(0,n.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Placeholder Reference",src:r(50953).Z,width:"1275",height:"258"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,n.kt)("td",{parentName:"tr",align:null},"The version of Rancher that you're creating a backup for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,n.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can obtain ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped with ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime while creating backups."),(0,n.kt)("h2",{id:"creating-a-backup"},"Creating a Backup"),(0,n.kt)("p",null,"This procedure creates a backup that you can restore if Rancher encounters a disaster scenario."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{id:"backup"}),"Use the command below, replacing each placeholder, to create a data container from the Rancher container that you just stopped.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker create --volumes-from <RANCHER_CONTAINER_NAME> --name rancher-data-<DATE> rancher/rancher:<RANCHER_CONTAINER_TAG>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{id:"tarball"}),"From the data container that you just created (",(0,n.kt)("code",null,"rancher-data-<DATE>"),"), create a backup tarball (",(0,n.kt)("code",null,"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),"). Use the following command, replacing each placeholder:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker run --name busybox-backup-<DATE> --volumes-from rancher-data-<DATE> -v $PWD:/backup:z busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step Result:")," A stream of commands runs on the screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"ls")," command to confirm that the backup tarball was created. It will have a name similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Move your backup tarball to a safe location external to your Rancher Server. Then delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-data-<DATE>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"busybox-backup-<DATE>")," containers from your Rancher Server."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker rm rancher-data-<DATE>\ndocker rm busybox-backup-<DATE>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart Rancher Server. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," A backup tarball of your Rancher Server data is created. See ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Restoring Backups: Docker Installs")," if you need to restore backup data."))}u.isMDXComponent=!0},50953:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);