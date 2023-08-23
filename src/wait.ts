export default function wait(ms: number, abortSignal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms);
    abortSignal?.addEventListener('abort', () => {
      clearTimeout(timeout);
      reject(abortSignal.reason);
    });
  });
}
