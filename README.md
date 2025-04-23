# API: Fake Shop

This API, developed with Node.js and MongoDB, allows for the management and modification of products within a shopping cart.
The API provides endpoints to add, update, delete, and retrieve products in a cart, while ensuring data persistence through MongoDB.


## Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)


## Getting Started

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/monicaGY/api-fakeShop.git api-fakeShop

# Navigate to the project directory
cd api-fakeShop
```
### 2. Environment Setup

```bash
# Copy the example env file
cp .env.example .env

# Update the following variable in .env file
MONGO_URL=mongodb://root:root2025@127.0.0.1:27017/fakeShop?authSource=admin
```

### 3. Build and Run Docker Container

```bash
# Build and start the container
docker-compose up -d
```
### 3. Run API

```bash
npm install
npm start
```