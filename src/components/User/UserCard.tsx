import React from 'react';
import { Card, CardContent } from '@mui/material';
import { UserData } from '../../types/userData';

import UserName from './UserCard/UserName';
import UserProperties from './UserCard/UserProperties';
import UserButton from './UserCard/UserButton';

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Card
    sx={{
      boxShadow: 2,
      borderRadius: 8,
      margin: '8px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <CardContent>
      <UserName user={user} />
      <UserProperties user={user} />
      <UserButton user={user} />
    </CardContent>
  </Card>
);

export default UserCard;
