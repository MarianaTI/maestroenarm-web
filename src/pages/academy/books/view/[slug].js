import { useRouter } from 'next/router'

export default function View() {
    const router = useRouter()
    return <p>Book: {router.query.slug}</p>
}