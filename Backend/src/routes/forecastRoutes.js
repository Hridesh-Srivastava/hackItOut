import express from "express";
import { generateForecast, getForecasts, updateActualValues } from "../controllers/forecastController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/generate").post(authenticate, generateForecast);
router.route("/:location/:days").get(getForecasts);
router.route("/:id/actual").put(authenticate, updateActualValues);

export default router;