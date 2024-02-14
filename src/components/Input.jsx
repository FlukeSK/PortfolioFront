const defaultClasses =
  'w-full focus:outline-none px-3 py-1.5 border rounded-md focus:ring-2';

  // =============== < Function > =============== //
export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  errorMessage
}) {
  const extendedClasses = errorMessage
    ? 'border-red-500 focus:ring-red-300'
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300';

// =============== < Return > =============== //
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`${defaultClasses} ${extendedClasses}`}
      />
      {errorMessage ? (
        <small className="text-red-500">{errorMessage}</small>
      ) : null}
    </>
  );
}