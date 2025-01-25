import { AppContainer } from "./app-container";
import { INFRASTRUCTURE_MODULE, StoragePort } from "./core/infrastructure";
import {
  ILayoutCalculatorController,
  LAYOUT_CALCULATE_SYMBOLS,
} from "./modules/layout-calculator";

async function bootstrap() {
  try {
    console.log("Application initialized successfully.");
    // const rootElement = document.getElementById("app") as HTMLElement;
    const appContainer = new AppContainer();
    appContainer.init();

    const storageService = appContainer.get<StoragePort>(
      INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE
    );

    const layoutCalculateController =
      appContainer.get<ILayoutCalculatorController>(
        LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_CONTROLLER
      );
    layoutCalculateController.execute();
    console.log("storageService", storageService.getAll());
  } catch (error) {
    console.log("Application initialized fail.", error);
  }
}
bootstrap();
