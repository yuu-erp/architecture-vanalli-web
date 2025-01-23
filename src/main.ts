import { AppContainer } from "./app-container";
import { INFRASTRUCTURE_MODULE, StoragePort } from "./core/infrastructure";
import { CALCULATE_LAYOUT_MODULE } from "./modules/calculate-layout/calculate-layouad.symbols";
import { ICalculateLayoutController } from "./modules/calculate-layout/interfaces/calculate-layout.interface";
import {
  FETCH_DATA_NATIVE_MODULE,
  IFetchDataNativeController,
} from "./modules/fetch-data-native";

async function bootstrap() {
  try {
    console.log("Application initialized successfully.");
    const appContainer = new AppContainer();
    appContainer.init();

    const storageService = appContainer.get<StoragePort>(
      INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE
    );

    const fetchDataNativeController =
      appContainer.get<IFetchDataNativeController>(
        FETCH_DATA_NATIVE_MODULE.FETCH_DATA_NATIVE_CONTROLLER
      );
    const calculateLayoutController =
      appContainer.get<ICalculateLayoutController>(
        CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_CONTROLLER
      );
    fetchDataNativeController.fetchDataDapp();
    calculateLayoutController.init();
    const calculateLayout = calculateLayoutController.getCalculateLayout();
    console.log("calculateLayout", calculateLayout);
    console.log("storage", storageService.getAll());
  } catch (error) {
    console.log("Application initialized fail.", error);
  }
}
bootstrap();
