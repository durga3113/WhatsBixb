FROM node:22.11.0

# Clone the repository
RUN git clone https://github.com/DX-MODS/WhatsBixby.git /Bixby

# Set working directory
WORKDIR /Bixby

# Install npm packages
RUN npm install

# Expose the port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
