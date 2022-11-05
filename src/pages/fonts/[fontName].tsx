import React from 'react'
import { Box } from '@mui/system';
import { useRouter } from 'next/router'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Autocomplete, Button, Divider, Tab, TextField } from '@mui/material';

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { TabContext, TabPanel, TabList } from '@mui/lab';

const SliderComponent = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 2,
  padding: '15px 0',

  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: '#1A73E8',
    boxShadow: 'none',
    '&:focus, &:hover, &.Mui-active': {
      marginTop: -7,
      marginLeft: -7,
      transform: 'scale(1.2)'
      // Reset on touch devices, it doesn't add specificity
      // '@media (hover: none)': {
      //   boxShadow: iOSBoxShadow,
      // },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#BDBDBD',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));

const TextFieldComponent = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    marginLeft: "30px"
  },
  "& .MuiOutlinedInput-notchedOutline > legend": {
    marginLeft: "30px",
    border: '1px solid #333'
  },
  "& .MuiInputLabel-outlined.MuiFormLabel-root": {
    marginLeft: "30px"
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: `50px`,
    },
  },
});

const FontDetail = () => {
  const router = useRouter()
  const { fontName } = router.query;

  const fontStyles = [
    { label: '10px', year: 1994 },
    { label: '20px', year: 1972 },
    { label: '40px', year: 1974 },
    { label: '50px', year: 2008 },
    { label: '80px', year: 1957 },
  ]

  return (
    <Box sx={{ margin: "auto 1% auto 4.2%" }}>
      <div className="mr-[3%] pt-[30px]">
        <div className="header flex items-start justify-between">
          <div>
            <h1 className="font-[500] text-[2.1rem]">
              {fontName}
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Designed by <span className="text-indigo-600">Ek Type</span>
            </p>
          </div>
          <div className="mt-3">
            <Button variant="outlined" size="small" sx={{ textTransform: "initial", fontWeight: 500, fontSize: ".87rem" }} >
              <div className="my-[2px] mx-4 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                <span className="ml-2">
                  Download family
                </span>
              </div>
            </Button>
          </div>
        </div>

        <div className="mt-6 sticky top-[60px] bg-white z-50">
          <TabContext value={"1"}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs example">
                <Tab sx={{ textTransform: "initial" }} label="Select Styles" value="1" />
                <Tab sx={{ textTransform: "initial" }} label="Type Tester" value="2" />
                <Tab sx={{ textTransform: "initial" }} label="Glyphs" value="3" />
                <Tab sx={{ textTransform: "initial" }} label="About" value="3" />
                <Tab sx={{ textTransform: "initial" }} label="License" value="3" />
              </TabList>
            </Box>
          </TabContext>
        </div>

        <div className="pt-10">
          <h1 className="text-3xl font-[500]">Styles</h1>
          <div className="mt-10 flex items-center">
            <div className="mr-10 w-full">
              <TextFieldComponent
                fullWidth
                value="Almost before we knew it, we had left the ground"
                InputLabelProps={{ shrink: true }}
                label="Type here to preview text"
              />
            </div>
            <div className="flex ml-4 basis-[50%]">
              <Autocomplete
                disablePortal
                disableClearable
                freeSolo
                id="combo-box-demo"
                options={fontStyles}
                sx={{ width: "auto", minWidth: '70px' }}
                renderInput={(params: any) => <TextField  {...params} variant="standard" InputProps={{ ...params.InputProps, disableUnderline: true }}
                />}
              />
              <SliderComponent
                aria-label="ios slider"
                defaultValue={60}
              // valueLabelDisplay="on"
              />
            </div>
          </div>
        </div>


        <div className="mt-10">
          {
            Array(9).fill(0).map((i, k) => (
              <div className="mt-2 overflow-hidden">
                <Divider />
                <div className="my-4 pl-6 flex justify-between h-full">
                  <div className="w-[83%]">
                    <p className="text-sm text-gray-600">
                      Thin {Number(k + 1 + "00")}
                    </p>
                    <input style={{
                      fontWeight: Number(k + 1 + "00")
                    }} className={`block mt-5 w-full text-6xl focus:outline-8`}
                      value="Almost before we knew it, we had left the ground."
                    />
                  </div>
                  <div className="relative basis-[160px] bg-white flex items-center">
                    <div className="absolute w-[230px] h-full bg-gradient-to-r from-white/5 to-white -left-[230px]"></div>
                    <Button sx={{ textTransform: "initial", fontSize: ".9rem", display: 'flex', alignItems: "center" }}>Select this style <span className="-mt-1 ml-1"><AddCircleOutlineIcon /></span></Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </Box >
  )
}

export default FontDetail