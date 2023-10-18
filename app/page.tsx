import Image from 'next/image'
import { Thread } from './test-opti'

export default function Home() {
  return <Thread messages={[{ message: 'Hello' }, { message: 'World' }]} />
}
