import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
   const { palette } = useTheme();
   const dark = palette.neutral.dark;
   const main = palette.neutral.main;
   const medium = palette.neutral.medium;

   return (
      <WidgetWrapper>
         <FlexBetween>
            <Typography color={dark} variant="h5" fontWeight="500">
               Sponsored
            </Typography>
            {/* <Typography color={medium}>Create Ad</Typography> */}
         </FlexBetween>
         <img
            width="100%"
            height="auto"
            alt="advert"
            src="https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg"
            style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
         />
         <FlexBetween>
            <Typography color={main}>
               Bannari Amman Institute of Technology
            </Typography>
            <Typography color={medium}>
               <a href="https://www.bitsathy.ac.in/" target="_blank">
                  Know more
               </a>
            </Typography>
         </FlexBetween>
         <Typography color={medium} m="0.5rem 0">
            Bannari Amman Institute of Technology located at Erode was
            established in 1996. Bannari Amman Institute of Technology is
            recognised by National Assessment and Accreditation Council (NAAC)
            as an ‘A+’ Grade institute, also approved by the All India Council
            for Technical Education (AICTE). Bannari Amman Institute of
            Technology offers BE/BTech courses at the UG level and ME/MTech and
            MBA courses at the PG level.
         </Typography>
      </WidgetWrapper>
   );
};

export default AdvertWidget;
