/* react */
import { memo, useEffect } from 'react';
/* @chakra-ui */
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
/* hooks */
import { useAllUsers } from '../../hooks/useAllUsers';
/* components */
import { UserCard } from '../organisms/UserCard';

/**
 * Users
 * @returns
 */
export const Users = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} justify="center">
              <UserCard
                id={user.id}
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
      </Wrap>
      )}
    </>
  );
});
