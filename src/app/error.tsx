'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2> error.tsx ➡️ Something went wrong!</h2>
      <button onClick={() => reset()}>Try again 🔄</button>
    </div>
  )
}
