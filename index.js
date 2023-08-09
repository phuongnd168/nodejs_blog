const express = require("express");
const app = express(); //Tạo đối tượng xây dựng ứng dụng
const port = 3000;

app.get("/trangchu", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  //route
  res.send("Hello World!");
});
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
