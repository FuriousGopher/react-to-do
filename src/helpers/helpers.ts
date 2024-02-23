export const getPriorityColorClass = (priority: string) => {
  switch (priority) {
    case 'Low':
      return 'low'
    case 'Medium':
      return 'medium'
    case 'High':
      return 'high'
    default:
      return ''
  }
}
