import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { formatKey, truncate } from "../../../../utils/formatting";

interface UserDetailsProps {
  data: Record<string, any>;
}

const MAX_LENGTH = 50;

const UserDetails: React.FC<UserDetailsProps> = ({ data }) => {
  if (typeof data !== "object" || data === null) return null;

  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <Box key={key} my={2}>
          {typeof value === "object" && value !== null ? (
            <UserDetails data={value} />
          ) : (
            <Text>
              <strong>{formatKey(key)}:</strong>{" "}
              {truncate(String(value), MAX_LENGTH)}
            </Text>
          )}
        </Box>
      ))}
    </>
  );
};

export default UserDetails;
