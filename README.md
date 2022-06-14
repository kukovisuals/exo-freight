## Exo Freight Challenge

This is a challenge I made for Exo Freight

## Installation

run npm install

The server for the POST request is in index.js and is listening to 
localhost:3000/api/all

Edit the project.html

## TASKS

When the user clicks on a load on the left side:

[x] The load should be appended to the final route on the right side.

[x] The list on the left should update automatically to only show loads that the driver could take immediately after dropping off their previous load. For example, after clicking on a load that drops off in Sacramento on 06/03, the left side should only show loads that leave from Sacramento on 06/03 or later, and not loads that leave from other locations or before 06/03. 

[x] Implement the ‘Reset’ button.

[x] Implement the ‘Save Route’ button, which sends the final route via POST request to the endpoint below. It is up to you to think of a reasonable format in which to send the data to the server.

localhost:3000/api/all

[x] Your code should be as clean as possible.
[x] Feel free to use any online resources such as Google, StackOverflow, etc.
[x] Avoid spending time setting up libraries - Since this is timed we suggest you don’t add any libraries at all (e.g. React, Vue, etc). In real life we use a much 

[x] Display a message when there are no more eligible loads to add to the route
[x] Add a component to the right side showing the full route’s starting and ending cities and starting and ending dates.
