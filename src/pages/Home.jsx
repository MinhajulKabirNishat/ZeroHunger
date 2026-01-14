import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>🍎 ZeroHunger</h1>
      <p>Connecting surplus food with people in need.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/donor">
          <button style={{ marginRight: "10px" }}>
            I have food to give
          </button>
        </Link>

        <Link to="/receiver">
          <button>
            I am looking for food
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
