import Image from "next/image";

const LoadingComponent = () => {
    return (
        <div class="animate-pulse flex items-center justify-center h-72 w-full text-white bg-black opacity-70 rounded-full text-3xl">
            {/* <Image unoptimized={true} src={'/public/vercel.svg'} alt="Loader" width={50} height={50} /> */}
            Loading...
        </div>
    )
}

export default LoadingComponent;