import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const CourseEmbed = ({ title, shortDescription, description, imgURL, courseURL, id, courseCategory, courseDuration }: { title: string, shortDescription: string, description: string, imgURL: string, courseURL: string, id: string, courseCategory: string, courseDuration: string }) => {
  return (
    <Card>
      <CardHeader>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={imgURL}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{courseDuration} • {courseCategory}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => window.location.href = `/${id}`} className="w-full">More Info</Button>
      </CardFooter>
    </Card>
  )
}

export default CourseEmbed
