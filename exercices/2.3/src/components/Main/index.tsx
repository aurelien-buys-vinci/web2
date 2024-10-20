import React from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserCardProps {
  usersCard: User[];
}

const UserCard: React.FC<UserCardProps> = ({ usersCard }) => {
  return (
    <div>
      {usersCard.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCard;