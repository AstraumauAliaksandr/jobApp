import { Text, Flex, Image } from "@mantine/core";
import img from "../../static/Logo.png";

const Logo = () => {
  return (
    <Flex gap={12} align={"center"} h={36}>
      <Image width={30} height={30} fit="contain" src={img} />
      <Text
        className="title"
        fw={600}
        fz={24}
        sx={{
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          alignItems: "center",
        }}
      >
        Jobored
      </Text>
    </Flex>
  );
};

export default Logo;
