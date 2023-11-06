import { ChangeEvent, ComponentProps } from "react";
import { Upload } from "lucide-react";

type InputFileProps = ComponentProps<"input"> & {
  id: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function InputFile({ id, type, onChange }: InputFileProps) {
  return (
    <div className="w-full">
      <label 
        htmlFor={id}
        className="flex items-center gap-2 justify-center py-2 w-full bg-emerald-800 cursor-pointer rounded-md text-white"  
      >
        <Upload className="w-10 text-white"/>
        Fazer Upload
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        className="teste w-full py-2 px-4 bg-zinc-800 outline-none border-none rounded-md text-zinc-400"
      />
    </div>
  );
}
