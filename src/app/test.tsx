import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Dot, {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselSize() {

  const options = {
    "1":{
      style: "basis-1/5",
      pageSize: 5,
      length: 2,
      restCount: 1 //total - pages = page size
    },
    "2":{
      style: "basis-1/4",
      pageSize: 4,
      length: 2,
      restCount : 2 //total - pagesize < page size
    },
    "3":{
      style: "basis-1/3",
      pageSize: 3,
      length: 2,
      restCount: 3 //total - pagesize = page size
    },
    "4":{
      style: "",
      pageSize: 1,
      length: 6,
      restCount: 5 //total - pages > page size
    },
    "5":{
      style: "",
      pageSize: 1,
      length: 2,
      restCount: 1 //total - pages > page size
    },
    "6":{
      style: "basis-1/2",
      pageSize: 2,
      length: 3,
      restCount: 4 //total - pages > page size
    }
  }

  const value = options[1]

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className={value.style}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Dot length={value.length} pageSize={value.pageSize} restCount={value.restCount}/>
    </Carousel>
  )
}
