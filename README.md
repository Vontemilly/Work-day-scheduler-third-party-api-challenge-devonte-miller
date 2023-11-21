# Work Day Scheduler

## Overview 
Users can plan events for the course of their workday with this code, which implements a basic weekday scheduler. From 9 a.m. to 5 p.m., the scheduler shows time blocks for each hour, and users can enter and store events for each time block. Depending on whether the time is in the past, present, or future, the dynamically created time blocks' colors alter. The program makes use of CSS, JavaScript (using jQuery), and HTML. Additionally, other libraries like Day.js, Font Awesome, and Bootstrap are included.

# HTML Organization

The web page's structure is specified in the HTML file. It contains links to the primary stylesheet (style.css), JavaScript files (script.js), and other stylesheets (Bootstrap, Font Awesome, Google Fonts).
The page is made up of script references, a time block container, and a header with the title and explanation.

# Javascript (script.js)

## Block Colors for Time
A function called updateColors() is included in the script to dynamically change the colors of time blocks according to whether they are in the past, present, or future. To obtain the current hour, it makes use of the dayjs module.

## Event Handling
The script uses local storage to manage events related to loading and saving.
loadEvents() fills in the relevant time blocks by loading stored events from local storage.

The event text is saved to local storage upon the click event of the save button ($(".saveBtn").on("click",...).

## Generation of Time Blocks
A loop that runs from 9 a.m. to 5 p.m. dynamically generates time blocks.

An hour column, a text field for a description, and a save button are present in every time block.

## Setup and Updates
The header ($("#currentDay").date) displays the current date.text(dayjs()).format ("dddd, MMMM D"))).
On page load, colors and events are initialized. Colors are then refreshed every minute to correspond with the hourly changes.

# CSS (style.css)

The page's general styling, including the font choices, color schemes, and layout, is specified in the stylesheet.

The colors of time blocks are designated for the past, present, and future.

There are also styles defined for the save button's hover effect.

# Summary

With a graphically comprehensible depiction of past, present, and future activities, this Work Day Scheduler offers an easy-to-use interface for planning daily duties. Its usefulness and beauty are enhanced by the use of third-party libraries and careful design decisions.

# Screenshots

<img src="./assets/images/Screenshot (14).png">
<img src="./assets/images/Screenshot (15).png">

# License

This project is licensed under the MIT License - see the LICENSE file for details.


# Author

Devonte Miller


# Acknowledgments

- **Bootstrap**: A front-end framework that is responsive. [Bootstrap link]The URL is https://getbootstrap.com.
**Font Awesome**: Toolkit of fonts and icons. [Font Awesome link]Visit Fontawesome.com.
**Day.js** is a simple JavaScript date/time handling library. [Day.js link]Use this link: day.js.org
- **jQuery**: A feature-rich, compact, and speedy JavaScript library. [JQuery link](www.jquery.com/)

We are especially grateful to the creators and upkeep teams of the aforementioned libraries for their invaluable work.

# Link to Deployed Application

Link:https://vontemilly.github.io/Work-day-scheduler-third-party-api-challenge-devonte-miller/

