import { AppContainer } from "./app-container";
import { INFRASTRUCTURE_MODULE, StoragePort } from "./core/infrastructure";
import {
  FETCH_DATA_NATIVE_MODULE,
  IFetchDataNativeController,
} from "./modules/fetch-data-native";

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
  } catch (error) {
    console.log("Application initialized fail.", error);
  }
}
bootstrap();
