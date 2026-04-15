import React from 'react'
import { blogData } from "@/data/blogs";
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const heroData = {
    title: "Blogs",
    description: "Stay informed with the latest news, trends, and expert opinions from the world of recruitment and business.",
    bgImage: "/heroImages/blog.png"
  }

  return (
    <>
      <HeroSectionForAll {...heroData} />

      <section className='max-w-7xl mx-auto p-5'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold uppercase mb-5 text-black'>LATEST BLOG ARTICALS</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
          {blogData.map((blog) => (
            <div key={blog.id} className='w-full bg-white border border-gray-300 rounded-2xl flex flex-col hover:shadow-xl/20  duration-300 hover:-translate-y-1'>

              <Image
                src={blog.image}
                alt={blog.title}
                width={450}
                height={550}
                className='w-full rounded-t-xl'
              />

              <div className='p-5 flex flex-col flex-1'>

                <div className='w-full'>
                  <h3 className='text-sm md:text-lg pb-2 font-semibold'>{blog.title}</h3>
                  <p className='text-xs pb-2 text-slate-500'>{blog.date} .5 Mins Read</p>
                  <p className='text-xs md:text-sm pb-2'>{blog.description}</p>
                </div>

                <Link href={`/blogs/${blog.id}`} className='mt-auto'>
                  <button className='bg-white border border-slate-950 text-slate-900 text-xs md:text-sm p-2 md:p-3 rounded-full font-semibold mt-5 cursor-pointer hover:bg-slate-900 hover:text-white'>
                    Read More
                  </button>
                </Link>

              </div>
            </div>

          ))}
        </div>

      </section>
    </>
  )
}

export default Page