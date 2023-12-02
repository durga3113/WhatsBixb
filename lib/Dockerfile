FROM node:latest
RUN git clone https://github.com/DX-MODS/WhatsBixby /root/Bixby
WORKDIR /root/Bixby
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
