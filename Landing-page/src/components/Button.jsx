import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return <Button variant="contained"
  sx={{
    margin: "10px",
    backgroundColor: "#e6ecf3",
    color: "#1d2b34"
  }}>Hello world</Button>;
}



// import * as React from 'react';
// import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
// import { styled } from '@mui/system';
// import Stack from '@mui/material/Stack';

// export default function UnstyledButtonsIntroduction() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button>Button</Button>
//       <Button disabled>Disabled</Button>
//     </Stack>
//   );
// }