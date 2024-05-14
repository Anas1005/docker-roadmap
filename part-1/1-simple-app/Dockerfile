FROM mhart/alpine-node as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Install nano
RUN apk --no-cache add nano

FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD ["npm", "run", "start"]
