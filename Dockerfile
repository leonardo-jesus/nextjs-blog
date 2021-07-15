# Getting Redis' base image
FROM redis

MAINTAINER Leonardo Jesus <leonardo.jesus@catho.com>

RUN apt-get update

CMD ["echo", "✅ Redis image started successfully!"]