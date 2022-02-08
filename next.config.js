module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/rulebook/introduction/index',
                permanent: true,
            },
        ]
    },
}
