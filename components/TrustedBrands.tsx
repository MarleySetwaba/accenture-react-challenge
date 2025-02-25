"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"



import { useSearchParams } from "next/navigation";

interface Brand {
  id: number;
  name: string;
  imageUrl: string | null;
  published: boolean;
}



export const TrustedBrands = ({ brands }: { brands: Brand[] }) => {
const [published, setPublished] = useState(false)
const [sortKey, setSortKey] = useState("asc")


//sort brands function
  const sortBrands = (): Brand[] => {   
    if (sortKey === "asc") {
      //return brands in ascending order
      return  brands.sort((a, b) => (a.name > b.name ? 1 : -1))
    } else if (sortKey === "desc") {
      //return brands in descening order
      return brands.sort((a, b) => (a.name > b.name ? -1 : 1));
    } else {
      //if neither, just return all brands
      return brands;
    }
  };

   //sorts and filters brands function
  const sortandFilterBrands = (): Brand[] => {
    //check if published is true
    if (published) {
      //calls sorting function and returns all published brands
      return sortBrands().filter((i) => i.published);
    } else {
      //if not, just returns all brands in sorted manner
      return sortBrands();
    }
  };

  return (
     <div className="">
          <Select onValueChange={v => setSortKey(v)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort and Filter"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By:</SelectLabel>
          <SelectItem value="asc">Ascending Order: A - Z</SelectItem>
          <SelectItem value="desc">Descending Order: Z - A </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Filter By:</SelectLabel>
 <div className="flex flex-row gap-1">
          <Checkbox id="terms" checked={published} onCheckedChange={v => setPublished(!published)}/>
      <label
        htmlFor="terms"
        className="text-sm"
      >
       Published
      </label>
      </div>
        </SelectGroup>
      </SelectContent>

    </Select>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-x-32 gap-y-9 md:gap-y-32 items-center mx-auto md:p-12 mt-16">
      {sortandFilterBrands().map((i) => (
          <CldImage
            key={i.id}
            width="200"
            height="200"
            src={i.imageUrl || ""}
            alt="Image"
            className="max-h-[370px]"
          />
        ))}
    </div>
    </div>
  );
};
