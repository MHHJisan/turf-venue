"use client";

import Link from "next/link";

import { ArrowForward, CheckCircle } from "@mui/icons-material";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { pricingPlans } from "@/data/venue";

export default function PricingPreview() {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            gap: 3,
            mb: 7,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              color="primary"
              sx={{
                fontWeight: 800,
                letterSpacing: 3,
              }}
            >
              SIMPLE PRICING
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
              Play more.
              <br />
              Pay less.
            </Typography>
          </Box>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 450,
              lineHeight: 1.7,
            }}
          >
            Choose your favorite activity and book your preferred time slot. Our
            temporary prices are shown below and can be updated later.
          </Typography>
        </Box>

        {/* Pricing cards */}
        <Grid container spacing={3}>
          {pricingPlans.map((plan, index) => (
            <Grid
              key={plan.id}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  backgroundColor:
                    index === 0 ? "primary.main" : "background.paper",
                  color: index === 0 ? "#000" : "text.primary",
                  border:
                    index === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, border-color 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: index === 0 ? "transparent" : "primary.main",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: {
                      xs: 4,
                      md: 5,
                    },
                  }}
                >
                  {/* Recommended badge */}
                  {index === 0 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        px: 2,
                        py: 0.7,
                        borderRadius: 20,
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        letterSpacing: 1,
                      }}
                    >
                      POPULAR
                    </Box>
                  )}

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      pr: 8,
                    }}
                  >
                    {plan.facility}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      color:
                        index === 0 ? "rgba(0,0,0,0.65)" : "text.secondary",
                    }}
                  >
                    {plan.description}
                  </Typography>

                  {/* Price */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 1,
                      mt: 5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "3rem",
                          md: "3.5rem",
                        },
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      ৳{plan.price.toLocaleString()}
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          index === 0 ? "rgba(0,0,0,0.65)" : "text.secondary",
                      }}
                    >
                      / {plan.unit}
                    </Typography>
                  </Box>

                  {/* Features */}
                  <Stack
                    spacing={1.5}
                    sx={{
                      mt: 5,
                      mb: 5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CheckCircle fontSize="small" />

                      <Typography variant="body2">Premium facility</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CheckCircle fontSize="small" />

                      <Typography variant="body2">Flexible booking</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CheckCircle fontSize="small" />

                      <Typography variant="body2">Easy reservation</Typography>
                    </Box>
                  </Stack>

                  {/* Booking button */}
                  <Button
                    component={Link}
                    href="/booking"
                    variant={index === 0 ? "contained" : "outlined"}
                    color={index === 0 ? "inherit" : "primary"}
                    fullWidth
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      py: 1.5,
                      fontWeight: 800,
                      color: index === 0 ? "#fff" : "inherit",
                      backgroundColor: index === 0 ? "#000" : "transparent",

                      "&:hover": {
                        backgroundColor:
                          index === 0 ? "#151515" : "rgba(139,195,74,0.08)",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Full pricing link */}
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
          }}
        >
          <Button
            component={Link}
            href="/pricing"
            endIcon={<ArrowForward />}
            sx={{
              fontWeight: 700,
            }}
          >
            View Complete Pricing
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
