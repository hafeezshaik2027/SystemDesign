#!/bin/bash
MONGODB_IMAGE="mongodb/mongodb-community-server:7.0-ubuntu2204"
MONGODB_CONTAINER_NAME="mongodb"

ROOT_USER="root"
ROOT_PASSWORD="rootpassword"

KEYVALUE_STORE_DB="keyvalue-store"
KEYVALUE_STORE_USER="keyvalue-user"
KEYVALUE_STORE_PASSWORD="keyvalue-password"

LOCAL_PORT=27017
CONTAINER_PORT=27017
NETWORK_NAME="kv-net"

VOLUME_NAME="kv-mongo-data"
VOLUME_PATH="/data/db"


docker run --rm -d --name $MONGODB_CONTAINER_NAME -e MONGO_INITDB_ROOT_USERNAME=$ROOT_USER -e MONGO_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
--network $NETWORK_NAME \
-p $LOCAL_PORT:$CONTAINER_PORT \
-v $VOLUME_NAME:$VOLUME_PATH \
-v "$(pwd)/db-config/mongo-init.js":/docker-entrypoint-initdb.d/mongo-init.js $MONGODB_IMAGE


# docker run --rm --name mongoshell -it --network kv-net mongodb/mongodb-community-server:7.0-ubuntu2204 mongosh mongodb://keyvalue-user:keyvalue-password@mongodb/keyvalue-store
