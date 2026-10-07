"use client";

import Link from "next/link";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

// Main navigation component.
export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(8, 8, 8, 0.9)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            justifyContent: "space-between",
          }}
        >
          {/* Venue logo/name */}
          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.5px",
            }}
          >
            ARENAX
          </Typography>

          {/* Desktop navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button component={Link} href="/">
              Home
            </Button>

            <Button component={Link} href="/facilities">
              Facilities
            </Button>

            <Button component={Link} href="/pricing">
              Pricing
            </Button>

            <Button component={Link} href="/gallery">
              Gallery
            </Button>

            <Button component={Link} href="/about">
              About
            </Button>

            <Button component={Link} href="/contact">
              Contact
            </Button>

            <Button
              component={Link}
              href="/booking"
              variant="contained"
              color="primary"
              sx={{
                ml: 1,
                color: "#000",
                fontWeight: 700,
              }}
            >
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
