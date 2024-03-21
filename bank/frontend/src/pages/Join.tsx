import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import BottomButton from '../components/BottomButton';
import CommonInput from '../components/CommonInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type JoinScreenProps = NativeStackScreenProps<RootStackParamList, 'Join'>;

function Join({navigation}: JoinScreenProps): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        stack="회원가입"
        goBack={() => navigation.popToTop()}
        menu={[
          {title: 'home-outline', onPress: () => navigation.popToTop()},
          {title: 'menu', onPress: () => navigation.navigate('Menu')},
        ]}
      />
      <ScrollView className="w-full mb-16">
        <View className="w-full flex  py-12">
          <CommonInput label={'이메일'} />
          <CommonInput label={'이름'} />
          <CommonInput label={'전화번호'}>
            <View className="w-full flex space-y-4">
              <View className="w-full relative">
                <TextInput className="border-b border-gray-800/50 text-gray-700" />
                <TouchableOpacity className="absolute top-0 right-0 translate-y-3 border border-gray-400 rounded-full p-1 flex justify-center items-center">
                  <Text className="text-sm font-medium text-gray-700">
                    인증번호 전송
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="w-full relative">
                <TextInput className="border-b border-gray-800/50 text-gray-700" />
                <TouchableOpacity className="absolute top-0 right-0 translate-y-3 border border-gray-400 rounded-full p-1 flex justify-center items-center">
                  <Text className="text-sm font-medium text-gray-700">
                    인증번호 확인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </CommonInput>
          <CommonInput label={'비밀번호'}>
            <View className="w-full relative">
              <TextInput className="border-b border-gray-800/50 text-gray-700" />
              <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                <Icon
                  name={'eye-off-outline'}
                  color={'#777'}
                  onPress={() => {}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </CommonInput>
          <CommonInput label={'비밀번호 확인'}>
            <View className="w-full relative">
              <TextInput className="border-b border-gray-800/50 text-gray-700" />
              <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                <Icon
                  name={'eye-off-outline'}
                  color={'#777'}
                  onPress={() => {}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </CommonInput>
        </View>
      </ScrollView>
      <BottomButton
        title={'회원가입'}
        onPress={() => navigation.navigate('Intro')}
      />
    </View>
  );
}

export default Join;
