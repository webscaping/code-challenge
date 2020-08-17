FROM node:14.8

ENV APP_HOME /usr/src/frontend
WORKDIR ${APP_HOME}
COPY ./app ${APP_HOME}
RUN apt-get update
RUN npm install