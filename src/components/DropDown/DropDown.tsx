import {StyleSheet} from 'react-native';
import React, {FC, useMemo} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../utils/constants/colors';
import {safearea} from '../../utils/constants/canstants';
import {FontAwesome} from '@expo/vector-icons';

interface IDropDownProps {
  data: string[];
}

const DropDown: FC<IDropDownProps> = ({data}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        dropdown1BtnStyle: {
          width: '100%',
          height: 50,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: colors.GREY,
          marginTop: 15,
          backgroundColor: colors.WHITE,
        },
        dropdown1BtnTxtStyle: {
          color: colors.GREY,
          textAlign: 'left',
          padding: 10,
        },
        dropdown1DropdownStyle: {
          backgroundColor: colors.WHITE,
          marginTop: 5,
          borderRadius: 5,
        },
        dropdown1RowStyle: {borderBottomColor: '#C5C5C5'},
        dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
      }),
    [safearea],
  );

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultValueByIndex={0}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={isOpened => {
        return (
          <FontAwesome
            name={isOpened ? 'chevron-up' : 'chevron-down'}
            color={'#444'}
            size={18}
          />
        );
      }}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
    />
  );
};

export default DropDown;
