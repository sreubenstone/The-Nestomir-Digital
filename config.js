const prod = false;

const mixpanel_token = "";

const prod_server = "";
const dev_server = "https://5f06-208-185-29-122.ngrok-free.app";

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
