import { gql } from "apollo-boost";

export const REPLIES_FRAGMENT = gql`
  fragment replies on Comment {
    id
    replies {
      edges {
        id
        body
        user_id
        user {
          id
          username
          user_avatar
        }
        time {
          time_stamp
        }
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query getProfile($id: Int) {
    getProfile(id: $id) {
      id
      username
      user_avatar
      tagline
      threads {
        id
        title
        audio
        user {
          id
          username
          user_avatar
        }
        time {
          thread_updated
        }
      }
      bookmark {
        id
        user_id
        chapter
      }
    }
  }
`;

export const GET_AUTH = gql`
  query {
    getAuth {
      id
      username
      user_avatar
      tagline
    }
  }
`;

export const GET_MY_NOTIFICATIONS = gql`
  query {
    getMyNotifications {
      id
      user_id
      read
      body
      thread_id
      thread_title
      notification_image
      time {
        time_stamp
      }
    }
  }
`;

export const GET_THREAD = gql`
  query getThread($thread_id: Int) {
    getThread(thread_id: $thread_id) {
      id
      title
      body
      audio
      time {
        time_stamp
      }
      user {
        id
        username
        user_avatar
      }
      replies {
        edges {
          id
          body
          user_id
          user {
            id
            username
            user_avatar
          }
          time {
            time_stamp
          }
        }
        pageInfo {
          oldestReplyCursor
        }
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query getComments($thread_id: Int, $before: Int) {
    getComments(thread_id: $thread_id, before: $before) {
      id
      user_id
      body
      user {
        id
        username
        user_avatar
      }
      time {
        time_stamp
      }
    }
  }
`;

export const GET_FORUM_THREADS = gql`
  query {
    getForumThreads {
      id
      title
      audio
      user {
        id
        username
        user_avatar
      }
      time {
        thread_updated
      }
    }
  }
`;

export const GET_CHAPTER_THREADS = gql`
  query getChapterThreads($chapter_id: Int) {
    getChapterThreads(chapter_id: $chapter_id) {
      id
      title
      audio
      user {
        id
        username
        user_avatar
      }
      time {
        thread_updated
      }
    }
  }
`;

export const GET_BOOKMARK = gql`
  query {
    getBookmark {
      id
      user_id
      chapter
      position
      percentage
    }
  }
`;

export const GET_MY_READING_BUDDIES = gql`
  query {
    getMyReadingBuddies {
      id
      username
      user_avatar
    }
  }
`;

export const SUBMIT_COMMENT = gql`
  mutation submitComment($thread_id: Int, $body: String) {
    submitComment(thread_id: $thread_id, body: $body) {
      id
      user_id
      body
      user {
        id
        username
        user_avatar
      }
      time {
        time_stamp
      }
    }
  }
`;

export const UPDATE_BOOKMARK = gql`
  mutation updateBookmark($chapter: Int, $position: Int, $percentage: Float) {
    updateBookmark(chapter: $chapter, position: $position, percentage: $percentage) {
      id
      chapter
      position
      percentage
    }
  }
`;

export const ADD_READING_BUDDY = gql`
  mutation addReadingBuddy($secret_code: String!) {
    addReadingBuddy(secret_code: $secret_code) {
      id
    }
  }
`;

export const REMOVE_READING_BUDDY = gql`
  mutation removeReadingBuddy($buddy_id: Int!) {
    removeReadingBuddy(buddy_id: $buddy_id) {
      id
      username
    }
  }
`;

export const PUSH_TOKEN = gql`
  mutation savePushToken($push_token: String!) {
    savePushToken(push_token: $push_token) {
      id
    }
  }
`;

export const SAVE_PROFILE = gql`
  mutation saveProfile($tagline: String!) {
    saveProfile(tagline: $tagline) {
      id
      tagline
    }
  }
`;

export const MARK_READ = gql`
  mutation {
    markRead {
      id
    }
  }
`;

export const SAVE_PROFILE_PICTURE = gql`
  mutation saveProfilePicture($uri: String!) {
    saveProfilePicture(uri: $uri) {
      id
      user_avatar
    }
  }
`;

export const SAVE_SUPPORT_REQUEST = gql`
  mutation save_Support_Request($body: String) {
    save_Support_Request(body: $body) {
      body
    }
  }
`;
