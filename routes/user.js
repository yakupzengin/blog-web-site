const express = require("express");
const router = express.Router();
const path = require("path");

const data = {
    title: "Popüler Kurslar",
    categories: ["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Python Programlama"],
    blogs: [
        {
            blogid: 1,
            title: "Python Programlama",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequuntur rem reprehenderit accusamus? Recusandae, et",
            image: "1.jpeg",
            isHomepage : true,
            onay : true 
        },
        {
            blogid: 2,
            title: "Komple Uygulamalı Web Gelitşrme",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequuntur rem reprehenderit accusamus? Recusandae, et",
            image: "2.jpeg",
            isHomepage : true,
            onay : true 
        },
        {
            blogid: 3,
            title: "Node js progralama kursu FULL DETAYLI",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequuntur rem reprehenderit accusamus? Recusandae, et",
            image: "3.jpeg",
            isHomepage : false,
            onay : true 
        },
        {
            blogid: 4,
            title: "Node js progralama kursu FULL DETAYLI",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequuntur rem reprehenderit accusamus? Recusandae, et",
            image: "4.jpeg",
            isHomepage : false,
            onay : false 
        }
    ]
}
router.use("/blogs/:blogid", (req, res) => {
    res.render("users/blog-detail")
})
router.use("/blogs", (req, res) => {
    res.render("users/blogs", data)
})
router.use("/", (req, res) => {
    res.render("users/index", data)
})
module.exports = router;