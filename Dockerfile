FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./html/. /var/www/html
COPY ./css/. /var/www/html/assets/css
COPY ./images/. /var/www/html/assets/images
RUN chmod -R 755 /var/www/html && chown -R 1000:1000 /var/www/html