'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import CourseEmbed from "./course-embed"

export function CoursePlatform() {
  const [courses, setcourses] = useState<Array<any>>([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    ; (
      async () => {
        // fetch the project list from Google Sheet
        const res = await fetch("https://opensheet.elk.sh/1_g0JRptuX_GNou1e3hCotI0araK2udoJlO_y0KrPCTk/Sheet1")
        setcourses(await res.json());
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
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Search courses" type="text" onChange={(e) => setsearch(e.target.value)} />
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">All Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {
                search === '' ?
                  courses.map((course, id) => (
                    <CourseEmbed key={id} title={course.title} description={course.description} shortDescription={course.shortDescription} imgURL={course.imgURL} courseURL={course.courseURL} id={id.toString()} courseCategory={course.courseCategory} courseDuration={course.courseDuration} />
                  )) :
                  courses.filter((course) => course.title.toLowerCase().includes(search.toLowerCase())).map((course, id) => (
                    <CourseEmbed key={id} title={course.title} description={course.description} shortDescription={course.shortDescription} imgURL={course.imgURL} courseURL={course.courseURL} id={id.toString()} courseCategory={course.courseCategory} courseDuration={course.courseDuration} />
                  ))
              }
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 MCOC. All rights reserved.</p>
      </footer>
    </div>
  )
}
