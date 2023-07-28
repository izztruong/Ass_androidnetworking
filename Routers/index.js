const Bookrouter = require("./Book.Router");
const CategoryBookrouter = require("./CategoryBook.Router");
const AdminRouter = require("./Admin.Router");
function routers(app) {
  app.use("/book", Bookrouter);
  app.use("/categoryBook", CategoryBookrouter);
  app.use("/admin", AdminRouter);
}
module.exports = routers;
