import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import ArtCard from "./components/ArtCard";
import Loading from "./components/Loading";

function App() {
  // Element States
  // API Fetch stored
  const [artData, setArtData] = useState([]);
  // Error state
  const [error, setError] = useState("");
  // loading state
  const [loading, setLoading] = useState(true);

  // API Fetch
  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/436121`
    )
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setArtData(data);
            setLoading(false);
            console.log(data);
          });
        }
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <Container className="App">
      <Typography variant="h3" mt={3}>
        Junior Engineer Code Test
      </Typography>

      {loading ? (
        <Loading />
      ) : (
        <ArtCard
          title={artData.title}
          image={artData.primaryImage}
          artistName={artData.artistDisplayName}
          learnMoreUrl={artData.objectURL}
        />
      )}
    </Container>
  );
}

export default App;
