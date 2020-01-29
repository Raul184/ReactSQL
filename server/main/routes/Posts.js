const express = require('express');
const router = express.Router();
const pool = require('../db');

//@ Method    GET
//@ Descr     Get All Posts
router.get(
  '/getAll' , 
  ( req, res , next ) => {
    // Querying   <== rows
    pool.query(
      'SELECT * FROM posts ORDER BY date_created DESC',
      ( q_err , q_res ) => {
        res.json(q_res.rows)
      } 
    )
  }
)

//@ Method    POST
//@ Descr     + Post
router.post(
  '/post' ,
  (req , res , next) => {
    const values = [ req.body.title , req.body.body , req.body.uid , req.body.username ];
    pool.query(
      `INSERT INTO posts(title , body , user_id , author , date_created)
      VALUES( $1, $2, $3, $4, NOW() )`, values ,
      ( q_err , q_res) => {
        q_err && next(q_err);
        res.json(q_res.rows)
      }
    )
  }
)

//@ Method    Put
//@ Descr     Update a Post
router.post(
  '/put' ,
  (req , res , next) => {
    const values = [ req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username ];
    pool.query(
      `UPDATE posts SET title=$1 , body=$2 , user_id=$3 , author=$5 , date_created=NOW())
      WHERE pid=$4` , values ,
      ( q_err , q_res) => res.json( q_res.rows )
    )
  }
)

//@ Method    Delete
//@ Descp     Delete a comment
router.delete(
  '/delete/postComments' ,
  ( req , res , next ) => {
    const postId = req.body.post_id;
    pool.query(
      `DELETE FROM comments 
      WHERE post_id= $1 ` , [ postId ] ,
      ( q_err , q_res ) => res.json(q_res.rows) 
    )
  }
)

//@ Method    Delete
//@ Descp     Delete a Post
router.delete(
  '/delete/post' ,
  ( req, res, next) => {
    const postId = req.body.post_id;
    pool.query(
      `DELETE FROM posts
      WHERE pid= $1 ` , [ postId ] ,
      ( q_err, q_res ) => res.json(q_res.rows)
    )
  }
)


module.exports = router;