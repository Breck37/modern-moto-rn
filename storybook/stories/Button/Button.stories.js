import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '.';

storiesOf('Button', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('with text', () => (
    <Button onPress={() => action('clicked-text')()}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={() => action('clicked-emoji')()}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
