export function InputTextGroup({ value, label, name, onChange, type, require, labelClass }) {
  return (
    <label className={`flex flex-col w-8/12 ${labelClass}`}>
      <span className="text-gray-200 font-bold mb-1">{label}</span>
      <input
        className={`rounded bg-gray-200 p-1 outline-none focus:bg-gray-300 `}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={require}
      />
    </label>
  )
}

InputTextGroup.defaultProps = {
  value: '',
  label: '',
  name: '',
  type: 'text',
  required: false,
  onChange: () => null,
}
