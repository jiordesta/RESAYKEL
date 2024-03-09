import React from "react";
import Creatable from "react-select/creatable";
import Select from "react-select";

export const CreateSelect = ({ options, style }) => {
  return <Creatable isClearable options={options} className={`${style}`} />;
};

export const SelectCategory = ({ options, style }) => {
  return (
    <Select
      className={`${style}`}
      defaultValue={{ key: "any", value: "any" }}
      isClearable={true}
      isSearchable={true}
      options={options}
    />
  );
};
