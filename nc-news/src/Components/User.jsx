import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { fetchUser } from './Api';
import UserCard from './UserCard';

const User = ({ username }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(username).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [username]);

  return loading ? (
    <Loading item="user" />
  ) : (
    <section id="user">
      <UserCard key={user.username} {...user} />
    </section>
  );
};

export default User;
