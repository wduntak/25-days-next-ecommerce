import { useRouter } from 'next/router';

const Name = () => {
    const router = useRouter()
    const { name } = router.query;
    return (
        <>
            <h1>Welcome {name}!</h1>
            <p>This is the dynamic route page</p>
        </>
    )
}

export default Name;