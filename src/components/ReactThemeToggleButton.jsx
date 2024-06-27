import React from "react";
import styles from "./styles.module.css"; // Assuming you move the CSS content to this file

const defaultOptions = {
  invertedIconLogic: false
};

const ReactThemeToggleButton = ({
  isDark,
  onChange,
  invertedIconLogic = defaultOptions.invertedIconLogic
}) => (
  <label
    className={`${styles.container} ${isDark ? styles.IsDark : styles.IsLight}`}
    title={isDark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  >
    <input
      type="checkbox"
      defaultChecked={invertedIconLogic ? !isDark : isDark}
      onChange={onChange}
    />
    <div />
  </label>
);

export default ReactThemeToggleButton;
