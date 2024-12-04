FROM node:22.11.0

# Clone the repository
RUN git clone https://github.com/DX-MODS/WhatsBixby.git /Bixby

# Set working directory
WORKDIR /Bixby

# Install a specific version of npm locally (inside the project directory)
RUN npm install npm@10.9.1
RUN npm install -g pm2
# Install dependencies
RUN npm install
pm2 link ov1uqxafg07lqne qovag7dbfl97f50

# Expose the port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
