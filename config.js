const prod = true;

const prod_server = "https://dendro-backend.herokuapp.com";
const dev_server = "https://aca30aef5bbf.ngrok.io";

const export_env_urls = () => {
  if (prod) {
    const env = {
      server: prod_server,
      env: prod
    };
    return env;
  } else {
    const env = {
      server: dev_server,
      env: prod
    };
    return env;
  }
};

export default export_env_urls();
