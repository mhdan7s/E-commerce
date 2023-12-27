import { Outlet } from "react-router-dom";

import Header from "../Header";

import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import { Footer } from "../Footer";
import { FetchItems } from "../fetchItems";

 function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;