import React from "react";
interface propsType {
  errors: string |undefined;
  className: string |undefined;
}
const ErrorMsg = ({ errors, className }: propsType) => {
  return (
    <>
      <p className={className} style={{ color: "red" }}>
        {errors}
      </p>
    </>
  );
};

export default ErrorMsg;
