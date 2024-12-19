import React from "react";

type UpdateEmployeeProps = {
  isUpdating: boolean;
};

const UpdateEmployee: React.FC<UpdateEmployeeProps> = ({ isUpdating }) => {
  return (
    <div>
      <h1>{isUpdating ? "Update Employee" : "Add Employee"}</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Role:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;