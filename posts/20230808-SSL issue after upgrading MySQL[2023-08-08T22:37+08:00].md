###### tags: `db`

After upgrading MySQL server, you might have the following error messgae in your applications if your MySQL JDBC connector version is lower than `8.0.13` and MySQL server upgrade to `5.5.45+`, `5.6.26+` and `5.7.6+`. 

> Establishing SSL connection without server's identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.

As the error message shows, that is because of MySQL server require SSL connection by default and you don't set `useSSL` parameter when connecting to MySQL.

There are few ways to fix it. 
>The following results are based on
>- MySQL 5.7.39
>- MySQL JDBC connector 5.1.38
>- slick 3.2.0
>- slick-hikaricp 3.2.0

From **Server Side**, you could disable SSL.
Add `ssl = 0` to mysql.cnf and restart MySQL server. Although this way could fix the issue if all your client side did not set `useSSL` or set `useSSL=false`, this would break the connections which `useSSL=true`.

From **Client Side**,
1. You could connect via `DateSource`
When you connect to MySQL server via DataSource, it would add `useSSL=false` when connecting to MySQL server.
2. Upgrade JDBC MySQL connector to 8.0.13+
Since 8.0.13, MySQL JDBC connector use `sslMode` parameter to replace old SSL parameters, and it default value is `PREFERRED`.
3. Add `useSSL` parameter to your JDBC URL


## Reference
- MySQL Tutorial: Configure And Manage SSL On Your Server: https://scalegrid.io/blog/configuring-and-managing-ssl-on-your-mysql-server/
- MySQL :: MySQL Connector/J 8.1 Developer Guide :: 6.3.5 Security: https://dev.mysql.com/doc/connector-j/8.1/en/connector-j-connp-props-security.html
- Slick 3.2.0: https://scala-slick.org/doc/3.2.0/api/index.html#slick.jdbc.JdbcBackend$DatabaseFactoryDef@forConfig(String,Config,Driver,ClassLoader):Database
- GitHub - brettwooldridge/HikariCP: 光 HikariCP・A solid, high-performance, JDBC connection pool at last.: https://github.com/brettwooldridge/HikariCP
- MySQL :: MySQL Connector/J 8.0 Release Notes :: Changes in MySQL Connector/J 8.0.13 (2018-10-22, General Availability): https://dev.mysql.com/doc/relnotes/connector-j/8.0/en/news-8-0-13.html