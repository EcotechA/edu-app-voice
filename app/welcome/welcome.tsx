import { styles } from './style';

import { Container } from '~/components/Container/Container';
import Onboarding from '~/components/Onboarding';

export default function WelcomeScreen() {
  return (
    <>
      <Container style={styles.background}>
        <Onboarding />
      </Container>
    </>
  );
}
