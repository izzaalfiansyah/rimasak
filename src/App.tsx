import { Route, Routes } from "@solidjs/router";
import IndexPage from "./pages/Index";
import MenuPage from "./pages/Menu";

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/menu" component={MenuPage}></Route>
      </Routes>
    </>
  );
};
