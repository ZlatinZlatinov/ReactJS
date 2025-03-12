#Use Node.js version 20 
FROM node:20-alpine

# Set the working directory 
WORKDIR /app

# Copy package-lock and package.json 
COPY  package*.json ./

#Install dependencies 
RUN npm install

# Copy the rest of the application files 
COPY . . 

# Expose the port 
EXPOSE 5173

# Define command to run the app 
CMD ["npm", "run", "dev"]