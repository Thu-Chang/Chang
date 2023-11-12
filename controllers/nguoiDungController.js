const { conn, sql } = require("../connectDB");

exports.getListNguoiDung = async (req, res) => {
  try {
    const pool = await conn;
    const result = await pool
      .request()
      .query('SELECT ID, Ten, Email FROM "Người Dùng"');
    res.json({
      status: 200,
      message: "Lấy danh sách người dùng thành công!",
      data: {
        body: result.recordset,
        length: result.recordset.length ?? 0,
      },
    });
  } catch (err) {
    res.json({
      status: 400,
      message: "Lấy danh sách người dùng thất bại!",
      data: [],
    });
  }
};

exports.getNguoiDung = async (req, res) => {
  try {
    const id = req.params.id;
    const pool = await conn;
    const result = await pool
      .request()
      .input("varID", sql.Int, id)
      .query('SELECT ID, Ten, Email FROM "Người Dùng" where ID = @varID');

    if (result.recordset.length > 0) {
      res.json({
        status: 200,
        message: "lấy người dùng thành công!",
        data: {
          body: result.recordset,
          length: result.recordset.length ?? 0,
        },
      });
    } else {
      res.json({
        status: 204,
        message: "Không tồn tại người dùng này!",
        data: [],
      });
    }
  } catch (err) {
    res.json({
      status: 400,
      message: "lấy người dùng thất bại!",
      data: [],
    });
  }
};

exports.insertNguoiDung = async (req, res) => {
  try {
    const pool = await conn;
    const result = await pool
      .request()
      .input("Ten", sql.NVarChar, req.body.Ten)
      .input("Email", sql.NVarChar, req.body.Email)
      .input("Password", sql.NVarChar, req.body.Password)
      .query(
        'INSERT INTO "Người Dùng" (Ten, Email, Password) VALUES (@Ten, @Email, @Password)'
      );
    if (result.rowsAffected.length > 0) {
      res.json({
        status: 200,
        message: "Thêm người dùng mới thành công!",
      });
    } else {
      res.json({
        status: 204,
        message: "Thêm người dùng mới thất bại!",
      });
    }
  } catch (err) {
    console.log("err", err);
    res.json({
      status: 400,
      message: "Thêm người dùng mới thất bại!",
    });
  }
};

exports.updateNguoiDung = async (req, res) => {
  try {
    const pool = await conn;
    const result = await pool
      .request()
      .input("ID", sql.NVarChar, req.body.ID)
      .input("Ten", sql.NVarChar, req.body.Ten)
      .input("Email", sql.NVarChar, req.body.Email)
      .input("Password", sql.NVarChar, req.body.Password)
      .query(
        'UPDATE "Người Dùng" SET Ten = @Ten, Email = @Email, Password = @Password WHERE ID = @ID'
      );
    if (result.rowsAffected.length > 0) {
      res.json({
        status: 200,
        message: "Chỉnh sửa người dùng thành công!",
      });
    } else {
      res.json({
        status: 204,
        message: "Chỉnh sửa người dùng thất bại!",
      });
    }
  } catch (err) {
    console.log("err", err);
    res.json({
      status: 400,
      message: "Chỉnh sửa người dùng thất bại!",
    });
  }
};

exports.deleteNguoiDung = async (req, res) => {
  try {
    const id = req.params.id;
    const pool = await conn;
    const result = await pool
      .request()
      .input("ID", sql.Int, id)
      .query('DELETE FROM "Người Dùng" where ID = @ID');
    console.log("result", result.rowsAffected[0]);
    if (result.rowsAffected[0] > 0) {
      res.json({
        status: 200,
        message: "Xoá người dùng thành công!",
      });
    } else {
      res.json({
        status: 400,
        message: "Không tìm thấy người dùng này!",
      });
    }
  } catch (err) {
    console.log("err", err);
    res.json({
      status: 400,
      message: "Xoá người dùng thất bại!",
      data: [],
    });
  }
};
