# Checklist for Northcoders News Front End

​

## README - write your own and make sure that it:

​

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)
      ​

## UX

​

- ✅ Basic styling added
- ✅ Responsive design
- ✅ Items aligned
- ✅ Content legible (not too wide, obstructed, etc)
- ✅ Refreshing doesn’t cause an issue on sub-pages
- ✅ No errors in the console
  - Just a couple of warnings about missing dependencies for a useEffect
- [ ] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
  - Can delete comments with quick feedback!!
    ​

## Functionality

​

### Login

​

- [ ] Some indication of who is logged in
      ​

### Articles

​

- ✅ Serves all articles / top articles
- [ ] Can vote on articles
  - The button is there but no behaviour attached to it yet?
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- ✅ Topic pages load only relevant articles (especially when navigating from one topic page to another)
  - You've done this in a really inventive way!
- ✅ Can sort articles by date created / comment_count / votes
  - And by title and limiting!! Very nice!!
    ​

### Individual Article / Comments

​

- ✅ Individual articles are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [ ] Can post new comments, which are persistent
- [ ] Can only delete comments of logged in user
  - Deleting works well! Just not limited to the author of the comment
- ✅ Deleted comments don’t re-appear on re-render/refresh
  ​

### Additional functionality:

​

- [ ] sort comments by date created / votes
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles
      ​

## Error Handling

​

- [ ] Bad url
  - Can use the default prop passed to a child of Router for this!
- [ ] Bad topic slug in url
  - Not relevant regarding the way you have this set up!
- [ ] Bad article id in url
  - You do get an error in the console which we can use for this!
- [ ] Post comment: (No text in comment body / Can you post without logging in?)
      ​

## Code

​

- ✅ Well named components
- ✅ Functional components used where possible
  - Fantastic use of hooks for this Peter!!
- ✅ Components reused where possible (`Articles` / `Voter`...)
  - ArticlesList rendered under 2 conditions!
- ✅ Minimal state - don't hold derivable data in state
- [ ] Set state correctly, using previous state where possible
  - Not necessary with your setup!
- ✅ Handle asynchronicity clearly (i.e. isLoading pattern)
- ✅ Functions are DRY (`handleChange` for controlled components / api calls)
- ✅ Use object destructuring where possible
  - A lot of props destructured in parameters!!
- ✅ Tidy? If not: ESLint / Prettier
- ✅ `node_modules` git ignored
- [ ] No `console.log`s / comments
  - Only one poking about in SearchResultsCard!
- [ ] remove unnecessary files (e.g. App.test.js)
  - You might have run npm install at root level of this directory to generate another package.json - can clear these out!
    ​

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

​

## Once everything else is complete, here are some extra challenges:

​

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Add integration tests with `cypress`
- [ ] Use Context API for sharing logged in user amongst components
- ✅ Use React Hooks - Well done!!
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes
