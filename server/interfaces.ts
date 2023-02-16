import { PrismaClient } from "@prisma/client";
import { Router } from "express";
export interface Controller {
  router: Router;
  prisma: PrismaClient;
  initializeRoutes: () => void;
}
