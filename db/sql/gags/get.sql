SELECT id,
  user_id,
  name as user_name,
  title,
  url,
  gags.date_post
  -- TODO as comments,
  -- TODO as votes,
FROM gags
  INNER JOIN users ON users.id = gags.user_id
WHERE id = ${id}
