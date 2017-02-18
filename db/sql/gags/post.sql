INSERT INTO gags (
  user_id,
  title,
  url,
  date_post
)
VALUES (
  ${user_id},
  ${title},
  ${url},
  NOW()
)

RETURNING id
