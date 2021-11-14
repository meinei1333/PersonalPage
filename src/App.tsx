import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AutobiographyPage, ExperiencePage, ContactMePage, PortfolioPage } from "./pages";

function App() {
  return (
    <div className={styles["app"]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AutobiographyPage} />
          <Route path="/autobiographyPage" component={AutobiographyPage} />
          <Route path="/experiencePage" component={ExperiencePage} />
          <Route path="/contactMePage" component={ContactMePage} />
          <Route path="/portfolioPage" component={PortfolioPage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
