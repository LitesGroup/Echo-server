FROM node:7.8.0
WORKDIR /app
COPY . /app
EXPOSE 3000
CMD ["npm", "run", "production"]
