import { ChangeEvent, ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  id: string;
  placeholder?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ id, type, onChange, placeholder }: InputProps) {
  return (
    <div className="w-full">
      <input
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-2 px-4 bg-zinc-800 outline-none border-none rounded-md text-zinc-400"
      />
    </div>
  );
}
