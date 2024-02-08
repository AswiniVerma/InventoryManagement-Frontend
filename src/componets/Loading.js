// Loading.js

import React from 'react';
import { css } from '@emotion/react';
import { PulseLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <div className="loading-container text-center">
      <PulseLoader color="#36D7B7" size={15} css={override} />
      <p>Loading...</p>
      <p>Please take a coffee and chill while we get things ready for you :)</p>
    </div>
  );
};

export default Loading;
