|
|---- Docker Client [Docker CLI, API Calls]
|---- Docker Host [Rest API, Docker Daemon, Containers, Image Cache]
|---- Docker Image Registry.

Docker Daemon - Manages containers
Image Cache - maintains layers of images built during building an image.

Docker Run Command Lifecycle:
=============================

1. `docker run` command
2. Docker CLI sends request to Docker Hosts REST API.
3. Docker Host checks if image is present in local cache.
4. If not, it downloads it from the image registry.
5. Host instantiates the a new container based on the image.


Dock Build Command Lifecycle:
=============================

1. `docker build` command.
2. CLIU sends a request to the hosts REST API
    a. This also incudes respective Dockerfile and context.
3. Docker hots builds the image according to dockerfile.
4. Docker host tags the image and stores it locally.
5. Isuse `docker push` command on CLI which pushes the image to Image Registry.


