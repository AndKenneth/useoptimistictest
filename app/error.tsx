'use client'
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div>
      <div>oh no</div>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}
