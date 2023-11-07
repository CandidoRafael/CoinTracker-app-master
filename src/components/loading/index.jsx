import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {

  return (
    <Stack 
        sx={{ color: 'green' }}
        spacing={12} 
        direction="row"
        style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1.5em"
        }}
        >
      <CircularProgress color='success'/>
    </Stack>
  );
}