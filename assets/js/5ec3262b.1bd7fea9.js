"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[4491],{2084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=t(4848),r=t(8453);const i={},l="Puff-Pastry",d={id:"Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/index",title:"Puff-Pastry",description:"\u7531\u4e8e\u5728 docker-compose.yml \u6587\u4ef6\u4e2d\u6307\u5b9a\u4e86\u7f51\u7edc\u7f51\u6bb5\uff0c\u6240\u4ee5\u5982\u679c\u53d1\u751f\u7f51\u6bb5\u51b2\u7a81\uff0c\u8bf7\u624b\u52a8\u4fee\u6539 docker-compose.yml \u4e2d\u5404\u4e2a\u7f51\u7edc\u7684\u7f51\u6bb5\u8bbe\u7f6e",source:"@site/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/index.md",sourceDirName:"Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry",slug:"/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/",permalink:"/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/index.md",tags:[],version:"current",frontMatter:{},sidebar:"Penetration_Sidebar",previous:{title:"Docker CFS",permalink:"/docs/Penetration/Intranet-Penetration/Docker-CFS/"},next:{title:"Puff-Pastry WriteUp",permalink:"/docs/Penetration/Intranet-Penetration/Docker-CFS/Puff-Pastry/writeup"}},h={},o=[{value:"\u73af\u5883\u7ed3\u6784\u603b\u89c8",id:"\u73af\u5883\u7ed3\u6784\u603b\u89c8",level:2},{value:"\u5355\u73af\u5883\u4ecb\u7ecd",id:"\u5355\u73af\u5883\u4ecb\u7ecd",level:2},{value:"web - shiro",id:"web---shiro",level:3},{value:"web-thinkphp",id:"web-thinkphp",level:3},{value:"db-redis",id:"db-redis",level:3},{value:"service-phpmyadmin",id:"service-phpmyadmin",level:3},{value:"web-struts2",id:"web-struts2",level:3},{value:"db-postgresql",id:"db-postgresql",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"puff-pastry",children:"Puff-Pastry"}),"\n",(0,s.jsx)(n.admonition,{title:"\u73af\u5883\u90e8\u7f72\u6ce8\u610f\u4e8b\u9879",type:"info",children:(0,s.jsx)(n.p,{children:"\u7531\u4e8e\u5728 docker-compose.yml \u6587\u4ef6\u4e2d\u6307\u5b9a\u4e86\u7f51\u7edc\u7f51\u6bb5\uff0c\u6240\u4ee5\u5982\u679c\u53d1\u751f\u7f51\u6bb5\u51b2\u7a81\uff0c\u8bf7\u624b\u52a8\u4fee\u6539 docker-compose.yml \u4e2d\u5404\u4e2a\u7f51\u7edc\u7684\u7f51\u6bb5\u8bbe\u7f6e"})}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u7ed3\u6784\u603b\u89c8",children:"\u73af\u5883\u7ed3\u6784\u603b\u89c8"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Puff-Pastry \u7f51\u7edc\u62d3\u6251",src:t(4369).A+"",width:"1136",height:"724"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5355\u73af\u5883\u4ecb\u7ecd",children:"\u5355\u73af\u5883\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.h3,{id:"web---shiro",children:"web - shiro"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u9776\u673a\u6f0f\u6d1e\u7f16\u53f7\u4e3a\uff1aCVE-2016-4437\uff0c\u5373 Apache Shiro 1.2.4 \u53cd\u5e8f\u5217\u5316\u6f0f\u6d1e"}),"\n",(0,s.jsxs)(n.p,{children:["\u73af\u5883\u53c2\u8003 Vulhub \u7684\u793a\u4f8b\u73af\u5883\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/vulhub/vulhub/tree/master/shiro/CVE-2016-4437",children:"vulhub/shiro/CVE-2016-4437 - Github"}),"\uff0c\u5e76\u9488\u5bf9\u591a\u5c42\u5185\u7f51\u7684\u6e17\u900f\u573a\u666f\uff0c\u4e3a\u4e86\u964d\u4f4e\u96be\u5ea6\uff0c\u800c\u989d\u5916\u589e\u52a0\u4e86\u4ee5\u4e0b\u8f6f\u4ef6\u5305\uff1apython3 net-tools curl wget"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Metasploit\u3001Shiro \u53cd\u5e8f\u5217\u5316\u5de5\u5177\u7b49\u76f4\u63a5\u8fdb\u884c\u653b\u51fb\uff0c\u5e76\u53cd\u5f39 shell\uff0cflag \u4f4d\u4e8e ",(0,s.jsx)(n.code,{children:"/flag"})," \u4e2d"]}),"\n",(0,s.jsx)(n.h3,{id:"web-thinkphp",children:"web-thinkphp"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u9776\u673a\u6f0f\u6d1e\u4e3a\uff1aThinkPHP5 5.0.22/5.1.29 \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e"}),"\n",(0,s.jsxs)(n.p,{children:["\u73af\u5883\u53c2\u8003 Vulhub \u7684\u793a\u4f8b\u73af\u5883\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/vulhub/vulhub/blob/master/thinkphp/5-rce/README.zh-cn.md",children:"vulhub/thinkphp/5-rce - Github"}),"\uff0c\u5e76\u9488\u5bf9\u591a\u5c42\u5185\u7f51\u7684\u6e17\u900f\u573a\u666f\uff0c\u4e3a\u4e86\u964d\u4f4e\u96be\u5ea6\uff0c\u800c\u989d\u5916\u589e\u52a0\u4e86\u4ee5\u4e0b\u8f6f\u4ef6\u5305\uff1apython3 net-tools curl wget"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ThinkPHP RCE \u5de5\u5177\u7b49\u76f4\u63a5\u8fdb\u884c\u653b\u51fb\uff0c\u5e76\u53cd\u5f39 shell\uff0cflag \u4f4d\u4e8e ",(0,s.jsx)(n.code,{children:"/flag"})," \u4e2d"]}),"\n",(0,s.jsx)(n.h3,{id:"db-redis",children:"db-redis"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u9776\u673a\u4e3a\u4e00\u4e2a\u6b63\u5e38\u7684 Redis \u670d\u52a1\uff0c\u914d\u7f6e\u4e86\u5bc6\u7801\u4e3a\uff1a",(0,s.jsx)(n.code,{children:"123456"})," \u7684\u5f31\u53e3\u4ee4\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e38\u89c4\u7684\u6f0f\u626b\u53d1\u73b0\u51fa\u6765"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76f4\u63a5\u8fde\u63a5\u5373\u53ef\uff0c\u4e5f\u53ef\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"web-thinkphp"})," \u9776\u673a\u4e0a\u4f20 webshell\uff0c\u5229\u7528\u8681\u5251\u7b49\u5de5\u5177\u8fdb\u884c\u8fde\u63a5\uff0cflag \u4f4d\u4e8e\u6570\u636e\u5e93\u5185"]}),"\n",(0,s.jsx)(n.h3,{id:"service-phpmyadmin",children:"service-phpmyadmin"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u670d\u52a1\u7531\u4e24\u4e2a\u9776\u673a\u6784\u6210\uff1a",(0,s.jsx)(n.code,{children:"web-phpmyadmin"})," + ",(0,s.jsx)(n.code,{children:"db-mysql"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u670d\u52a1\u4e3a\u4e00\u4e2a\u6b63\u5e38\u7684 phpmyadmin \u670d\u52a1\uff0cmysql \u7684\u51ed\u636e\u4e3a ",(0,s.jsx)(n.code,{children:"root:123456"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e38\u89c4\u7684\u6f0f\u626b\u53d1\u73b0\u51fa\u6765"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636e\u5e93\u7684\u4e3b\u673a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"db-mysql"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u76ee\u5f55\u626b\u63cf\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"/robots.txt"})," \u91cc\u9762\u5f97\u5230"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fde\u63a5\u5230 phpmyadmin \u7684\u540e\u53f0\uff0c\u901a\u8fc7\u65e5\u5fd7\u7684\u65b9\u5f0f\u5199\u5165 webshell\uff0c\u5373\u53ef\u53cd\u5f39\u51fa\u6765 shell\uff0c\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\uff0cflag \u4f4d\u4e8e\u6570\u636e\u5e93\u5185"}),"\n",(0,s.jsx)(n.h3,{id:"web-struts2",children:"web-struts2"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u9776\u673a\u6f0f\u6d1e\u7f16\u53f7\u4e3a\uff1aCVE-2018-11776\uff0c\u5373 Struts2 S2-057 \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e"}),"\n",(0,s.jsxs)(n.p,{children:["\u73af\u5883\u4f7f\u7528 Vulhub \u7684\u793a\u4f8b\u73af\u5883\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/vulhub/vulhub/tree/master/struts2/s2-057",children:"vulhub/struts2/s2-057 - Github"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Metasploit\u3001struts2 \u53cd\u5e8f\u5217\u5316\u5de5\u5177\u7b49\u76f4\u63a5\u8fdb\u884c\u653b\u51fb\uff0c\u5e76\u53cd\u5f39 shell\uff0cflag \u4f4d\u4e8e ",(0,s.jsx)(n.code,{children:"/flag"})," \u4e2d"]}),"\n",(0,s.jsx)(n.h3,{id:"db-postgresql",children:"db-postgresql"}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u9776\u673a\u4e3a\u4e00\u4e2a\u6b63\u5e38\u7684 Postgresql \u670d\u52a1\uff0c\u914d\u7f6e\u4e86\u5bc6\u7801\u4e3a\uff1a",(0,s.jsx)(n.code,{children:"123456"})," \u7684\u5f31\u53e3\u4ee4\uff0c\u53ef\u4ee5\u4f7f\u7528\u5e38\u89c4\u7684\u6f0f\u626b\u53d1\u73b0\u51fa\u6765"]}),"\n",(0,s.jsxs)(n.p,{children:["\u76f4\u63a5\u8fde\u63a5\u5373\u53ef\uff0c\u4e5f\u53ef\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"web-struts2"})," \u9776\u673a\u4e0a\u4f20 webshell\uff0c\u5229\u7528\u8681\u5251\u7b49\u5de5\u5177\u8fdb\u884c\u8fde\u63a5\uff0cflag \u4f4d\u4e8e\u6570\u636e\u5e93\u5185"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4369:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/image_20231112-201211-1f7cf0b6a4f288c58db5d17b1090b6dd.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);