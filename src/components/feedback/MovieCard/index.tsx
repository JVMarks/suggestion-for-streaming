import React, { useState } from "react";
import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  Chip,
  useTheme,
} from "@mui/material";
import { Movie } from "../../../types/movie";

interface IMovieCardProps {
  data: Movie;
  platformId: number;
}

const MovieCard: React.FC<IMovieCardProps> = ({ data, platformId }) => {
  const [isFocused, setFocus] = useState(false);
  const theme = useTheme();
  const { genres, imageUrl, overview, title } = data;

  const saveStorage = () => {
    const newData = {
      data: data,
      platformId: platformId,
    };

    localStorage.setItem("suggestion", JSON.stringify(newData));
  };

  return (
    <Card
      onClick={() => {
        setFocus(!isFocused);
        saveStorage();
      }}
      sx={{
        marginTop: "20px",
        background: "#0C0C10",
        borderRadius: "10px",
        height: "100%",
        border: isFocused
          ? `2px solid ${theme.palette.primary.main}`
          : `2px solid #0C0C10`,
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          cursor: "pointer",
          height: "100%",
          width: "100%",
        }}
      >
        <Avatar
          sx={{
            width: "100px",
            height: "100%",
            borderRadius: "5px",
            boxShadow: "8px 4px 13px rgba(0,0,0,0.38)",
            display: "flex",
            justifyContent: "flex-start",
          }}
          variant="rounded"
          src={imageUrl}
          alt={title}
        />

        <Stack
          marginLeft="30px"
          spacing={0.5}
          sx={{
            maxWidth: "385px",
            width: "100%",
          }}
        >
          <Typography variant="h5" component="h5">
            {title}
          </Typography>
          <Typography
            color="secondary"
            sx={{
              maxWidth: "100%",
              height: "100%",

              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              whiteSpace: "pre-line",
              textOverflow: "ellipsis",
              WebkitLineClamp: 1,
            }}
          >
            {overview}
          </Typography>
          <Stack sx={{ paddingTop: "20px" }} direction="row" spacing={1}>
            <Box>
              {genres.map((item, index) => (
                <Chip
                  label={item.name}
                  key={index}
                  sx={{
                    marginBottom: "7px",
                    backgroundColor: "#1b1b22",
                    marginRight: "7px",
                  }}
                />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default MovieCard;
