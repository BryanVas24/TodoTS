// el as const hace que esto sea solo lectura
export const TODO_FILTERS = {
  All: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  PARTIAL: 'partial'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.All]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.All}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const
