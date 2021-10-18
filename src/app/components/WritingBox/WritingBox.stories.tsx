import React from 'react';
import WritingBox from './WritingBox';

export default {
  title: 'Component/WritingBox',
  component: WritingBox,
};

export const header = (): JSX.Element => (
  <WritingBox
    InputValue={
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit nisi minima quisquam nostrum laudantium suscipit, fuga magnam esse magni debitis adipisci culpa excepturi explicabo laboriosam, laborum illo dolorum eius?'
    }
    setInputChange={() => console.log('change')}
  />
);
