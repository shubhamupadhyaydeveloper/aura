import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchPage = () => {
  const {query} = useLocalSearchParams()
  return (
    <SafeAreaView>
      <Text className='text-white text-lg'>{query}</Text>
    </SafeAreaView>
  )
}

export default SearchPage;