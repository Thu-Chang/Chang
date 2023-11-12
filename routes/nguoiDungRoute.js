const nguoiDungController = require("../controllers/nguoiDungController");

module.exports = (app) => {
  app.get("/api/nguoidung", nguoiDungController.getListNguoiDung);
  app.get("/api/nguoidung/:id", nguoiDungController.getNguoiDung);
  app.post("/api/nguoidung", nguoiDungController.insertNguoiDung);
  app.put("/api/nguoidung", nguoiDungController.updateNguoiDung);
  app.delete("/api/nguoidung/:id", nguoiDungController.deleteNguoiDung);
};
