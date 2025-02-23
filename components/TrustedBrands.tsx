"use client";
import React, { ReactNode, useMemo, useState } from "react";
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
import { useSearchParams } from "next/navigation";

interface Brand {
  id: number;
  name: string;
  imageUrl: string | null;
  published: boolean
}

// export const TrustedBrands = ({ brands }: { brands: Brand[] }) => {
// const [sortKey, setSortKey] = useState<string>("asc")

// const handleSortChange = (value: string) => {
//     setSortKey(value)
// }
//    const sortBrands = (): Brand[] => {
//       if(sortKey === "asc"){
//          return brands.sort((a, b) => a.name > b.name ? 1 : -1)
//       } 
      
//       if( sortKey === "desc") {
//         return brands.sort((a, b) => a.name > b.name ? -1 : 1)
//       }

//       return brands
//    }

//   return (
//     <div className="relative flex flex-col">
//         <div className="absolute right-0 border border-red-500 items-center">
//         <Select onValueChange={handleSortChange}>
//   <SelectTrigger className="w-[180px]">
//     <SelectValue placeholder="Sort" defaultValue="asc" />
//   </SelectTrigger>
//   <SelectContent>
//   <SelectGroup>
//           <SelectLabel>Sort By:</SelectLabel>
//           <SelectItem value="asc">Ascending Order: A - Z</SelectItem>
//           <SelectItem value="desc">Descending Order: Z - A</SelectItem>
//         </SelectGroup>
//         </SelectContent>
// </Select>
//         </div>
//     <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-x-32 gap-y-9 md:gap-y-32 items-center mx-auto md:p-12 mt-16">
// { sortBrands().map(i => (
//     <CldImage
//     key={i.id}
//     width="200"
//     height="200"
//     src={i.imageUrl || ""}
//     alt="Image"
//     className="max-h-[270px]"
//   />

//     ))}
//     </div>
//     </div>
//   );
// };
export const TrustedBrands = ({ brands }: { brands: Brand[] }) => {
const params = useSearchParams()
const sortKey = params.get("brand_sort") || ""
const published = params.get("published")
console.log(published)


const sortBrands = (): Brand[] => {
  if(sortKey === "asc"){
    return brands.sort((a, b) => a.name > b.name ? 1 : -1)
 } else if( sortKey === "desc") {
   return brands.sort((a, b) => a.name > b.name ? -1 : 1)
 }
  else {
    return brands
  }
}
const sortandFilterBrands = (): Brand[] => {
if(published === "true"){
 console.log(sortBrands().filter(i => i.published))
 return sortBrands().filter(i => i.published)
} else {
  return sortBrands()
}

 }

  return (

    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-x-32 gap-y-9 md:gap-y-32 items-center mx-auto md:p-12 mt-16">
{ sortandFilterBrands().map(i => (
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

  );
};
