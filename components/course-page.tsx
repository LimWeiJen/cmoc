'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export function CoursePageComponent() {
  const { id } = useParams();
  const [course, setcourse] = useState<any>({});

  useEffect(() => {
    ; (
      async () => {
        // fetch the project list from Google Sheet
        const res = await fetch("https://opensheet.elk.sh/1_g0JRptuX_GNou1e3hCotI0araK2udoJlO_y0KrPCTk/Sheet1")
        setcourse((await res.json())[Number(id)]);
      }
    )()
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <BookOpen className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">M<span className="text-[#00ADB5]">C</span>O<span className="text-[#00ADB5]">C</span></span>
          </Link>
          <div className="flex gap-2">
            <Button onClick={() => window.open(course.preview, "_blank")}>Watch Free Preview</Button>
            <Button onClick={() => window.open(course.courseURL, "_blank")} className="bg-[#00ADB5] text-white">Enroll Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative w-full h-64 lg:h-96">
                <Image
                  src={course.imgURL}
                  alt="Course Cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-xl text-muted-foreground">
                {course.shortDescription}
              </p>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{course.courseDuration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{course.courseCategory}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <span>English</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What You Will Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.whatYouWillGet &&
                      (course.whatYouWillGet.split(',')).map((e: any, i: number) => (
                        <li className="flex items-center space-x-2" key={i}>
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{e}</span>
                        </li>
                      ))
                    }
                  </ul>
                </CardContent>
              </Card>
              <Button onClick={() => window.open(course.preview, "_blank")} className="w-full text-lg py-6">Watch Free Preview</Button>
              <Button onClick={() => window.open(course.courseURL, "_blank")} className="w-full text-lg py-6 bg-[#00ADB5] text-white">Enroll Now for {course.price}</Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 MCOC. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
