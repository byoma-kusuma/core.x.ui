import { NavigateFunction } from "react-router-dom";

class App {
  private router: NavigateFunction | undefined;

  public setRouter(router: NavigateFunction) {
    this.router = router;
  }

  public getRouter() {
    return this.router as NavigateFunction;
  }
}

const AppService = new App();

export default AppService;
