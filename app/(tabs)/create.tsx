import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const create = () => {
  return (
    <SafeAreaView>
      <Text className='text-white text-xl'>create</Text>
      <Link href="/testdrawer"  className='text-blue-500'>see drawer page</Link>
    </SafeAreaView>
  )
}

export default create