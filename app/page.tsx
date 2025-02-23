import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import { TrustedBrands } from "@/components/TrustedBrands";
import TrustedBrandsContainer from "@/components/TrustedBrandsContainer";
import WhatWeDo from "@/components/WhatWeDo";
import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";
import Image from "next/image";

export default async function Home() {


  return (
<>
<MenuBar/>
<Hero/>
<WhatWeDo/>
<CaseStudies/>
<TrustedBrandsContainer/>
<Footer/>
</>
  );
}
