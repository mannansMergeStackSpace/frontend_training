import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const BillingChart = () => {
  const cStyles = chartStyles();
  return (
    <Box className={cStyles.chartContainer}>
      <Box className={cStyles.chartHeader}>
        <Typography variant="h5" className={cStyles.chartHeading}>
          API Calls in last 6 hours
        </Typography>
        <img
          className={cStyles.chartFilterIcon}
          src="/icons/Filter2.svg"
          alt=""
        />
      </Box>
      <Box height={500} width={500}>
        {/* <LineChart /> */}
      </Box>
    </Box>
  );
};
export default BillingChart;

const chartStyles = makeStyles({
  chartContainer: {
    position: "relative",
    width: "750px",
    height: "450px",
    top: "80px",
    borderRadius: "20px",
    background: "#FFFFFF",
    boxShadow: "0px 18px 32px 0px #D0D2DA26",
    gap: "10px",
  },
  chartHeader: {
    position: "relative",
    display: "flex",
    top: "35px",
    width: "100%",
    height: "35px",
  },
  chartHeading: {
    position: "absolute",
    width: "300px",
    height: "32px",
    left: "30px",
  },
  chartFilterIcon: {
    position: "absolute",
    width: "24px",
    height: "24px",
    right: "30px",
  },
});
