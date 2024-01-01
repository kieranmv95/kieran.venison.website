"use client";

import { useEffect } from "react";
import md from "markdown-it";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import styles from "./style.module.css";

const MarkDownRenderer = ({ markdown }: { markdown: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div
      className={styles.blogPostContent}
      dangerouslySetInnerHTML={{ __html: md().render(markdown) }}
    />
  );
};

export default MarkDownRenderer;
