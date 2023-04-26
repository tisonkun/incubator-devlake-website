"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[96199],{30221:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},s=void 0,r={unversionedId:"Configuration/Jira",id:"Configuration/Jira",title:"Jira",description:"Config UI instruction for Jira",source:"@site/docs/Configuration/Jira.md",sourceDirName:"Configuration",slug:"/Configuration/Jira",permalink:"/docs/next/Configuration/Jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Configuration/Jira.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/docs/next/Configuration/GitLab"},next:{title:"Jenkins",permalink:"/docs/next/Configuration/Jenkins"}},l={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Connection Name",id:"connection-name",level:3},{value:"Jira Version",id:"jira-version",level:3},{value:"Jira Cloud",id:"jira-cloud",level:3},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"E-mail",id:"e-mail",level:4},{value:"API Token",id:"api-token",level:4},{value:"Jira Server",id:"jira-server",level:3},{value:"Endpoint URL",id:"endpoint-url-1",level:4},{value:"Authentication Method",id:"authentication-method",level:4},{value:"Username",id:"username",level:4},{value:"Password",id:"password",level:4},{value:"Personal Access Token",id:"personal-access-token",level:4},{value:"Token Permissions",id:"token-permissions",level:3},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:3},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:3},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:2},{value:"Boards",id:"boards",level:3},{value:"Data Entities",id:"data-entities",level:3},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:2},{value:"Issue Tracking",id:"issue-tracking",level:3},{value:"Additional Settings",id:"additional-settings",level:3},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit Config UI at: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-data-connections",src:i(71794).Z,width:"2264",height:"1486"})),(0,a.kt)("h3",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,a.kt)("h3",{id:"jira-version"},"Jira Version"),(0,a.kt)("p",null,"Select if you use Jira Cloud or Jira Server. "),(0,a.kt)("h3",{id:"jira-cloud"},"Jira Cloud"),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<mydomain>.atlassian.net/rest/")),(0,a.kt)("p",null,"Please note: the endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"e-mail"},"E-mail"),(0,a.kt)("p",null,"Please enter the e-mail of your Jira account."),(0,a.kt)("h4",{id:"api-token"},"API Token"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"how to create an API token"),"."),(0,a.kt)("p",null,"Please note: Jira API token and Personal Access Token are two different tokens."),(0,a.kt)("h3",{id:"jira-server"},"Jira Server"),(0,a.kt)("h4",{id:"endpoint-url-1"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://jira.<mydomain>.com/rest/")),(0,a.kt)("p",null,"Please note: the endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,a.kt)("h4",{id:"authentication-method"},"Authentication Method"),(0,a.kt)("p",null,"Jira Server supports two ways of authentication: using basic authentication or Personal Access Token."),(0,a.kt)("h4",{id:"username"},"Username"),(0,a.kt)("p",null,"Please enter the username of your Jira account."),(0,a.kt)("h4",{id:"password"},"Password"),(0,a.kt)("p",null,"Please enter the password of your Jira account."),(0,a.kt)("h4",{id:"personal-access-token"},"Personal Access Token"),(0,a.kt)("p",null,"Learn about ",(0,a.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html"},"how to create a Personal Access Token"),"."),(0,a.kt)("h3",{id:"token-permissions"},"Token Permissions"),(0,a.kt)("p",null,"For both Jira Cloud and Jira Server, when accessing Jira API, users may encounter access restrictions if their token does not have sufficient permissions. This is typically caused by insufficient scope or role settings for the Jira token."),(0,a.kt)("p",null,"To solve this issue, users can take the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Checking User Permissions")),(0,a.kt)("p",null,'Users can confirm whether they have sufficient permissions by checking their permissions in Jira. For Cloud users, they can view their global and project permissions through the "Permissions" tab on the "Profile" page. For Server users, they can log in to Jira as an administrator and view user permissions on the "User Management" page.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring Sufficient Permissions")),(0,a.kt)("p",null,"Before using the Jira API, users need to ensure that their account has at least the necessary project or global permissions. Global permissions include various Jira system settings and management operations, while project permissions control specific operations and configurations for each Jira project. Users can assign roles such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Administrator"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Lead"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Developer"),", etc. for the corresponding projects, or assign global permissions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Jira Administrators"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Jira Software Administrators"),", etc. It is recommended to minimize the permissions granted to the API to ensure system security."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solving Access Restrictions")),(0,a.kt)("p",null,"To solve access restrictions caused by insufficient Jira token permissions, users should check the token's permission settings to ensure the correct scope and role are set. If the permission settings are correct but the required API is still inaccessible, consider using other authentication methods, such as authenticating with a username and password. If the issue persists, contact the Jira administrator for further assistance."),(0,a.kt)("h3",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect Jira data. You can adjust the rate limit if you want to increase or lower the speed. If you encounter a 403 error during data collection, please lower the rate limit."),(0,a.kt)("p",null,"Jira(Cloud) uses a dynamic rate limit and has no clear rate limit. For Jira Server's rate limiting, please contact your Jira Server admin to ",(0,a.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your Jira instance. Please do not use a rate that exceeds this number."),(0,a.kt)("h3",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h2",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-set-data-scope",src:i(87519).Z,width:"2344",height:"1060"})),(0,a.kt)("h3",{id:"boards"},"Boards"),(0,a.kt)("p",null,"Choose the Jira boards to collect."),(0,a.kt)("h3",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Jira entities, you can unselect some entities to accerlerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: Jira issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Jira accounts, etc.")),(0,a.kt)("h2",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,"Adding transforamtion to the Jira data you wish to collect can help standardize the data to view more metrics, such as ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Metrics/RequirementLeadTime"},"Requirement Lead Time"),", ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Metrics/BugAge"},"Bug Age")," and DORA - ",(0,a.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Metrics/MTTR"},"Median Time to Restore Service"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-1",src:i(99458).Z,width:"2362",height:"572"}),"\n",(0,a.kt)("img",{alt:"jira-add-transformation-2",src:i(84894).Z,width:"1906",height:"1700"}),"\n",(0,a.kt)("img",{alt:"jira-add-transformation-3",src:i(10699).Z,width:"1912",height:"648"})),(0,a.kt)("p",null,'Without adding transformation rules, you can not view all charts in "Jira" or "Engineering Throughput and Cycle Time" dashboards.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each Jira board has at most ONE set of transformation rules."),(0,a.kt)("h3",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requirement: choose the issue types to be transformed to "REQUIREMENT".'),(0,a.kt)("li",{parentName:"ul"},'Bug: choose the issue types to be transformed to "BUG".'),(0,a.kt)("li",{parentName:"ul"},'Incident: choose the issue types to be transformed to "INCIDENT".'),(0,a.kt)("li",{parentName:"ul"},'Epic Key: choose the custom field that represents Epic key. In most cases, it is "Epic Link".'),(0,a.kt)("li",{parentName:"ul"},'Story Point: choose the custom field that represents story points. In most cases, it is "Story Points".')),(0,a.kt)("h3",{id:"additional-settings"},"Additional Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remotelink Commit SHA: parse the commits from an issue's remote links by the given regular expression so that the relationship between ",(0,a.kt)("inlineCode",{parentName:"li"},"issues")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," can be created. You can directly use the regular expression ",(0,a.kt)("inlineCode",{parentName:"li"},"/commit/([0-9a-f]{40})$"),".")),(0,a.kt)("h2",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}u.isMDXComponent=!0},71794:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-create-a-connection-3f933bb21ec56a7d065f9d855d7aa43b.png"},87519:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-data-scope-09411be2fa2e46556a4ade3e5ccc652b.png"},99458:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-transformation1-9606c40f88095fd2193843b4f1cd7552.png"},84894:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-transformation2-7a60a7493aceaaf8878f9553fd851368.png"},10699:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-transformation3-6f610f09de58b37bfc0ac2ab645809df.png"}}]);