"use client";
import Link from "next/link";

import {
  ArrowForward,
  LocalCafe,
  Pool,
  SportsSoccer,
  SportsTennis,
} from "@mui/icons-material";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { facilities } from "@/data/venue";

const icons = {
  sports_soccer: SportsSoccer,
  sports_tennis: SportsTennis,
  pool: Pool,
  local_cafe: LocalCafe,
};

export default function Facilities() {
  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: 10,
          md: 15,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            OUR FACILITIES
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
            Everything you need
            <br />
            under one roof.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {facilities.map((facility) => {
            const Icon = icons[facility.icon as keyof typeof icons];

            return (
              <Grid
                key={facility.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "background.paper",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      minHeight: 300,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 48,
                        color: "primary.main",
                        mb: 4,
                      }}
                    />

                    <Typography variant="h5" fontWeight={800}>
                      {facility.name}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        mt: 2,
                        lineHeight: 1.7,
                        flexGrow: 1,
                      }}
                    >
                      {facility.description}
                    </Typography>

                    <Box
                      component={Link}
                      href={`/facilities/${facility.slug}`}
                      sx={{
                        mt: 3,
                        display: "flex",
                        alignItems: "center",
                        color: "primary.main",
                        fontWeight: 700,
                      }}
                    >
                      Explore
                      <IconButton
                        size="small"
                        sx={{
                          color: "primary.main",
                          ml: 1,
                        }}
                      >
                        <ArrowForward fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
