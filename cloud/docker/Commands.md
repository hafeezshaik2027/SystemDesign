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


## RELEVANT KERNEL CONCEPTS

```shell
Namespaces
cgroups
Union filesystem
OverlayFS
Copy-on-write
PID 1
Signals (SIGTERM, SIGKILL)
```

## NETWORKING

```shell
Bridge network
Host network
None network
Overlay network
Port mapping
DNS inside Docker
Container-to-container communication
```

## VOLUMES

```shell
Bind mounts
Named volumes
Anonymous volumes
Persistence
Read-only mounts
```

## SECURITY

```shell
Why not run as root
USER instruction
Read-only filesystem
Secrets vs environment variables
Distroless images
Image scanning
```

## IMAGE OPTIMIZATION

```shell
.dockerignore
Layer caching
Build cache
Slim images
Alpine vs Debian vs Ubuntu
JDK vs JRE
Distroless images
```
## DOCKER COMPOSE

```shell
Multiple services
Networks
Environment variables
Volumes
Dependency ordering
```

## k8s INTEGRATION

```shell
Image → Pod
Container → Pod
Restart policy
Liveness probe
Readiness probe
ConfigMap
Secret
Persistent Volume
```


## CMD VS ENTRYPOINT


CMD is a default instruction for docker and if we provide any other instruction during container run time it will execute that instead of specified in CMD.

ENTRYPOINT is always executed irespective of command line and whatever we pass from the runtime command line it will get appended in addition to the entypoint instruction.

ENTRYPOINT is always executed irrespective of the the runtime passed arguments whereas CMD is executed and is not always executed as entrypoint any command passed along with run command will always override the CMD



## DISTORTIONLESS IMAGES

Minimal docker images that contain only necessary runtime dependencies of applications. Distortionless images exclude the operation system, shell utilities and other binaries. These are smaller and secure images.

