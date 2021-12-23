import { MDXRemote } from "next-mdx-remote";
import React from "react";
import * as Components from "@/components/rich";

export default function Markdown({ source }) {
  return (
    <div className="prose mt-8 block">
      <MDXRemote {...source} components={Components} />
    </div>
  );
}
