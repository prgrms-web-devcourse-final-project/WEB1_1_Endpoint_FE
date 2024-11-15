import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../shared/drawer';
import TextField from '@eolluga/eolluga-ui/Input/TextField';
import Icon from '@eolluga/eolluga-ui/icon/Icon';
import { useState } from 'react';
import FlexBox from '../shared/FlexBox';

type BottomSheetProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BottomSheet({ isOpen, setOpen }: BottomSheetProps) {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="h-3/5 w-full bg-white" aria-describedby="set-positions">
        <DrawerHeader className="relative">
          <DrawerTitle>댓글</DrawerTitle>
          <DrawerDescription />
          <button type="button" className="absolute top-5 right-7" onClick={() => setOpen(!isOpen)}>
            <Icon icon="close" />
          </button>
        </DrawerHeader>
        <div className="flex flex-col space-y-4 justify-between h-full"></div>

        <div className="w-full border-t-2 fixed bottom-4 pt-3 bg-white">
          <FlexBox className="px-4 gap-4">
            <TextField
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              size="M"
              mode="outlined"
              placeholder="댓글을 입력하세요"
            />
            <div className="p-3 bg-black rounded-xl" onClick={() => console.log('댓글 게시')}>
              <Icon icon="add" className="fill-white" />
            </div>
          </FlexBox>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
