import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Container } from '~/components/Container/Container';
import HowAddVoice from '~/components/Help/HowAddVoice';
import ListRecords from '~/components/ListRecord';
import SearchBar from '~/components/SearchBar';

export default function Transcriptions() {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Container>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      />
      {/* Here you can add the content that will be filtered by the searchPhrase */}
      <View style={styles.content}>
        <HowAddVoice />
        <ListRecords />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
});
