import {formatAmount} from '@/utils';
import {Text, View} from 'react-native';

interface IProps {
  date: string;
  title: string;
  amount: number;
  balance?: number;
}

function HistoryItem({
  date,
  title,
  amount,
  balance,
}: IProps): React.JSX.Element {
  return (
    <View className="w-full h-28 border-b border-gray-300 p-4 flex flex-row items-center justify-between">
      <View className="flex flex-row space-x-6 items-center">
        <Text className="text-sm font-light text-gray-500">
          {date.startsWith(String(new Date().getFullYear()).slice(2, 4))
            ? date.slice(3)
            : date}
        </Text>
        <Text className="text-lg font-semibold text-gray-700">{title}</Text>
      </View>
      <View className="flex items-end">
        {amount > 0 ? (
          <Text className="text-lg font-semibold text-blue-600">{`${formatAmount(
            amount,
          )}원`}</Text>
        ) : (
          <Text className="text-lg font-semibold text-red-600">{`${formatAmount(
            amount,
          )}원`}</Text>
        )}
        {balance && (
          <Text className="text-sm font-light text-gray-500">{`${formatAmount(
            balance,
          )}원`}</Text>
        )}
      </View>
    </View>
  );
}

export default HistoryItem;
