CREATE EXTENSION pgcrypto;

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gag_id UUID REFERENCES gags,
  user_id UUID REFERENCES users,
  content VARCHAR(270),
  date_post TIMESTAMP
);
