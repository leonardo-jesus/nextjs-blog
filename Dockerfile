# Getting Redis' base image
FROM redis

# Identify the mantainer
MAINTAINER Leonardo Jesus <leonardo.jesus@catho.com>

# Update the image to the lastest packages
RUN apt-get update && apt-get upgrade -y

# Install NGINX to test
RUN apt-get install nginx -y

# Expose port 80
EXPOSE 80

CMD ["echo", "✅ Redis image started successfully!"]

# Last is the actual command to start up NGINX within our Container
CMD ["nginx", "-g", "daemon off;"]