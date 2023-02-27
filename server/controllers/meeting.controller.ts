import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Controller } from "./base.controller";
import dayjs from "dayjs";

const prisma: PrismaClient = new PrismaClient();

export default class MeetingController extends Controller {
  public path = "/meeting";
  constructor() {
    super();
    this.initializeRoutes();
  }

  // routes goes there
  public initializeRoutes() {
    this.router.get(`${this.path}/all`, this.findAll);
    this.router.put(`${this.path}?:id`, this.sendInvitation);
    this.router.get(`${this.path}?:id`, this.getMeeting);
    this.router.post(this.path, this.create);
    this.router.post(`${this.path}/booked/`, this.getAllBookedMeetingsByDate);
    this.router.post(`${this.path}/confirm/`, this.bookMeeting);
  }

  bookMeeting = async (req: Request, res: Response) => {
    const id = req.body.id;
    console.log(req.body);
    await prisma.meeting
      .update({
        where: {
          id: id,
        },
        data: {
          isConfirmed: true,
          dateTime: req.body.dateTime,
        },
      })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || `Error while finding all candidates`,
        });
      });
  };

  findAll = async (req: Request, res: Response) => {
    await prisma.meeting
      .findMany({
        include: {
          candidate: true,
        },
      })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || `Error while finding all candidates`,
        });
      });
  };

  create = async (req: Request, res: Response) => {
    await prisma.meeting
      .create({
        data: {
          dateTime: new Date(parseInt(req.body.dateTime)),
          isConfirmed: false,
          isSent: false,
          candidate: {
            create: {
              name: req.body.name,
              email: req.body.email,
            },
          },
        },
      })
      .then(async (result) => {
        await prisma.meeting
          .findUnique({
            where: {
              id: result.id,
            },
            include: {
              candidate: true,
            },
          })
          .then((candidate) => {
            res.status(200).send(candidate);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || `Error while finding all candidates`,
        });
      });
  };

  sendInvitation = async (req: Request, res: Response) => {
    const id = req.query.id;
    if (typeof id !== "string") {
      throw new Error("Query param id has to be string");
    } else {
      await prisma.meeting
        .update({
          where: {
            id: id,
          },
          data: {
            isSent: true,
          },
        })
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || `Error while sending invitation`,
          });
        });
    }
  };

  // assuming each meeting's duration is 45 minutes and has 15 minutes break between each meeting
  getAllBookedMeetingsByDate = async (req: Request, res: Response) => {
    const selectedDate = dayjs(req.body.dateTime);
    const nextDate = selectedDate.add(1, "day");
    console.log(req.body, selectedDate.toISOString(), nextDate.toISOString()); // ??? why it doesnt work?
    // const nextDate = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
    await prisma.meeting
      .findMany({
        where: {
          isConfirmed: true,
          dateTime: {
            gte: selectedDate.toISOString(),
            lt: nextDate.toISOString(),
          },
        },
      })
      .then((result) => {
        console.log(result);
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || `Error while getting booked meetings`,
        });
      });
  };

  getMeeting = async (req: Request, res: Response) => {
    const id = req.query.id;
    if (typeof id !== "string") {
      throw new Error("Query param id has to be string");
    } else {
      await prisma.meeting
        .findUnique({
          where: {
            id: id,
          },
          include: {
            candidate: true,
          },
        })
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((error) => {
          res.status(500).send({
            message: error.message || `Error while finding all candidates`,
          });
        });
    }
  };
}
