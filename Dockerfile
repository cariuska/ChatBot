FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


ADD . /usr/src/app
RUN [ "npm", "install" ]

ENTRYPOINT [ "./bin/hubot --adapter slack" ]