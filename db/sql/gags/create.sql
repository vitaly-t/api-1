CREATE EXTENSION pgcrypto;

CREATE TABLE gags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users,
  title VARCHAR(140),
  url VARCHAR(255),
  date_post TIMESTAMP
);
