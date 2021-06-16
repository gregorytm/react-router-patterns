import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogFilter from "./DogFilter";

function Router({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <DogFilter dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Router;
