"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24954],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Elasticsearch",weight:200,aliases:["/rancher/v2.0-v2.4/en/tools/logging/elasticsearch/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/elasticsearch","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/elasticsearch","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/elasticsearch","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/elasticsearch/"]},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/cluster-logging/elasticsearch",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch",title:"Elasticsearch",description:"If your organization uses Elasticsearch, either on premise or in the cloud, you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Elasticsearch deployment to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/elasticsearch",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/elasticsearch.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662795105,formattedLastUpdatedAt:"9/10/2022",frontMatter:{title:"Elasticsearch",weight:200,aliases:["/rancher/v2.0-v2.4/en/tools/logging/elasticsearch/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/elasticsearch","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/elasticsearch","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/elasticsearch","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/elasticsearch/"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Logging",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"},next:{title:"Fluentd",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/fluentd"}},p={},u=[{value:"Elasticsearch Deployment Configuration",id:"elasticsearch-deployment-configuration",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your organization uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"Elasticsearch"),", either on premise or in the cloud, you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Elasticsearch deployment to view logs."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")," Configure an ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/cloud/saas-release/ec-create-deployment.html"},"Elasticsearch deployment"),".")),(0,i.kt)("h2",{id:"elasticsearch-deployment-configuration"},"Elasticsearch Deployment Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Endpoint")," field, enter the IP address and port of your Elasticsearch instance. You can find this information from the dashboard of your Elasticsearch deployment."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Elasticsearch usually uses port ",(0,i.kt)("inlineCode",{parentName:"li"},"9200")," for HTTP and ",(0,i.kt)("inlineCode",{parentName:"li"},"9243")," for HTTPS."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/x-pack/current/xpack-introduction.html"},"X-Pack Security"),", enter your Elasticsearch ",(0,i.kt)("strong",{parentName:"p"},"Username")," and ",(0,i.kt)("strong",{parentName:"p"},"Password")," for authentication.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter an ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/kibana/current/index-patterns.html"},"Index Pattern"),"."))),(0,i.kt)("h2",{id:"ssl-configuration"},"SSL Configuration"),(0,i.kt)("p",null,"If your instance of Elasticsearch uses SSL, your ",(0,i.kt)("strong",{parentName:"p"},"Endpoint")," will need to begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),". With the correct endpoint, the ",(0,i.kt)("strong",{parentName:"p"},"SSL Configuration")," form is enabled and ready to be completed."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provide the ",(0,i.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,i.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,i.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can use either a self-signed certificate or one provided by a certificate authority.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can generate a self-signed certificate using an openssl command. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your ",(0,i.kt)("strong",{parentName:"p"},"Client Key Password"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your ",(0,i.kt)("strong",{parentName:"p"},"SSL Version"),". The default version is ",(0,i.kt)("inlineCode",{parentName:"p"},"TLSv1_2"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select whether or not you want to verify your SSL."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you are using a self-signed certificate, select ",(0,i.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),", provide the ",(0,i.kt)("strong",{parentName:"li"},"CA Certificate PEM"),". You can copy and paste the certificate or upload it using the ",(0,i.kt)("strong",{parentName:"li"},"Read from a file")," button.  "),(0,i.kt)("li",{parentName:"ul"},"If you are using a certificate from a certificate authority, select ",(0,i.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),". You do not need to provide a ",(0,i.kt)("strong",{parentName:"li"},"CA Certificate PEM"),".")))))}m.isMDXComponent=!0}}]);