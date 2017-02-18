SELECT id,
  gag_id,
  user_id,
  name as user_name,
  content,
  date_post  
FROM comments
  INNER JOIN users ON users.id = comments.user_id
WHERE gag_id = ${gag_id}
