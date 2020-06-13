import React from "react";
import { MainContentComponent } from "./layout";
import "./MainComponent.scss";
import { NavbarComponent } from "./navbar";
import { SidebarComponent } from "./sidebar";

export function MainComponent() {
  return (
    <div className="container-fluid root-container">
      <NavbarComponent />
      <div className="root-container__mainContainer">
        <div className="root-container__mainContainer_sidebar">
          <SidebarComponent />
        </div>
        <div className="root-container__mainContainer_layout_container" style={{height: window.innerHeight}}>
          <MainContentComponent />
        </div>
      </div>
    </div>
  );
}
