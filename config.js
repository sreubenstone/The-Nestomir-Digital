const prod = false;

const prod_server = "tbd...";
const dev_server = "https://ae41144be3eb.ngrok.io";

const export_env_urls = () => {
  if (prod) {
    const env = {
      server: prod_server,
    };
    return env;
  } else {
    const env = {
      server: dev_server,
    };
    return env;
  }
};

export default export_env_urls();
