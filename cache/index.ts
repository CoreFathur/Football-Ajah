export interface CacheProvider {
  /** Get a value from cache by key. Returns null if not found. */
  get<T>(key: string): Promise<T | null>
  /** Set a value in cache with optional ttl in seconds. */
  set<T>(key: string, value: T, ttlSeconds?: number): Promise<void>
  /** Delete a cache key. */
  del(key: string): Promise<void>
}
