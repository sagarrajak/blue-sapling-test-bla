import React from "react";
import { NavbarComponent } from "./navbar";

export function MainComponent() {
  return (
    <div className="container-fluid">
      <NavbarComponent />
      <div>
        <h4>This is main layout</h4>
      </div>
    </div>
  );
}
