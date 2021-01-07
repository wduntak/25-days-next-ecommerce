import Link from 'next/link';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;