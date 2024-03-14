import React from "react";
import Creatable from "react-select/creatable";
import Select from "react-select";

export const CreateSelect = ({ options, style }) => {
  return <Creatable isClearable options={options} className={`${style}`} />;
};

export const SelectCategory = ({
  options,
  style,
  navigate,
  name,
  category,
}) => {
  return (
    <Select
      placeholder="Category"
      className={`${style}`}
      isClearable={true}
      isSearchable={true}
      options={options}
      value={options.find((cat) => cat.value === category)}
      onChange={(e) => {
        navigate(
          `/products/search/${e.value}/${
            name.replace(/\s+/g, "") === "" ? "all" : name
          }`
        );
      }}
    />
  );
};
