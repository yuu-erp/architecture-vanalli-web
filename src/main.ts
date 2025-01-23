import { AppContainer } from "./app-container";
import {
  Emitter,
  INFRASTRUCTURE_MODULE,
  StoragePort,
} from "./core/infrastructure";
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
    console.log("storage", storageService.getAll());

    const rootElement = document.getElementById("app");
    const statusBarController = appContainer.get<StatusBarController>(
      VIEW_LAYER.STATUS_BAR_CONTROLLER
    );

    const emitter = new Emitter();

    emitter.on("DappCreatedDomainEvent", async (event: any) => {
      console.log("DappCreatedDomainEvent handled:", event);
    });

    rootElement?.appendChild(statusBarController.render());
  } catch (error) {
    console.log("Application initialized fail.", error);
  }
}
bootstrap();
