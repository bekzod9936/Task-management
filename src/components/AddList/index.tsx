import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { Button } from "@mui/material";

const AddList = () => {
  const { register, control, getValues, handleSubmit } = useForm<any>();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  return (
    <form>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input />
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        onClick={() =>
          append({
            name: "bill",
          })
        }
      >
        + Add list
      </Button>
    </form>
  );
};

export default AddList;
