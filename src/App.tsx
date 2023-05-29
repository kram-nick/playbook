import AppRouter from "./core/router/AppRouter";
import "./i18nextConf";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_KEY}>
      <AppRouter />
    </GoogleOAuthProvider>
  );
}

export default App;
