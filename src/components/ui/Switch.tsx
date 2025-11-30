import { FOCUS_STYLES } from './focusStyles'

interface SwitchProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      onMouseDown={(e) => e.preventDefault()}
      className={`box-border flex gap-3 items-center justify-between p-0 relative shrink-0 w-full cursor-pointer rounded-md ${FOCUS_STYLES}`}
    >
      <p className="font-medium leading-none relative shrink-0 text-[#0a0a0a] text-sm whitespace-pre-wrap text-left">
        {label}
      </p>
      <div
        className={`border-2 border-transparent border-solid box-border flex items-center relative rounded-full shrink-0 w-9 h-5 px-[1px] py-[2px] transition-colors ${
          checked
            ? 'bg-[#171717] justify-end'
            : 'bg-[#e5e5e5]'
        }`}
      >
        <div className="bg-white rounded-full shadow-lg shrink-0 size-4" />
      </div>
    </button>
  )
}

