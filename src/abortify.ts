export default async function abortify<T>(fn: () => Promise<T>, signal?: AbortSignal): Promise<T> {
  // TODO improve this but be careful with memory leaks
  try {
    return await fn();
  } finally {
    signal?.throwIfAborted();
  }
}
