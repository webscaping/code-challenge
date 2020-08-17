FROM ruby:2.7

ENV APP_HOME /usr/src/backend
WORKDIR ${APP_HOME}
COPY ./ ${APP_HOME}
RUN apt-get update
RUN apt-get install -y build-essential libpq-dev nodejs
RUN bundle install