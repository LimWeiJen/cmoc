'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_KEY
})

export function CoursePlatform() {
  useEffect(() => {
    ; (
      async () => {
        // fetch the project list from Notion API
        const res = await notion.blocks.children.list({ block_id: process.env.NOTION_DATABASE || '' })
        console.log(res);
      }
    )()
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-white" />
          <span className="ml-2 text-lg font-bold text-white">M<span className="text-[#00ADB5]">C</span>O<span className="text-[#00ADB5]">C</span></span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 text-white">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Matriculation <span className="text-[#00ADB5]">College</span> Online <span className="text-[#00ADB5]">Courses</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Explore <span className="font-bold text-[#00ADB5]">free</span> and paid online courses aligned with Malaysia's Matriculation College Syllabus
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Search courses" type="text" />
                  <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src="/placeholder.svg?height=192&width=384"
                      alt="Web Development"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle>Introduction to Web Development</CardTitle>
                  <CardDescription>Learn the basics of HTML, CSS, and JavaScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">10 weeks • Beginner</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src="/placeholder.svg?height=192&width=384"
                      alt="Digital Marketing"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle>Digital Marketing Fundamentals</CardTitle>
                  <CardDescription>Master the art of online marketing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">8 weeks • Intermediate</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src="/placeholder.svg?height=192&width=384"
                      alt="Graphic Design"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle>Graphic Design Essentials</CardTitle>
                  <CardDescription>Create stunning visuals for print and digital media</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">12 weeks • All Levels</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 MCOC. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
