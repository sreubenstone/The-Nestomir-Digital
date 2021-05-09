const prod = true;

const mixpanel_token = "ad526bf26dc5a7a977fb8abd4acc7cea";

const prod_server = "https://dendro-backend.herokuapp.com";
const dev_server = "https://0c7ae53a8a2f.ngrok.io";

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
