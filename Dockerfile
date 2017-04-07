FROM node:7.8.0
WORKDIR /app
ADD . /app
EXPOSE 3000
CMD ["npm", "run", "production"]
