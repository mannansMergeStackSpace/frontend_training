import { List } from "@mui/material";
import { Box } from "@mui/system";
import CustomContainer from "components/common/container";
import CustomHeader from "components/common/container/header";
import SingleActivity from "./activity";
import ActivityStyles from "./activity.styles";

const Activity = () => {
  const styles = ActivityStyles();
  return (
    <Box className={styles.activityContainer}>
      <CustomContainer
        header={<CustomHeader message="Activity" icon="/icons/Filter.svg" />}
      >
        <List>
          {Array(6)
            .fill(0)
            .map(() => {
              return <SingleActivity message="" />;
            })}
        </List>
      </CustomContainer>
    </Box>
  );
};
export default Activity;
