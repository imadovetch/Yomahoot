import Image from "next/image"

export default function Introduction() {

  return (

    <div className="flex flex-col-reverse md:flex-row gap-4 h-screen items-center justify-center">

      {/* introduction */}
      <div className="text-xl font-bold max-w-xl mx-auto animate-toright">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
        malesuada arcu. Nullam tristique libero nec euismod. Nunc sed ultricies
        justo. Morbi vestibulum ipsum at ante euismod.
      </div>

      {/* shopping image */}
      <div className="center animate-toleft">
        <Image
          className="w-full h-full"
          src="/gameinterface.svg"
          width="400"
          height="400"
          alt="shoppigintroduction"
        />
      </div>

    </div>

  )

}
