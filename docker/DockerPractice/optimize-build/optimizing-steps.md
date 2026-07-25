## Optimization Steps

1. First build the image to optimize locally 

2. Once it is built and image is available run docker history command

`docker history <image tag>`


```shell
PS D:\SystemDesign\SystemDesign\cloud\docker\DockerPractice\optimize-build> docker history oversized:1.0
IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
5a62b96c99ab   2 minutes ago   CMD ["node" "index.js"]                         0B        buildkit.dockerfile.v0
<missing>      2 minutes ago   COPY index.js index.js # buildkit               12.3kB    buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c npm ci # buildkit                84.6MB    buildkit.dockerfile.v0
<missing>      3 minutes ago   COPY package*.json ./ # buildkit                168kB     buildkit.dockerfile.v0
<missing>      3 minutes ago   WORKDIR /app                                    8.19kB    buildkit.dockerfile.v0
<missing>      10 days ago     CMD ["node"]                                    0B        buildkit.dockerfile.v0
<missing>      10 days ago     ENTRYPOINT ["docker-entrypoint.sh"]             0B        buildkit.dockerfile.v0
<missing>      10 days ago     COPY docker-entrypoint.sh /usr/local/bin/ # …   20.5kB    buildkit.dockerfile.v0
<missing>      10 days ago     RUN /bin/sh -c set -ex   && export GNUPGHOME…   5.41MB    buildkit.dockerfile.v0
<missing>      10 days ago     ENV YARN_VERSION=1.22.22                        0B        buildkit.dockerfile.v0
<missing>      10 days ago     RUN /bin/sh -c ARCH= && dpkgArch="$(dpkg --p…   213MB     buildkit.dockerfile.v0
<missing>      10 days ago     ENV NODE_VERSION=22.23.1                        0B        buildkit.dockerfile.v0
<missing>      10 days ago     RUN /bin/sh -c groupadd --gid 1000 node   &&…   69.6kB    buildkit.dockerfile.v0
<missing>      10 days ago     RUN /bin/sh -c set -ex;  apt-get update;  ap…   619MB     buildkit.dockerfile.v0
<missing>      10 days ago     RUN /bin/sh -c set -eux;  apt-get update;  a…   194MB     buildkit.dockerfile.v0
<missing>      10 days ago     RUN /bin/sh -c set -eux;  apt-get update;  a…   52.2MB    buildkit.dockerfile.v0
<missing>      11 days ago     # debian.sh --arch 'amd64' out/ 'bookworm' '…   133MB     debuerreotype 0.17
PS D:\SystemDesign\SystemDesign\cloud\docker\DockerPractice\optimize-build>

```

3. Fundamental part of image being more size is primarily chosen base image.

```shell
PS D:\SystemDesign\SystemDesign\cloud\docker\DockerPractice\optimize-build> docker history oversized:3.0
IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
c1c8c9f9ca4b   2 minutes ago   CMD ["node" "index.js"]                         0B        buildkit.dockerfile.v0
<missing>      2 minutes ago   COPY index.js index.js # buildkit               12.3kB    buildkit.dockerfile.v0
<missing>      2 minutes ago   RUN /bin/sh -c npm ci # buildkit                84.6MB    buildkit.dockerfile.v0
<missing>      3 minutes ago   COPY package*.json ./ # buildkit                168kB     buildkit.dockerfile.v0
<missing>      22 hours ago    WORKDIR /app                                    8.19kB    buildkit.dockerfile.v0
<missing>      4 weeks ago     CMD ["node"]                                    0B        buildkit.dockerfile.v0
<missing>      4 weeks ago     ENTRYPOINT ["docker-entrypoint.sh"]             0B        buildkit.dockerfile.v0
<missing>      4 weeks ago     COPY docker-entrypoint.sh /usr/local/bin/ # …   20.5kB    buildkit.dockerfile.v0
<missing>      4 weeks ago     RUN /bin/sh -c apk add --no-cache --virtual …   5.48MB    buildkit.dockerfile.v0
<missing>      4 weeks ago     ENV YARN_VERSION=1.22.22                        0B        buildkit.dockerfile.v0
<missing>      4 weeks ago     RUN /bin/sh -c addgroup -g 1000 node     && …   158MB     buildkit.dockerfile.v0
<missing>      4 weeks ago     ENV NODE_VERSION=22.23.1                        0B        buildkit.dockerfile.v0
<missing>      5 weeks ago     CMD ["/bin/sh"]                                 0B        buildkit.dockerfile.v0
<missing>      5 weeks ago     ADD alpine-minirootfs-3.24.1-x86_64.tar.gz /…   9.07MB    buildkit.dockerfile.v0
PS D:\SystemDesign\SystemDesign\cloud\docker\DockerPractice\optimize-build>
```

4. Keep more stable commands at the beginning and the things that are likely to change at the end.
5.The order of instructions influences more on the docker image rebuilding but not on size inordr to optimize time to rebuild one must arrange the order in such a way that least likely changed commands should be at top and most likely changed commands should at the bottoms this way docker leverages caching well.
6. Managing dependencies packed into the docker image. Having only needed dependencies rather than having every dependecies like test dependencies will actually help to optimize image.

