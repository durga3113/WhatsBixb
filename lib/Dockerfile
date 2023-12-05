FROM quay.io/ziyan/whatsbixby
RUN git clone https://github.com/DX-MODS/WhatsBixby /root/Bixby
WORKDIR /root/Bixby/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
