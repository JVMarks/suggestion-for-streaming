import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import SuggestionModal from '../../feedback/SuggestionModal';
import { StreamingPlatform } from '../../../types/streamingPlatform';

interface IButtonCardProps {
  image?: string,
  data: StreamingPlatform
}

const ButtonCard: React.FC<IButtonCardProps> = ({ image, data }) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleSuggestionSubmit = () => {
    setModalOpen(false);
  }

  return (
    <React.Fragment>
      <Button
        onClick={() => setModalOpen(true)}
        sx={{
          width: '100%',
          background: 'black',
          height: '250px',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            margin: 6,
          }}
        />
      </Button>

      <SuggestionModal
        isOpenModal={isModalOpen}
        handleModalClose={() => handleSuggestionSubmit()}
        data={data}
      />

    </React.Fragment>
  );
}

export default ButtonCard;