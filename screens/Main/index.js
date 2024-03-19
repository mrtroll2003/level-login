import React from 'react';
import { View, Text } from 'react-native';
import subjectList from '../../data/subject.js';
import { useRoute } from '@react-navigation/native';

const DataScreen = () => {
  const route = useRoute();
  const userLevel = route.params?.userLevel;
  const filteredData = subjectList.filter((item) => item.level <= userLevel);

  return (
    <View>
      {filteredData.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          {/* Render other item details */}
        </View>
      ))}
    </View>
  );
};

export default DataScreen;