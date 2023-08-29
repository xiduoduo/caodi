FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /var/www/production/*
ADD dist/ /var/www/production/

WORKDIR /var/www/production/

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]
