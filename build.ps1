docker build . -t yveremenko/trashy
docker push yveremenko/trashy
# docker run -e DISCORD_TOKEN='token' -d --restart unless-stopped yveremenko/trashy