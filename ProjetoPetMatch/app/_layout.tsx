import { Stack } from 'expo-router';

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // Remove a barra superior
      />
    </Stack>
  );
}
