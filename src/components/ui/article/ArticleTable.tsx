import { ReactNode } from 'react'

interface ArticleTableColumn {
  header: string
  key: string
}

interface ArticleTableRow {
  [key: string]: ReactNode
}

interface ArticleTableProps {
  columns: ArticleTableColumn[]
  rows: ArticleTableRow[]
}

/**
 * Article table component
 * Used for comparison tables within blog articles
 * Styled with borders and proper spacing
 */
export default function ArticleTable({ columns, rows }: ArticleTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-base">
        <thead>
          <tr className="border-b border-[#e5e5e5]">
            {columns.map((column, index) => (
              <th 
                key={column.key} 
                className={`text-left py-4 ${index < columns.length - 1 ? 'pr-4' : ''} font-semibold text-[#0a0a0a]`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={rowIndex < rows.length - 1 ? 'border-b border-[#e5e5e5]' : ''}
            >
              {columns.map((column, colIndex) => {
                const cellValue = row[column.key]
                // Check if value is muted (starts with a special marker or is a dash)
                const isMuted = typeof cellValue === 'string' && (cellValue === '—' || cellValue.startsWith('~'))
                const displayValue = typeof cellValue === 'string' && cellValue.startsWith('~') 
                  ? cellValue.slice(1) 
                  : cellValue
                
                return (
                  <td 
                    key={column.key} 
                    className={`py-4 ${colIndex < columns.length - 1 ? 'pr-4' : ''} ${isMuted ? 'text-[#737373]' : 'text-[#0a0a0a]'}`}
                  >
                    {displayValue}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export type { ArticleTableColumn, ArticleTableRow, ArticleTableProps }

