-- Migration 2: Forum Tables (Posts, Comments, Votes)
-- Run after migration 001

-- Posts
CREATE TABLE posts (
  id            SERIAL PRIMARY KEY,
  user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title         TEXT NOT NULL,
  body          TEXT NOT NULL,
  vote_score    INTEGER NOT NULL DEFAULT 0,
  comment_count INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_posts_created_at ON posts (created_at DESC);
CREATE INDEX idx_posts_vote_score ON posts (vote_score DESC);
CREATE INDEX idx_posts_user_id ON posts (user_id);

-- Post votes (one vote per user per post)
CREATE TABLE post_votes (
  id      SERIAL PRIMARY KEY,
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  value   SMALLINT NOT NULL CHECK (value IN (-1, 1)),
  UNIQUE (post_id, user_id)
);

CREATE INDEX idx_post_votes_post_id ON post_votes (post_id);
CREATE INDEX idx_post_votes_user_id ON post_votes (user_id);

-- Comments (self-referencing for nesting)
CREATE TABLE comments (
  id                SERIAL PRIMARY KEY,
  post_id           INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  user_id           INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
  body              TEXT NOT NULL,
  vote_score        INTEGER NOT NULL DEFAULT 0,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_comments_post_id ON comments (post_id);
CREATE INDEX idx_comments_parent_comment_id ON comments (parent_comment_id);

-- Comment votes
CREATE TABLE comment_votes (
  id         SERIAL PRIMARY KEY,
  comment_id INTEGER NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  value      SMALLINT NOT NULL CHECK (value IN (-1, 1)),
  UNIQUE (comment_id, user_id)
);

CREATE INDEX idx_comment_votes_comment_id ON comment_votes (comment_id);
