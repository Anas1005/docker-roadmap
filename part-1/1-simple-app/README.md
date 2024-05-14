# Docker Overview and Concepts

## Containerization

Containerization is a technology that enables the packaging of applications and their dependencies into standardized units called containers. Docker is a popular containerization platform that provides tools for building, shipping, and running containers.

## Development vs. Production Stages

Dockerfiles can define distinct stages for development and production environments. This allows for different dependencies and configurations based on the deployment stage.

## Docker Commands

Docker commands are used to manage Docker images and containers. They automate the deployment and scaling of applications, making it easier to manage complex software environments.

### Example:
- `docker build`: Builds a Docker image from a Dockerfile.
- `docker run`: Creates and runs a Docker container based on a specified image.
- `docker network`: Manages Docker networks, allowing containers to communicate with each other.
- `docker volume`: Manages Docker volumes, providing persistent storage for containers.

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. It simplifies the management of interconnected services, ensuring consistent environments and easy scalability.

### Example:
```yaml
version: '3.8'
services:
  backend1:
    build:
      context: .
      target: development
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    depends_on:
      - mongo1

  mongo1:
    image: mongo:latest
    volumes:
      - vol1:/data/db

volumes:
  vol1:
