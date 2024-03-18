FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d
COPY ./html/. /var/www/html
RUN  mkdir /var/www/images
COPY ./images/. /var/www/images
RUN chmod -R 755 /var/www/html && chown -R 1000:1000 /var/www/html