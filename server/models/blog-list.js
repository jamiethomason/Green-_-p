
// load express and router
const router = require(`express`).Router();
// load file system for read/write functions
const fs = require(`fs`);
// link db.json for saved notes
const dbBloglist = require(`../../db/bloglist.json`);
console.log(dbBloglist)
// load uuid for unique IDs
const { v4: uuidv4 } = require(`uuid`);
const { resolve } = require("path");

// get blog
router.get(`/users/:id/blog-list`, (req, res) => {
  console.log(dbBloglist, 'in get')
  // read dbBloglist.json to get the blog
  return (
    new Promise((resolve, reject) => {
      fs.readFile('db/bloglist.json', "utf8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(
         JSON.parse(data),
        );
      });
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.error(err))
  );
});

module.exports=router;