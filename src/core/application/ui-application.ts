export abstract class UIApplication {
  constructor() {}

  // A method to create an HTML element or other UI components
  createElement(tag: string, properties: object = {}): HTMLElement {
    const element = document.createElement(tag);

    // Apply properties as attributes or styles to the element
    for (const [key, value] of Object.entries(properties)) {
      if (key in element) {
        (element as any)[key] = value;
      } else {
        element.setAttribute(key, value as string);
      }
    }

    return element;
  }

  // Abstract method that must be implemented by subclasses
  abstract render(): void;

  // Optionally, you can add additional utility methods to handle UI behaviors.
  abstract initialize(): void; // A method to set up initial UI state or data

  // Optional lifecycle hooks or helpers for the UI component
  destroy(): void {
    console.log("Destroying UI elements...");
    // You can add logic to clean up UI elements or event listeners here
  }
}
