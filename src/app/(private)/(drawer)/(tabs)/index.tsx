import BottomSheet from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';

import HowAddVoice from '~/src/components/Help/HowAddVoice';
import { BottomSheetWithInstructions } from '~/src/components/Help/HowAddVoice/BottomSheetWithInstructions';
import ListRecords from '~/src/components/ListRecord';
import SearchBar from '~/src/components/SearchBar';

export default function Transcriptions() {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

  const refBottomSheetHelpInstruction = useRef<BottomSheet>(null);
  const handleBottomSheetOpen = () => refBottomSheetHelpInstruction.current?.expand();
  const handleBottomSheetClose = () => refBottomSheetHelpInstruction.current?.close();

  return (
    <View className="w-full h-full bg-backgroundLight">
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      />
      <View className="w-full py-2 px-2 bg-backgroundLight">
        <HowAddVoice handleBottomSheetOpen={handleBottomSheetOpen} />
        <ListRecords />
      </View>
      <BottomSheetWithInstructions
        ref={refBottomSheetHelpInstruction}
        onClose={handleBottomSheetClose}
      />
    </View>
  );
}
