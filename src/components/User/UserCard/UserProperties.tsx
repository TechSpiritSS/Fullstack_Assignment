import React from 'react';
import { UserData } from '../../../types/userData';
import {
  DomainRounded,
  WcRounded,
  EventAvailableRounded,
  EventBusyRounded,
} from '@mui/icons-material';
import PropertyItem from './PropertyItem';

interface UserPropertiesProps {
  user: UserData;
}

const UserProperties: React.FC<UserPropertiesProps> = ({ user }) => (
  <>
    <PropertyItem
      icon={<DomainRounded sx={{ color: 'primary.main', mr: 1 }} />}
      text={user.domain}
    />
    <PropertyItem
      icon={<WcRounded sx={{ color: 'primary.main', mr: 1 }} />}
      text={user.gender}
    />
    <PropertyItem
      icon={
        user.available ? (
          <EventAvailableRounded sx={{ color: 'success.main', mr: 1 }} />
        ) : (
          <EventBusyRounded sx={{ color: 'error.main', mr: 1 }} />
        )
      }
      text={user.available ? 'Available' : 'Not Available'}
    />
  </>
);

export default UserProperties;
