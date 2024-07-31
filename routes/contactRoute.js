const express = require("express");
const router = express.Router();
const {
  getContactById,
  getAllContacts,
  createContact,
  editContact,
  deleteContact,
} = require("../controllers/contactController");
const validToken = require("../middleware/validateToken");

router.use(validToken);
router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContactById).put(editContact).delete(deleteContact);

module.exports = router;
