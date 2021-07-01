import React from 'react'
import {SvgIcon} from './SvgIcon'

export const MicrophoneIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <line
      x1="192"
      y1="448"
      x2="320"
      y2="448"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="256"
      y1="368"
      x2="256"
      y2="448"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M256,64a63.68,63.68,0,0,0-64,64V239c0,35.2,29,65,64,65s64-29,64-65V128C320,92,292,64,256,64Z"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const MicrophoneOffIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M432 400L96 64"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 208v32a111.58 111.58 0 01-2.45 23.31 4.05 4.05 0 001.07 3.69l21.82 21.81a2 2 0 003.29-.72A143.27 143.27 0 00400 240zM256 352a112.36 112.36 0 01-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00320 432h-48v-48.89a143.08 143.08 0 0052-16.22 4 4 0 00.91-6.35L307 342.63a4 4 0 00-4.51-.78A110.78 110.78 0 01256 352zM256 80a47.18 47.18 0 0148 48v74.72a4 4 0 001.17 2.82L332.59 233a2 2 0 003.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 00-68.47 36.57 4 4 0 00.54 5l19.54 19.54a2 2 0 003.25-.63A47.44 47.44 0 01256 80z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M207.27 242.9L179.41 215a2 2 0 00-3.41 1.42V239a80.89 80.89 0 0023.45 56.9 78.55 78.55 0 0077.8 21.19 2 2 0 00.86-3.35l-24.91-24.91a4.08 4.08 0 00-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 00-1.14-2.35z"
    />
  </svg>
)

export const VideoCameraIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <path
      d="M374.79,308.78,457.5,367A16,16,0,0,0,480,352.38V159.62A16,16,0,0,0,457.5,145l-82.71,58.22A16,16,0,0,0,368,216.3v79.4A16,16,0,0,0,374.79,308.78Z"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M268,384H84a52.15,52.15,0,0,1-52-52V180a52.15,52.15,0,0,1,52-52H268.48A51.68,51.68,0,0,1,320,179.52V332A52.15,52.15,0,0,1,268,384Z"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const VideoCameraOffIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M50.19 140.57A51.94 51.94 0 0032 180v152a52.15 52.15 0 0052 52h184a51.6 51.6 0 0022-4.9M208 128h60.48A51.68 51.68 0 01320 179.52V248M416 416L80 80"
    />
  </svg>
)

export const CallIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <path
      d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const FullScreenIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
    />
  </svg>
)

export const FullScreenExitIcon: SvgIcon = ({
  width = 20,
  height = 20,
  strokeColor = 'text-black',
  strokeWidth = 10,
  fillColor = 'none',
  classes = '',
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={`stroke-current ${strokeColor} ${classes}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M304 416V304h112M314.2 314.23L432 432M208 96v112H96M197.8 197.77L80 80M416 208H304V96M314.23 197.8L432 80M96 304h112v112M197.77 314.2L80 432"
    />
  </svg>
)
