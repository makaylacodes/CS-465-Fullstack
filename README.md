# CS-465-Fullstack
CS 465 Fullstack Development with the MEAN stack.

App Admin
    Just installed angular globally, fixed the issue of ng not being a recognized term
    Now the OSSL error
        Used : $env:NODE_OPTIONS = "--openssl-legacy-provider" 
            It worked!
    Can't view the list of trips no matter where I click it seems unless I login
        Tried logging in but it's not responding so I think I need to run the server
            New terminal and ran npm start
            SUCCESS! Need the server running in conjunction with the app admin in order to have it work properly


Travlr Getaways is a travel agency web app built with the MEAN stack.

***** This is all relevant for the current branch, branch 7 with final product. Could probably go to diff branch if I want to deploy one without the admin dash that's still dynamic

** npm start in the main folder starts the connection to mongodb, but not the app
    used in any folder will start connection

** cd into public folder and then went live. Gave me generic page with folders, click public and it auto loads the index page
    Going to try it without the cd from main folder
        It works for the static pages so don't need to do anything else
    These are just the static pages which should be easy enough to deploy. There's no admin page connected



App Admin
Going to try ng serve without starting the server; didn't work so I checked the json file and saw it's just ng
    That didn't work either so just ran npm install to make sure I had all dependencies, trying again


App API

App Server
npm start -- connects Mongoose to mongodb to have access to the database if successful console message should be
    Mongoose connected to mongodb://127.0.0.1/travlr

    Ending the server to see what happens without it