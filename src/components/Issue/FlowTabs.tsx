import { useTranslation } from 'react-i18next'
import { FLOW_MODES } from '../../constants'
import type { FlowMode } from '../../constants/flows'
import { FOCUS_STYLES } from '../ui/focusStyles'

interface FlowTabsProps {
  activeTab: FlowMode
  onTabChange: (tab: FlowMode) => void
}

export default function FlowTabs({ activeTab, onTabChange }: FlowTabsProps) {
  const { t } = useTranslation('government')
  
  return (
    <div className="bg-[#e5e5e5] flex items-center w-full max-w-[400px] overflow-hidden p-[3px] rounded-full gap-[4px]">
      <button
        onClick={() => onTabChange(FLOW_MODES.ISSUE)}
        className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-full border border-[rgba(255,255,255,0)] transition-all ${FOCUS_STYLES} ${
          activeTab === FLOW_MODES.ISSUE
            ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
            : 'bg-transparent hover:bg-black/5'
        }`}
      >
        <p
          className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${
            activeTab !== FLOW_MODES.ISSUE ? 'opacity-75' : ''
          }`}
        >
          {t('playground.tabs.issue')}
        </p>
      </button>
      <button
        onClick={() => onTabChange(FLOW_MODES.VERIFY)}
        className={`flex-[1_0_0] inline-flex items-center justify-center py-[5px] px-[8px] gap-[8px] rounded-full border border-[rgba(255,255,255,0)] transition-all ${FOCUS_STYLES} ${
          activeTab === FLOW_MODES.VERIFY
            ? 'bg-white shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)]'
            : 'bg-transparent hover:bg-black/5'
        }`}
      >
        <p
          className={`font-medium leading-5 text-sm text-[#0a0a0a] text-center ${
            activeTab !== FLOW_MODES.VERIFY ? 'opacity-75' : ''
          }`}
        >
          {t('playground.tabs.verify')}
        </p>
      </button>
    </div>
  )
}

