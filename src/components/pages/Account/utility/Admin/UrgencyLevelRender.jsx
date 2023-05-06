import { Grid } from "@mui/material";

function UrgencyLevelRender(params) {
  const date1 = new Date(params.data.date_ordered);
  const date2 = Date.now();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let color = "";
  if (diffDays > 7) {
    color = "red";
  } else {
    color = "green";
  }

  return (
    <>
      <Grid>
        <Grid item color={color}>
          {diffDays}days ago!
        </Grid>
      </Grid>
    </>
  );
}
export default UrgencyLevelRender;
