import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const BillingChart = () => {
  const cStyles = chartStyles();
  return <Box className={cStyles.chartContainer}></Box>;
};
export default BillingChart;

const chartStyles = makeStyles({
  chartContainer: {
    position: "relative",
    display: "flex",
    width: "750px",
    height: "450px",
    top: "80px",
    borderRadius: "20px",
    background: "#FFFFFF",
    boxShadow: "0px 18px 32px 0px #D0D2DA26",
    gap: "10px",
  },
});
