import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Button, Card } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddMovie({ onAdd }) {
  const [state, setState] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
    about: "",
    type: "",
    trailer: "",
  });
  const classes = useStyles();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    onAdd(state);
    setState({
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
      about: "",
      type: "",
      trailer: "",
    });
  };

  const { title, description, posterUrl, type, trailer, rating, about } = state;
  return (
    <Card style={{ marginBottom: "20px" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl variant="outlined">
          <InputLabel required htmlFor="title">
            Movie Name
          </InputLabel>
          <OutlinedInput
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            label="Movie Name"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel required htmlFor="type">
            Movie Type
          </InputLabel>
          <OutlinedInput
            id="type"
            name="type"
            value={type}
            required
            onChange={handleChange}
            label="Movie Type"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel required htmlFor="description">
            Description
          </InputLabel>
          <OutlinedInput
            id="description"
            value={description}
            required
            onChange={handleChange}
            name="description"
            label="Description"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel required htmlFor="posteUrl">
            Poster
          </InputLabel>
          <OutlinedInput
            type="text"
            id="posteUrl"
            value={posterUrl}
            required
            name="posterUrl"
            onChange={handleChange}
            label="Poster"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel required htmlFor="rating">
            Rating
          </InputLabel>
          <OutlinedInput
            id="rating"
            value={rating}
            required
            name="rating"
            type="number"
            onChange={handleChange}
            label="Rating"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel required htmlFor="about">
            IMDB URL
          </InputLabel>
          <OutlinedInput
            type="text"
            id="about"
            value={about}
            required
            name="about"
            onChange={handleChange}
            label="IMDB URL"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel required htmlFor="trailer">
            Trailer URL
          </InputLabel>
          <OutlinedInput
            type="text"
            id="trailer"
            value={trailer}
            required
            name="trailer"
            onChange={handleChange}
            label="Trailer URL"
            placeholder="<Embed> Video Link"
          />
        </FormControl>
        <br />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

AddMovie.propTypes = {
  onAdd: PropTypes.func,
};
