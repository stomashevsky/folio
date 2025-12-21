import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Card from './Card'
import { issueCardConfigs, verifyCardConfigs } from '../configs/cards'
import FlowTabs from './Issue/FlowTabs'
import { getModalComponent, type DocumentType } from '../configs/modals'
import type { FlowMode as ModalMode } from '../constants/flows'
import { SectionHeader } from './ui'
import { useModalState } from '../hooks/useModalState'
import { DOCUMENT_TYPE_VALUES, FLOW_MODES } from '../constants'

export default function Issue() {
  const { t } = useTranslation('government')
  const [activeTab, setActiveTab] = useState<ModalMode>(FLOW_MODES.ISSUE)

  const documentTypes: DocumentType[] = DOCUMENT_TYPE_VALUES
  const { openModal, closeModal, isOpen } = useModalState<DocumentType>()
  
  const currentCardConfigs = useMemo(
    () => (activeTab === FLOW_MODES.ISSUE ? issueCardConfigs : verifyCardConfigs),
    [activeTab]
  )

  const flowKey = activeTab === FLOW_MODES.ISSUE ? 'issue' : 'verify'

  const cardClickHandlers = useMemo(() => {
    const handlers: Partial<Record<DocumentType, () => void>> = {}
    currentCardConfigs.forEach((card) => {
      handlers[card.documentType] = () => openModal(card.documentType)
    })
    return handlers
  }, [currentCardConfigs, openModal])

  const openModalsList = useMemo(() => {
    return documentTypes
      .filter((type) => isOpen(type))
      .map((type) => ({
        type,
        mode: activeTab,
        Component: getModalComponent(type, activeTab),
      }))
  }, [documentTypes, isOpen, activeTab])

  return (
    <>
      <div className="flex flex-col gap-10 items-center w-full">
        <SectionHeader
          title={t('playground.issue.title')}
          description={t('playground.issue.description')}
        />

        <FlowTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {currentCardConfigs.map((card) => (
              <Card
                key={card.documentType}
                icon={card.icon}
                badge={card.badgeKey ? t(`playground.badges.${card.badgeKey}`) : undefined}
                badgeVariant={card.badgeVariant}
                title={t(`playground.documents.${card.documentKey}`)}
                description={t(`playground.cards.${flowKey}.${card.documentKey}`)}
                onClick={cardClickHandlers[card.documentType]}
              />
            ))}
          </div>
        </div>

      {/* Dynamic modal rendering via mapping */}
      {openModalsList.map(({ type, Component }) => (
        <Component
          key={`${type}-${activeTab}`}
          isOpen={isOpen(type)}
          onClose={() => closeModal(type)}
        />
      ))}
    </>
  )
}

