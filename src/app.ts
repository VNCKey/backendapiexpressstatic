import { envs } from "./config/envs";
import { AppRouter } from "./routes";
import { Server } from "./server";

(() => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRouter.router,
  });

  server.start();
}
