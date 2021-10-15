const prod = true;

const mixpanel_token = "ad526bf26dc5a7a977fb8abd4acc7cea";

const prod_server = "https://dendro-backend.herokuapp.com";
const dev_server = "https://883a-2603-7000-3940-bc-e9b1-56b2-b7ed-47f9.ngrok.io";

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

export default export_env_urls();
