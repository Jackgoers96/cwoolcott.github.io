
1. Display `name` and `quote` of Professor Farnsworth

- SELECT name, quote FROM tvcharacter where name = 'Professor Farnsworth';

2. Display `name`, `quote`, and `network` from characters only on "HBO"

- SELECT name, quote, network FROM tvcharacter INNER JOIN tvshow ON tvcharacter.showid = tvshow.showid WHERE network = "HBO";

3. Display `title` of the show that is of the genre "cartoon" and is on the network "Adult Swim"

- SELECT title FROM tvshow WHERE genre = "Cartoon" AND network = "Adult Swim";

4. Display `name` of characters that are of the genre "cartoon" and are on "Fox"

- SELECT name FROM tvcharacter INNER JOIN tvshow ON tvcharacter.showid = tvshow.showid WHERE genre = "Cartoon" and network = "Fox";

5. Display `name` and `title` of all Characters (whether they have show data or not)

- SELECT name, title from tvcharacter LEFT JOIN tvshow ON tvcharacter.showid = tvshow.showid;

6. Display `title` and `name` of all genre "Drama" (whether they have character data or not)

- SELECT name, title from tvshow LEFT JOIN tvcharacter ON tvcharacter.showid = tvshow.showid WHERE genre = "Drama";

#### Insert Statments
1. **Create a new insert** Add "Friends" to `tvshow` with data that links the character "Phoebe" to it.

- INSERT INTO tvshow (title, genre, network) values ("Friends", "Drama", "NBC");
- UPDATE tvcharacter SET showid = 7 where name = "Phoebe Buffay";

2. **Create a new query** Add a character to `tvcharacter` with data that links the tv show "Mr. Selfridge" to it.

- INSERT INTO tvcharacter (name, quote, showid) values ("Harry Selfridge", "The boss depends on authority; the leader on goodwill.", 6)

