export function removeTrailingSlash(url: string) {
  const urlObj = new URL(url)

  urlObj.pathname =
    urlObj.pathname.endsWith('/') && urlObj.pathname.length > 1
      ? urlObj.pathname.slice(0, -1)
      : urlObj.pathname
  return urlObj.toString()
}

export function shortenAddress(address?: string, num = 4) {
  if (!address) return undefined
  return (
    address.substring(0, num) +
    '...' +
    address.substring(address.length - num, address.length)
  )
}

export function formatNumber(value: number, maximumFractionDigits = 3) {
  return value.toLocaleString('en-US', {
    maximumFractionDigits,
  })
}
