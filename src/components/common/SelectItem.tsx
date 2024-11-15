interface SelectionItemProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function SelectItem({ label, selected, onClick }: SelectionItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-60 p-4 rounded-lg text-left transition-colors ${
        selected
          ? 'bg-white border-2 border-emerald-400'
          : 'bg-white border border-gray-200 hover:border-gray-300'
      }`}
    >
      {label}
    </button>
  );
}
