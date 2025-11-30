import { useState } from 'react'
import AccordionItem from './AccordionItem'

export interface AccordionItemData {
  id: string
  title: string
  description?: string
  desktopImage?: string
  image?: string
}

interface AccordionProps {
  items: AccordionItemData[]
  defaultOpenId?: string
  onItemChange?: (itemId: string | null) => void
  allowCloseAll?: boolean
  showMobileImages?: boolean
}

export default function Accordion({
  items,
  defaultOpenId,
  onItemChange,
  allowCloseAll = false,
  showMobileImages = false,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId || items[0]?.id || null
  )

  const handleToggle = (itemId: string) => {
    // If clicking on an already open section
    if (openId === itemId) {
      // If allowCloseAll is true, close it; otherwise do nothing
      if (allowCloseAll) {
        setOpenId(null)
        if (onItemChange) {
          onItemChange(null)
        }
      }
      return
    }

    // If clicking on a closed section, open it (this will automatically close the previous open one)
    const newOpenId = itemId
    setOpenId(newOpenId)
    if (onItemChange) {
      onItemChange(newOpenId)
    }
  }

  return (
    <div className="flex flex-col gap-0 items-start relative shrink-0 w-full">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <AccordionItem
            key={item.id}
            title={item.title}
            description={item.description}
            isOpen={isOpen}
            onToggle={() => handleToggle(item.id)}
          >
            {showMobileImages && (item.desktopImage || item.image) && (
              <div className="aspect-[240/240] relative rounded-2xl shrink-0 w-full mt-4">
                <img
                  src={item.desktopImage || item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-center object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            )}
          </AccordionItem>
        )
      })}
    </div>
  )
}

