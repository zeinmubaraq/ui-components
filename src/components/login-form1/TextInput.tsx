interface Props {
  placeholder: string;
}
export default function TextInput({ placeholder }: Props) {
  return (
    <input
      type="text"
      className="block w-full rounded-md border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600"
      placeholder={placeholder}
      aria-label={placeholder}
      aria-required={true}
    />
  );
}
