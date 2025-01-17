import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {useRef, useState} from 'react';
import Header from '@/components/Header';
import CommonInput from '@/components/CommonInput';
import BottomButton from '@/components/BottomButton';
import {
  checkEmailCode,
  emailConfirm,
  emailSend,
  join,
  phoneConfirm,
} from '@/api/member';
import {useMutation} from '@tanstack/react-query';
import {useRecoilValue} from 'recoil';
import {bankDataAtom} from '@/store/atoms';
import clsx from 'clsx';
import {RootStackParamList} from '@/Router';
import LoadingScreen from '@/components/LoadingScreen';

type JoinScreenProps = NativeStackScreenProps<RootStackParamList, 'Join'>;

interface JoinForm {
  email: string;
  name: string;
  phone: string;
  password: string;
  password2: string;
}

function Join({navigation}: JoinScreenProps): React.JSX.Element {
  const bankData = useRecoilValue(bankDataAtom);
  const joinMutation = useMutation({
    mutationFn: join,
    onSuccess: data => {
      console.log(data);
      Alert.alert('회원가입에 성공했습니다.');
      navigation.replace('Intro');
    },
    onError: err => console.log(err),
  });
  const emailMutation = useMutation({
    mutationFn: (params: string) => emailConfirm(params, bankData.bankId),
    onSuccess: data => {
      console.log(data);
      clearErrors('email');
      setEmailValid(true);
      sendEmailCode();
    },
    onError: err => {
      console.log(err);
      setError('email', {type: 'conflict', message: '중복된 이메일입니다.'});
    },
  });

  const {
    control,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm<JoinForm>({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      password2: '',
    },
  });

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [emailCodeValid, setEmailCodeValid] = useState<boolean>(false);
  const [emailCodeError, setEmailCodeError] = useState<boolean>(false);
  const [emailCode, setEmailCode] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const emailCount = useRef<number>(300);
  const intervalId = useRef<any>(null);

  const checkEmailValid = () => {
    const emailValue = getValues('email');
    const emailRegex = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
    );
    if (emailValue === '') {
      setError('email', {
        type: 'required',
        message: '이메일을 입력해주세요.',
      });
      return;
    }
    if (!emailRegex.test(emailValue)) {
      setError('email', {
        type: 'pattern',
        message: '올바른 이메일 형식이 아닙니다.',
      });
      return;
    }
    emailMutation.mutate(emailValue);
  };

  const sendEmailCode = () => {
    emailSend({email: getValues('email')}).then(res => {
      console.log(res);
      setSendingEmail(true);
      intervalId.current = setInterval(() => {
        emailCount.current -= 1;
        setError('email', {
          type: 'count',
          message: `${String(Math.floor(emailCount.current / 60)).padStart(
            2,
            '0',
          )}:${String(emailCount.current % 60).padStart(2, '0')}`,
        });
        if (emailCount.current < 0) {
          clearInterval(intervalId.current);
          setEmailValid(false);
          setSendingEmail(false);
          clearErrors('email');
          emailCount.current = 300;
        }
      }, 1000);
    });
  };

  const checkEmailCodeValid = () => {
    setEmailCodeError(false);
    checkEmailCode({email: getValues('email'), code: emailCode})
      .then(res => {
        console.log(res);
        clearErrors('email');
        setEmailCodeValid(true);
        setSendingEmail(false);
        clearInterval(intervalId.current);
      })
      .catch((err: any) => {
        console.log(err);
        setEmailCodeError(true);
      });
  };

  const onSubmit = (data: JoinForm) => {
    if (!emailCodeValid) {
      setEmailCodeError(true);
    }
    joinMutation.mutate({
      name: data.name,
      email: data.email,
      phone: data.phone.replaceAll('-', ''),
      password: data.password,
      bankId: bankData.bankId,
    });
  };

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
      <ScrollView className="w-full">
        <View className="w-full flex pt-12 pb-16">
          <CommonInput label={'이메일'}>
            <View className="w-full flex space-y-4">
              <Controller
                control={control}
                rules={{
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                  validate: {
                    code: () =>
                      emailCodeValid ? true : '이메일 인증을 해주세요.',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View className="w-full relative">
                    <TextInput
                      className="border-b border-gray-800/50 text-gray-700"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      editable={!emailValid}
                    />
                    {!emailValid && !sendingEmail && (
                      <TouchableOpacity
                        onPress={checkEmailValid}
                        className="absolute top-0 right-0 translate-y-3 border border-gray-400 rounded-full p-1 flex justify-center items-center">
                        <Text className="text-sm font-medium text-gray-700">
                          {'인증번호 전송'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
                name="email"
              />
              <Text
                className={clsx(
                  'absolute text-red-400',
                  sendingEmail ? 'bottom-10 left-2' : '-bottom-6 left-2',
                )}>
                {errors.email?.message}
              </Text>
              {emailValid && !sendingEmail && !emailCodeValid && (
                <Text className="absolute text-blue-400 -bottom-6 left-2">
                  인증번호를 전송중입니다.
                </Text>
              )}
              {emailCodeValid && (
                <Text className="absolute text-blue-400 -bottom-6 left-2">
                  이메일 인증이 완료되었습니다.
                </Text>
              )}
              {sendingEmail && (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onChangeText={setEmailCode}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    onPress={checkEmailCodeValid}
                    className="absolute top-0 right-0 translate-y-3 border border-gray-400 rounded-full p-1 flex justify-center items-center">
                    <Text className="text-sm font-medium text-gray-700">
                      인증번호 확인
                    </Text>
                  </TouchableOpacity>
                  {emailCodeError && (
                    <Text className="absolute -bottom-6 left-2 text-red-400">
                      인증번호가 올바르지 않습니다.
                    </Text>
                  )}
                </View>
              )}
            </View>
          </CommonInput>
          <CommonInput label={'이름'}>
            <Controller
              control={control}
              rules={{
                required: '이름을 입력해주세요.',
                maxLength: {
                  value: 8,
                  message: '이름을 최대 8자이내로 작성해주세요',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  className="border-b border-gray-800/50 text-gray-700"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                />
              )}
              name="name"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.name?.message}
            </Text>
          </CommonInput>
          <CommonInput label={'전화번호'}>
            <Controller
              control={control}
              rules={{
                required: '전화번호을 입력해주세요.',
                pattern: {
                  value:
                    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: '올바른 전화번호 형식이 아닙니다.',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  className="border-b border-gray-800/50 text-gray-700"
                  onBlur={onBlur}
                  onChangeText={t => {
                    const newT = t.replace(/[^0-9]/g, '');
                    onChange(newT);
                  }}
                  value={value}
                  maxLength={11}
                  keyboardType="numeric"
                />
              )}
              name="phone"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.phone?.message}
            </Text>
          </CommonInput>
          <CommonInput label={'비밀번호'}>
            <Controller
              control={control}
              rules={{required: '비밀번호를 입력해주세요.'}}
              render={({field: {onChange, onBlur, value}}) => (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                    <Icon
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      color={'#777'}
                      onPress={() => setShowPassword(!showPassword)}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.password?.message}
            </Text>
          </CommonInput>
          <CommonInput label={'비밀번호 확인'}>
            <Controller
              control={control}
              rules={{
                required: '비밀번호를 한번 더 입력해주세요.',
                validate: {
                  correct: value =>
                    value === getValues('password')
                      ? true
                      : '비밀번호가 일치하지 않습니다.',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword2}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                    <Icon
                      name={showPassword2 ? 'eye-outline' : 'eye-off-outline'}
                      color={'#777'}
                      onPress={() => setShowPassword2(!showPassword2)}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password2"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.password2?.message}
            </Text>
          </CommonInput>
        </View>
      </ScrollView>
      <BottomButton title={'회원가입'} onPress={handleSubmit(onSubmit)} />
      <LoadingScreen isLoading={joinMutation.isPending} />
    </View>
  );
}

export default Join;
