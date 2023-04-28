import { Box, Heading, Text } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

import { posts } from "../../posts";

type Props = {
  post: {
    id: number;
    title: string;
    body: string;
  };
};

export default function Post({ post }: Props) {
  console.log(post);
  const { id, title, body } = post;
  return (
    <Box>
      <Heading as="h1">{title}</Heading>
      <Text>{body}</Text>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  // Todo: change to fetch from api:route loading json file
  const paths = posts.map((post) => ({
    params: {
      post: post.id.toString(),
    },
  }));
  return { paths, fallback: "blocking" };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context.params);

//   const post = posts.find(
//     (post) => post.id.toString() === context.params?.post
//   );
//   console.log(post);
//   return {
//     props: {
//       post: post || { id: 10, title: "Not found", body: "Not found" },
//     },
//   };
// };
