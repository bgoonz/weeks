import * as React from "react";
import { ReactComponent as ArrowDown } from "../../assets/chevron.svg";

import Select, { components } from "react-select";

import dropdownstyles from "./dropdownstyles";
import styles from "./styles.module.css";

export interface IDropdownProps {
  options: IDropDownOptionType[];
  disabled?: boolean;
  defaultValue?: IDropDownOptionType;
  handleChange?: (e: any) => void;
  value?: IDropDownOptionType | undefined;
  ariaLabel: string;
  openDropdownUpwards?: boolean;
}

const DEFAULT_VALUE = {
  value: "Select...",
  label: "Select...",
};

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <ArrowDown className={styles.icon} />
      </components.DropdownIndicator>
    )
  );
};

const Dropdown = ({
  options,
  defaultValue,
  handleChange,
  value,
  disabled,
  ariaLabel,
  openDropdownUpwards,
}: IDropdownProps) => {
  return (
    <Select
      aria-label={ariaLabel}
      components={{ DropdownIndicator }}
      value={value}
      onChange={handleChange}
      styles={dropdownstyles}
      isSearchable={true}
      defaultValue={defaultValue || DEFAULT_VALUE}
      options={options}
      menuPlacement={openDropdownUpwards ? "top" : "auto"}
      isDisabled={disabled}
    />
  );
};

export default Dropdown;
