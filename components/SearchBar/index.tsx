import { Feather, Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button } from 'react-native';

import { theme } from '~/theme';

type SearchBarProps = {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (text: string) => void;
  setClicked: (clicked: boolean) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}) => {
  return (
    <View style={styles.container}>
      <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
        <Feather
          name="search"
          size={20}
          color={theme.colors.TextGray999Light}
          style={{ marginLeft: 8 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => setClicked(true)}
          onBlur={() => {
            if (searchPhrase === '') {
              setClicked(false);
            }
          }}
        />
        {clicked && searchPhrase !== '' && (
          <Feather
            name="x"
            size={20}
            color={theme.colors.TextGray666Light}
            style={{ padding: 1, marginRight: 4, backfaceVisibility: 'hidden' }}
            onPress={() => setSearchPhrase('')}
          />
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setSearchPhrase('');
              setClicked(false);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '85%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: 100,
    alignItems: 'center',
    borderColor: theme.colors.TextGray999Light,
    borderWidth: 1,
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: theme.colors.TextGray999Light,
    borderWidth: 1,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    paddingRight: 10,
    width: '90%',
    color: theme.colors.TextGray999Light,
  },
});
