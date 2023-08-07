// create a simple button component using react material ui
import React from "react";
import Button from "@mui/material/Button";
import ReactDOM from "react-dom/client";
import { customElement, FASTElement } from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
} from "@microsoft/fast-components";

const MyButton = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};

@customElement("button-tag")
class MyWebComponent extends FASTElement {
  connectedCallback() {
    super.connectedCallback();

    const mountPoint = document.createElement("div");
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" }).appendChild(mountPoint);
    }
    const root = (ReactDOM as unknown as any).createRoot(mountPoint);
    root.render(<div>What is going on brother</div>);
  }
}

export const MyReactWebComponent =
  provideReactWrapper(React).wrap(MyWebComponent);
