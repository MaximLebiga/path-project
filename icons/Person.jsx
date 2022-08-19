const Person = ({width, height}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_78_84"
        style={{maskType: "alpha"}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <rect width={width} height={height} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_78_84)">
        <path
          d="M16.9998 22L15.2498 20.25C15.6387 19.6944 15.8332 19.0622 15.8332 18.3533C15.8332 17.6456 15.6387 17.0139 15.2498 16.4583L16.9998 14.6667C17.8887 15.7222 18.3332 16.9444 18.3332 18.3333C18.3332 19.7222 17.8887 20.9444 16.9998 22ZM20.5415 25.5833L18.7498 23.7917C20.1387 22.2361 20.8332 20.4233 20.8332 18.3533C20.8332 16.2844 20.1387 14.4722 18.7498 12.9167L20.5415 11.125C21.4582 12.1528 22.1526 13.2917 22.6248 14.5417C23.0971 15.7917 23.3332 17.0622 23.3332 18.3533C23.3332 19.6456 23.0971 20.9167 22.6248 22.1667C22.1526 23.4167 21.4582 24.5556 20.5415 25.5833ZM8.33317 20C7.4165 20 6.6315 19.6733 5.97817 19.02C5.32595 18.3678 4.99984 17.5833 4.99984 16.6667C4.99984 15.75 5.32595 14.965 5.97817 14.3117C6.6315 13.6594 7.4165 13.3333 8.33317 13.3333C9.24984 13.3333 10.0343 13.6594 10.6865 14.3117C11.3398 14.965 11.6665 15.75 11.6665 16.6667C11.6665 17.5833 11.3398 18.3678 10.6865 19.02C10.0343 19.6733 9.24984 20 8.33317 20ZM1.6665 26.6667V25.7083C1.6665 25.0417 1.84706 24.4306 2.20817 23.875C2.56928 23.3194 3.06928 22.9028 3.70817 22.625C4.43039 22.3194 5.17317 22.0833 5.9365 21.9167C6.70095 21.75 7.49984 21.6667 8.33317 21.6667C9.1665 21.6667 9.96539 21.75 10.7298 21.9167C11.4932 22.0833 12.2359 22.3194 12.9582 22.625C13.5971 22.9028 14.0971 23.3194 14.4582 23.875C14.8193 24.4306 14.9998 25.0417 14.9998 25.7083V26.6667H1.6665ZM31.6665 20C30.7498 20 29.9648 19.6733 29.3115 19.02C28.6593 18.3678 28.3332 17.5833 28.3332 16.6667C28.3332 15.75 28.6593 14.965 29.3115 14.3117C29.9648 13.6594 30.7498 13.3333 31.6665 13.3333C32.5832 13.3333 33.3682 13.6594 34.0215 14.3117C34.6737 14.965 34.9998 15.75 34.9998 16.6667C34.9998 17.5833 34.6737 18.3678 34.0215 19.02C33.3682 19.6733 32.5832 20 31.6665 20ZM24.9998 26.6667V25.7083C24.9998 25.0417 25.1804 24.4306 25.5415 23.875C25.9026 23.3194 26.4026 22.9028 27.0415 22.625C27.7637 22.3194 28.5065 22.0833 29.2698 21.9167C30.0343 21.75 30.8332 21.6667 31.6665 21.6667C32.4998 21.6667 33.2987 21.75 34.0632 21.9167C34.8265 22.0833 35.5693 22.3194 36.2915 22.625C36.9304 22.9028 37.4304 23.3194 37.7915 23.875C38.1526 24.4306 38.3332 25.0417 38.3332 25.7083V26.6667H24.9998Z"
          fill="#1976D2"
        />
      </g>
    </svg>
  )
}

export default Person