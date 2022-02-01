import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { AddAnimalModal } from "components/AddAnimalModal";
import { AdoptModal } from "components/AdoptModal";
import { dateDifference } from "helper/dateHelper";

export const CardView = ({ object, refetch, fetch }) => (
  <Card sx={{ minWidth: 250, m: "0.5rem", boxShadow: 2 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {object?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Age: ${object.age}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Breed: ${object.name}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Weight: ${object.weight}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Been In Shelder: ${dateDifference(
          object.joined_at,
          object.adopted_at
        )} Days`}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      {object?.adopted ? (
        <AdoptModal
          fetch={fetch}
          refetch={refetch}
          id={object.id}
          color="success"
        >
          Adopted
        </AdoptModal>
      ) : (
        <AdoptModal fetch={fetch} refetch={refetch} id={object.id}>
          Adopt
        </AdoptModal>
      )}
      <AddAnimalModal fetch={fetch} refetch={refetch} id={object.id}>
        Edit
      </AddAnimalModal>
    </CardActions>
  </Card>
);

CardView.propTypes = {
  object: PropTypes.objectOf(PropTypes.any),
  refetch: PropTypes.func,
  fetch: PropTypes.func
};