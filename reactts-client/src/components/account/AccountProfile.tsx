import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { useAuth } from '../../hooks';

const fakeUser = {
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  timezone: 'GTM-7'
};

function AccountProfile(props: any) {
  const { user } = useAuth();

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user?.picture}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user?.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${fakeUser.city} ${fakeUser.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${fakeUser.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}

export default AccountProfile;
