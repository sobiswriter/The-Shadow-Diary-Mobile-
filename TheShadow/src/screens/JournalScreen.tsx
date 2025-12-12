import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperBackground } from '../components/PaperBackground';

export const JournalScreen = () => {
  return (
    <View style={styles.container}>
      {/* 1. Render the paper texture behind everything */}
      <PaperBackground />

      {/* 2. SafeAreaView ensures text isn't hidden by the notch */}
      <SafeAreaView style={styles.safeArea}>
        
        {/* 3. The Input Area - Clean Serif font (System default for now) */}
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Write your entry..."
          placeholderTextColor="#555"
          autoFocus={true}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Fallback color
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 20, // Margins like a real notebook
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#1a1a1a',
    lineHeight: 28, // Spacing for easy reading
    textAlignVertical: 'top',
    fontFamily: 'serif', // Simple serif for now
  },
});