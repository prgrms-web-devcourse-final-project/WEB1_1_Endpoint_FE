import Avatar from '@eolluga/eolluga-ui/Display/Avatar';
import Icon from '@eolluga/eolluga-ui/icon/Icon';
import TopBar from '../components/TopBar';
import BottomSheet from '../components/BottomSheet';
import { useState } from 'react';

export default function Game() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <TopBar />
      <main className="flex-1 pt-16">
        <div className="max-w-md mx-auto p-6">
          <div className="p-6 mb-8 bg-white border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="text-white">
                <Avatar text="석" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-1">장원석님</h2>
                <div className="flex items-center gap-2">
                  <Icon icon={'person_outlined'} />

                  <span className="font-medium">레이팅: 1500</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full flex h-16 text-lg justify-between items-center p-4 bg-white border rounded-lg focus:bg-gray-100">
              <div className="flex items-center gap-3">
                <Icon icon={'people'} />방 생성
              </div>
              <Icon icon={'chevron_right_outlined'} />
            </button>

            <button className="w-full flex h-16 text-lg justify-between items-center p-4 bg-white border rounded-l focus:bg-gray-100">
              <div className="flex items-center gap-3">
                <Icon icon={'person_outlined'} />
                랜덤 매칭
              </div>
              <Icon icon={'chevron_right_outlined'} />
            </button>

            <button
              className="w-full flex h-16 text-lg justify-between items-center p-4 bg-white border rounded-lg focus:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center gap-3">
                <Icon icon={'person_outlined'} />
                코드로 참가
              </div>
              <Icon icon={'chevron_right_outlined'} />
            </button>
          </div>
        </div>
        {isOpen ? <BottomSheet isOpen={isOpen} setOpen={setIsOpen} /> : ''}
      </main>
    </div>
  );
}
