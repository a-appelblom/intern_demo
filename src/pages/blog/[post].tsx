import { Box, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { posts } from "../../posts";

type Props = {
  post: {
    id: number;
    title: string;
    body: string;
  };
};

export default function Post({ post }: Props) {
  const { id, title, body } = post;
  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <Text>{body}</Text>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts.map((post) => ({
    params: {
      post: post.id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (context) => {
  console.log(context.params);

  const post = posts.find(
    (post) => post.id.toString() === context.params?.post
  );
  return {
    props: {
      post,
    },
  };
};
