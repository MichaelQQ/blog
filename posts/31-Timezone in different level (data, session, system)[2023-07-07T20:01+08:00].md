###### tags: `db`
The timezone settings should be careful when the application server across different timezones. There are at least 3 different level of timezone settings
1. Data (Storage)
2. Application (Sessions)
3. OS (System)

For reducing system complexity, all date time value save in UTC to storage would be a choice. But sometimes we might ignore that Application level timezone settings (**including database itself**). 
For example, the following result would be different when the storage timezone setting is different
```ruby
Model.where("`datetime_column` > NOW()")
```
Reference to MySQL document. When column type is DATETIME, the value is saved in UTC. However, `NOW()` returns based on timezone configuration. There are few way to avoid this kind of issues.

1. Make Application timezone independent. Connet to Database with specific session timezone instead of relying on server(database) timezone configuration.
2. Use `UTC_TIMESTAMP()` or other timezone independent functions.
3. Pass condition value from application. e.g. 
```ruby
Model.where("datetime_column", ">", Time.zone.now())
```

## MySQL
>  The session time zone setting affects display and storage of time values that are zone-sensitive. This includes the values displayed by functions such as NOW() or CURTIME(), and values stored in and retrieved from TIMESTAMP columns. Values for TIMESTAMP columns are converted from the session time zone to UTC for storage, and from UTC to the session time zone for retrieval.
>
> The session time zone setting does not affect values displayed by functions such as UTC_TIMESTAMP() or values in DATE, TIME, or DATETIME columns. Nor are values in those data types stored in UTC; the time zone applies for them only when converting from TIMESTAMP values. If you want locale-specific arithmetic for DATE, TIME, or DATETIME values, convert them to UTC, perform the arithmetic, and then convert back. 
>
> source: [https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html](https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html)
### Check timezone setting
1. read session timezone setting

    ```sql
    SELECT @@session.time_zone;
    // example output: SYSTEM
    ```
2. read session timezone setting

    ```SQL!
    SELECT @@global.time_zone;
    // example output: SYSTEM
    ```
3. read system timezone setting

    ```SQL
    SELECT @@global.system_time_zone;
    // example output: UTC
    ```
### Get current time
1. `NOW()` returns the current date and time in the **configured time zone**

    ```SQL
    SELECT NOW();
    // example output: 2023-07-05 07:31:49
    ```
2. `UTC_TIMESTAMP()` returns the current date and time in **UTC**

    ```SQL
    SELECT UTC_TIMESTAMP();
    // example output: 2023-07-05 07:33:20
    ```
    
## Ruby on Rails
### Application
```ruby
# server timezone Asia/Taiepi
# config.time_zone = "UTC" in Application.rb
timestamp = 1688659140000

Time.at(timestamp / 1000).to_datetime
# Thu, 06 Jul 2023 23:59:00 +0800 (server timezone)

Time.zone.at(timestamp / 1000).to_datetime
# Thu, 06 Jul 2023 15:59:00 +0000 (config timezone)
```
### ActiveRecord
1. solution1: add `timezone: "Asia/Taiepi` in database.yml
2. solution2: add `init_command: SET @@SESSION.time_zone = "Asia/Taipei"`

    ```ruby
    # current time: 2023-07-06 07:38:31 UTC
    # config.time_zone = "Asia/Taipei"
    # config.active_record.default_timezone = :utc
    
    ActiveRecord::Base.connection.exec_query("SELECT NOW()")
    # <ActiveRecord::Result:0x00007faa40c69ed0 @columns=["NOW()"], @rows=[[2023-07-06 07:38:31 UTC]], @hash_rows=nil, @column_types={}>
    
    # current time: 2023-07-06 07:38:31 UTC
    # config.time_zone = "Asia/Taipei"
    # config.active_record.default_timezone = :local
    
    ActiveRecord::Base.connection.exec_query("SELECT NOW()")
    # <ActiveRecord::Result:0x00007faa40c69ed0 @columns=["NOW()"], @rows=[[2023-07-06 07:38:31 +08:00]], @hash_rows=nil, @column_types={}>
    
    # current time: 2023-07-06 08:44:47 UTC
    # config.time_zone = "Asia/Taipei"
    # config.active_record.default_timezone = :utc
    
    # init_command: SET @@SESSION.time_zone = "Asia/Taipei" in database.yml
    ActiveRecord::Base.connection.exec_query("SELECT NOW()")
    # <ActiveRecord::Result:0x00007f8e925f6ba8 @columns=["NOW()"], @rows=[[2023-07-06 16:44:47 UTC]], @hash_rows=nil, @column_types={}>
    ```
    

