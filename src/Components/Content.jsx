import React from "react";
import { Switch, Route } from "react-router-dom";

function Content({ pageData, routeChange }) {
  return (
    <main className="app-content container">
        <Switch>
            {pageData.routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} children={route.view} render={() => routeChange(route)} props={route.props} />
            ))}
        </Switch>
    </main>
  );
}


export default Content;
