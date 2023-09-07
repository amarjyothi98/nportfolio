import Image from "next/image";

export default function Intro () {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="">
                    <Image 
                        src={"https://source.unsplash.com/3tYZjGSBwbk"} 
                        alt="profile image" 
                        width='192' 
                        height='192' 
                        quality={"95"} 
                        priority={true }
                    />
                </div>
            </div>
        </section>
    )
}