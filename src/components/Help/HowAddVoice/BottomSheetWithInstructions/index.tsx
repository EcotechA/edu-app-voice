import BottomSheet from '@gorhom/bottom-sheet/';
import { forwardRef } from 'react';

import InstructionItem from '../InstructionItem';

interface BottomSheetWithInstructionsProps {
  onClose: () => void;
}

export const BottomSheetWithInstructions = forwardRef<
  BottomSheet,
  BottomSheetWithInstructionsProps
>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      snapPoints={['90%']}
      handleComponent={() => null}>
      <InstructionItem onClose={onClose} />
    </BottomSheet>
  );
});
