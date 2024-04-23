import { Box, Heading, Text } from "@chakra-ui/react";

const VideoShowcase = ({ title, description, videoUrl }) => {
  return (
    <Box mb={8}>
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <video controls width="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoShowcase;
