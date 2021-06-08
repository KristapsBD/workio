import React from 'react';

import ErrorPage from '.';

export default () => {
  return <ErrorPage code={404} message='Page Not Found!' />;
};
