import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/ActivityListTheme";

export default function SingularActivity(props) {
  SingularActivity.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.string,
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
  return (
    <ThemeProvider theme={theme}>
      <Card key={props.id} id={"AL" + props.id}>
        <Accordion>
          <Grid container>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={"Panel Header " + props.name}
                id={"PanelHeeader_" + props.id}
              >
                <CardHeader title={props.name} />
              </AccordionSummary>
            </Grid>
          </Grid>
          <AccordionDetails>
            <CardContent>
              <Grid container justifyContent="center">
                <Grid item xs={6} md={6} lg={6} xl={6}>
                  <div id={"AI" + props.id}>
                    <Typography variant="h4">General Info</Typography>
                    {props.type ? (
                      <Typography variant="body2">
                        Type: <br /> {props.type}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Type: <br />
                        Not available
                      </Typography>
                    )}
                    {props.description ? (
                      <Typography variant="body2">
                        Description: <br /> {props.description}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Description: <br />
                        Not available
                      </Typography>
                    )}
                    {props.distance ? (
                      <Typography variant="body2">
                        Distance: <br /> {props.distance}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Distance: <br />
                        Not available
                      </Typography>
                    )}

                    {props.price ? (
                      <Typography variant="body2">
                        Price: <br /> {props.price},-
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Price: <br />
                        Not available
                      </Typography>
                    )}
                  </div>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                  <div className="ActivityLocalLocation" id={"ALL" + props.id}>
                    <Typography variant="h4">National Scale</Typography>
                    {props.city ? (
                      <Typography variant="body2">
                        City: <br /> {props.city}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        City: <br />
                        Not available
                      </Typography>
                    )}
                    {props.municipality ? (
                      <Typography variant="body2">
                        Municipality: <br /> {props.municipality}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Municipality: <br />
                        Not available
                      </Typography>
                    )}
                    {props.county ? (
                      <Typography variant="body2">
                        County: <br /> {props.county}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
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
                    <Typography variant="h4">Practical Info</Typography>
                    {props.open_hours ? (
                      <Typography variant="body2">
                        Opening Hours: <br /> {props.open_hours}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Opening Hours: <br />
                        Not available
                      </Typography>
                    )}
                    {props.closing_hours ? (
                      <Typography variant="body2">
                        Closing Hours: <br /> {props.closing_hours}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Closing Hours: <br />
                        Not available
                      </Typography>
                    )}
                    {props.website_link ? (
                      <Typography variant="body2" noWrap>
                        Website: <br />
                        <a
                          href={props.website_link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {props.website_link}
                        </a>
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Website: <br />
                        Not available
                      </Typography>
                    )}
                    {props.phone ? (
                      <Typography variant="body2">
                        Phone: <br /> {props.phone}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Phone: <br />
                        Not available
                      </Typography>
                    )}
                  </div>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                  <div className="ActivityGlobalPosition" id={"AGP" + props.id}>
                    <Typography variant="h4">Global Scale</Typography>
                    {props.country ? (
                      <Typography variant="body2">
                        Country: <br /> {props.country}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Country: <br />
                        Not available
                      </Typography>
                    )}
                    {props.subregion ? (
                      <Typography variant="body2">
                        Subregion: <br /> {props.subregion}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
                        Subregion: <br />
                        Not available
                      </Typography>
                    )}
                    {props.region ? (
                      <Typography variant="body2">
                        Region: <br /> {props.region}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="GrayText">
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
          </AccordionDetails>
        </Accordion>
      </Card>
    </ThemeProvider>
  );
}
