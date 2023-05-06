import { PropsWithChildren, ReactNode } from "react";

interface IProps {
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: () => void;
  props?: PropsWithChildren;
}

function Checkbox({ label = "", name = "default_checkbox", checked = false, onChange = () => { }, ...props }: IProps) {
  return (
    <label htmlFor="checkbox" className="flex gap-4">
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        name={name}
        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm hidden"
        onChange={onChange}
        {...props}
      />

      {!!label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  )
}

export default Checkbox;