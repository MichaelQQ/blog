(**This tutorial doesn't include Database setup and RoR development.**)

Cause we want to move our #RoR webapp to the other host, I decided to dockerize it. After dockerize our webapp, we could easily deploy it to any host. We use phusion/passenger to run our RoR webapp, therefore, I would use phusion/passenger #Docker image as our base image. 

## 1. First, we need to create a Dockerfile as follow

```Dockerfile
# Base our image on phusion/passenger-ruby
FROM phusion/passenger-ruby22

# Set correct environment variables.
ENV HOME /root
ENV RAILS_ENV production

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Start Nginx / Passenger
RUN rm -f /etc/service/nginx/down

# Remove the default site
RUN rm /etc/nginx/sites-enabled/default

# Add the nginx site and config
ADD site.conf /etc/nginx/sites-enabled/site.conf
ADD custom_nginx.conf /etc/nginx/conf.d/custom_nginx.conf
ADD env.conf /etc/nginx/main.d/env.conf

# Install bundle of gems
WORKDIR /tmp
ADD ./myapp/Gemfile /tmp/
ADD ./myapp/Gemfile.lock /tmp/
RUN bundle install

# Add the Rails app
ADD ./myapp /home/app/myapp

RUN chown -R app:app /home/app/myapp

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

Choose your ruby version's docker image. We use ruby2.2 for our webapp here. `FROM phusion/passenger-ruby22` means our Docker image is base on phusion/passenger-ruby22. If your app need to config some environment variables, you could also set it in docker file. Also, we want to run #Nginx in our image, we sould add this line `RUN rm -f /etc/service/nginx/down` and add some nginx setting file to our image.

```
# site.conf
server {
	listen		 80;
	server_name  example.com;

	location ~ ^/example(/.*|$) {
          alias /home/app/myapp;
					passenger_base_uri /example;
          passenger_app_root /home/app/myapp;
          passenger_document_root /home/app/myapp/public;
					passenger_enabled on;
          access_log  logs/access.log  simple;
        }
}
```

If you need to customize your nginx setting, you could add conf file to `/etc/nginx/conf.d/`. Here, we define a simple log format.

```
# custom_nginx.conf
log_format simple '[$time_local] "$http_x_forwarded_for"';
```

Don't forget your webapp's environment variables. For example, my webapp use some environment variables for DB info, I should add those in the env.conf file.
>By default Nginx clears all environment variables (except TZ) for its child processes (Passenger being one of them). That's why any environment variables you set with docker run -e, Docker linking and /etc/container_environment, won't reach Nginx.

```
env DB_ADAPTER;
env DB_DATABASE;
env DB_USER;
env DB_PASSWD;
env DB_HOST;
```

## 2. Second, create docker image

Now, the file structure will like following
```
project1
|- myapp/
|- Dockerfile
```

In the root of project1 directory and create docker image.
```
docker image build -t [IMAGE_NAME] .
```

## 3. publish docker iamge

After we create docker image correctly, we could publish it to docker hub. Also, if your docker image is private, you could publish to your private docker hub. If you don't have private docker hub, you could also make it as .tar file and share with others.

```
# in your PC, compress your docker image to tar file
docker save [IMAGE_NAME] > [NAME].tar

# in others' PC, import the docker image to your image list
docker load < [name].tar
```

## 4. Deploy it

After image created, we could run our docker container. 
```
# create and run a docker container named myapp and port mapping 3000(host):80(container)
# (--rm means remove container after close)
docker run -p 3000:80 --rm --name myapp [IMAGE_NAME]
```

We need to access to our docker container and init our webapp db. 
```
# show docker container list
docker container ls

# run bash in docker container
docker exec -t -i CONTAINER_ID bash

# migrate rails db
myapp> rake db:migrate
```

## 5. Try it by access in browser
open http://localhost:3000/example to check it.

# possible issue
In this tutorial, when I tried to migrate db, there is an error as follow.
> Mysql2::Error: All parts of a PRIMARY KEY must be NOT NULL; if you need NULL in a key, use UNIQUE instead

Solve it by add config/initializers/abstract_mysql2_adapter.rb (cited [stackoverflow](https://stackoverflow.com/questions/40758226/mysql2error-all-parts-of-a-primary-key-must-be-not-null-if-you-need-null-in))
```ruby
require 'active_record/connection_adapters/mysql2_adapter'

class ActiveRecord::ConnectionAdapters::Mysql2Adapter
  NATIVE_DATABASE_TYPES[:primary_key] = "int(11) auto_increment PRIMARY KEY"
end
```

# reference
- [phusion/passenger-docker](https://github.com/phusion/passenger-docker)
- [Mysql2::Error: All parts of a PRIMARY KEY must be NOT NULL; if you need NULL in a key, use UNIQUE instead](https://stackoverflow.com/questions/40758226/mysql2error-all-parts-of-a-primary-key-must-be-not-null-if-you-need-null-in)
