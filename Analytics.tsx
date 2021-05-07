import Env from "./config";

interface IEvent {
  distinct_id: number;
  chapter?: number;
  thread_id?: number;
}

function analytics(event_name: string, properties: IEvent) {
  if (!Env.env) {
    return;
  }

  const event = {
    event: event_name,
    properties: {
      ...properties,
      token: Env.mixpanel_token,
    },
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `data= ${JSON.stringify(event)}`,
  };

  fetch("https://api.mixpanel.com/track", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export default analytics;
