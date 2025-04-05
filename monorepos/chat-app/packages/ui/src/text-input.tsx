interface TextInputProps {
  placeholder: string;
  onChange: (value: any) => void;
}

export function TextInput({ placeholder, onChange }: TextInputProps) {
  return (
    <input
      type="text"
      style={{ padding: 10, margin: 10, borderColor: "#fff", borderWidth: 1 }}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}
