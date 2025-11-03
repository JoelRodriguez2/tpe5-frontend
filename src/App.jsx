import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      setToken(tokenFromUrl);
      window.history.replaceState({}, document.title, "/");
    } else {
      const storedToken = localStorage.getItem("token");
      if (storedToken) setToken(storedToken);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Proyecto TPE5 - Frontend</h1>
      {token ? (
        <div>
          <p>Usuario logueado con token:</p>
          <code style={{ wordBreak: "break-all" }}>{token}</code>
        </div>
      ) : (
        <div>
          <p>No estás logueado</p>
          <a href={`${BACKEND_URL}/oauth/google`}>
            <button>Login con Google</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
