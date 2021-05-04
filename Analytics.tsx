import Env from "./config";

function analytics_thread_open(user_id: number, thread_id: number) {
  if (!Env.env) {
    return;
  }
  const event = {
    event: "thread_open",
    properties: {
      distinct_id: user_id,
      token: Env.mixpanel_token,
      thread_id,
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

function analytics_chapter_open(user_id: number, chapter: number) {
  if (!Env.env) {
    return;
  }
  const event = {
    event: "chapter_open",
    properties: {
      distinct_id: user_id,
      token: Env.mixpanel_token,
      chapter: chapter,
    },
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `data= ${JSON.stringify(event)}`,
  };

  console.log(options);

  fetch("https://api.mixpanel.com/track", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export { analytics_chapter_open, analytics_thread_open };
