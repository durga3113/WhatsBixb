FROM node:18-slim

# Install required packages
RUN apt-get update && \
    apt-get install -y git python python2 python2-dev python3 build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create symlink for python
RUN ln -s /usr/bin/python2 /usr/bin/python

# Set npm config to use python
RUN npm config set python /usr/bin/python

# Clone the repository
RUN git clone https://github.com/DX-MODS/WhatsBixby.git /Bixby
WORKDIR /Bixby

# Install npm dependencies and rebuild
RUN npm install @ffmpeg-installer/ffmpeg
RUN npm rebuild

# Expose port and set the default command
EXPOSE 8000
CMD ["npm", "start"]
