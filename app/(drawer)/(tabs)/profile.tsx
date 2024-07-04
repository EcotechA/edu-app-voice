import { router } from 'expo-router';

import { Button } from '~/components/Button/Button';

export default function Profile() {
  return (
    <>
      <Button title="back" onPress={() => router.back()} />
    </>
  );
}
