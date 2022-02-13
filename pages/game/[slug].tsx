import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Markdown from "@/components/Markdown";
import Head from "next/head";
import getTitle from "../../lib/getTitle";
import PostHeader from "../../components/PostHeader";

export const getStaticPaths: GetStaticPaths = () => {
  let paths;
  try {
    paths = fs.readdirSync(path.join("contents", "games"));
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
  return {
    paths: paths.map((x) => ({
      params: { slug: x.replace(".mdx", "") },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug + ".mdx";
  const filePath = path.join("contents", "games", slug);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data: meta, content } = matter(file);
  const { birthtimeMs } = fs.statSync(filePath);
  const source = await serialize(content);

  return {
    props: {
      meta: {
        created_at: Math.round(birthtimeMs / 1000),
        ...meta,
      },
      content,
      source,
    },
  };
};

export default function Post({ meta, source, content }) {
  return (
    <>
      <Head>
        <title>{getTitle(meta.title)}</title>
      </Head>
      <PostHeader>{meta.title}</PostHeader>
      <div className="h-72 w-full relative mb-4 mt-6">
        <Image
          className="rounded-lg"
          src={meta.thumbnail}
          alt={meta.title}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <Markdown source={source} />
    </>
  );
}
