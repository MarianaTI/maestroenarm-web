import { useRouter } from 'next/router'

export default function View() {
    const router = useRouter()
    return <p>Audiobook: {router.query.slug}</p>
}