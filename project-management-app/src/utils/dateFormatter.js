export function dateFormatter(date) {
    return new Date(date).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}