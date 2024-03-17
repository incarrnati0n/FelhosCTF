FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d
COPY ./HTML/. /var/www/html
RUN chmod -R 755 /var/www/html && chown -R 1000:1000 /var/www/html