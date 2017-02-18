CREATE TABLE votes (
  gag_id UUID REFERENCES gags,
  user_id UUID REFERENCES users,
  type BOOLEAN,
  date_post TIMESTAMP,
  PRIMARY KEY (gag_id, user_id)
);
