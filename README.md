# Norfolk Snowsports Club (NSC) Volunteer Hours website

## Python and Data Centric Development Milestone Project.

---

![responsive deign image](#)

This site has been created to reduce the amount of admin work at Norfolk Snowsports Club and allow instructors a place where they can see their current expenes due and hours volunteered.

---
---

## Table of contents

---

- [UX](#ux)
    - [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [User Stories](#user-stories)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
- [Features](#features)
    - [Navigation Bar](#navigation-bar)
    - [Home Page](#home-page)
    - [Events Page](#events-page)
    - [Gallery Page](#gallery-page)
    - [Future Features](#future-features)
- [Technologies used](#technologies-used)
- [Testing](#testing)
    - [Functionality Testing](#functionality-testing)
    - [Compatibility Testing](#compatibility-testing)
    - [User Story Testing](#user-story-testing)
    - [Issues and bugs](#issues-and-bugs)
    - [Performance Testing](#performance-testing)
    - [Code Validation](#code-validation)
- [Deployment](#deployment)
- [Credits](#credits)
    - [Learning resources and styling ideas](#learning-resources-and-styling-ideas)
    - [Code](#code)
    - [Images Used](#images-used)
- [Other Information](#other-information)
    - [Git commits](#git-commits)
    - [Wireframes Design Changes](#wireframe-design-changes)
    - [Social Links](#social-links)
    - [Reasons for coding format](#reasons-for-coding-format)
- [Project Screenshots](#project-screenshots)

---
---

## UX

---

### Project goals

The primary goal of the NSC Volunteer Hours website is to reduce the amount of admin work needed when volunteer instructors submit their hours at Norfolk Snowsports Club, NSC. Currently instructors complete a lesson, write their hours in a daily log then this in manually input onto an access database and an excel sheet. The expenses are then caluclated, printed and sent to accounts for accounts to type the information into their excel sheets. This site will allow instructors to enter their details and there expenses will automatically be calculated saving hundreds of hours a year in admin time.

The secondary goal is to provide instructors a place where they can easily see their recent hours worked, their expenses due and their freetime accrued. Typically instructors can only see this information once every three months when their expenses statements are print but this site will allow them live view of all their record hours at any one time.

### User goals

#### User goals:

The users will be volunteer ski and snowboard instructors and coaches.

* Users can add the lessons they have completed.
* Users can see the lessons they have added.
* Users can update and delete the lessons they have added.
* Users can see a running total of the hours they have voluntered and their expenses due.
* Users can Search for lesson by their type/category.

#### Site Admins Goals:

The site admin will be NSC employees.

* Admin can view, edit and delete any and all lessons input by instructors.
* Admin can add new records of lessons on an instructors behalf.
* Admin can new lesson types/categories.
* Admin can edit the contents of the home/launch page.
* Admin can view, edit and delete users.

### User Stories

#### As an instructor I would like to:

* Easily add lessons I have created to the NSC Volunteer Hours Site.
* View all my lessons volunteered.
* Edit and delete any records I have incorrectly added.
* See an overview of the hours I have volunteered and the expenses due.
* Manage my account information.

#### As an Admin User I would like to:

* View all submitted hours.
* Edit and delete any records that are incorrect.
* See an overview of all hours and expenses.
* Easily search for a user or a lesson type/category.
* Edit and delete user information.
* Update the home/landing page.
* Add, Edit and Delete new lesson types/categories.
* Input lesson information on an instructor behalf.

### Wireframes

I used [Balsamiq.com](https://balsamiq.com/) to create the wireframes.

Home Page

![wireframe home page](assets/screenshots/wireframe_index_img.png)

Events Page

![wireframe events page](assets/screenshots/wireframe_events_img.png)

Gallery Page

![wireframe gallery page](assets/screenshots/wireframe_gallery_img.png)

### Surface

#### Colours

Main colours used in project:

* #BEEE62 - Primary colour one.
* #113CF3 - Primary colour two.
* #fff - used for paragraphs and buttons to contrast with primary colour two.
* #000 - used for paragraphs and buttons to contrast with primary colour one.

#### Fonts

* Primary font - 
* Secondary font - 
* Back-up font - 

#### Images

Back to [Table of Contents](#table-of-contents)

## Features

---

The website consists of 3 pages home, events and gallery. The websites features are listed below:

### Navigation bar

* Navbar has a fixed position at the top of every page. It is responsive and for extra small devices, mobile devices, this list of pages will collapse into a burger menu.
* The site logo/title on the left side can be used as a link back to the home page.
* The page names on the right can be used to navigate back and forth between home, events and gallery.

### Home page

#### Hero Image Sections

* The section has a clear title and call to action. This action being join the fun today! To encourage others to join.

#### About Us Section

* Clearly defined sections of text so users do not have to read everything and can go directly to the part they want to know about for example skiing on snowboarding.
* Icons of skiers and boarders used above their respective titles so even at a glance you can see what might be of interest to read.

#### Testimonials

* Short and to the point testimonials so people can have an idea of what others think of the club.
* Images of the quote authors are shown at medium screen size and above. This breaks the text up a little and provides a little security that these testimonials were written by actual customers.

#### Activity schedule

* Tables used to list the activities as this is a clear and easy way to find out what's coming up.
* Separate tables for skiers and snowboarders so customers are not confused and turn up to the wrong sessions.
* Call to download and button that allows people to download a pdf of the upcoming schedule. This will open in a blank page so the user doesn't lose their place on the page.

#### Sign Up Section

* Call to action encouraging users to sign up for updates.
* Sign up button that opens a modal where users can submit their name and email. The use of a modal allows the user to keep their position on a page.

#### Footer

* Contact information for the group leader provided if people wish to call or email.
* Links to social media pages so users can easily navigate to social pages of the group. These will open in a blank page so the user doesn't lose their place on the page.

### Events page

#### About Events Section

* Short description explaining a little about the events and camps.
* Another call to action button to try and grab the attention of anyone missed on the home page. This opens a modal where users can submit their name and email. The use of a modal allows the user to keep their position on a page.

#### Event Listing Sections

* Clear Organisation name
* Table to show the events date, time, price and activities involved.
* A small paragraph about the organisation.
* Contact information for the organisers.
* Image from the organiser showcasing their events or an athlete that has attended.

### Gallery Page

* Cleary defined symmetrical photos.
* Photos per page width changes depending on screen width.

### Future Features

* Results Page - A page users can visit to see results of recent events.
* User Profiles - A login button to allow users to login to individual profiles.
* Profile Page - This could have information regarding to their child's performance within the group including feedback, rankings, exercises and more.
* Shop - Allows parents to purchase the junior club merchandise through an online store.
* Add maps of where the events and camps take place and the home slope.

Back to [Table of Contents](#table-of-contents)

---
---

## Technologies used

---

#### HTML5

* Used as a structural language.

#### CSS

* Used as a style language.

#### Bootstrap

* [Boostrap](https://getbootstrap.com/) Version 4.3.1 used as a CSS framework to aid responsive design. A mobile first approach was taken.

#### Font Awesome

* [Font Awesome](https://fontawesome.com/) was used for social links, skiing and snowboarding headings and for table headings.

#### Google Fonts

* [Google Fonts](https://fonts.google.com/) used as a font resource.

#### GitHub

* [GitHub](https://github.com/) was used as the site's repository.

#### Gitpod

* [Gitpod](https://gitpod.io/workspaces/) was used as a development hosting platform.

#### Wireframes

* [Balsamiq.com](https://balsamiq.com/) was used as a wireframe tool to sketch the structure of the site.

Back to [Table of Contents](#table-of-contents)

---
---

## Testing

---

### Functionality Testing

I used google chrome developer tools throughout the project to text everything as I was working on it.

Tested:

#### Responsiveness

Expected - The site is expected to respond to different screen sizes.

Testing - Tested this by expanding and contracting the window size inside google inspect.

Result- Site responded as expected to all screen sizes 320px and up.

#### Navbar links

Expected - Navbar links and title will direct to the respective page and the title will act as an additional home link.

Testing - Clicked on all the links inside each page.

Result - All navbar elements working.

#### Test text to background colour contrast

Expected - it's expected that there is a clear contrast between text colour and background colour throughout the site.

Testing - Used google inspect to hover over all texts and check contrast is ticked. Also read everything to check it was all clearly visible.

Result - All text has a good contrast between itself and background colour.

#### Buttons

Expected - Buttons will direct the user to the desired outcome in this case a pdf document for the download now button and a sign up modal for the sign up button.

Testing - Clicked on the buttons to see what happened. Also checked the :hover class was working when moving on and off the buttons.

Result- All buttons responded as expected.

#### Social Links

Expected - To be directed to the respective site.

Testing - Clicked on all social links to see where they linked to. Also checked the :hover pseudo element is working by hovering on and off the links.

Result - All links responded as expected and linked to the appropriate sites.

#### Event Contact Links

Expected - To be linked to the event organisers site.

Testing - Clicked on a link to see where it linked to. Also checked the :hover pseudo element is working by hovering on and off the link.

Result - Links Respond as expected and link to the event organiser sites.

#### Tested Navbar responsiveness

Expected - Navbar items will stay inline fit within the page.

Testing - Tested this by expanding and contracting the window size inside google inspect.

Result - Did not respond as expected on screen widths from 576px to 608px. The navbar links would squash the Junior Club title due to lack of spacing.

Fix - Changed the nav links padding to allow for more room.

#### Tested Modals

Expected - Able to input and submit information.

Testing - Open modal using sign up buttons, type information and submit.

Result - Functionality responded as expect however found an issue where button was reversing colours when pseudo :hover was active.

Fix - Change the :hover background colour to green so the button is always visible.

#### Gallery page title

Expected - Increase in size at screen width 576px and up.

Testing - Tested this by expanding and contracting the window size inside google inspect.

Result - Text size did not change.

Fix - Added font size of 48px to media query for 576px width and up.

### Compatibility Testing

This site was tested across the following devices and browsers:

#### Devices

* Hp Laptop using windows 10 home
* Honor 20 pro mobile phone

#### Browsers

* Google Chrome
* Mozila Fox
* Microsoft Edge

### User Story Testing

#### As the Camp Lead Coach and website owner:

* I would like to present the club to potential new custom in a clear and visually pleasing way.
    * The site has clearly defined sections and is responsive.
* Keep existing members up to date with events and camps.
    * The Activity Schedule and Events page are clearly label and defined making it easy to find out about events and camps.
* Increase our contact database.
    * There are two places on the site with a call to action and a sign up modal to try and encourage users to sign up.
* Post weekly activities.
    * Activity Schedule clearly formatted to make adding new information quick and easy.

##### Supporting screenshots

![Junior Club Site Testimonials Section](assets/screenshots/finshed_screenshot4.png)
![Junior Club Site Activity Schedule Section](assets/screenshots/finshed_screenshot5.png)
![Junior Club Site Sign Up Section](assets/screenshots/finshed_screenshot6.png)
![Junior Club Site Event Listing Section](assets/screenshots/finshed_screenshot10.png)

#### As a new customer:

* I would like to find out what the club is about.
    * About Us section provides all important information regarding the club.
* I wish to know how to join the group.
    * How to join is clearly labelled and explained inside the about us section.
* I would like to know how much it costs and when the sessions are.
    * Session information is clearly labelled and explained inside the about us section.

* I would like to read customer reviews or testimonials.
    * Testimonials section is clearly defined and easy to find in the home page.

##### Supporting screenshots

![Junior Club Site About Us Section](assets/screenshots/finshed_screenshot2.png)
![Junior Club Site About Us Section](assets/screenshots/finshed_screenshot3.png)
![Junior Club Site About Us Section](assets/screenshots/finshed_screenshot4.png)

#### As a returning customer:

* I would like to check what activities are coming up.
    * The Activity Schedule section has the upcoming schedule and events listed and if users would like a more complete list there is a download button where they can download the activity schedule pdf.
* I would like to view upcoming events and camps.
    * Events page lists upcoming events and camps and they are sectioned separately with all the information regarding an event within the section.
* I wish to sign up to a newsletter to keep up to date.
    * There are two places that a user can sign up, one on the home page and one on the events page. Both has call to actions and a sign up button.

##### Supporting screenshots

![Junior Club Site Activity Schedule Section](assets/screenshots/finshed_screenshot5.png)
![Junior Club Site Download Now Button](assets/screenshots/finshed_screenshot6.png)
![Junior Club Site Sign Up Section](assets/screenshots/finshed_screenshot9.png)
![Junior Club Site Event Listing Section](assets/screenshots/finshed_screenshot10.png)
![Junior Club Site Event Listing Section](assets/screenshots/finshed_screenshot11.png)
![Junior Club Site Event Listing Section](assets/screenshots/finshed_screenshot12.png)

### Issues and bugs

All issues and bugs were found using google inspect and the responsive design tools. 

Below I have explained the issues and how they were resolved:

* Overflowing Content triggering a x axis scroll bar.

This was happening due to Bootstraps .row margin having a -15px setting. To correct this I styled the .row class with a margin of 0. 

* Invisible hamburger menu.

The hamburger menu was active as you could see it highlight on google inspect when hovered over. To fix this the navbar-dark class was added to make this visible. Bootstrap CDN helped find the solution.

* Navbar title 'Junior Club' wasn't linking back to the home page.

This issue was caused by a typo in the href element.

* 3rd testimonials quote was displaying out of line on both the x and y axis.

This was a due to the class being set to col-sm-12. This was corrected by changing the class to col-12.

* Fixed issue where HTML wasn't passing validation as an a element was inside button element.

Moved the classes from the button element to the a element then removed button element. Moved all the attributes from .activity-schedule button in CSS into the .activity-schedule a and a:hover classes.

Below are the before and after screenshots:

![HTML Validator Fail Image 1](assets/screenshots/html_validation_error_img1.png)
![HTML Validator Fail Image 2](assets/screenshots/html_validation_error_img2.png)
![HTML Validator Correction](assets/screenshots/html_validation_error_img3.png)

### Performance Testing

#### Mobile Devices

Before

![Lighthouse Performance Screenshot](assets/screenshots/performance_screenshot1.png)

After Changes were made to increase these stats

![Lighthouse Performance Screenshot](assets/screenshots/performance_screenshot2.png)

After adding gallery page and making changes to increase the page stats

![Lighthouse Performance Screenshot](assets/screenshots/performance_screenshot5.png)

#### Desktop Devices

Before

![Lighthouse Performance Screenshot](assets/screenshots/performance_screenshot3.png)

After Changes were made to increase these stats

![Lighthouse Performance Screenshot](assets/screenshots/performance_screenshot4.png)

After adding gallery page and making changes to increase the page stats

![Lighthouse Performance Screenshot](assets/screenshots/performance_screenshot6.png)

#### Changes made to improve stats

* Reduced the file size of the testimonial images
* Added alt attributes to all images
* Added rel="noopener" to all external link to improve performance.

#### Potential future changes to improve this further

* Import images in a different format
* Add meta tags to headings
* Reduce the amount of images used
* Import the fonts instead of linking

### Code Validation

At the end of the project, I used the validators below to validate the HTML and CSS code.

* [W3C HTML Validator](https://validator.w3.org/#validate_by_input)
* [W3c CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

Back to [Table of Contents](#table-of-contents)

---
---

## Deployment

---

This project was deployed on GitHub pages. I used Gitpod as a development environment where all changes were committed to the repository in GitHub.

To deploy the project I had to:

* Log into GitHub and open the MS1-Junior-Club repository.
* Got to settings and scroll down to GitHub pages.
* Select the first dropdown with 'none' and change to branch:master.
* Click save and then refresh the page.

The site is published at [https://charlies115.github.io/MS1-Junior-Club/](https://charlies115.github.io/MS1-Junior-Club/)

To run locally:

* Log into GitHub and open the MS1-Junior-Club repository.
* Select Code and click download zip file.
* After downloading you can save and open the file locally on your device.

Back to [Table of Contents](#table-of-contents)

---
---

## Credits

---

To complete this project I used Code Institute student template: [gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

### Learning resources and styling ideas

Throughout learning with code institute I have researched and learnt using the following site and courses:

* [Code Institute](https://learn.codeinstitute.net/login?next=/dashboard)
    * Throughout this project I have referred back to lots of different modules to refresh myself on good practices.
* [W3Schools](https://www.w3schools.com/)
    * I have used this site throughout the course when looking for ideas or potential stylings to code.
* [CSS-Tricks](https://css-tricks.com/)
    * I have occasional visited this site for ideas and potential fixes throughout the course.
* [Bootstrap](https://getbootstrap.com/)
    * Throughout this project I have visited this site many times to create the pages structure and give ideas and coding examples.
    * I have also read up on ever class I have used to understand exactly what it will do to the site when used.
* [Stack Overflow](https://stackoverflow.com/)
    * I have visited this site a few times throughout the course however I have avoided it whilst building this site as I wanted to work out how to do most of the code myself and not just see fixes.
* [Code Academy](https://www.codecademy.com/)
    * I have not visited this site recently however this is where I first started learning to code.

### Code

I have tried to do almost all the code and styling myself through trial and error and using google inspect.

Below are the examples of code I have copied to complete this project:

* [Bootstrap - Modal](https://getbootstrap.com/docs/5.0/components/modal/)
    * The modal was originally copied from bootstrap library. This modal has been heavily modified.
* [Bootstrap - Navbar](https://getbootstrap.com/docs/5.0/components/navbar/)
    * The navbar was originally copied from bootstrap library. This has been heavily modified.
* [Bootstrap - Hamburger Menu](https://getbootstrap.com/docs/4.3/components/navbar/#how-it-works)
    * The hamburger menu was originally copied from bootstrap library. This has been heavily modified.
* [CSS-Tricks - Full Page Background Image](https://css-tricks.com/perfect-full-page-background-image/)
    * This was used to ensure the background images are loaded correctly across devices.

### Images Used

[Unsplash Images](https://unsplash.com/) 

* testimonial_img1.jpg - [Omid Armin](https://unsplash.com/photos/HtQLD6HOS94?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

* testimonial_img2.jpg - [Hisu Lee](https://unsplash.com/photos/u6LGX2VMOP4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

* testimonial_img3.jpg - [Elizeu Dias](https://unsplash.com/photos/2EGNqazbAMk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

* events_img1.jpg - [Victoire Joncheray](https://unsplash.com/photos/EF0UG0xFgnA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

* event_one_img1.jpg - [Sebastian Staines](https://unsplash.com/photos/xZIFEPtRsRI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

* gallery_img1.jpg - [Yann Allegre](https://unsplash.com/photos/8FG9tt8qZ-8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

* photo10.jpg - [Jörg Angeli](https://unsplash.com/photos/2Gs29PjkAA4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

All other images that are not credited above I have permission to use by the subjects or their parents. I either took them myself or they were taken by a group instructor.

Back to [Table of Contents](#table-of-contents)

---
---

## Other information

---

### Git commits

There Github commit on February 1st saying 'http.server' was not intend to be submit with this message so I done another commit with the message 'added event two and styled. websites at the bottom of section linked to the event organisers home page.' which was the intended message for this commit.

### Wireframe Design Changes

Below I have listed the major change to the finish project structure from the wireframes and why.

* About us section added
    * This section was added as having this information split up and in other section made it difficult for users to get a full picture.

* Schedule of events
    * Put the schedule of events inside a table instead of events tiles to make the information easier to breakdown and acquire. The tile approach was tried in a separate repository but did not have an appealing look.

* Event Listings 
    * One image per listing instead of multiple. This was because the screen seemed too crowded with more than one image. This was also tried in a separate repository.

* Events and Gallery titles
    * Page width images with a title encased were added to provide consistency throughout the site.

* Events
    * Schedule wasn't added as there is an activity schedule on the home page and I wanted to reserve the events page for events and camps.

* Gallery
    * Decided to go with images all the same size with spacing as I thought this looked better then images of all different sizes side by side.

### Social links

The social links are linked to the social platforms home page until accounts for Junior Club are set up.

### Reasons for coding format

I have chosen to write slightly more CSS than is need as I have tried give every HTML section its own independent section of CSS instead of just styling all similar elements like the h2, h3, i and p elements once. I have done this to help maintain the structure and styling of the site even if a section is drastically changed or deleted in the future. This will also help if sections are to be moved to a different page or a different repository as you can cut out the section in HTML and the respective section in CSS.

Back to [Table of Contents](#table-of-contents)

---
---

## Project Screenshots

---

Finished Product

![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot1.png)
![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot2.png)
![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot3.png)
![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot4.png)
![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot5.png)
![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot6.png)
![Junior Club Site Screen Shot Home Page](assets/screenshots/finshed_screenshot7.png)
![Junior Club Site Screen Shot Events Page](assets/screenshots/finshed_screenshot8.png)
![Junior Club Site Screen Shot Events Page](assets/screenshots/finshed_screenshot9.png)
![Junior Club Site Screen Shot Events Page](assets/screenshots/finshed_screenshot10.png)
![Junior Club Site Screen Shot Events Page](assets/screenshots/finshed_screenshot11.png)
![Junior Club Site Screen Shot Events Page](assets/screenshots/finshed_screenshot12.png)
![Junior Club Site Screen Shot Events Page](assets/screenshots/finshed_screenshot13.png)
![Junior Club Site Screen Shot Gallery Page](assets/screenshots/finshed_screenshot14.png)
![Junior Club Site Screen Shot Gallery Page](assets/screenshots/finshed_screenshot15.png)
![Junior Club Site Screen Shot Gallery Page](assets/screenshots/finshed_screenshot16.png)

Back to [Table of Contents](#table-of-contents)

---
---