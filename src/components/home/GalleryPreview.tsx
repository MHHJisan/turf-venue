"use client";
import Link from "next/link";

import { ArrowForward } from "@mui/icons-material";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

const galleryImages = [
  {
    id: 1,
    title: "Football Turf",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Badminton Court",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Swimming Pool",
    image:
      "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Café & Lounge",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Sports & Recreation",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GalleryPreview() {
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
              GALLERY
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
              See the
              <br />
              experience.
            </Typography>
          </Box>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 450,
              lineHeight: 1.7,
            }}
          >
            Take a look at our sports facilities, swimming pool, café, and the
            atmosphere that makes ArenaX a place to enjoy with friends and
            family.
          </Typography>
        </Box>

        {/* Gallery grid */}
        <Grid container spacing={2}>
          {/* Large featured image */}
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: {
                  xs: 350,
                  md: 550,
                },
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: "background.paper",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
                "&:hover .gallery-overlay": {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={galleryImages[0].image}
                alt={galleryImages[0].title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
              />

              {/* Image overlay */}
              <Box
                className="gallery-overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "flex-end",
                  p: 4,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  opacity: {
                    xs: 1,
                    md: 0,
                  },
                  transition: "opacity 0.3s ease",
                }}
              >
                <Typography variant="h5" fontWeight={800}>
                  {galleryImages[0].title}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right-side images */}
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Grid container spacing={2}>
              {galleryImages.slice(1, 5).map((item) => (
                <Grid
                  key={item.id}
                  size={{
                    xs: 6,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: {
                        xs: 170,
                        sm: 200,
                        md: 267,
                      },
                      borderRadius: 3,
                      overflow: "hidden",
                      backgroundColor: "background.paper",
                      "&:hover img": {
                        transform: "scale(1.05)",
                      },
                      "&:hover .gallery-overlay": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />

                    {/* Image overlay */}
                    <Box
                      className="gallery-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "flex-end",
                        p: 2,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        opacity: {
                          xs: 1,
                          md: 0,
                        },
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <Typography variant="body1" fontWeight={700}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* View complete gallery */}
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
          }}
        >
          <Button
            component={Link}
            href="/gallery"
            variant="outlined"
            endIcon={<ArrowForward />}
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 700,
            }}
          >
            View Full Gallery
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
