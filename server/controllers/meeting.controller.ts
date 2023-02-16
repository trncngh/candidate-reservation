import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Controller } from "./base.controller";

const prisma: PrismaClient = new PrismaClient();

export default class MeetingController extends Controller {
  public path = "/meeting";
  constructor() {
    super();
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.findAll);
  }

  findAll = async (req: Request, res: Response) => {
    await prisma.meeting
      .findMany()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || `Error while finding all candidates`,
        });
      });
  };
}
