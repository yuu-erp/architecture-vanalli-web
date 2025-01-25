import { injectable } from "inversify";

@injectable()
export class MainDappUI {
  constructor() {}

  render() {
    const mainElement = document.createElement("div");
    mainElement.className = "main-dapp";
    mainElement.textContent = "Main Dapp";
    return mainElement;
  }
}
