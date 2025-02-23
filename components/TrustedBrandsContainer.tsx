import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";
import React from "react";
import { TrustedBrands } from "./TrustedBrands";
import SectionHeader from "./SectionHeader";

const TrustedBrandsContainer = async () => {
  const allBrands = await db.select().from(brands);


  if(!allBrands){
    throw new Error("Internal Server Error")
  }

  return (
    <div className="px-10 py-24">
      <SectionHeader text="You'll be in good company" />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
        Trusted by leading brands
      </h1>

      <TrustedBrands brands={allBrands} />
    </div>
  );
};

export default TrustedBrandsContainer;
