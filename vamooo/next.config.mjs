/** @type {import('next').NextConfig} */
const nextConfig = {
    //recordar estructura
    images: {
        remotePatterns:[
            {
                //El host de donde va a buscar
                hostname: 'raw.githubusercontent.com',
            }
        ],
    }
};

export default nextConfig;
