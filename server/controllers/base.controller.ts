import { PrismaClient } from "@prisma/client";
import express, { Router } from "express";

export abstract class Controller {
  public router: Router;
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.router = express.Router();
  }

  public abstract initializeRoutes(): void;
}
