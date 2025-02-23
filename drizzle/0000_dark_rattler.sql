CREATE TABLE "brands" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"imageUrl" text,
	"published" boolean DEFAULT false NOT NULL,
	CONSTRAINT "brands_name_unique" UNIQUE("name")
);
