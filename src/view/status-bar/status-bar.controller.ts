import { injectable } from "inversify";

@injectable()
export class StatusBarController {
  constructor() {}

  render(): HTMLElement {
    const statusBarElement = document.createElement("button");
    statusBarElement.textContent = "Button";

    return statusBarElement;
  }
}
