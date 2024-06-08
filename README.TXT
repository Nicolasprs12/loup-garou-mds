#1 Récupération du projet avec la commande 
git clone https://github.com/Nicolasprs12/loup-garou-mds

#2 Installation back
    1) Installer les dépendences :
        cd back
        npm install

    2) Ajouter un fichier .env avec les valeures suivantes : 
        DATABASE_URI=mongodb+srv://root:5BY3un8l11lvQaZC@lg-mds-db.ywdss16.mongodb.net/?retryWrites=true&w=majority&appName=lg-mds-db
        PORT=4000
        SECRET_TOKEN=loupGarouToken

    3) Lancer la back avec la commande :
        npx nodemon

Intallation front
## ETAPE 1
cd mon-app
npm install


##ETAPE 2

npm install -D tailwindcss

    3) Lancer le front avec la commande :
        npm start

#3 Intallation mobile
    1) Installer les dépendences :
        cd mobile
        yarn install

    3) Lancer l'application avec la commande :
        yarn start