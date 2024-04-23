import { Box, Heading } from "@chakra-ui/react";
import VideoShowcase from "../components/VideoShowcase";

const Work = () => {
  const videos = [
    {
      title: "Video 1",
      description: "Description of Video 1",
      videoUrl: "https://example.com/video1.mp4",
    },
    {
      title: "Video 2",
      description: "Description of Video 2",
      videoUrl: "https://example.com/video2.mp4",
    },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      {videos.map((video, index) => (
        <VideoShowcase key={index} {...video} />
      ))}
    </Box>
  );
};

export default Work;
