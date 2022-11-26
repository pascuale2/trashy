FROM debian:bullseye-slim
RUN apt-get update && \
    apt-get -y install curl software-properties-common && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get -y install nodejs ffmpeg && \
    apt-get clean && \
    apt-get purge -y --auto-remove build-essential 
COPY . ./
RUN npm install
CMD ["node", "index.js"]