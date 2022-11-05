import * as React from "react";
import Box from "@mui/material/Box";
import Link from 'next/link'
import { useTheme } from "@mui/material/styles";
import { Button, ButtonGroup, Card, Grid } from "@mui/material";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";

export default function SelectedFontsDrawer() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <div className="mx-[3%]">
        <div className="mx-[1%]">
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500">1424 of 1424 families</p>
            <div>
              <ButtonGroup
                size="small"
                sx={{
                  borderColor: "#555 !important",
                }}
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button sx={{ color: "#555" }}>
                  <CalendarViewMonthIcon />
                </Button>
                <Button sx={{ color: "#555" }}>
                  <ViewListOutlinedIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        <Grid container>
          {Array(10)
            .fill(0)
            .map((p, i) => (
              <Grid item xs={12} md={6} lg={4} key={i}>
                <Link href={`fonts/${'Font Family'}`}>
                  <Card
                    elevation={0}
                    variant="outlined"
                    sx={{
                      aspectRatio: "4 / 3",
                      margin: "2.8%",
                      padding: ".9rem",
                      borderRadius: 2,
                      cursor: "pointer"
                    }}
                    className="hover:shadow-lg"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-lg font-[400]">Font Family</h2>
                        <p className="text-sm text-gray-500">Font Author</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">12 styles</p>
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "2.4rem",
                      }}
                      className="mt-5"
                    >
                      Almost before we know it, we had left the ground
                    </div>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>

        <div className="h-[60px]"></div>
      </div>
    </Box>
  );
}
