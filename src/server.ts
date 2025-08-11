import express, { Router } from "express";


interface Options{
  port:number,
  routes:Router
}

export class Server {

  private app = express();
  private readonly port:number;
  private readonly routes:Router;

  constructor(options:Options){
    const {port, routes} = options;
    this.port = port
    this.routes = routes
  }
  
  async start() {

    // midllewares
    this.app.use(express.json() )
    this.app.use(express.urlencoded({extended:true}) )  // x-www-encode

    //ROUTER
    this.app.use(this.routes)


    this.app.listen(this.port, () => {
      console.log(`Server runing on port ${this.port}`);
    });
  }
}
