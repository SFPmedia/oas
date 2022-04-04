import React from "react";
import {
  Typography,
  CardActions,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/ActivityListTheme";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SingularActivity(props) {
  SingularActivity.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.number,
    price: PropTypes.string,
    city: PropTypes.string,
    municipality: PropTypes.string,
    county: PropTypes.string,
    open_hours: PropTypes.string,
    closing_hours: PropTypes.string,
    website_link: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    subregion: PropTypes.string,
    region: PropTypes.string,
    geolocation: PropTypes.string,
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card key={props.id} id={"AL" + props.id} gutterbottom="true">
        <Grid container>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <CardHeader title={props.name} />
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <CardActions>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container justifyContent="center">
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <div id={"AI" + props.id}>
                  <Typography variant="h4" color="initial" gutterbottom="true">
                    General Info
                  </Typography>
                  {props.type ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Type: <br /> {props.type}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      {" "}
                      Type: <br />
                      Not available
                    </Typography>
                  )}
                  {props.description ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Description: <br /> {props.description}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Description: <br />
                      Not available
                    </Typography>
                  )}
                  {props.distance ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Distance: <br /> {props.distance}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Distance: <br />
                      Not available
                    </Typography>
                  )}

                  {props.price ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Price: <br /> {props.price},-
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Price: <br />
                      Not available
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <div className="ActivityLocalLocation" id={"ALL" + props.id}>
                  <Typography variant="h4" color="initial" gutterbottom="true">
                    National Scale
                  </Typography>
                  {props.city ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      City: <br /> {props.city}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      City: <br />
                      Not available
                    </Typography>
                  )}
                  {props.municipality ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Municipality: <br /> {props.municipality}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Municipality: <br />
                      Not available
                    </Typography>
                  )}
                  {props.county ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      County: <br /> {props.county}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      County: <br />
                      Not available
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <div
                  className="ActivityGeneralInformation"
                  id={"AGI" + props.id}
                >
                  <Typography variant="h4" color="initial" gutterbottom="true">
                    Practical Info
                  </Typography>
                  {props.open_hours ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Opening Hours: <br /> {props.open_hours}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Opening Hours: <br />
                      Not available
                    </Typography>
                  )}
                  {props.closing_hours ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Closing Hours: <br /> {props.closing_hours}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Closing Hours: <br />
                      Not available
                    </Typography>
                  )}
                  {props.website_link ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Website: <br />
                      <a
                        href={props.website_link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {props.website_link.substring(0, 36)}
                      </a>
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Website: <br />
                      Not available
                    </Typography>
                  )}
                  {props.phone ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Phone: <br /> {props.phone}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Phone: <br />
                      Not available
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid item xs={6} md={6} lg={6} xl={6}>
                <div className="ActivityGlobalPosition" id={"AGP" + props.id}>
                  <Typography variant="h4" color="initial" gutterbottom="true">
                    Global Scale
                  </Typography>
                  {props.country ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Country: <br /> {props.country}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Country: <br />
                      Not available
                    </Typography>
                  )}
                  {props.subregion ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Subregion: <br /> {props.subregion}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Subregion: <br />
                      Not available
                    </Typography>
                  )}
                  {props.region ? (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Region: <br /> {props.region}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="initial"
                      gutterbottom="true"
                    >
                      Region: <br />
                      Not available
                    </Typography>
                  )}
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={10} xl={10}>
                <iframe
                  title={"titleNumber" + props.id}
                  key={props.id}
                  className="GoogleMap"
                  id={"GM" + props.id}
                  src={props.geolocation}
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
