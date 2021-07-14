import { Switch, Route } from "react-router-dom";
import Posts from "../components/Posts";
import UpdateForm from "../components/UpdateForm";
const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={"/"} component={Posts} />
      <Route path={"/update"} component={UpdateForm} />
    </Switch>
  );
};

export default Routes;
