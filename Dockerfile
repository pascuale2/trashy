FROM alpine

RUN apk add --update npm
RUN apk add --update ffmpeg

COPY package.json ./

RUN npm install

COPY index.js ./
COPY config.json ./
COPY Assets ./Assets
COPY Utility ./Utility
COPY Commands ./Commands

CMD ["node", "index.js"]