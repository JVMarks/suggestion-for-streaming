import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Grid,
} from "@mui/material";

import MovieCard from "../MovieCard";
import { StreamingPlatform } from "../../../types/streamingPlatform";

interface ISuggestionModalProps {
  isOpenModal: boolean,
  handleModalClose?: React.MouseEventHandler<HTMLButtonElement>,
  data?: StreamingPlatform,
}

const SuggestionModal: React.FC<ISuggestionModalProps> = ({ isOpenModal, handleModalClose, data }) => {

  return (
    <Dialog
      open={isOpenModal}
      onClose={handleModalClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        O que você assistiu?
      </DialogTitle>
      <DialogContent
        sx={{
          borderTop: '1px solid #494D60',
          borderBottom: '1px solid #494D60',
        }}
        dividers
      >
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <Grid container>
            {data?.movies.map((item, index) => (
              <Grid item xs={12} mb={2} key={index}>
                <MovieCard
                  data={item}
                  platformId={data.id}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleModalClose}
          variant="contained"
        >
          Assistir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuggestionModal;
