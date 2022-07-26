"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4350],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3544:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"compatibility-of-apache-devLake-with-postgreSQL",title:"Compatibility of Apache DevLake with PostgreSQL",authors:"Geyu",tags:["devlake","database","postgresql"]},s=void 0,p={permalink:"/blog/compatibility-of-apache-devLake-with-postgreSQL",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-06-23-compatibility-of-apache-devLake-with-postgreSQL/index.md",source:"@site/blog/2022-06-23-compatibility-of-apache-devLake-with-postgreSQL/index.md",title:"Compatibility of Apache DevLake with PostgreSQL",description:"Apache DevLake is a dev data platform that can collect and integrate data from different dev tools including Jira, Github, Gitlab and Jenkins.",date:"2022-06-23T00:00:00.000Z",formattedDate:"June 23, 2022",tags:[{label:"devlake",permalink:"/blog/tags/devlake"},{label:"database",permalink:"/blog/tags/database"},{label:"postgresql",permalink:"/blog/tags/postgresql"}],readingTime:2.5833333333333335,truncated:!1,authors:[{name:"Geyu Chen",title:"Apache DevLake Contributor",url:"https://github.com/fredtheflat",imageURL:"https://github.com/fredtheflat.png",key:"Geyu"}],frontMatter:{slug:"compatibility-of-apache-devLake-with-postgreSQL",title:"Compatibility of Apache DevLake with PostgreSQL",authors:"Geyu",tags:["devlake","database","postgresql"]},prevItem:{title:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357",permalink:"/blog/2022/07/15/welcome-open-source"},nextItem:{title:"refdiff\u63d2\u4ef6\u7684\u8ba1\u7b97\u63d0\u4ea4\u7248\u672c\u5dee\u5f02\u7b97\u6cd5",permalink:"/blog/refdiff-calculate-commits-diff"}},d={authorsImageUrls:[void 0]},c=[{value:"1.Different  Data Types",id:"1different--data-types",level:2},{value:"PostgreSQL does not have a uint type",id:"postgresql-does-not-have-a-uint-type",level:3},{value:"MySQL does not have a bool data type",id:"mysql-does-not-have-a-bool-data-type",level:3},{value:"2.Different Behaviors",id:"2different-behaviors",level:2},{value:"Bulk insertion",id:"bulk-insertion",level:3},{value:"Inconsistent definition of model with schema",id:"inconsistent-definition-of-model-with-schema",level:3},{value:"3.MySQL-Specific Functions",id:"3mysql-specific-functions",level:2},{value:"4.Different Grammar",id:"4different-grammar",level:2},{value:"Backticks",id:"backticks",level:3},{value:"Non-standard delete statement",id:"non-standard-delete-statement",level:3}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache DevLake is a dev data platform that can collect and integrate data from different dev tools including Jira, Github, Gitlab and Jenkins."),(0,i.kt)("p",null,"This blog will not aim at a comprehensive summary of the compatibility of database but a record of issues for future reference."),(0,i.kt)("h2",{id:"1different--data-types"},"1.Different  Data Types"),(0,i.kt)("h3",{id:"postgresql-does-not-have-a-uint-type"},"PostgreSQL does not have a uint type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'type JenkinsBuild struct {\n common.NoPKModel\n JobName           string  `gorm:"primaryKey;type:varchar(255)"`\n Duration          float64 // build time\n DisplayName       string  // "#7"\n EstimatedDuration float64\n Number            int64 `gorm:"primaryKey;type:INT(10) UNSIGNED NOT NULL"`\n Result            string\n Timestamp         int64     // start time\n StartTime         time.Time // convered by timestamp\n CommitSha         string\n}\n')),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"JenkinsBuild.Number"),", the",(0,i.kt)("inlineCode",{parentName:"p"},"gorm"),"struct tag used ",(0,i.kt)("inlineCode",{parentName:"p"},"UNSIGNED"),", which will lead to the failure to create table and should be removed."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/N7E9Vwd.png",alt:null})),(0,i.kt)("h3",{id:"mysql-does-not-have-a-bool-data-type"},"MySQL does not have a bool data type"),(0,i.kt)("p",null,"For a field defined as bool type in model, gorm will map it to MySQL's TINYINT data type, which can be queried directly with 0 or 1 in SQL, but PostgreSQL has a bool type, so gorm will map it to the BOOL type. If 0 or 1 is still used in SQL to query, there will be a report of error."),(0,i.kt)("p",null,"Here is an example(only relevant fields are shown in the example). The lookup statement works in MySQL, but will lead to an error in PostgreSQL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'type GitlabMergeRequestNote struct {\n MergeRequestId  int    `gorm:"index"`\n System          bool \n}\n \ndb.Where("merge_request_id = ? AND `system` = 0", gitlabMr.GitlabId).\n')),(0,i.kt)("p",null,"After changing the sentence as it follows, an error will still be reported. The reason will be shown in the part about backticks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'db.Where("merge_request_id = ? AND `system` = ?", gitlabMr.GitlabId, false)\n')),(0,i.kt)("h2",{id:"2different-behaviors"},"2.Different Behaviors"),(0,i.kt)("h3",{id:"bulk-insertion"},"Bulk insertion"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"ON CONFLIT UPDATE ALL")," was used to achieve bulk insertion, and if there are multiple records with the same primary key, it will report errors in PostgreSQL but not in MySQL.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/zaExAUG.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/BpZY8dN.png",alt:null})),(0,i.kt)("h3",{id:"inconsistent-definition-of-model-with-schema"},"Inconsistent definition of model with schema"),(0,i.kt)("p",null,"For example, in the model definition, ",(0,i.kt)("inlineCode",{parentName:"p"},"GithubPullRequest.AuthorId")," is of the int type, but this field in the database is of VARCHAR type. When inserting data, MySQL will accept it, but ProstgresSQL will report an error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'type GithubPullRequest struct {\n GithubId        int    `gorm:"primaryKey"`\n RepoId          int    `gorm:"index"`\n Number          int    `gorm:"index"` \n State           string `gorm:"type:varchar(255)"`\n Title           string `gorm:"type:varchar(255)"`\n GithubCreatedAt time.Time\n GithubUpdatedAt time.Time `gorm:"index"`\n ClosedAt        *time.Time\n // In order to get the following fields, we need to collect PRs individually from GitHub\n Additions      int\n Deletions      int\n Comments       int\n Commits        int\n ReviewComments int\n Merged         bool\n MergedAt       *time.Time\n Body           string\n Type           string `gorm:"type:varchar(255)"`\n Component      string `gorm:"type:varchar(255)"`\n MergeCommitSha string `gorm:"type:varchar(40)"`\n HeadRef        string `gorm:"type:varchar(255)"`\n BaseRef        string `gorm:"type:varchar(255)"`\n BaseCommitSha  string `gorm:"type:varchar(255)"`\n HeadCommitSha  string `gorm:"type:varchar(255)"`\n Url            string `gorm:"type:varchar(255)"`\n AuthorName     string `gorm:"type:varchar(100)"`\n AuthorId       int\n common.NoPKModel\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/onxGG8d.png",alt:null})),(0,i.kt)("h2",{id:"3mysql-specific-functions"},"3.MySQL-Specific Functions"),(0,i.kt)("p",null,"We used the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP_CONCAT"),"function in a complex query. Although there are similar functions in PostgreSQL, the function names are different and the usage is slightly different."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'cursor2, err := db.Table("pull_requests pr1").\n  Joins("left join pull_requests pr2 on pr1.parent_pr_id = pr2.id").Group("pr1.parent_pr_id, pr2.created_date").Where("pr1.parent_pr_id != \'\'").\n  Joins("left join repos on pr2.base_repo_id = repos.id").\n  Order("pr2.created_date ASC").\n  Select(`pr2.key as parent_pr_key, pr1.parent_pr_id as parent_pr_id, GROUP_CONCAT(pr1.base_ref order by pr1.base_ref ASC) as cherrypick_base_branches, \n   GROUP_CONCAT(pr1.key order by pr1.base_ref ASC) as cherrypick_pr_keys, repos.name as repo_name, \n   concat(repos.url, \'/pull/\', pr2.key) as parent_pr_url`).Rows()\n')),(0,i.kt)("p",null,"Solution:\nWe finally decided to use two steps to achieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP_CONCAT")," function. First we used the simplest SQL query to get multiple pieces of the sorted data, and then used the code to group them."),(0,i.kt)("p",null,"After modification:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},"    cursor2, err := db.Raw(\n  `\n   SELECT pr2.pull_request_key                 AS parent_pr_key,\n          pr1.parent_pr_id                     AS parent_pr_id,\n          pr1.base_ref                         AS cherrypick_base_branch,\n          pr1.pull_request_key                 AS cherrypick_pr_key,\n          repos.NAME                           AS repo_name,\n          Concat(repos.url, '/pull/', pr2.pull_request_key) AS parent_pr_url,\n        pr2.created_date\n   FROM   pull_requests pr1\n          LEFT JOIN pull_requests pr2\n                 ON pr1.parent_pr_id = pr2.id\n          LEFT JOIN repos\n                 ON pr2.base_repo_id = repos.id\n   WHERE  pr1.parent_pr_id != ''\n   ORDER  BY pr1.parent_pr_id,\n             pr2.created_date,\n       pr1.base_ref ASC\n   `).Rows()\n")),(0,i.kt)("h2",{id:"4different-grammar"},"4.Different Grammar"),(0,i.kt)("h3",{id:"backticks"},"Backticks"),(0,i.kt)("p",null,"We used backticks in some SQL statements to protect field names from conflicting with MySQL reserved words, which can lead to errors in PostgreSQL. To solve this problem we revisited our code, modified all field names that conflict with reserved words, and removed the backticks in the SQL statement. In the example just mentioned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'db.Where("merge_request_id = ? AND `system` = ?", gitlabMr.GitlabId, false)\n')),(0,i.kt)("p",null,"Solution:\nWe changed ",(0,i.kt)("inlineCode",{parentName:"p"},"system")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"is_system")," to avoid the usage of backticks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},'db.Where("merge_request_id = ? AND is_system = ?", gitlabMr.GitlabId, false)\n')),(0,i.kt)("h3",{id:"non-standard-delete-statement"},"Non-standard delete statement"),(0,i.kt)("p",null,"There were delete statements as followed in our code, which are legal in MySQL but will report an error in PostgreSQL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql="},"err := db.Exec(`\n DELETE ic\n FROM jira_issue_commits ic\n LEFT JOIN jira_board_issues bi ON (bi.source_id = ic.source_id AND bi.issue_id = ic.issue_id)\n WHERE ic.source_id = ? AND bi.board_id = ?\n `, sourceId, boardId).Error\n")))}m.isMDXComponent=!0}}]);