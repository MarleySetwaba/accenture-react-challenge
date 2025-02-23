import { db } from "@/db/drizzle";
import { brands } from "@/db/schema";


//in memory database in-case you want to test without the database
const brandsData = [
  {
    id: 2,
    name: "TymeBank",
    imageUrl: "tyme-bank-black_cdf07e",
    published: true,
  },
  { id: 3, name: "Distell", imageUrl: "distell-black_pqfopu", published: true },
  { id: 4, name: "Spotify", imageUrl: "spotify-black_bgg61u", published: true },
  {
    id: 5,
    name: "Microsoft",
    imageUrl: "microsoft-black_wighzt",
    published: true,
  },
  { id: 6, name: "Engen", imageUrl: "engen-black_hctb03", published: true },
  { id: 8, name: "Wesgro", imageUrl: "wesgrow-black_rv9xyw", published: true },
  {
    id: 9,
    name: "Multichoice",
    imageUrl: "multichoice-black_urru3d",
    published: true,
  },
  { id: 10, name: "PicknPay", imageUrl: "pnp-black_ijllwa", published: true },
  { id: 11, name: "Liquid", imageUrl: "liquid-black_mqssh1", published: true },
  { id: 12, name: "TFG", imageUrl: "tfg-black_oam8jl", published: true },
  { id: 13, name: "Sanlam", imageUrl: "sanlam-black_bryqj4", published: true },
  { id: 14, name: "Santam", imageUrl: "santam-black_jgnxb3", published: true },
  { id: 15, name: "BBC", imageUrl: "bbc-black_bnja54", published: true },
  { id: 7, name: "Nike", imageUrl: "nike-black_p6hlju", published: true },
  { id: 1, name: "Visa", imageUrl: "visa-black_sixbyf", published: true },
];


