export function getErrorMessage(error) {
    return error?.response?.data?.detail
        || error?.response?.data?.message
        || error?.message
        || 'An unexpected error occurred'
}

export function isAuthError(error) {
    const status = error?.response?.status
    return status === 401 || status === 403
}
