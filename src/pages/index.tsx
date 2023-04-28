import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Namnet måste vara längre än 2 tecken" })
    .max(100, { message: "Namnet får inte vara längre än 100 tecken" }),
  email: z.string().email({ message: "Du måste ange en giltig email" }),
  message: z
    .string()
    .min(20, { message: "Meddelandet måste vara minst 20 tecken" })
    .max(1000, { message: "Meddelandet får inte vara längre än 1000 tecken" }),
});

type FormValues = z.infer<typeof schema>;

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const res = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(res);
    const resData = await res.json();
    console.log(resData);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" maxW="96" mx="auto">
        <Heading as="h1" w="full">
          Hello from demo
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Namn</FormLabel>
            <Input {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.message}>
            <FormLabel>Meddelande</FormLabel>
            <Textarea {...register("message")} />
            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit">Skicka</Button>
        </form>
      </Box>
    </>
  );
}
