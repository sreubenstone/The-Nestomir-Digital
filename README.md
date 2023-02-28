# Readme – The Nestomir Digital React Native (expo) Client

### The Contest 🏆

[Incubatedd](https://www.incubatedd.com) is a digital incubator focused on solving tough American problems through the crowd. In edition 1.0, we're focused on improving _The Nestomir_, an educational fantasy story, in hopes of bringing an innovative twist to STEM education.

See the [main contest page here](https://www.incubatedd.com), as well as [the central story repository here](https://www.github.com/sreubenstone).

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
