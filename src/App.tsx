import React from "react";

import Header from "@/components/header";

import styles from "./APP.module.less";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContainer}></div>
    </div>
  );
};

export default App;
