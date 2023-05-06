import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";

function CheckOutStep2(props) {
  /*Inspiration: 
  https://help-uk.newlook.com/hc/article_attachments/4410674657553/Standard.jpg */
  const delivery_msg = useRef("");
  const [selectedValue, setSelectedValue] = useState("Standard");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  const itemStyles = {
    fontSie: "18px",
  };
  // const nextDate = new Date( Date.now() + days * 24 * 60 * 60 * 1000)
  const premiumDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const premiumMonth = premiumDate.toLocaleString("default", {
    month: "short",
  });
  const premiumWeekDay = premiumDate.toLocaleString("default", {
    weekday: "short",
  });
  const premiumDay = premiumDate.toLocaleString("default", {
    day: "numeric",
  });
  const standardDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  const standardMonth = standardDate.toLocaleString("default", {
    month: "short",
  });
  const standardWeekDay = standardDate.toLocaleString("default", {
    weekday: "short",
  });
  const standardDay = standardDate.toLocaleString("default", {
    day: "numeric",
  });

  return (
    <>
      <Grid
        item
        container
        xs={9}
        flexDirection="column"
        justifyContent="start"
        gap={2}
        height="80vh"
      >
        <Grid
          item
          sx={{
            padding: "1rem 0",
            fontSize: "44px",
            borderBottom: "0.5px solid #dee2e6",
            width: "80%",
            textAlign: "center",
          }}
        >
          Delivery
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          width="60%"
          margin="0 auto"
        >
          <Grid item xs={6} sx={itemStyles}>
            <Radio
              checked={selectedValue === "Standard"}
              onChange={handleChange}
              value="Standard"
              name="radio-buttons"
              inputProps={{ "aria-label": "Standard" }}
            />
            £2.99
          </Grid>
          <Grid item container flexDirection="column" sx={itemStyles} xs={6}>
            <Grid item>
              Delivered By{" "}
              {`${standardWeekDay} ${standardDay} ${standardMonth}`}
            </Grid>
            <Grid item>
              <b>Standard</b> Delivery
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          width="60%"
          margin="0 auto"
        >
          <Grid item xs={6} sx={itemStyles}>
            <Radio
              checked={selectedValue === "Premium"}
              onChange={handleChange}
              value="Premium"
              name="radio-buttons"
              inputProps={{ "aria-label": "Premium" }}
            />
            £3.99
          </Grid>
          <Grid item container flexDirection="column" xs={6} sx={itemStyles}>
            <Grid item>
              Delivered By {`${premiumWeekDay} ${premiumDay} ${premiumMonth}`}
            </Grid>
            <Grid item>
              <b>Premium</b> Delivery
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flexDirection="column" width={0.6} gap={2}>
          <Grid item>Delivery Instructions</Grid>
          <Grid item>
            <TextField
              id="filled-multiline-flexible"
              label="Delivery Instructions"
              multiline
              rows={5}
              maxRows={10}
              fullWidth={true}
              size="big"
              inputRef={delivery_msg}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ width: "85%" }}
        >
          <Button
            variant="text"
            size="big"
            onClick={() => {
              props.changeStep("back");
            }}
            style={{ paddingTop: "1rem" }}
          >
            Back
          </Button>
          <Button
            variant="text"
            size="big"
            onClick={() => {
              props.changeStep("forward");
              props.setDeliveryInfo({
                ...props.deliveryInfo,
                delivery_type: selectedValue,
                delivery_msg: delivery_msg.current.value,
              });
            }}
            style={{ paddingTop: "1rem" }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep2;
