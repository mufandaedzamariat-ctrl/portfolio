import { ROUTES } from "@/constants/routes";
import { MainLayout } from "@/Layouts/Main";
import { About } from "@/pages/About";
import { Home } from "@/pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Route>,
  ),
);
