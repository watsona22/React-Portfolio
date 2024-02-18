# react-portfolio
The purpose of this project was to build API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Social Network API utilizes Express.js routing, MongoDB database, and Mongo ODM to get, update, and delete documents. The dynamic components of our website are supported by JavaScript.

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN the browser URL changes and I am presented with the corresponding section below the navigation and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```
This challenge utilized the node environment to create a dynamic Javascript application using relevant libraries. The result was a functioning PWA application with persistent data. I first encountered issues when trying to add database logic. The second complication occurred while setting up the webpack, so as to include instruction for rendering the app. Even though I included a path to the service worker file, I continued to receive messages that it could not connect. There were also issues pointing to the right image files in the HTML file. I am still unable to display the header file as in the mockup (see index file for detail - commented text) or the favicon - the other features appear to work. There were some messages in the terminal that I had trouble interpreting; for instance there was a persistent message about calling InjectManifest multiple times. I am unsure how this is the case, as it is only listed once but more work with the webpack documentation would likely prove beneficial here. Understanding all the moving parts is still an evolving process and though I see the utility of the supporting techologies used to create the PWA, namely the webpack and service worker, I will need more practice to fully grasp each component.

Reformatting code, implementing clear naming convention, and notating often are skills that I work on continously - I hope to make them a natural part of the build process.

Usage
Please see a link to the deployed application below, for your reference: https://drive.google.com/file/d/1vidrKbck0GYKjHzAcftckSxNs8cFA8IX/view



Credits
The project was completed with help from the course materials and tutor, Erik Hirsch.

License
MIT License Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.