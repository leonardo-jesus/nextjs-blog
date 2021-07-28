# Getting Node's base image
FROM node

# Identify the mantainer
MAINTAINER Leonardo Jesus <leonardo.jesus@catho.com>

# Update the image to the lastest packages
RUN apt-get update && apt-get upgrade -y

# Expose port 4000
EXPOSE 4000

CMD ["echo", "✅ Node image started successfully!"]