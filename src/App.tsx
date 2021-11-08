import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AutobiographyPage, ExperiencePage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ExperiencePage} />
          <Route path="/qoo" render={() => <h1>qoo</h1>} />
          <Route path="/autobiographyPage" component={AutobiographyPage} />
          <Route path="/experiencePage" component={ExperiencePage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
