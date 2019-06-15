import { Router } from "express";
import login from "../controllers/login/login";
import signup from "../controllers/login/signup";
import confirmAccount from "../controllers/login/confirmAccount";

const router = Router();
router.use("/ping", (req, res, next) => {
  res.send('You say "ping", I say "pong"');
});

router.post("/login", login);
router.post("/signup", signup);
router.get("/confirmation/:token", confirmAccount);

export default router;
