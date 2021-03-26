const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/verifyUser");

const {
  checkoutRender,
  deleteSubmit,
  editRender,
  editSubmit,
} = require("../Controllers/checkoutController");

//render projects on checkout page
router.get("/checkout", verifyUser, checkoutRender);

//let user delete donation from checkoutpage
router.post("/checkout/delete", verifyUser, deleteSubmit);

//direct the user to a form where they can edit the donation amount in checkoutpage
router.get("/donation/:id", verifyUser, editRender);
router.post("/editDonation", verifyUser, editSubmit);

module.exports = router;
