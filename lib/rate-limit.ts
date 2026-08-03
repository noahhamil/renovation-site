/**
 * In-memory rate limiter for API routes.
 * Uses a sliding window — IP gets `maxRequests` per `windowMs`.
 */
const store = new Map<string, { count: number; resetAt: number }>()

// Auto-cleanup stale entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key)
  }
}, 5 * 60 * 1000)

interface RateLimitOptions {
  maxRequests?: number  // default: 5
  windowMs?: number     // default: 60_000 (1 minute)
}

export function rateLimit(ip: string, opts: RateLimitOptions = {}): { ok: boolean; remaining: number } {
  const { maxRequests = 5, windowMs = 60_000 } = opts
  const now = Date.now()
  const key = ip

  const entry = store.get(key)

  if (!entry || entry.resetAt <= now) {
    // First request or window expired — start fresh
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: maxRequests - 1 }
  }

  entry.count++
  if (entry.count > maxRequests) {
    return { ok: false, remaining: 0 }
  }

  return { ok: true, remaining: maxRequests - entry.count }
}
