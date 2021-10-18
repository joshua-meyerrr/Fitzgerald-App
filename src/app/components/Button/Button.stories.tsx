import React from 'react';
import CopyIcon from '../Assets/CopyIcon';
import DeleteIcon from '../Assets/DeleteIcon';
import SuggestionIcon from '../Assets/SuggestionIcon';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const copyButton = (): JSX.Element => (
  <Button type="circle" onButtonClick={() => console.log('click')}>
    <CopyIcon width={28} height={28} fill="#fff" />
  </Button>
);

export const deleteButton = (): JSX.Element => (
  <Button color="red" type="circle" onButtonClick={() => console.log('click')}>
    <DeleteIcon width={28} height={28} fill="#fff" />
  </Button>
);

export const suggestionButton = (): JSX.Element => (
  <Button type="circle" onButtonClick={() => console.log('click')}>
    <SuggestionIcon width={28} height={28} fill="#fff" />
  </Button>
);
