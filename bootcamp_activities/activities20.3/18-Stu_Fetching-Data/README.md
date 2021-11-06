# 🐛 Information from the OMDB API Does Not Display

## Before We Begin

Before you begin this activity, complete the following steps:

1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

2. Copy the `/src` folder and `env.example` from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

3. Rename the `.env.example` file to `.env`.

4. To make API requests, we need to use Axios. Make sure that it's installed by running `npm i axios`.

5. This project uses Bootstrap, so don't forget to import it inside `index.js`:

     `import 'bootstrap/dist/css/bootstrap.min.css'`
   
## Activity

Work with a partner to resolve the following issue:

* As a user, I want to be able to search for the name of a movie using a form on the right and then see the related information on the left.

## Expected Behavior
  
* When a user visits the page, the result for "The Matrix" should display on the left side of the page.

* When the user types the name of a movie into the input field, the search term should appear in the field as the user types it.

* When the user enters a search term and clicks submit, the results for the search should display on the left side of the page.

## Actual Behavior

* When a user searches for a movie, they find out that they cannot enter any text into the search field. 

* Additionally, the search button doesn't seem to do anything in its current state. 

## 💡 Hints

* Why might we need to use `event.preventDefault()` in event handlers?

* Only one file needs to be modified for this activity. Which file is it?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How could we show a loading element before the search results are displayed? What React feature allows for this kind of behavior?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
