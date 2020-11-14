import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
    {/* 생각해보니까 디테일페이지가 모달창이라 라우팅이 이것밖에 필요없드라구요??? */}
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route path='/*'>404 Not Found</Route>
    </Switch>
    </>
  );
}

export default App;
