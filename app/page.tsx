import Image from "next/image";
import { fetchMetadata } from "frames.js/next";
import { getFrameFlattened, Frame, getFrameMessage } from "frames.js";
import {
  FrameButton,
  FrameContainer,
  FrameImage,
  NextServerPageProps,
  getPreviousFrame,
} from "frames.js/next/server";
import { BASE_URL } from "@/lib/constants";
export async function generateMetadata() {
  return {
    title: "Dad Joke",
    description: "Get a Dad Joke but as a Frame",
    metadataBase: new URL(""),
    openGraph: {
      title: "Dad Joke",
      description: "Get a Dad Joke but as a Frame",
      images: [
        {
          url: "https://utfs.io/f/987808fa-a577-4c28-9557-2c9349fa5125-nmm1ye.png",
          width: 800,
        },
      ],
    },
  };
}

export default async function Home({
  params,
  searchParams,
}: NextServerPageProps) {
  const previousFrame = getPreviousFrame(searchParams);

  if (previousFrame.postBody) {
    const frameMessage = await getFrameMessage(previousFrame.postBody, {
      fetchHubContext: false,
    });
  }
  return (
    <div className="p-4">
      DAD joke
      <FrameContainer
        pathname={`${BASE_URL}/api/swipe`}
        postUrl={`${BASE_URL}/api/swipe`}
        state={null}
        previousFrame={previousFrame}
      >
        <FrameImage
          src={`https://utfs.io/f/987808fa-a577-4c28-9557-2c9349fa5125-nmm1ye.png`}
        />
        <FrameButton>Stop the Dad joke</FrameButton>
      </FrameContainer>
    </div>
  );
}
