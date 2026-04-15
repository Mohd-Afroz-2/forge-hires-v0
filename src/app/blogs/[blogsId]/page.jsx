import { blogData } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";


export default async function BlogDetails({ params }) {
  // 1. MUST match the folder name exactly.
  // If folder is [blogsId], use blogsId. If folder is [id], use id.
  const { blogsId } = await params;

  // 2. Log this to your terminal to see what is actually being passed
  console.log("Current ID from URL:", blogsId);

  const blog = blogData.find((b) => b.id.toString() === blogsId);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className=" text-lg md:text-xl lg:text-2xl font-bold">Blog Not Found! </h1>
        <Link href="/blogs" className="text-blue-500 underline mt-4">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">{blog.title}</h1>

      <div className="flex flex-wrap gap-4 items-center  mb-8 text-slate-600">
        <p className="font-bold text-sm md:text-base text-black">{blog.author}</p>
        <p className=" text-xs md:text-sm">
          {blog.role} • {blog.date} • {blog.read_time}
        </p>
      </div>

      {/* FIX: Container for the 'fill' image */}
      <div className="relative w-full h-[300px] md:h-[500px] mb-10">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <div
          className="text-xs text-justify md:text-base lg:text-lg leading-relaxed whitespace-pre-line text-slate-800"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="mt-16 border-t pt-8">
        <Link
          href="/blogs"
          className="text-gray-500 font-bold hover:text-gray-700 transition-colors"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </main>
  );
}
