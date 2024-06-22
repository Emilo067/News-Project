export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    }
    return date.toLocaleDateString('en-US', options)
}