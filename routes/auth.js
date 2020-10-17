const { Router } = require("express");
const router = require('express').Router()
const { auth } = require('../middlewares/auth.js')

const {
  postRegister,
  postLogin,
  createPost
} = require('../controllers/auth.js')

router.post('/register', postRegister)
router.post('/login', postLogin)
router.post('/create', auth, createPost)

module.exports = router