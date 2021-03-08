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

## `Container and Components Introduction` :

### Container
1. SearchHome.js : This container is hosts the overall layout of the application. It hosts the Search bar, UserDetails and RepositoryDetails components.

### Componets
1. UserDetails.js : This component is responsible to show the deatils of the user searched. 
2. RepositoryDetails.js : This component is responsible to show the repository details of the selected repository from the list.

## `Libraries` :

Apart from ReactJs library, The app uses multiple third party libraries for various purposes.

1. Semantic UI React:
  The application uses Semantic UI React library to ensure the user interface should be simple, easy to understand yet looks great. 
  The library blends perfectly with React.

2. Axios:
  To fetch the data from GitHub REST APIs, application uses axios library. Data fetched through axios is in JSON form and doesn'yt need further processing

3. lodash:
  lodash is used for various logical operations in the code such as iteration, size check, etc. 

## `Application Flow`:

1.![HomeScreen](https://user-images.githubusercontent.com/20232034/110206556-69d16900-7ea4-11eb-9819-0e3dc24ac180.png)

2.![SearchUserName](https://user-images.githubusercontent.com/20232034/110206733-90dc6a80-7ea5-11eb-9ebb-3a5eae712c27.png)

3.![LoadOnclickSearch](https://user-images.githubusercontent.com/20232034/110206742-9fc31d00-7ea5-11eb-8faa-ab885a2ce576.png)

4.![SearchResult](https://user-images.githubusercontent.com/20232034/110206747-a9e51b80-7ea5-11eb-8685-a471d2890925.png)

5.![repositoryDetails](https://user-images.githubusercontent.com/20232034/110206767-be291880-7ea5-11eb-9235-57f2554999d3.png)




