import Env from "./config";

interface IEvent {
  distinct_id: number;
  chapter?: number;
  thread_id?: number;
}

function analytics(event_name: string, properties: IEvent) {
  if (event_name === "chapter_open") {
    const reading_buddy_event = {
      user_id: properties.distinct_id,
      chapter_opened: properties.chapter,
    };

    const options_buddy = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reading_buddy_event),
    };

    fetch(`${Env.server}/buddy`, options_buddy)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  // only track mixpanel in production

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
