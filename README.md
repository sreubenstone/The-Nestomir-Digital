# The Nestomir Digital React Native Client

### Overview

Let's create a timeless educational tale for the next generation of learners...earn community status and rewards–help push American (and global) STEM education forward 🤓 ☄️.

> We put together this effort to bring Americans (and the world) together through creativity and collaboration!

😺 _Please note, the codebase is a little messy. This was started a few years ago. We need your help to improve it._

See the [main project page here](https://www.thenestomir.com), as well as [the central story repository here](https://www.github.com/sreubenstone/thenestomir). Please see our Contributor Agreement & Additional Repository Terms at the bottom of this document

### What is The Nestomir?

The Nestomir is a planetary quest (fantasy novel and companion app) involving a crash-landed alien warrior, a troubled 12-year-old boy, a mysterious learning force permeating the universe and 9 computer science lessons which grant students superpowers. It follows the main character, Jake Addison, through a series of quests which introduce him to computer programming and a new "learn with purpose" learning philosophy. **And now through crowd participation, we're going to improve the the story and social reading app experience together.**

![pic](https://res.cloudinary.com/dshxqbjrf/image/upload/v1635541420/d980a2a7-netomir-11-july-ipad-gold-portrait_10vc18a0to16m00u00u028-1_psiswg.png)

### Setting up the app

##### The Repository

- clone this repository to your local machine
- toggle into the workspace directory
- install packages via `npm i`

##### ngrok

In order to easily connect [The Nestomir Backend](https://github.com/sreubenstone/The-Nestomir-Digital-Server) (which runs locally on port 4000) to our Expo client, which is required for our app to run, we need to connect our local port 4000 to the internet using a tool like ngrok. It is a utility to expose any locally hosted application over the web. See installation instructions [here](https://www.softwaretestinghelp.com/ngrok-introduction/).

##### Config file

You must have the [backend server setup and running](https://github.com/sreubenstone/The-Nestomir-Digital-Server) for the client to work. In dev, we only need to update the `dev_server` url in our config file, which we get from running `ngrok http 4000` in a new terminal window.

```
const dev_server = "<Port 4000 NGROK link goes here>";
```

#### Running the app

`yarn start`

[https://docs.expo.dev/get-started/create-a-new-app/](https://docs.expo.dev/get-started/create-a-new-app/) for a basic Expo tutorial on creating and running a new app (worth the read!) Note, we can load the app on our actual device or through simulator.

##### Tech stack

- React Native [Expo](https://expo.dev/)
- [Apollo Client](https://www.apollographql.com/docs/react/) – for graphQL based state management

##### Codebase structure

- Component folder broken down into Book, Forum, Glossary, Login, Notifications, Other, Profile, Progress, Support
- React native entry file is App.tsx
- Assets stored in /assets

#### Contribution Types ⚡

- Bug squash (fix a bug) **+🏆 Featured in Book/App**
- Code snippet refactor (refactor one section of a file) **+🏆 Featured in Book/App**
- File refactor (refactor an entire file) **+🏆 ..all above + Signed Paperback Copy**
- Package update (upgrade a package in our codebase) **+🏆 ..above**
- Feature tweak (tweak an existing feature's functionality) **++🏆 ..all above + Rights to private Quarterly Author Call**
- Feature build (build a new feature) **+🏆 ..all above (more to come in the near future)**

_See official Rules & Rewards page [here](https://docs.google.com/document/d/12luzhhrRYnxpkwq94KIs0MvAgISujhLuVamU0S4sqbg/edit?usp=sharing)–these are official rules, please review._

#### Ideas for Contributing

- Improve file structure, refactor code, improve app efficiency
- Create new functionality for The Nestomir Digital
- See comments in files for further direction

**Questions to help drive development**

- How can we better build relationships between readers?

- How can we leverage the concept of a Reading Buddy to enhance literacy building?

- How can we leverage the concept of a Reading Buddy to enhance how readers engage with the story?

- How can we make the application more interactive

- Can we/should we embed quizzes or other checkpoint related material into the E-Readers

- Are there other social features that might be interesting in this setting?

- How can we optimize the experience for the classroom

- How can we optimize the reader so it can be adopted by schools and classroom educators?

Our [web platform](https://www.thenestomir.com/thenestomir) and [discord](https://discord.gg/thtjVaaq) community are buzzing with conversations and ideas about how to contribute to the book. Please check them out to get started.

![exampleapp](https://res.cloudinary.com/dshxqbjrf/image/upload/v1675110177/forum_mock_bbvilj.png)

### How it works

- The book's manuscript and the native app (The Nestomir Digital) are stored in repositories on GitHub (any accepted pull request will grant you Major Contributor status)
- All Major Contributors will be listed/profiled in new versions of the book and app
- We plan on VERSIONING the series (e.g., v1.1, v1.2, as users contribute...our goal is to build a timeless series…one that people read 200 years from now)
- Earn Perk Points by participating in discussions here (web) and on discord (1 like from moderator = 1 Perk Point)

[See the offical Rules & Rewards doc](https://docs.google.com/document/d/12luzhhrRYnxpkwq94KIs0MvAgISujhLuVamU0S4sqbg/edit?usp=sharing) to learn more about our community participation details.

### Contributor Agreement & Additional Repository Terms

This repository is governed by its attached Apache 2.0 License as well as the terms in this Contributor Agreement. Any contributions you make to the codebase in this repository can be used by The Nestomir™ team (and any other third party party) in their version of the software (in a commercial or non-commerical setting). There is no obligation to compensate you in any form for your contributions. All contributions made to this repository will also be governed by the Apache 2.0 License (this means you are agreeing to put your contributions in the open source domain, which legally means you are providing the public with an irrevocible license to use your work in a commercial or non commercial capacity–see the license attached to this repository for the specific details behind the Apache 2.0 license). The Nestomir’s objective is to open up the story and social reading experience for others to participate/modify–however–The Nestomir™ will maintain full rights over our brand name, cover art and branding. This means you agree to not use The Nestomir™ or any variations of The Nestomir™ name or cover art in your distributed works in any commercial or non-commercial capacity.
