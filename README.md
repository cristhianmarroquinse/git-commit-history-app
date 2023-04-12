# Commit History App

This app was built using NestJS for the backend and NextJS for the frontend, you can follow these steps to get the app running locally. 

## Setting up the project

1. **Clone this project:** You can clone this repo running the follow command in your terminal

```sh 
https://github.com/cristhianmarroquinse/git-commit-history-app.git
```

2. **Setting up backend:** In the project root you will find the **`/backend`** folder, you need to navigate inside this folder using **`cd backend`** command and then run the command **`npm i`** this will start the installation of all the packages needed for the backend. After that, you will need to create the **`.env`** file in the **`/backend`** folder:

```sh 
GITHUB_PAT=git_hub_personal_access_token
```

**This github personal access token can't be uploaded to github for security reasons, if you need this key you will need to ask for it from the owner of the project**

3. **Starting the backend:** Once you have installed the dependencies and you are inside the **`/backend`** folder you must run the command **`npm run start:dev`**, this command will start the backend in port **3001**, you can check this going to http://localhost:3001/ and you must see "Hello World!" message from NestJS.

4. **Setting up frontend:** In the project root you will find the **`/frontend`** folder, you need to navigate inside this folder using **`cd frontend`** command and then run the command **`npm i`** this will start the installation of all the packages needed for the frontend.  After that, you will need to create the **`.env`** file in the **`/frontend`** folder:

```sh 
NEXT_PUBLIC_BACKEND_ENDPOINT=http://localhost:3001
NEXT_PUBLIC_OWNER=cristhianmarroquinse
NEXT_PUBLIC_REPO=git-commit-history-app
```

5. **Starting the frontend:** Once you have installed the dependencies and you are inside the **`/frontend`** folder you must run the command **`npm run dev`**, this command will start the backend in port **3000**, you can check this going to http://localhost:3000/ and you must see the commit history list.