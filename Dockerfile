FROM node:lts-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#RUN sudo npm install npm -g 
#RUN npm install -g coffee-script
#RUN npm install -g hubot
RUN npm install -g yo
RUN npm install -g generator-hubot

ADD . /usr/src/app
RUN [ "npm", "install" ]

#ENTRYPOINT ["./bin/hubot --adapter slack"] 

ENTRYPOINT ["chatbot.sh --adapter slack"] 