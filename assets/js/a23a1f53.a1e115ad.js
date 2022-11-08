"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78855],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,d=m["".concat(i,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Outputs and ClusterOutputs"},i=void 0,u={unversionedId:"integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",id:"integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",title:"Outputs and ClusterOutputs",description:"For the full details on configuring Outputs and ClusterOutputs, see the Banzai Cloud Logging operator documentation.",source:"@site/docs/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",sourceDirName:"integrations-in-rancher/logging/custom-resource-configuration",slug:"/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",permalink:"/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Outputs and ClusterOutputs"},sidebar:"tutorialSidebar",previous:{title:"Flows and ClusterFlows",permalink:"/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},next:{title:"Monitoring and Alerting",permalink:"/pages-for-subheaders/monitoring-and-alerting"}},p={},c=[{value:"Outputs",id:"outputs",level:2},{value:"ClusterOutputs",id:"clusteroutputs",level:2},{value:"YAML Examples",id:"yaml-examples",level:2},{value:"Cluster Output to ElasticSearch",id:"cluster-output-to-elasticsearch",level:3},{value:"Output to Splunk",id:"output-to-splunk",level:3},{value:"Output to Syslog",id:"output-to-syslog",level:3},{value:"Unsupported Outputs",id:"unsupported-outputs",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For the full details on configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/output/"},"Banzai Cloud Logging operator documentation.")),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," resource defines where your ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows")," can send the log messages. ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," are the final stage for a logging ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," is a namespaced resource, which means only a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," within the same namespace can access it."),(0,r.kt)("p",null,"You can use secrets in these definitions, but they must also be in the same namespace."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," can be configured by filling out forms in the Rancher UI."),(0,r.kt)("p",null,"For the details of ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/output_types/"},"OutputSpec.")),(0,r.kt)("p",null,"The Rancher UI provides forms for configuring the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon ElasticSearch"),(0,r.kt)("li",{parentName:"ul"},"Azure Storage"),(0,r.kt)("li",{parentName:"ul"},"Cloudwatch"),(0,r.kt)("li",{parentName:"ul"},"Datadog"),(0,r.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,r.kt)("li",{parentName:"ul"},"File"),(0,r.kt)("li",{parentName:"ul"},"Fluentd"),(0,r.kt)("li",{parentName:"ul"},"GCS"),(0,r.kt)("li",{parentName:"ul"},"Kafka"),(0,r.kt)("li",{parentName:"ul"},"Kinesis Stream"),(0,r.kt)("li",{parentName:"ul"},"LogDNA"),(0,r.kt)("li",{parentName:"ul"},"LogZ"),(0,r.kt)("li",{parentName:"ul"},"Loki"),(0,r.kt)("li",{parentName:"ul"},"New Relic"),(0,r.kt)("li",{parentName:"ul"},"Splunk"),(0,r.kt)("li",{parentName:"ul"},"SumoLogic"),(0,r.kt)("li",{parentName:"ul"},"Syslog")),(0,r.kt)("p",null,"The Rancher UI provides forms for configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," type, target, and access credentials if applicable."),(0,r.kt)("p",null,"For example configuration for each logging plugin supported by the logging operator, see the ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/"},"logging operator documentation.")),(0,r.kt)("h2",{id:"clusteroutputs"},"ClusterOutputs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," defines an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," without namespace restrictions. It is only effective when deployed in the same namespace as the logging operator."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," can be configured by filling out forms in the Rancher UI."),(0,r.kt)("p",null,"For the details of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," custom resource, see ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/clusteroutput_types/"},"ClusterOutput.")),(0,r.kt)("h2",{id:"yaml-examples"},"YAML Examples"),(0,r.kt)("p",null,"Once logging is installed, you can use these examples to help craft your own logging pipeline."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cluster-output-to-elasticsearch"},"Cluster Output to ElasticSearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output-to-splunk"},"Output to Splunk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output-to-syslog"},"Output to Syslog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unsupported-outputs"},"Unsupported Outputs"))),(0,r.kt)("h3",{id:"cluster-output-to-elasticsearch"},"Cluster Output to ElasticSearch"),(0,r.kt)("p",null,"Let's say you wanted to send all logs in your cluster to an ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch")," cluster. First, we create a cluster ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n    name: "example-es"\n    namespace: "cattle-logging-system"\nspec:\n    elasticsearch:\n      host: elasticsearch.example.com\n      port: 9200\n      scheme: http\n')),(0,r.kt)("p",null,"We have created this ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),", without elasticsearch configuration, in the same namespace as our operator: ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system."),". Any time we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),", we have to put it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,r.kt)("p",null,"Now that we have configured where we want the logs to go, let's configure all logs to go to that ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n    name: "all-logs"\n    namespace: "cattle-logging-system"\nspec:\n  globalOutputRefs:\n    - "example-es"\n')),(0,r.kt)("p",null,"We should now see our configured index with logs in it."),(0,r.kt)("h3",{id:"output-to-splunk"},"Output to Splunk"),(0,r.kt)("p",null,"What if we have an application team who only wants logs from a specific namespaces sent to a ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk")," server? For this case, we can use namespaced ",(0,r.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Flows"),"."),(0,r.kt)("p",null,"Before we start, let's set up that team's application: ",(0,r.kt)("inlineCode",{parentName:"p"},"coolapp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: devteam\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: coolapp\n  namespace: devteam\n  labels:\n    app: coolapp\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: coolapp\n  template:\n    metadata:\n      labels:\n        app: coolapp\n    spec:\n      containers:\n        - name: generator\n          image: paynejacob/loggenerator:latest\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"coolapp")," running, we will follow a similar path as when we created a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),". However, unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", we create our ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," in our application's namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Output\nmetadata:\n  name: "devteam-splunk"\n  namespace: "devteam"\nspec:\n  splunkHec:\n    hec_host: splunk.example.com\n    hec_port: 8088\n    protocol: http\n')),(0,r.kt)("p",null,"Once again, let's feed our ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," some logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: "devteam-logs"\n  namespace: "devteam"\nspec:\n  localOutputRefs:\n    - "devteam-splunk"\n')),(0,r.kt)("h3",{id:"output-to-syslog"},"Output to Syslog"),(0,r.kt)("p",null,"Let's say you wanted to send all logs in your cluster to an ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," server. First, we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: "example-syslog"\n  namespace: "cattle-logging-system"\nspec:\n  syslog:\n    buffer:\n      timekey: 30s\n      timekey_use_utc: true\n      timekey_wait: 10s\n      flush_interval: 5s\n    format:\n      type: json\n      app_name_field: test\n    host: syslog.example.com\n    insecure: true\n    port: 514\n    transport: tcp\n')),(0,r.kt)("p",null,"Now that we have configured where we want the logs to go, let's configure all logs to go to that ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: "all-logs"\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - "example-syslog"\n')),(0,r.kt)("h3",{id:"unsupported-outputs"},"Unsupported Outputs"),(0,r.kt)("p",null,"For the final example, we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," to write logs to a destination that is not supported out of the box:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on syslog:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," is a supported ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),". However, this example still provides an overview on using unsupported plugins."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: syslog-config\n  namespace: cattle-logging-system\ntype: Opaque\nstringData:\n  fluent-bit.conf: |\n    [INPUT]\n        Name              forward\n        Port              24224\n\n    [OUTPUT]\n        Name              syslog\n        InstanceName      syslog-output\n        Match             *\n        Addr              syslog.example.com\n        Port              514\n        Cluster           ranchers\n\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fluentbit-syslog-forwarder\n  namespace: cattle-logging-system\n  labels:\n    output: syslog\nspec:\n  selector:\n    matchLabels:\n      output: syslog\n  template:\n    metadata:\n      labels:\n        output: syslog\n    spec:\n      containers:\n      - name: fluentbit\n        image: paynejacob/fluent-bit-out-syslog:latest\n        ports:\n          - containerPort: 24224\n        volumeMounts:\n          - mountPath: "/fluent-bit/etc/"\n            name: configuration\n      volumes:\n      - name: configuration\n        secret:\n          secretName: syslog-config\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: syslog-forwarder\n  namespace: cattle-logging-system\nspec:\n  selector:\n    output: syslog\n  ports:\n    - protocol: TCP\n      port: 24224\n      targetPort: 24224\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: all-logs\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - syslog\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: syslog\n  namespace: cattle-logging-system\nspec:\n  forward:\n    servers:\n      - host: "syslog-forwarder.cattle-logging-system"\n    require_ack_response: false\n    ignore_network_errors_at_startup: false\n')),(0,r.kt)("p",null,"Let's break down what is happening here. First, we create a deployment of a container that has the additional ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," plugin and accepts logs forwarded from another ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd"),". Next we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," configured as a forwarder to our deployment. The deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd")," will then forward all logs to the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," destination."))}g.isMDXComponent=!0}}]);