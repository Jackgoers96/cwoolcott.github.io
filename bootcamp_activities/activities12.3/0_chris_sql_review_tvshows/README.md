# MySQL Chris' Join Favorite TV Show's
## **Using mySQL Workbench MySQL GUI**

#### SETUP
1. Run the contents of the `tvshow_schema.sql` file. This file creates the `tvDB` and replaces if it already exists. 
2. Run the contents of the `tvshow_seed.sql` file. This creates all of the records we will be using

#### Select Queries

1. Display `name` and `quote` of Professor Farnsworth
2. Display `name`, `quote`, and `network` from characters only on "HBO"
3. Display `title` of the show that is of the genre "cartoon" and is on the network "Adult Swim"
4. Display `name` of characters that are of the genre "cartoon" and are on "Fox"
5. Display `name` and `title` of all Characters (whether they have show data or not)
6. Display `title` and `name` of all genre "Drama" (whether they have character data or not)

#### Insert Statments
1. **Create a new insert** Add "Friends" to `tvshow` with data that links the character "Phoebe" to it. Re-run step 5 above!
2. **Create a new query** Add a character to `tvcharacter` with data that links the tv show "Mr. Selfridge" to it. Re-run step 6 above!