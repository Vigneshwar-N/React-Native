import {View, Text, Button, TextInput} from 'react-native';
import React, {useReducer, useState} from 'react';

export default function UseReducer() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'text':
        return {...state, name: action.Setname};
      default:
        return state;
    }
    //return {count: state.count + 1};
  }
  const [state, dispatch] = useReducer(reducer, {count: 0, name: ''});
  console.log(state);

  //const [count, setCount] = useState(0);

  function increment() {
    dispatch({type: 'increment'});
  }
  function decrement() {
    dispatch({type: 'decrement'});
  }
  function setname(text) {
    dispatch({type: 'text', Setname: text});
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button title="+" style={{fontSize: 30}} onPress={increment} />
        <Text style={{fontSize: 30}}>{state.count}</Text>
        <Button
          disabled={state.count === 0}
          title="-"
          style={{fontSize: 30}}
          onPress={decrement}
        />
      </View>
      <TextInput
        placeholder="Enter name"
        value={state.name}
        onChangeText={text => setname(text)}
      />
    </View>
  );
}

// Let's break down this line step by step to make it clearer:

// ### `useReducer(reducer, {count: 0})`
// - **`useReducer`** is a React hook that helps manage more complex state logic than `useState`. It takes two arguments:
//   1. **`reducer`**: A function that decides how the state should change based on the action you send to it.
//   2. **`{count: 0}`**: The initial state, which in this case is an object with a property `count` set to `0`.

// ### `const [state, dispatch]`
// - When you call `useReducer`, it returns an array with two elements:
//   1. **`state`**: The current state, which is the result of the reducer's latest update. Initially, it will be the same as the initial state (`{count: 0}`).
//   2. **`dispatch`**: A function that you call to send an action to the reducer. When you call `dispatch`, it triggers the reducer function to update the state based on the action you provided.

// ### How It Works Together:
// - **`state`**: Think of this as a snapshot of your current state. It could change over time as different actions are dispatched, but `state` will always reflect the latest state after the most recent action.
//   - Initially, `state` is `{count: 0}`, so `state.count` is `0`.
//   - If you dispatch an `increment` action, the reducer will return `{count: 1}`, and now `state.count` will be `1`.

// - **`dispatch`**: This is how you tell the reducer to update the state. You do this by calling `dispatch` with an action object (like `{ type: 'increment' }`). The action tells the reducer what kind of update to perform, and the reducer returns a new state based on that action.

// ### Example:
// - When the `increment` button is pressed, `dispatch({ type: 'increment' })` is called.
// - The `reducer` function receives this action, checks the `type`, and returns a new state with `count` increased by 1.
// - React then updates the component with the new state, so the UI reflects the updated count.

// In summary, `useReducer` manages the state (`state`) and provides a way to update it (`dispatch`). The state starts with an initial value (`{count: 0}`), and the `dispatch` function is used to send actions that tell the `reducer` how to update the state.
