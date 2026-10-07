"use client";

import Link from "next/link";

import {
  AccessTime,
  ArrowForward,
  Email,
  LocationOn,
  Phone,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { venue } from "@/data/venue";

export default function ContactPreview() {
  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: 10,
          md: 15,
        },
        backgroundColor: "#0d0d0d",
      }}
    >
      <Container maxWidth="xl">
        {/* Section heading */}
        <Box sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontSize: {
                xs: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Have a question?
            <br />
            Talk to us.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact information */}
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Stack spacing={2}>
              {/* Location */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <LocationOn
                    sx={{
                      color: "primary.main",
                      fontSize: 30,
                    }}
                  />

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      LOCATION
                    </Typography>

                    <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
                      {venue.location}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Phone */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Phone
                    sx={{
                      color: "primary.main",
                      fontSize: 30,
                    }}
                  />

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      PHONE
                    </Typography>

                    <Typography
                      component="a"
                      href={`tel:${venue.phone}`}
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        mt: 0.5,
                        display: "block",
                      }}
                    >
                      {venue.phone}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Email */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Email
                    sx={{
                      color: "primary.main",
                      fontSize: 30,
                    }}
                  />

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      EMAIL
                    </Typography>

                    <Typography
                      component="a"
                      href={`mailto:${venue.email}`}
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        mt: 0.5,
                        display: "block",
                      }}
                    >
                      {venue.email}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Opening hours */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <AccessTime
                    sx={{
                      color: "primary.main",
                      fontSize: 30,
                    }}
                  />

                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      OPENING HOURS
                    </Typography>

                    <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
                      {venue.openingHours}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Contact form */}
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },
                height: "100%",
                backgroundColor: "background.paper",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography variant="h5" fontWeight={800}>
                Send us a message
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 1,
                  mb: 4,
                }}
              >
                Have a question about bookings, facilities, pricing, or anything
                else? Send us a message.
              </Typography>

              <Stack spacing={3}>
                {/* Name */}
                <TextField label="Your Name" fullWidth />

                {/* Email */}
                <TextField label="Email Address" type="email" fullWidth />

                {/* Phone */}
                <TextField label="Phone Number" fullWidth />

                {/* Message */}
                <TextField label="Message" multiline rows={5} fullWidth />

                {/* Submit button */}
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    alignSelf: "flex-start",
                    px: 4,
                    py: 1.5,
                    color: "#000",
                    fontWeight: 800,
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
