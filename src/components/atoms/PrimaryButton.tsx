/* react */
import { memo, ReactNode } from 'react';
/* @chakra-ui */
import { Button } from '@chakra-ui/react';

/**
 * Props
 */
type Props = {
  children: ReactNode
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void
}

/**
 * PrimaryButton
 * @param {Props} props
 * @returns
 */
export const PrimaryButton = memo((props: Props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg='teal.400'
      color='white'
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
