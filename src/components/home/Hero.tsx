"use client";
import Link from "next/link";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { venue } from "@/data/venue";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #080808 0%, #101510 50%, #080808 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: 850,
            py: {
              xs: 10,
              md: 15,
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            SPORTS • LEISURE • FOOD
          </Typography>

          <Typography
            variant="h1"
            sx={{
              mt: 2,
              fontSize: {
                xs: "3.5rem",
                sm: "5rem",
                md: "7rem",
              },
              lineHeight: 0.95,
            }}
          >
            {venue.tagline}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mt: 4,
              maxWidth: 650,
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            {venue.description}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            sx={{
              mt: 5,
            }}
          >
            <Button
              component={Link}
              href="/booking"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                color: "#000",
                fontWeight: 800,
              }}
            >
              Book Your Slot
            </Button>

            <Button
              component={Link}
              href="/facilities"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Explore Facilities
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
