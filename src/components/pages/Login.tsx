/* react */
import { ChangeEvent, memo, useCallback, useState } from 'react';
/* @chakra-ui */
import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react';
/* components */
import { PrimaryButton } from '../atoms/PrimaryButton';
/* hooks */
import { useAuth } from '../../hooks/useAuth';

/**
 * Login
 * @returns
 */
export const Login = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  return (
    <Flex align='center' justify='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as='h1' size='lg' textAlign='center'>ログイン</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='ユーザーID' value={userId} onChange={onChangeUserId}/>
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
})
