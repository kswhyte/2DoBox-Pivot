#2DoBox-Pivot

Ideabox? No, 2DoBox rather, or 2DoList perhaps?

At the start to this project, we inherited someone’s previous [ideaBox](https://github.com/kswhyte/idea-box) and pivoted it over to a '2DoBox'. In module 1, we focused on building an 'ideaBox' in which users could record and archive their ideas (good and bad alike). The idea behind 2DoList was to take the code base from one person's repository and pivot: Re-create this app with added features, this time with a spin that ideas are now to-do items on a list. 

This project utilizes Webpack & it’s awesome development server. We kept accessibility in mind here, as this project was largely graded on how accessible the users felt the UI was. We also implemented feature tests using selenium webdriver.

Ian and I took an approach that caused us to refactor all of the code under the MVC model in which a controller handles all the function calls, and components on the DOM (or Model) are updated and created with their own logic separated. All of the UX/UI was handled in the View in which we housed our JQuery calls. We also used sass for the first time to organize our CSS styling. We took a stronger approach towards OOP in this rendition and housed all of this code in a new repo: [ideaBox-OOJS](https://github.com/kswhyte/idea-box-oojs)