## Node.js
### Sequelize
solution: add `options.timezon = '+08:00'`

  ```js
  // options.timezone = '+00:00',
  let output;
  output = await sequelize.query("SELECT NOW()")
  console.log(output)
  // [
  //   [ TextRow { 'NOW()': 2023-07-07T03:08:32.000Z } ],
  //   [ TextRow { 'NOW()': 2023-07-07T03:08:32.000Z } ]
  // ]
  output = await sequelize.query("SELECT @@session.time_zone;")
  console.log(output)
  // [
  //   [ TextRow { '@@session.time_zone': '+00:00' } ],
  //   [ TextRow { '@@session.time_zone': '+00:00' } ]
  // ]
  
  // options.timezone = '+08:00',
  let output;
  output = await sequelize.query("SELECT NOW()")
  console.log(output)
  // [
  //   [ TextRow { 'NOW()': 2023-07-07T03:08:32.000Z } ],
  //   [ TextRow { 'NOW()': 2023-07-07T03:08:32.000Z } ]
  // ]
  output = await sequelize.query("SELECT @@session.time_zone;")
  console.log(output)
  // [
  //   [ TextRow { '@@session.time_zone': '+08:00' } ],
  //   [ TextRow { '@@session.time_zone': '+08:00' } ]
  // ]
  ```

## Scala
### Slick 3.2.0
1. solution1: add `serverTimezone=UTC` to jdbc url

     ```scala
    for {
      output1 <- runReadonlyMysqlQuery(sql"SELECT @@session.time_zone".as[String])
      _ = system.log.debug("[TEST] output1: {}", output1)
      output2 <- runReadonlyMysqlQuery(sql"SELECT NOW()".as[String])
      _ = system.log.debug("[TEST] output2: {}", output2)
    } yield {}
    // DEBUG [2023-07-07 11:34:00,980] akka.actor.ActorSystemImpl: [TEST] output1: Vector(SYSTEM)
    // DEBUG [2023-07-07 11:34:00,994] akka.actor.ActorSystemImpl: [TEST] output2: Vector(2023-07-07 03:34:01.0)
    ```
2. solution2: add `connectionTimeZone=UTC&forceConnectionTimeZoneToSession=true`

    ```scala
    for {
      output1 <- runReadonlyMysqlQuery(sql"SELECT @@session.time_zone".as[String])
      _ = system.log.debug("[TEST] output1: {}", output1)
      output2 <- runReadonlyMysqlQuery(sql"SELECT NOW()".as[String])
      _ = system.log.debug("[TEST] output2: {}", output2)
    } yield {}
    // DEBUG [2023-07-07 11:34:00,980] akka.actor.ActorSystemImpl: [TEST] output1: Vector(SYSTEM)
    // DEBUG [2023-07-07 11:34:00,994] akka.actor.ActorSystemImpl: [TEST] output2: Vector(2023-07-07 03:34:01.0)
    ```
3. solution3: add `connectionInitSql= "SET @@SESSION.time_zone = 'UTC'"`

    ```scala
    for {
      output1 <- runReadonlyMysqlQuery(sql"SELECT @@session.time_zone".as[String])
      _ = system.log.debug("[TEST] output1: {}", output1)
      output2 <- runReadonlyMysqlQuery(sql"SELECT NOW()".as[String])
      _ = system.log.debug("[TEST] output2: {}", output2)
    } yield {}
    // DEBUG [2023-07-07 11:34:00,980] akka.actor.ActorSystemImpl: [TEST] output1: Vector(SYSTEM)
    // DEBUG [2023-07-07 11:34:00,994] akka.actor.ActorSystemImpl: [TEST] output2: Vector(2023-07-07 03:34:01.0)
    
    //connectionInitSql = "SET @@SESSION.time_zone = 'Asia/Taipei'"
    for {
      output1 <- runReadonlyMysqlQuery(sql"SELECT @@session.time_zone".as[String])
      _ = system.log.debug("[TEST] output1: {}", output1)
      output2 <- runReadonlyMysqlQuery(sql"SELECT NOW()".as[String])
      _ = system.log.debug("[TEST] output2: {}", output2)
    } yield {}
    // DEBUG [2023-07-07 11:34:45,239] akka.actor.ActorSystemImpl: [TEST] output1: Vector(Asia/Taipei)
    // DEBUG [2023-07-07 11:34:45,636] akka.actor.ActorSystemImpl: [TEST] output2: Vector(2023-07-07 11:34:46.0)
    ```

## Reference
- The Exhaustive Guide to Rails Time Zones - Alexander Danilenko: [http://danilenko.org/2012/7/6/rails_timezones/](http://danilenko.org/2012/7/6/rails_timezones/)
- Mysql2 - A modern, simple and very fast MySQL library for Ruby - binding to libmysql: [https://github.com/brianmario/mysql2](https://github.com/brianmario/mysql2)
- MySQL client for Node.js: [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2)
- instance-constructor-constructor - Sequelize: [https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-constructor-constructor](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-constructor-constructor)
- 5.1.15 MySQL Server Time Zone Support: [https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html](https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html)
- 6.2 Connection URL Syntax: [ttps://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html)
- Slick API doc: [https://scala-slick.org/doc/3.0.0/api/index.html#slick.jdbc.JdbcBackend$DatabaseFactoryDef@forConfig(String,Config,Driver):Database](https://scala-slick.org/doc/3.0.0/api/index.html#slick.jdbc.JdbcBackend$DatabaseFactoryDef@forConfig(String,Config,Driver):Database)
- DATATYPE-TIMEZONES - PostgreSQL: [https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-TIMEZONES](https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-TIMEZONES)