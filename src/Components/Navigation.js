import React from "react";

export function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-content">
        <h1 className="navigation-logo">Color picker</h1>
        <ul className="navigation-menu">
          <li className="navigation-item">Color generator</li>
          <li className="navigation-item">Color customizer</li>
          <li className="navigation-item">Custom Palette</li>
        </ul>
      </div>
    </nav>
  );
}
