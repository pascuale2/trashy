FROM debian:bullseye-slim
RUN apt-get update && \
    apt-get -y install curl software-properties-common && \
    curl -fsSL https://deb.nodesource.com/setup_17.x | bash - && \
    apt-get update && \
    apt-get -y install nodejs ffmpeg python3 build-essential && \
    apt-get clean
COPY . ./
RUN npm install && \
    apt-get purge -y --auto-remove build-essential 
CMD ["node", "index.js"]