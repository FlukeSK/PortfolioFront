
import Spinner from "./components/Spinner";
import useAuth from "./hooks/use-auth";
import { ToastContainer, Slide } from 'react-toastify';
import Router from "./route/index";

// =============== < Function > =============== //
function App() {
  const { initialLoading } = useAuth();

  if (initialLoading) return <Spinner />;

  // =============== < Return > =============== //
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
