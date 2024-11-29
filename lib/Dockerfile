FROM node:22.11.0

# Install dependencies and build tools
RUN apt-get update && \
    apt-get install -y git python3 python3-pip build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Clone the repository
RUN git clone https://github.com/DX-MODS/WhatsBixby.git /Bixby

# Set working directory
WORKDIR /Bixby

# Set Python path for node-gyp
ENV PYTHON=/path/to/executable/python

# Install npm packages and rebuild
RUN npm install @ffmpeg-installer/ffmpeg
RUN npm rebuild

# Expose the port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
