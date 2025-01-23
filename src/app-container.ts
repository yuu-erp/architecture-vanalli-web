import { BaseContainer } from "./core/container";
import { InfrastructureDependencyModule } from "./core/infrastructure/infrastructure.dependency";
import { FetchDataNativeModule } from "./modules/fetch-data-native/application/fetch-data-native.module";
import { ViewDependencyModule } from "./view/view.dependency";

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.initializeCoreNamespace();

    this.initializeModulesNamespace();

    this.initializeViewNamespace();
  }

  private initializeCoreNamespace(): void {
    this.provideInfrastructure();
  }

  private initializeModulesNamespace(): void {
    this.provideFetchDataNativeModule();
  }

  private initializeViewNamespace(): void {
    this.load(new ViewDependencyModule());
  }

  private provideInfrastructure(): void {
    this.load(new InfrastructureDependencyModule());
  }

  private provideFetchDataNativeModule(): void {
    this.load(new FetchDataNativeModule());
  }
}
