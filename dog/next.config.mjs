/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //uso de remotte patterns para la lista
        remotePatterns: [
            {
                //hostname es el nombre del dominio
                hostname: 'images.dog.ceo',
            }
        ]
    }
};

export default nextConfig;
