import { Emitter, LoggerService } from "@src/core/infrastructure";
import { DappEntity } from "@src/modules/dapp";
import { injectable } from "inversify";

@injectable()
export class StatusBarController {
  constructor() {}

  render(): HTMLElement {
    const statusBarElement = document.createElement("button");
    statusBarElement.textContent = "Button";
    statusBarElement.addEventListener("click", () => {
      const logger = new LoggerService();
      const emitter = new Emitter();
      DappEntity.create(
        {
          id: 1,
          name: "Lê Khải Hoàn",
          type: 1,
          url: "",
          logo: "",
        },
        logger,
        emitter
      );
    });
    return statusBarElement;
  }
}
