import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Container } from '~/components/Container/Container';
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
        <Text>Search Phrase: {searchPhrase}</Text>
        {/* Add other content or components here */}
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
