const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.render("index");
});
app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Oops! Page Not Found",
  });
});

app.listen(process.env.PORT || "3000", () => {
  console.log("listening");
});

module.exports = app;
