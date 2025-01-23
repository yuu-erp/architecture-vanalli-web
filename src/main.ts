import { AppContainer } from "./app-container";
import {
  Emitter,
  INFRASTRUCTURE_MODULE,
  StoragePort,
} from "./core/infrastructure";
import { CALCULATE_LAYOUT_MODULE } from "./modules/calculate-layout/calculate-layouad.symbols";
import { ICalculateLayoutController } from "./modules/calculate-layout/interfaces/calculate-layout.interface";
import {
  FETCH_DATA_NATIVE_MODULE,
  IFetchDataNativeController,
} from "./modules/fetch-data-native";
import { VIEW_LAYER } from "./view/infrastructure.symbols";
import { StatusBarController } from "./view/status-bar/status-bar.controller";

async function bootstrap() {
  try {
    console.log("Application initialized successfully.");
    const appContainer = new AppContainer();
    appContainer.init();
    const fetchDatâNtiveController =
      appContainer.get<IFetchDataNativeController>(
        FETCH_DATA_NATIVE_MODULE.FETCH_DATA_NATIVE_CONTROLLER
      );
    fetchDatâNtiveController.fetchAll();
    const storageService = appContainer.get<StoragePort>(
      INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE
    );

    const calculateLayoutController =
      appContainer.get<ICalculateLayoutController>(
        CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_CONTROLLER
      );
    calculateLayoutController.init();
    const rootElement = document.getElementById("app");
    const statusBarController = appContainer.get<StatusBarController>(
      VIEW_LAYER.STATUS_BAR_CONTROLLER
    );

    const emitter = new Emitter();

    emitter.on("DappCreatedDomainEvent", async (event: any) => {
      console.log("DappCreatedDomainEvent handled:", event);
    });

    rootElement?.appendChild(statusBarController.render());
    console.log("storage", storageService.getAll());
  } catch (error) {
    console.log("Application initialized fail.", error);
  }
}
bootstrap();
