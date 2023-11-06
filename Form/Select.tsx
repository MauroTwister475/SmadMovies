import { ChangeEvent, ComponentProps } from "react";

type SelectProps = ComponentProps<"select"> & {
  id: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({ id, onChange, label }: SelectProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <select
        id={id}
        onChange={onChange}
        className="w-full py-2 px-4 bg-zinc-800 outline-none border-none rounded-md text-zinc-400"
      >
        <option>Acção</option>
        <option>Arcada</option>
        <option>Aventura</option>
        <option>Battle Royale</option>
      </select>
    </div>
  );
}
