import {Text, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomButton from '../components/BottomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type TransferResultScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TransferResult'
>;

function TransferResult({
  navigation,
}: TransferResultScreenProps): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="이체"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2">
          <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
            <Icon name={'check'} color={'#fff'} onPress={() => {}} size={40} />
          </View>
          <View className="flex flex-row">
            <Text className="text-2xl font-bold text-gray-700">
              내 입출금통장
            </Text>
            <Text className="text-2xl font-medium text-gray-700">으로</Text>
          </View>
          <Text className="text-2xl font-medium text-gray-700">10,000원을</Text>
          <Text className="text-2xl font-medium text-gray-700">보냈어요</Text>
        </View>
        <View className="h-48 flex justify-evenly">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">
              받는 분에게 표시
            </Text>
            <Text className="font-semibold text-sm text-gray-700">이유로</Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">출금 계좌</Text>
            <Text className="font-semibold text-sm text-gray-700">
              내 저금예금[입출금] 계좌
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">입금 계좌</Text>
            <Text className="font-semibold text-sm text-gray-700">
              신한은행 1234121231234
            </Text>
          </View>
        </View>
      </View>
      <BottomButton title={'확인'} onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default TransferResult;
