require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const app =
express();

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);

app.use(
  "/api/auth",
  require("./routes/auth.routes")
);

app.use(
  "/api/orders",
  require("./routes/order.routes")
);

app.use(
  "/api/payments",
  require("./routes/payment.routes")
);

app.use(
  "/api/accounts",
  require("./routes/account.routes")
);

app.use(
  "/api/admin-delivery",
  require("./routes/adminDelivery.routes")
);

app.use(
  "/api/reviews",
  require("./routes/review.routes")
);

app.use(
  "/api/coupons",
  require("./routes/coupon.routes")
);

app.listen(
  process.env.PORT || 5000,
  ()=>{
    console.log(
      "Server Running"
    );
  }
);
