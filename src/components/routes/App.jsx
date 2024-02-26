import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Spinner from "../Spinner";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="container">
      <Header></Header>
      {loading ? (
        <Spinner />
      ) : (
        <Outlet />
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
