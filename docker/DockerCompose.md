## DOCKER COMPOSE

- Provides robust container management for workflows.

# Challenges without compose
- Starting and stopping multiple containers in an n-tier architecture is difficult to manage with shell scripts.
- Managing networks for inter-container communication and volumes for persistent storage is cumbersome.

# Compose use cases

- Helpful for local dev/test envs and automating CI/CD pipelines



## Compose commands

- `docker compose version`


## Handling dependencies in docker

- It has depends_on: to handle the inter service dependencies
- Inorder to have reload or rebuild the code based on file changes with watch configuration section


