FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to install dependencies
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application files, including the .env file
COPY . .

# Build the application (if applicable)
RUN pnpm run build

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the app in development mode
CMD ["pnpm", "start:dev"]
