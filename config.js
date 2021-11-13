const prod = true;

const mixpanel_token = "ad526bf26dc5a7a977fb8abd4acc7cea";

const prod_server = "https://dendro-backend.herokuapp.com";
const dev_server = "https://3e37-2603-7000-3940-bc-7d3c-4233-e1ae-ae17.ngrok.io";

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
