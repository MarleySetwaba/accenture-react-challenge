You can find the source code for this project on my Github [Here](https://github.com/MarleySetwaba/accenture-react-challenge) 

# Getting Started

## Step 1: 
Clone the repo onto your local machine, cd into the "react_challenge" folder

Then run

```bash
npm install
```

to install all the necessary dependencies.

## Step 2: 

Create a .env file in the root of the application and add the following:

```bash
DATABASE_URL=postgresql://neondb_owner:npg_nb4LHAG5KXhr@ep-still-haze-a9iywm8k-pooler.gwc.azure.neon.tech/neondb?sslmode=require
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dz9ydmifl"
```


## Step 3: 
Open your terminal and run 

```bash
npm run dev
```


## Step 4: 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Side Note
I already deployed this application on Vercel, and you can view the finished project [Here](https://accenture-react-challenge.vercel.app/)

##Filtering And Sorting
To filter the brands, please navigate to the url paramaters, find the "published" property and change the value to "true" to display all published brands, and "false" for all brands.

To sort the brands, please navigate to the url paramaters, find the "brand_sort" property and change the value to "asc" to display all brands in ascending order, and "desc" for descending order.
