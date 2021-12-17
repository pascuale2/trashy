FROM debian:bullseye-slim
COPY . ./
RUN apt-get update && \
    apt-get -y install curl software-properties-common && \
    curl -fsSL https://deb.nodesource.com/setup_17.x | bash - && \
    apt-get update && \
    apt-get -y install nodejs ffmpeg python3 build-essential && \
    apt-get clean && \
    npm install && \
    apt-get purge -y --auto-remove build-essential 
CMD ["node", "index.js"]