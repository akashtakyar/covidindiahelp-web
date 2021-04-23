FROM php:7.0-apache
ARG ENV
RUN a2enmod rewrite
# Install dependencies
RUN apt-get update; apt-get -y install gnupg

WORKDIR /var/www/html
COPY . /var/www/html/temp
RUN cd /var/www/html/temp
RUN mv /var/www/html/temp/build/* /var/www/html
RUN mv /var/www/html/temp/.htaccess /var/www/html

RUN rm -rf /var/www/html/temp

RUN chmod 777 -R /var/www/html/

EXPOSE 80
CMD ["/usr/sbin/apache2ctl", "-D",  "FOREGROUND"]