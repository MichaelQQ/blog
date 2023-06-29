###### `ruby`
## How to set Sidekiq log level to debug?

```ruby
Sidekiq.configure_server do |config|
  config.logger.level = Logger::DEBUG
end
```

## What is the default log level in production environment?

The default level is `INFO` in production environment.

## How to change log format to JSON?

```ruby
Sidekiq.configure_server do |config|
  config.logger.formatter = Sidekiq::Logger::Formatters::JSON.new
end
```

## Reference

- Logging - sidekiq/sidekiq [https://github.com/sidekiq/sidekiq/wiki/Logging](https://github.com/sidekiq/sidekiq/wiki/Logging)