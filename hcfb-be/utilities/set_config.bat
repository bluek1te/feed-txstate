ECHO OFF
ECHO "Set Database Configuration"

SET /P databaseMode= Connect to local database or production database? input: (local or production)

IF "%databaseMode%"=="local" (
	SET ERR_CHECK="false"
	ECHO "Local Database Selected"
        ECHO "Creating env.js file..."
        DEL ..\app\config\env.js
        ECHO.> ..\app\config\env.js
        (ECHO const env = {
         ECHO       database: 'test',
         ECHO       username: 'postgres',
         ECHO       password: 'mysql',
         ECHO       host: 'localhost',
         ECHO       dialect: 'postgres',
         ECHO       pool: {
         ECHO               max: 5,
         ECHO               min: 0,
         ECHO               acquire: 30000,
         ECHO               idle: 10000
         ECHO             }
         ECHO      };
	     ECHO module.exports = env) >> ../app/config/env.js
        ECHO "Local env.js config created, database: 'test', username: 'postgres', password: 'mysql'"
)

IF "%databaseMode%"=="production" (
	SET ERR_CHECK="false"
    ECHO Production Database Selected
	SET /P database= Database?
	SET /P host= Host?
	SET /P username= Username?
	SET /P password= Password?
        ECHO Creating env.js file...
        DEL ..\app\config\env.js
        ECHO.> ..\app\config\env.js
        (ECHO const env = {
        ECHO        database: '%database%',
        ECHO        username: '%username%',
        ECHO        password: '%password%',
        ECHO        host: '%host%',
        ECHO        dialect: 'postgres',
        ECHO        pool: {
        ECHO                max: 5,
        ECHO                min: 0,
        ECHO                acquire: 30000,
        ECHO                idle: 10000
        ECHO              }
        ECHO       };
	    ECHO module.exports = env) >> ../app/config/env.js
        ECHO "Production env.js created"
)
IF "$ERR_CHECK"=="true" (
	ECHO INVALID OPTION SELECTED
)
