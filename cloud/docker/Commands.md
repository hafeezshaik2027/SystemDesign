## Commands

docker info

- docker images ls
Lists the currently available images on the current host.

- docker pull <image-name>:<version>
Pulls the image from the docker registry.

- docker run -it <image>

Runs the docker container in image mode and binds the running instance.

Ex: docker run -it nginx:1.1.13 /bin/bash

- docker ps
   Lists all the docker containers.
  
- docker container ls
 Lists the docker containers that are running.

- docker stop <container-id>
   Stops running container instance.
  
- docker images -a
  Lists all the running image son the current machine.

- docker rmi <image-id>
   Removes the provided image.

## COMMANDS

```shell
docker ps
docker ps -a
docker logs
docker inspect
docker exec
docker stats
docker images
docker history
docker top
docker events
docker system df
docker system prune
```

## COMPOSE INSTRUCTIONS

```shell
FROM
RUN
COPY
ADD
WORKDIR
ENV
ARG
EXPOSE
ENTRYPOINT
CMD
USER
VOLUME
HEALTHCHECK
```


  
