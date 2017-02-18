INSERT INTO votes (
  gag_id,
  user_id,
  type,
  date_post
)
VALUES (
  ${gag_id},
  ${user_id},
  ${type},
  NOW()
)

RETURNING 1
