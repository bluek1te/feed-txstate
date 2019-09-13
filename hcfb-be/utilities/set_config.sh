#!/bin/bash

echo "Connect to local database or production database? input: (local or production)"

read databaseMode

if [ $databaseMode = "local" ]
then
        echo Local Database Selected
        echo Creating env.js file...
        rm -f ../app/config/env.js
        touch ../app/config/env.js
        echo "const env = {
                database: 'test',
                username: 'postgres',
                password: 'mysql',
                host: 'localhost',
                dialect: 'postgres',
                pool: {
                        max: 5,
                        min: 0,
                        acquire: 30000,
                        idle: 10000
                      }
               };
	       module.exports = env" >> ../app/config/env.js
        echo "Local env.js config created, database: 'test', username: 'postgres', password: 'mysql'"
	exit 0
fi

if [ $databaseMode = "production" ]
then
    echo Production Database Selected
	echo Database?
	read database
	echo Host?
	read host
	echo Username?
	read username
	echo Password?
	read password
        echo Creating env.js file...
        rm -f ../app/config/env.js
        touch ../app/config/env.js
        echo "const env = {
                database: '$database',
                username: '$username',
                password: '$password',
                host: '$host',
                dialect: 'postgres',
                pool: {
                        max: 5,
                        min: 0,
                        acquire: 30000,
                        idle: 10000
                      }
               };
	       module.exports = env" >> ../app/config/env.js
        echo "Production env.js created"
	exit 0
fi
echo Invalid Option Selected
exit 1
