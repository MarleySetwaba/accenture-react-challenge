# Overview

This document is a brief overview of how I decided to implement Accentures' React Challenge. We will first start with the requirements, then go over the tech stack, filtering and sorting functionality, and finally the challenges I experienced and how I overcame them.

## Requirements

### Front-end:
• Single page coded with React.
• Responsive layout.
• Use any preferred compiler to build & run your site.
• Case studies should be implemented as a slider.
• Brands retrieved via API (back-end portion of this test).
• UI component to sort & filter brands.
The page uses Inter font.

### Back-end:
• Build API to retrieve data for Trusted by leading brands section.
• Ability to filter and sort brands.
• Coded with NodeJS (or similar JavaScript framework)
For example:
• Sort alphabetically, filter by published.
• Data should be stored in a database of your choice.


## Tech Stack

For this project, I decided to use NEXT.js to implement both the frontend and the backend. Since NEXT.js is a React Framework, complete with Client and Server Side Rendering, it fits perfectly for this project. Next.js 15 currently uses SWC for compilation, minifying and bundling, which is a faster alternative to Babel.

I decided to use Tailwind for styling and Shadcn for UI components such as the Slider.

I decided to use Neon Postgres for the database. Neon Postgres is a serverless platform designed to host and scale postgres databases. I also decided to use Drizzle ORM as a dev dependency as the ORM to make calls to the database from the application. 

Lastly, I needed a platform to host the images and retrieve them. So I decided to use Cloudinary to host the brands images and install the 'next-cloudinary' package to easily integrate Cloudinary into the application.

The idea was to upload the brand images onto my Cloudinary account and then use the image URL/ID from Cloudinary in the database to target the brands image URL/ID in the application and display it in the UI. 


## Filtering and Sorting
I implemented a new sorting and filtering feature in the UI of the application. Initially, my first solution was to filter and sort the brands using query params in the URL. But as I read the requirements, I was convinced that the functionality required there be a UI component to allow the user to filter and sort the brands.

So in this solution, I used a select and checkbox UI component. The two components allow the user to change the state of all the brands that were fetched from the database, i.e. to filter and sort them.

I created a new git branch called "ui-sort-filter-feature" to implement this, and the main branch still has the first solution.



