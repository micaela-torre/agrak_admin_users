import { lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PublicRoutes } from "../models/routes";
import { RoutesWithNotFound } from "../NotFound/RoutesWithNotFound";

const Home = lazy(() => import("../views/HomeView/HomeView"));
const CreateUpdateUser = lazy(
  () => import("../views/CreateUpdateUserView/CreateUpdateUserView")
);
const DetailsUser = lazy(
  () => import("../views/DetailsUserView/DetailsUserView")
);

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route index path="/" element={<Home />} />
        <Route path={PublicRoutes.NEW_USER} element={<CreateUpdateUser />} />
        <Route
          path={`${PublicRoutes.UPDATE_USER}/:id`}
          element={<CreateUpdateUser />}
        />
        <Route
          path={`${PublicRoutes.USER_DETAILS}/:id`}
          element={<DetailsUser />}
        />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};

export default Routes;
