const express = require("express");
const router = express.Router();
const path = require("path");


router.use("/blog/create", (req,res) => {
    res.render("admin/blog-create")
})

router.use("/blog/:blogid", (req,res) => {
    res.render("admin/blog-edit")})

router.use("/blogs", (req,res) => {
    res.render("admin/blog-list")})


module.exports=router;