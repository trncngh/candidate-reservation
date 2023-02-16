import express, { Application, Request, Response } from "express";
import { Controller } from "../interfaces";
import errorMiddleware from "../middlewares/error.middleware";
// import { Controller } from "../controllers/Controller";

class App {
  public app: Application;
  public port: number | string;

  constructor(controllers: Controller[], port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  // private initializeErrrorHandling(){
  //   this.app.use(errorMiddleware)
  // }

  private initializeControllers(controllers: Controller[]) {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Application is running");
    });
    controllers.forEach((controller: Controller) => {
      this.app.use("/api", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
