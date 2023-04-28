import { NextApiRequest, NextApiResponse } from "next";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default async function formSubmission(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  if (!req.body) {
    res.status(400).json({ message: "No body provided" });
    return;
  }
  const data: FormData = JSON.parse(req.body);
  console.log(data);

  const { name, email, message } = data;

  const slackMessage = {
    channel: process.env.SLACK_CHANNEL_ID,
    // text: `${name} with email: ${email} sends message: ${message}`,

    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `You have a new message:\n*${name}*\n *Email: ${email}*`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: message,
        },
      },
    ],
  };

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
    },
    body: JSON.stringify(slackMessage),
  };

  try {
    const res = await fetch("https://slack.com/api/chat.postMessage", options);

    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.error(error);
  }
  res.status(200).json({ message: "Message sent" });
}
