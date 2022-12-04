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

export default function BasicModal() {
  const { handleClose, handleOpen, open, setOpen, TweetDetails } =
    useContext(dataContext);
  const { id } = useParams();
  const user = TweetDetails.find((data) => {
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
          sx={style}
        >
          <PersonAddAltIcon color={`primary`} sx={{fontSize:"50px"}} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Follow ${user.USERNAME1} to see what they share on Twitter`}
          </Typography>
          <Typography
            style={{ color: "rgba(255, 255, 255, 0.379)" }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Sign up so you never miss their Tweets.
          </Typography>
          <Stack spacing={2} style={{ width:"100%"}}>
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
