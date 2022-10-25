export const formatWorkDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric'
})