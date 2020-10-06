# El Grimorio Moderno

## Projet personnel en cours de développement...

[![In Progress](https://img.shields.io/badge/in%20progress-yes-red)](https://img.shields.io/badge/in%20progress-yes-red)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Ce site doit vous permettre de rechercher une recette en indiquant les ingrédients à votre disposition.
Le thème de la sorcellerie a été choisi pour les données de test.

Le but de ce développement est de se familiariser avec Bootstrap et une architecture MVC classique (avec handlebars pour la gestion des vues).

## Installation
------------

### Back

Executer schema.sql qui se trouve dans database

Creer config.json dans models avec les clés suivantes:
````
{
  "user": "user",
  "password": "password"
}
````

````
npm i
nodemon serve
````

### Front
````
npm run serve
````
