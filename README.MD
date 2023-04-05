Mini Memory Madness!
This memory game was created for my milestone project 2 - Interactive Front End Development

The live website can be found https://hart11.github.io/MiniMemoryMadness/ 

I wanted to build a memory game aimed at children, with questionable artwork to make it fun. The style and colours are bright and cheerful, with the game itself being relatively simple to play.




Mini Memory Madness Overview
The landing page is simple, with instructions on how to play and a play button called "Let's go!" The bright colours and playful font appeal to children.







Responsiveness has been tested on https://ui.dev/amiresponsive, different mobile devices and using the developer tools from Chrome. It did look when using the Chrome developer tools, that the header image did not fit to page. This doesn't appear to be the case on the actual devices. I had some issues with media queries on iPhones, but this has since been resolved.

Am I Responsive image of how the landing page looks across different browser sizes and devices.

Table of Contents
Project Research
User Experience Design (UX)
User stories
First Time Visitor Goals
Returning Visitor Goals
Frequent User Goals
Features
Existing Features
Navigation Bar
The Home Page
Website Footer
Future Features
Design
Colour Scheme
Typography
Imagery
Wireframes
Technologies
Test Strategy
User Stories Testing
Manual Testing
Feedback from User Testing
Validator Testing
Unfixed Bugs
Deployment
Credits
Code
Content

Project Research
Having a 4 year old that needs constant stimulation or fun things to do, is itself challenging! Anything that keeps the attention span of a pre-schooler for more than 5mins would be a win! 


Research Analysis
Children like bright colours, playful styles and easy instructions.


User Experience Design
User stories

First Time Visitor Goals
As a First Time user, I want to easily understand the main purpose of the game and follow the instructions.
As a First Time user, I want to be able to navigate throughout the site pages to find relevant content.
As a First Time user, I want to view the website and content clearly on the device I am currently using and switch between devices and have the webpage be responsive.
Returning Visitor Goals
As a Returning user, I want to try improve my score.
As a Returning user, I may want follow them on social media.
Frequent Visitor Goals
As a Frequent user, I want to beat my previous score, and possibly increase the difficulty.
As a Frequent user, I may want to see a variety of dodgy artwork.


Features
Existing Features

Navigation 
Buttons for navigation

The user is led through the game by big bright buttons which direct players to a new game or the home page. If new game is clicked while on the game page, this resets both a timer, cards and shuffles them.


The Home page
Homepage

The bright background has complementary colours, with bright buttons and styling to attract the attention of the young.
The landing page takes the player onto the game page. The landing page has the instructions and a welcome message.


Game page

The game page shows a play area of 4 x 4 cards. This is the main part of the project and allows the user to flip two cards at a time. If the cards match they stay picture up. If they dont, the cards shake and flip back over. The move counter increases with each move, not each flip - as two cards turned would be your move.
The cards themselves were hand-drawn and coloured in matchi



Website Footer
footer

There is currently no footer on the page to keep it simple and very basic. 


Future Features
A more complex timer could be added. To start on first card flip, and stop when game completes.
A difficulty selector could be added on the home page. For example, a 3x3 card play area could be displayed when the user selects the easy option, 4x4 for medium and 5x5 for hard.
Record of high score could be something that could be added, but this may need a user to log in with the ability for it to display the top high scores.
Sounds could also be added to card flips for amusement value, although parents may not be impressed!



Design
Colour Scheme
I wanted a colour scheme based around the chosen background, which was bright. Complementary colours have been used, so yellows, pale greens and purples to catch the eye with bold colouring.

Favicon
I used the Favicon.io website to create a favicon for my website. I wanted a cog icon to represent thinking. I used the Font Awesome icon and styled it - using favicon to produce the file.

Typography
I wanted a simple yet playful looking font, so avoided cursive or handwritting styles. The font used was 'Happy Monkey' from Google Fonts.

Imagery
The background imagery was sourced from pexels.com, and the cards themselves drawn by me on Krita using a drawing tablet and pen. Initially these were designed to be placeholder images, however positive feedback (in the form of laughter) from my 4 year old convinced me to develope the game using these badly drawn creations! 


