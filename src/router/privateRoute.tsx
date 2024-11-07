import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../global/globalProvider";

const PrivateRoute: FC<any> = ({ children }) => {
  const { User }: any = useContext(GlobalContext);

  const data = JSON.parse(localStorage.getItem("auth")!);

  return <div>{data ? <div>{children}</div> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
