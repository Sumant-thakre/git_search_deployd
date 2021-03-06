# Introduction to git_search_deployd

git_search_deployd is an application build in ReactJS for searching and fetching the github user and repositories details.
The applications enables user to type in the github username and search.
If the user exists the application will display the user details as well as the repositories by the github user.
user can see the details of an individual repository by clicking on to it.

# Getting Started

## `Setup` :
1. You can clone or download the zip file from git

clone link : https://github.com/Sumant-thakre/git_search_deployd.git

2. After cloning install all the dependencies using node package manager in the git_search_deployd directory

command : npm install

3. After adding all the dependencies you're ready to launch the application
command: npm start

## `Container and Components Introduction`

### Container
1. SearchHome.js : This container is hosts the overall layout of the application. It hosts the Search bar, UserDetails and RepositoryDetails components.

### Componets
1. UserDetails.js : This component is responsible to show the deatils of the user searched. 
2. RepositoryDetails.js : This component is responsible to show the repository details of the selected repository from the list.
