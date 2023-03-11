# The Nestomir Digital React Native Client

### Overview

Let's create a timeless educational tale for the next generation of learners...earn community status and rewards–help push American (and global) STEM education forward 🤓 ☄️.

See the [main project page here](https://www.incubatedd.com), as well as [the central story repository here](https://www.github.com/sreubenstone).

### What is The Nestomir?

The Nestomir is a planetary quest (fantasy novel and companion app) involving a crash-landed alien warrior, a troubled 12-year-old boy, a mysterious learning force permeating the universe and 9 computer science lessons which grant students superpowers. It follows the main character, Jake Addison, through a series of quests which introduce him to computer programming and a new "learn with purpose" learning philosophy. And now through crowd participation, we're going to improve the the story and app experience together.

_Make sure you review the [story outline](https://github.com/sreubenstone/thenestomir/blob/main/outline.md) to get a better sense of the story and lesson plan. You can see the main project page [here](https://www.thenestomir.com)._

![pic](https://res.cloudinary.com/dshxqbjrf/image/upload/v1635541420/d980a2a7-netomir-11-july-ipad-gold-portrait_10vc18a0to16m00u00u028-1_psiswg.png)

### Set up

##### The Repository

- clone this repository to your local machine
- toggle into the workspace directory
- install packages via `npm i`

##### Config file

```
const prod = false;

const mixpanel_token = "";

const prod_server = "";
const dev_server = "";

const export_env_urls = () => {
  if (prod) {
    const env = {
      server: prod_server,
      env: prod,
      mixpanel_token,
    };
    return env;
  } else {
    const env = {
      server: dev_server,
      env: prod,
      mixpanel_token,
    };
    return env;
  }
};

export default export_env_urls()
```

#### Running the app

`yarn start`

https://docs.expo.dev/get-started/create-a-new-app/

##### Codebase structure

- Component folder broken down into Book, Forum, Glossary, Login, Notifications, Other, Profile, Progress, Support

- React native entry file is App.tsx

- Assets stored in /assets

_Please ask questions to our team on the [web platform](https://www.incubatedd.com/thenestomir) or [discord](https://discord.gg/thtjVaaq)_

#### Contributing ⚡

- Bug squash (fix a bug) **+1 contribution point**
- Code snippet refactor (refactor one section of a file) **+3 contribution points**
- File refactor (refactor an entire file) **+10 contribution points**
- Feature build (build a new feature) **+300 contribution points**
- Feature tweak (tweak an existing feature's functionality) **+40 contribution points**
- Package update (upgrade a package in our codebase) **+40 contribution points**

_See official Rules & Rewards page [here](https://docs.google.com/document/d/1NKq1-DYcj6KLrF_zVx6q6SNO_ziVBNLQdH-744r1aTc/edit?usp=sharing)–these are official rules, please review._

##### Ideas for Contributing

- Improve file structure, refactor code, improve app efficiency
- Create new functionality for The Nestomir Digital
- See comments in files for further direction

![exampleapp](https://res.cloudinary.com/dshxqbjrf/image/upload/v1675110177/forum_mock_bbvilj.png)