Layout
The two page layout seemed more professional than a single game page, but limiting this to two pages has kept the overal design very neat and simple.


Wireframes
I wanted the game to appear the same on all devices, two page wireframes as below for home page

Home page wireframe
Game page wireframe

Technologies
HTML
This project uses HTML as the main language used to complete the structure of the Website. The Gitpod template used was created by Code Institute
CSS
This project uses custom written CSS to style the html.
Javascript
This was based on the memory game by CodingNepal, for card flip animations and basic styling with adaptions including a user controlled timer from https://www.youtube.com/watch?v=PIiMSMz7KzM (Easy timer code)


Font Awesome
Font awesome icons are present in the timer.
GitHub
GitHub was the hosting site used to store the source code for the Website and Git Pages is used for the deployment of the live site.
Gitpod
Git was used to create and edit all code used to build the website and store assets. It also functions as version control software to commit and push code to the GitHub repository where the source code is stored.
Google Chrome Developer Tools
Google chromes built in developer tools are used to inspect page elements and help debug issues with the site layout and test different CSS styles. Allows the testing of features/code without editing of your own HTML/CSS.
Krita 
This was used to create wireframes for 'The Skeleton Plane' stage of UX design. This programme was also used to draw the cards and colour in a style suitable for the game.
MS PAINT
Used to edit some of the screenshots.
Post CSS
I ran my code through this tool to ensure no errors were present and it was recommended to use to fix any errors with Ipad resolutions.
Favicon
Favicon.io was used to make the site favicon - the font icon itself was taken from Font Awesome. 

Test Strategy
Testing
Testing for this website was done using the built-in Chrome Developer Tools to check responsiveness on different screensizes and general debugging. Testing was also done on an iPhone 10 using Safari and other mobile devices. No issues were found with responsiveness and previous issues have been dealt with through custom screen aspect media queries.

In addition to my own testing, I sent my website link to family and friends and asked for them to test the website out using the same methods listed below. With thanks to Graeme Arthur for peer review and testing.

The website contains no backend functionality therefore testing will concentrate on:

Testing navigational links open on an external page, as well as the site logo which is designed to redirect to the home page
Testing the responsiveness of the website, making sure the layout and navigational features remain user friendly with UX design maintained
Testing of the form to ensure it functions correctly and does not allow an incomplete entry.
Testing the game play board work correctly and display at all resolution breakpoints.
Testing the game counts the number of moves 
Testing the games timer is optional, but functional




Manual Testing
Navigation - Repeated steps on all pages.
Click on new game to refresh, and home button takes you back to index.html.


Home page

Verify that the images are correctly shown on all browsers and at all breakpoints.
Verify that the buttons present the user with the correct links and the timer popup. Ensure that the modals display correctly on all screen sizes and can be closed easily by the user to return to the page behind.

Game page
Verify that the game adjusts responsively to various devices and screen sizes
Verify the game can be played
Verify that the game can be completed and board disabled when game won.
Verify that timer can be started, paused and reset.


Feedback from User Testing
The main piece of feedback from my user testing was a clean, following design. Good use of colours, some issues were identified with regards to responsiveness on certain devices.


Validator Testing
HTML
No errors were returned when passing through the official [W3C validator]
CSS
No errors were found when passing through the official [(Jigsaw) validator]

Unfixed Bugs
There are no unfixed bugs present within the website.


Deployment
Once the development process was well underway, the website was deployed to GitHub pages.




Code

The html, CSS and Javascript code for game was adapted from Coding Nepals memory game. This helped with the animations, flipping the cards, basic styling as well as the matching of cards. I then customised with my own CSS styling to create a bouncy and playful style.

I referred to W3Schools, YouTube tutorials, Slack, Stack Overflow and peers when I encountered issues, which were primarily to do with layout issues and media queries, although the timer did cause some issues as it was different to what was envisaged.

Content

The background image used in the project was sourced from pexels.com. The cards were designed, produced and styled by me using Krita. 
All icons used on the website were taken from Font Awesome

