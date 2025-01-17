import {Modal, View} from 'react-native';

interface IProps {
  children: React.ReactNode;
  visible?: boolean;
  close?: () => void;
}

function BottomPopup({children, visible, close}: IProps): React.JSX.Element {
  return (
    <View className=" w-screen h-screen absolute bg-black/30">
      <Modal animationType="slide" visible={visible} transparent={true}>
        <View className="w-full h-full absolut" onTouchEnd={close}>
          <View
            className="w-full absolute bottom-0 rounded-t-[40px] bg-white px-4 py-2 flex items-center pb-20"
            onTouchEnd={e => {
              e.stopPropagation();
            }}>
            <View className="w-16 h-1 bg-slate-400/50 rounded-full mb-4" />
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomPopup;
