import { FC, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Billings from "../components/billing";
import { AppRoutesEnum } from "../constants/enums/routes.enum";

export interface IRoute {
  path: string;
  element: ReactNode;
}
const appRoutes: IRoute[] = [
  {
    path: "",
    element: <div>Home</div>,
  },
  {
    path: AppRoutesEnum.PROFILE,
    element: <div>Profile</div>,
  },
  {
    path: AppRoutesEnum.BILLINGS,
    element: <Billings />,
  },
  {
    path: AppRoutesEnum.INVOICES,
    element: <div>invoices</div>,
  },
  {
    path: AppRoutesEnum.SETTINGS,
    element: <div>settings</div>,
  },
  {
    path: AppRoutesEnum.HELP,
    element: <div>help</div>,
  },
  {
    path: AppRoutesEnum.LOGOUT,
    element: <div>logout</div>,
  },
];

const AppRoutes: FC = () => {
  return (
    <Routes>
      {appRoutes.map((route: IRoute) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
