const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/authenicate");
const { processPayemnt, sendStripeApi } = require("../controllers/paymentController");
const router = express.Router();

router.route('/payment/process').post(isAuthenticatedUser, processPayemnt)

router.route('/stripeapi').get(isAuthenticatedUser, sendStripeApi)


module.exports = router;