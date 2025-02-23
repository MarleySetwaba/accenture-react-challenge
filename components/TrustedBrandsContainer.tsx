import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";
import React, { Suspense } from "react";
import { TrustedBrands } from "./TrustedBrands";
import SectionHeader from "./SectionHeader";
import TrustedBrandsSkeleton from "./TrustedBrandsSkeleton";

const TrustedBrandsContainer = async () => {
  
  // Retrieve all brands from the database.
  const allBrands = await db.select().from(brands);

// Check if the database query was successful.
  if(!allBrands){
      // If the query failed (e.g., database connection issue), throw an internal server error.
    throw new Error("Internal Server Error")
  }

  return (
    <div className="px-10 py-24">
      <SectionHeader text="You'll be in good company" />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
        Trusted by leading brands
      </h1>
      <Suspense fallback={<TrustedBrandsSkeleton />}>
      <TrustedBrands brands={allBrands} />
      </Suspense>
    </div>
  );
};

export default TrustedBrandsContainer;
