INSERT INTO comments (
  gag_id,
  user_id,
  content,
  date_post
)
VALUES (
  ${gag_id},
  ${user_id},
  ${content},
  NOW()
)

RETURNING id
