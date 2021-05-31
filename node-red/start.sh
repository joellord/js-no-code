docker run -d -p 1880:1880 --rm -v ./data/nodered:/data/nodered:z --name nodered --network nodered nodered/node-red
#docker run -it -p 1880:1880 --name nodered nodered/node-red

#Mongo
docker run -d --rm --name mongo  -e MONGO_INITDB_ROOT_USERNAME=admin  -e MONGO_INITDB_ROOT_PASSWORD=12345  -p 27017:27017 --network nodered -v ./data/db:/data/db:z  mongo:4.4

#Mongo-Express
docker run -d --rm --name mongo-admin  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin  -e ME_CONFIG_MONGODB_ADMINPASSWORD=12345  -e ME_CONFIG_MONGODB_SERVER=mongo  -p 8882:8081  --network nodered mongo-express:0.54
