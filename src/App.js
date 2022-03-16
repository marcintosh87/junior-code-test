import { Box, Container, Divider, Typography } from "@mui/material";
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
    <Box className="App" component={"main"}>
      <Container component={"section"}>
        <Typography variant="h3" pt={4} color={"white"} mb={3}>
          Junior Engineer Code Test
        </Typography>
        <Divider sx={{ color: "white" }} variant={"middle"} />
        {/* conditionals added for loading state, if content is not loaded, animation will show else primary content will be displayed */}
        {loading ? (
          <Loading error={error} />
        ) : (
          <ArtCard
            title={artData.title}
            image={artData.primaryImage}
            artistName={artData.artistDisplayName}
            learnMoreUrl={artData.objectURL}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
