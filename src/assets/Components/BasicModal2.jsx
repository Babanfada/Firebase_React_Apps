import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Stack } from "@mui/material";
import { dataContext } from "../../App";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "./Data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal2({index}) {
  const { handleClose, handleOpen, open, setOpen } = useContext(dataContext);
   const { id } = useParams();
  const user = categoryData.find((data) => {
    return data.id == id;
  });

  return (
    <div>
      <Button
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
        variant={"outlined"}
        color={"secondary"}
        size={"small"}
        onClick={handleOpen}
      >
        Follow
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            backgroundColor: "black",
            color: "white",
            width: "50vw",
            height: "30vw",
            border: "1px soid white",
          }}
          sx={style}
        >
          <PersonAddAltIcon />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Follow a Topic to discover great Tweets
          </Typography>
          <Typography
            style={{ color: "rgba(255, 255, 255, 0.379)" }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {`Join Twitter now to discover new and interesting conversations about
            the things that matter most to you, like  ${user.heading}.`}
          </Typography>
          <Stack spacing={2}>
            <Button
              style={{
                color: "white",
                borderRadius: "15px",
                borderColor: "white",
                fontWeight: "bold",
                backgroundColor: "#1D9BF0",
              }}
              variant="contained"
              size="small"
            >
              Login
            </Button>
            <Button
              style={{
                backgroundColor: "black",
                color: "#1D9BF0",
                borderRadius: "15px",
                fontWeight: "bold",
                // border: "2px solid #1D9BF0",
              }}
              variant="outlined"
              size="small"
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
