import { AppRoutesEnum } from "constants/enums/routes.enum";
import { FC, lazy, ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

export interface IRoute {
  path: string;
  element: ReactNode;
}

const BillingContainer = lazy(() => import("../containers/billingContainer"));

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
    element: (
      <Suspense>
        <BillingContainer />
      </Suspense>
    ),
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
