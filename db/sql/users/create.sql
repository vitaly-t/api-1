CREATE EXTENSION pgcrypto;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token UUID,
  name VARCHAR(140),
  email VARCHAR(255),
  picture VARCHAR(255),
  date_post TIMESTAMP
);
