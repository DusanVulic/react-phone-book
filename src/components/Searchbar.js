import { useHistory } from "react-router-dom";
import { useState } from "react";

//MUI
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
//

const Serchbar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //?
    history.push(`/search?q=${term}`);
  };

  return (
    <Container
      sx={{
        marginTop: "20px",
        width: "80%",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        {/* <label htmlFor="search">search:</label>
        <input
          type="text"
          id="search"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        /> */}

        <TextField
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          label="search"
          type="text"
          variant="outlined"
          color="primary"
          fullWidth
          required
          sx={{ marginBottom: "25px" }}
        />
      </form>
      <p>
        * you can search your contacts by input search terms in a field above
      </p>
    </Container>
  );
};

export default Serchbar;
