import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Testimonial() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex justify-start">
        <Carousel
          className="w-full max-w-6xl"
          controls
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
              },
            },
          ]}
          slidesToScroll={1}
          slidesToShow={3}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <div className="bg-gray-950 rounded-lg border border-gray-800 p-6 mx-2">
                <div className="flex flex-col items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg font-medium">
                      "The customer service I received was exceptional. The support team went above and beyond to
                      address my concerns."
                    </p>
                    <div className="mt-4">
                      <p className="font-medium">Jules Winnfield</p>
                      <p className="text-gray-400">CEO, Acme Inc</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="bg-gray-950 rounded-lg border border-gray-800 p-6 mx-2">
                <div className="flex flex-col items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg font-medium">
                      "The platform is incredibly user-friendly and has helped us streamline our workflow. Highly
                      recommended!"
                    </p>
                    <div className="mt-4">
                      <p className="font-medium">Leia Organa</p>
                      <p className="text-gray-400">Product Manager, Rebel Alliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="bg-gray-950 rounded-lg border border-gray-800 p-6 mx-2">
                <div className="flex flex-col items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>HF</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg font-medium">
                      "I was hesitant at first, but the onboarding process was a breeze. Now, I can't imagine running my
                      business without this platform."
                    </p>
                    <div className="mt-4">
                      <p className="font-medium">Han Solo</p>
                      <p className="text-gray-400">Founder, Millennium Falcon Inc</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="bg-gray-950 rounded-lg border border-gray-800 p-6 mx-2">
                <div className="flex flex-col items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg font-medium">
                      "I was hesitant at first, but the onboarding process was a breeze. Now, I can't imagine running my
                      business without this platform."
                    </p>
                    <div className="mt-4">
                      <p className="font-medium">Darth Vader</p>
                      <p className="text-gray-400">Founder, Galactic Empire</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="bg-gray-950 rounded-lg border border-gray-800 p-6 mx-2">
                <div className="flex flex-col items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>LC</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg font-medium">
                      "I was hesitant at first, but the onboarding process was a breeze. Now, I can't imagine running my
                      business without this platform."
                    </p>
                    <div className="mt-4">
                      <p className="font-medium">Luke Skywalker</p>
                      <p className="text-gray-400">Jedi Knight, Rebel Alliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="bg-gray-950 rounded-lg border border-gray-800 p-6 mx-2">
                <div className="flex flex-col items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>RD</AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <p className="text-lg font-medium">
                      "I was hesitant at first, but the onboarding process was a breeze. Now, I can't imagine running my
                      business without this platform."
                    </p>
                    <div className="mt-4">
                      <p className="font-medium">Rey Dakar</p>
                      <p className="text-gray-400">Scavenger, Resistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 transition-colors" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 transition-colors" />
        </Carousel>
      </div>
    </div>
  )
}