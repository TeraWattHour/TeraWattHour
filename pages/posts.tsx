import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import getTitle from "../lib/getTitle";
import Empty from "../components/Empty";

export const getStaticProps = () => {
  let files;
  try {
    files = fs.readdirSync(path.join("contents", "posts"));
  } catch (error) {
    return { props: { posts: [] } };
  }
  return {
    props: {
      posts: files.map((x) => {
        const filePath = path.join("contents", "posts", x);
        const file = fs.readFileSync(filePath, "utf-8");
        const { data: meta } = matter(file);
        const { birthtimeMs } = fs.statSync(filePath);
        return {
          name: x.replace(".mdx", ""),
          created_at: Math.round(birthtimeMs / 1000),
          ...meta,
        };
      }),
    },
  };
};

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>{getTitle("Posts")}</title>
      </Head>
      <SectionHeader>Posts</SectionHeader>
      <div className="block mt-6">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post, id) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 * id + 0.8 }}
                key={id}
              >
                <Link href={"/post/" + post.name} passHref>
                  <a>
                    <div className="w-full h-44 rounded-lg overflow-hidden relative">
                      <Image
                        layout="fill"
                        src={post.thumbnail}
                        alt=""
                        objectFit="cover"
                      />
                    </div>
                    <div className="px-3 pt-3 pb-2">
                      <div className="mb-2 flex flex-row items-center space-x-2 flex-wrap">
                        {post.categories.split(" ").map((x, i) => (
                          <span
                            className="uppercase text-xs rounded-md bg-blue-100 font-bold py-1 px-2"
                            key={i}
                          >
                            {x}
                          </span>
                        ))}
                      </div>
                      <div className="font-medium">{post.title}</div>
                      <div className="mt-1.5 text-sm">{post.excerpt}</div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}
