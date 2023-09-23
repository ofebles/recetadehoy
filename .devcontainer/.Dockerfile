# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Expose port if your SvelteKit app runs on a specific port
# EXPOSE 3000

# Start the SvelteKit development server
CMD ["npm", "run", "dev"]
