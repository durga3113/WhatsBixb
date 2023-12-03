FROM node:latest
RUN git clone https://github.com/DX-MODS/WhatsBixby /root/Bixby
WORKDIR /root/Bixby/
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
