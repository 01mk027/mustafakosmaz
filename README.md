## Introduction and Purpose
Purpose of this React.js app is to give information about myself and to be used as my personal website. Anyone who want to use this app or to develop for personal purposes can use this app without any permission, but it is recommended that content of app (views) must be changed. 

## Version of Node and NPM
<b>Node.js version:</b> 20.3.1<br/>
<b>npm version: </b> 9.7.2
<i>This project is developed on OS of Ubuntu. (20.04.6LTS Focal Fossa)</i>

## How to run on my computer?
First of all, to run this project on your computer, ```Node.js``` must be installed on your computer. 
After download Node.js which is compatible with your OS from <a href="https://nodejs.org/en/download">this address</a>, and installing, and cloning this repository or downloading, open terminal of your OS where the folder which holds this repository files and type the command:<br/>
```npm i --save```<br/>
After pressing enter, required dependencies are installed via ```npm```.
And then type the command:<br/>
```npm run start```.

## Installed packages and installation purposes
### axios
To fetch content of app and assign to context API object.
### bootstrap and react-bootstrap
To design of pages responsively.
### react-helmet and react-helmet-async
To perform basic SEO operations.
### react-pdf
To show my thesis in ```Scientific Publication``` page.
### html-react-parser
To parse plain text to HTML text in ```Projects``` page.

## Role of Context API in this project
Context API is used in this project for changing content of whole application with one 'click' without refreshing page. In Navbar, there are two flags: English and Turkish. By clicking on each flag icon, related app content is fetched via Context API.  
#### Note:
I know i18ntranslation can be used for language translation, but i reject to use it because some translations are custom.

 
