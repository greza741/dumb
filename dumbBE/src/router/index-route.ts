import { Router } from "express";
import authRoute from "./auth-route";
import userRoute from "./user-route";
import categoryRoute from "./category-route";
import productRoute from "./product-route";
import orderRoute from "./order-route";
import orderItemRoute from "./order-item-route";
import cartRoute from "./cart-route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/order", orderRoute);
router.use("/order-item", orderItemRoute);
router.use("/cart", cartRoute);

export default router;
