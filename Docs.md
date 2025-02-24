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
The filtering and sorting functionality was relatively easy to implement, but there were a few challenges. The challenge was to figure out how to sort and filter the brand images without making too many calls to the database. To make the app more efficient, the idea would be to make a single call to the database to get all the brand images, then store them in a state, and call the necessary sorting and filtering functions on that state. I also didn't want to over-engineer the solution by using solutions such as Redux to manipulate the state for just a few properties. So I decided to store the state in the URL. 

The idea is basically this: 
- Upon request to the home page (e.g "/"), the NEXT.js middleware would append 2 query parameters to the URL. 
 - "brand_sort" to sort the brand images, the value "asc" to display all brands in ascending order, and "desc" for descending order.

- and "published" to filter the brand images, the value to "true" to display all published brands, and "false" to display all brands.

This solution seemed more practical, instead of making multiple calls to the database. 

Since NEXT.js 15 doesn't implement caching data automatically anymore, it is worth noting that implementing a caching solution for fetching data from the database would make the application more performant. 



