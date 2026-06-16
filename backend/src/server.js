const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectDB } = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const appRoutes = require("./routes/app.routes");
const planRoutes = require("./routes/plan.routes");
const orderRoutes = require("./routes/order.routes");
const paymentRoutes = require("./routes/payment.routes");
const adminRoutes = require("./routes/admin.routes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/uploads",
  express.static("src/uploads")
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "Premium Account Store API Running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/apps", appRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
