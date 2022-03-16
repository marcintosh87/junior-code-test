import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

export default function ArtCard({ title, image, artistName, learnMoreUrl }) {
  return (
    <Card
      sx={{ margin: 4, boxShadow: 3 }}
      className="scale-up-center"
      component={"article"}
    >
      <CardMedia
        component="img"
        sx={{ height: "100%", width: "100%" }}
        image={image}
      />
      <CardContent>
        <Typography>{`Title: ${title}`}</Typography>
        <Typography>{`Artist: ${artistName}`}</Typography>
      </CardContent>
      <CardActions>
        <Link
          href={learnMoreUrl}
          target="_blank"
          sx={{ margin: "0px auto", textDecoration: "none" }}
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
