const Payment = require("../models/Payment");

exports.submitPayment = async (
  req,
  res
) => {
  try {
    const {
      orderId,
      paymentMethodId,
      senderNumber,
      transactionId,
      amount
    } = req.body;

    const payment =
      await Payment.create({
        orderId,
        paymentMethodId,
        senderNumber,
        transactionId,
        amount,
        screenshot:
          req.file?.filename || null
      });

    res.status(201).json({
      success: true,
      data: payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getPayments = async (
  req,
  res
) => {
  try {
    const payments =
      await Payment.findAll({
        order: [
          ["createdAt", "DESC"]
        ]
      });

    res.json({
      success: true,
      data: payments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.approvePayment =
  async (req, res) => {
    try {
      const payment =
        await Payment.findByPk(
          req.params.id
        );

      if (!payment) {
        return res.status(404).json({
          success: false,
          message:
            "Payment not found"
        });
      }

      payment.status = "approved";

      await payment.save();

      res.json({
        success: true,
        message:
          "Payment approved"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };

exports.rejectPayment =
  async (req, res) => {
    try {
      const payment =
        await Payment.findByPk(
          req.params.id
        );

      if (!payment) {
        return res.status(404).json({
          success: false,
          message:
            "Payment not found"
        });
      }

      payment.status = "rejected";

      await payment.save();

      res.json({
        success: true,
        message:
          "Payment rejected"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
