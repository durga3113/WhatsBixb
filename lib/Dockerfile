FROM quay.io/ziyxn/bixby-md:latest
RUN git clone https://github.com/DX-MODS/WhatsBixby /root/Bixby
WORKDIR /root/Bixby/
RUN yarn install --network-concurrency 1
EXPOSE 8080
CMD ["npm", "start"]