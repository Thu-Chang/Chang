var sql = require("mssql/msnodesqlv8");

var config = {
  server: "DESKTOP-8SI0VFK\\SQLEXPRESS",
  // user: "sa",
  // password: "reallyStrongPwd123",
  database: "Nông Sản Vùng Miền",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

const conn = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => pool)
  .catch((err) => err);

module.exports = {
  conn: conn,
  sql: sql,
};
