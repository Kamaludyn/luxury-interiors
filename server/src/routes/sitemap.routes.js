import express from "express";
import { sitemap } from "../controllers/sitemap.controller.js";

const router = express.Router();

router.get("/sitemap.xml", sitemap);

export default router;
