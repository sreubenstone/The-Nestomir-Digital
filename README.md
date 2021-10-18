# ios standalone build

- config prod set to true
- increment expo version
- increment ios build number
- expo build:ios -t archive

Does your app use encryption? Select Yes even if your app only uses the standard encryption within Apple’s operating system.

YES YES

App Store Test Account

- tester@test.com
- test (pw)

Please log in (don't sign up) with the credentials above. Explore the story, forum, and glossary views. You can also take a look at the user profile page. The app contains The Nestomir story - which includes 17 sections (chapters). The forum allows users to discuss the story and technical lessons contained in the story. The glossary contains the detailed list of all glossary elements.

# android standalone build

- config prod set to true
- Increment versionCode in app.json
- expo build:android -t app-bundle

warning: If you choose to let Expo generate a keystore for you, we strongly recommend that you later run expo fetch:android:keystore and backup your keystore to a safe location. Once you submit an app to the Google Play Store, all future updates to that app must be signed with the same keystore to be accepted by Google. If, for any reason, you delete your project or clear your credentials in the future, you will not be able to submit any updates to your app if you have not backed up your keystore.
