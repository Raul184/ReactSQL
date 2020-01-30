const express = require('express');
const router = express.Router();
const pool = require('../db');

//@ Method    POST
//@ Descr     Register an User
router.post(
  '/postUser' , 
  ( req, res , next ) => {
    const values = [ req.body.profile.nickname , req.body.profile.email , req.body.profile.email_verified ];
    pool.query(
      `INSERT INTO users( username , email , email_verified , date_created )
      VALUES($1 , $2 , $3 , NOW())
      ON CONFLICT DO NOTHING`, values ,
      ( q_err , q_res ) => res.json(q_res.rows)
    )
  }
)

//@ Method    GET
//@ Descr     Get All Posts
router.get(
  '/getUser' , 
  ( req, res , next ) => {
    const email = String(req.body.email)
    pool.query(
      `SELECT * FROM users
      WHERE email=$1` , [ email ] ,
      ( q_err , q_res ) => res.json(q_res.rows)
    )
  }
)

//@ Method    GET
//@ Descr     Get An User Posts
router.get(
  '/getUserPosts' , 
  ( req, res , next ) => {
    const user_id = String(req.body.userid)
    pool.query(
      `SELECT * FROM posts
      WHERE user_id=$1` , [ user_id ] ,
      ( q_err , q_res ) => res.json(q_res.rows)
    )
  }
)
module.exports = router;