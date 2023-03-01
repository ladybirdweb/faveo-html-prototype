import { View, Text } from 'react-native';
import React from 'react';
import { Select } from "native-base";

const SelectComponent = () => {
    const [service, setService] = React.useState("");
  return (
    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose One" placeholder="Select" _selectedItem={{
        bg: "teal.600",
        // endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Item name" value="item1" />
          {/* <Select.Item label="Web Development" value="web" /> */}
          {/* <Select.Item label="Cross Platform Development" value="cross" /> */}
          {/* <Select.Item label="UI Designing" value="ui" /> */}
          {/* <Select.Item label="Backend Development" value="backend" /> */}
        </Select>
  )
}

export default SelectComponent;