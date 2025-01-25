import { AppContainer } from "./app-container";
import { INFRASTRUCTURE_MODULE, StoragePort } from "./core/infrastructure";
import { CALCULATE_LAYOUT_MODULE } from "./modules/calculate-layout/calculate-layouad.symbols";
import { ICalculateLayoutController } from "./modules/calculate-layout/interfaces/calculate-layout.interface";
import {
  FETCH_DATA_NATIVE_MODULE,
  IFetchDataNativeController,
} from "./modules/fetch-data-native";
import { VIEW_LAYER } from "./view/infrastructure.symbols";
import { LayoutUI } from "./view/layout-ui";

async function bootstrap() {
  try {
    console.log("Application initialized successfully.");
    const rootElement = document.getElementById("app") as HTMLElement;
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

    const layoutUI = appContainer.get<LayoutUI>(VIEW_LAYER.LAYOUT_UI);
    fetchDataNativeController.fetchDataDapp();
    calculateLayoutController.init();
    layoutUI.render(rootElement);
    const calculateLayout = calculateLayoutController.getCalculateLayout();
    console.log("calculateLayout", calculateLayout);
    console.log("storageService", storageService.getAll());
  } catch (error) {
    console.log("Application initialized fail.", error);
  }
}
bootstrap();
