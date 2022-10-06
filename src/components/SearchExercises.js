import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

import {fetchData , exerciseOptions} from "../utils/fetchData"

const SearchExercises = () => {
  const [search, setSearch] = useState("")
  
    const handleSearch = async () => {
       if(search){
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); 
        console.log(exerciseData) 
      }
    }

  return (
    <Stack aligItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Ecercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FFFF26",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}></Box>
    </Stack>
  );
};

export default SearchExercises;
