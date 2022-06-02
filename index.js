const express = require("express");
const router = require("./router");
const PORT = 8080;

const app = express();

// Catatan: Kita perlu tambahkan lini ini sebelum use router
// Kita pakai unbtuk handle request dari form
app.use(express.urlencoded({ extended: false }));

// Kita pakai untuk memasang view engine EJS
app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});