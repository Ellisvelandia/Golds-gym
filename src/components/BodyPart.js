import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid",
            background: "#fff",
            borderBottomLeftRadius: "10px",
            width: "60px",
            height: "140px",
            cursor: "pointer",
            gap: "7px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "10px",
            width: "60px",
            height: "140px",
            cursor: "pointer",
            gap: "7px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      // window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#000"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
