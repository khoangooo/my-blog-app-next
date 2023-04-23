import Image from "next/image";

interface IProps {
  src: string,
  title?: string | undefined,
  subtitle?: string | undefined
}

function BannerImage({src, title, subtitle}: IProps) {
  return (
    <div className="w-screen h-screen relative">
      <Image className="absolute w-full h-auto" src={src} alt="image description" fill />
      <div className="absolute inset-1/2 flex flex-col justify-center items-center">
        <h2 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Title</h2>
        <p className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Subtitle</p>
      </div>
    </div>
  )
}

export default BannerImage;