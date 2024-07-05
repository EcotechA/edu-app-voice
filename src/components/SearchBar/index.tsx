import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, Keyboard, Button } from 'react-native';

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
    <View className="m-4 mt-4 justify-start items-center flex-row w-[85%]">
      <View
        className={`${clicked ? 'p-2 flex-row w-[80%] bg-backgroundLight rounded-full items-center justify-evenly border border-TextGray999Light' : 'p-2 flex-row w-[95%] bg-backgroundLight rounded-full items-center border border-TextGray999Light'}`}>
        <Feather name="search" size={20} color="text-gray-999" className="ml-2" />
        <TextInput
          className="text-lg ml-2 pr-2 w-[90%] text-gray-999"
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
            color="text-gray-666"
            className="p-1 mr-1"
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
