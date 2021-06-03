import React from 'react';
import styled from 'styled-components';

const Logo = styled.svg`
  width: ${props => props.size}px;
  cursor: ${props => (props.pointer ? 'cursor' : 'pointer')};
  * {
    cursor: ${props => (props.pointer ? 'cursor' : 'pointer')};
    transition: 0.2s;
  }
  &:hover {
    *:not(.innerHorizontalLogoPath) {
      fill: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

const isPrideMonth = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  if (currentMonth === 5 && (currentDay >= 1 || currentDay <= 30)) {
    return true;
  }
};

const checkMonthfestivity = () => {
  if (isPrideMonth()) return 'pride';
};

const HorizontalLogo = ({ size, pointer, onClick }) => {
  switch (checkMonthfestivity()) {
    case 'pride':
      return (
        <Logo
          version="1.1"
          id="Layer_1"
          x="0px"
          pointer={pointer}
          y="0px"
          viewBox="0 0 1024 312"
          size={size}
          fill="none"
          xmlSpace="preserve"
          onClick={onClick}
        >
          <g>
            <g>
              <defs>
                <path
                  id="SVGID_1_"
                  d="M399.11,125.04l-15.83,15.6c-3.72-3.66-8.74-6.09-15.78-6.09c-11.7,0-19.97,8.98-19.97,21.92
				c0,15.07,9.75,22.57,20.32,22.57c10.4,0,16.37-4.08,18.73-12.17H367.2v-16.43h41.12c0.35,2.6,0.47,5.08,0.47,7.44
				c0,27.59-20.5,41.42-39.94,41.42c-26,0-44.31-17.73-44.31-42.84c0-25.17,18.32-42.89,44.31-42.89
				C381.98,113.58,392.08,117.89,399.11,125.04z M497.09,156.47c0,24.93-17.02,41.36-42.89,41.36h-36.51v-82.71h36.51
				C480.07,115.12,497.09,131.54,497.09,156.47z M440.14,135.73v41.48h13.47c13.59,0,20.15-8.8,20.15-20.74
				c0-12.11-6.56-20.74-20.15-20.74H440.14z M568.25,197.83h-62.27v-82.71h22.45v62.04h39.82V197.83z M635.33,197.83h-20.21v-5.14
				c-3.49,3.9-8.57,6.67-15.95,6.67c-15.66,0-26.65-13.88-26.65-30.9c0-16.9,10.99-30.78,26.71-30.78c7.32,0,12.41,2.84,15.89,6.85
				v-5.26h20.21V197.83z M594.21,168.53c0,6.56,4.37,11.28,10.4,11.28c6.03,0,10.4-4.72,10.4-11.28s-4.37-11.29-10.4-11.29
				C598.58,157.24,594.21,161.97,594.21,168.53z M702.76,172.66c0,18.2-12.35,26.7-28.71,26.7c-16.36,0-28.71-8.51-28.71-26.76
				v-33.32h21.03v31.55c0,5.85,3.07,8.98,7.68,8.98s7.68-3.13,7.68-8.98v-31.55h21.03V172.66z M769.55,159.72v38.11h-21.03v-31.49
				c0-5.85-2.78-8.98-7.39-8.98c-4.2,0-7.33,2.78-7.33,9.1v31.37h-21.03v-58.55h20.03v6.03c3.31-5.08,8.51-7.62,15.83-7.62
				C760.74,137.68,769.55,146.25,769.55,159.72z M835.08,151.86l-17.25,10.87c-2.48-3.72-5.38-5.5-9.51-5.5
				c-5.14,0-9.92,3.96-9.92,11.29c0,7.39,4.61,11.28,9.75,11.28c3.96,0,7.15-1.77,9.69-5.55l17.31,11.05
				c-5.73,8.62-14.65,14.06-26.35,14.06c-18.73,0-31.9-12.76-31.9-30.84s13.17-30.84,31.9-30.84
				C820.49,137.68,829.29,143.12,835.08,151.86z M862.22,143.89c3.31-4.14,8.21-6.2,14.83-6.2c12.11,0,20.92,8.57,20.92,22.04v38.11
				h-21.03v-31.49c0-5.85-2.78-8.98-7.39-8.98c-4.08,0-7.33,2.66-7.33,9.1v31.37h-21.03v-85.2h21.03V143.89z M965.69,168.53
				c0,2.01-0.18,5.08-0.41,6.26h-38.23c1.42,4.73,4.96,7.09,10.52,7.09c3.78,0,7.86-1.6,11.05-4.73l14.41,12.05
				c-5.67,6.14-14.89,10.16-26.47,10.16c-18.73,0-31.25-12.17-31.25-30.31c0-18.55,12.41-31.37,30.43-31.37
				C953.46,137.68,965.63,150.21,965.69,168.53z M927.11,162.09h17.61c-1.54-4.55-4.49-6.74-8.86-6.74
				C931.37,155.35,928.47,157.54,927.11,162.09z M1014.22,138.28l-1.18,21.03c-2.42-0.65-5.85-1.36-9.22-1.36
				c-5.85,0-9.39,2.07-9.39,8.51v31.37h-21.09v-58.55h20.09v5.91c3.25-5.2,8.39-7.5,15.54-7.5
				C1011.26,137.68,1013.39,138.1,1014.22,138.28z"
                />
              </defs>
              <clipPath id="SVGID_2_">
                <use href="#SVGID_1_" css={{ overflow: 'visible' }} />
              </clipPath>
              <g className="st7" css={{ clipPath: 'url(#SVGID_2_)' }}>
                <rect
                  x="498.26"
                  y="-588.46"
                  transform="matrix(0.5 0.866 -0.866 0.5 263.6845 -468.3455)"
                  className="st0"
                  css={{ fill: '#E31E26' }}
                  width="78.37"
                  height="1165.3"
                />

                <rect
                  x="537.44"
                  y="-520.6"
                  transform="matrix(0.5 0.866 -0.866 0.5 342.0525 -468.3454)"
                  className="st1"
                  css={{ fill: '#F68C1F' }}
                  width="78.37"
                  height="1165.3"
                />

                <rect
                  x="576.48"
                  y="-452.97"
                  transform="matrix(0.5 0.866 -0.866 0.5 420.1367 -468.3454)"
                  className="st2"
                  css={{ fill: '#FDEC05' }}
                  width="78.37"
                  height="1165.3"
                />

                <rect
                  x="615.67"
                  y="-385.1"
                  transform="matrix(0.5 0.866 -0.866 0.5 498.5046 -468.3454)"
                  className="st3"
                  css={{ fill: '#0D8140' }}
                  width="78.37"
                  height="1165.3"
                />

                <rect
                  x="654.85"
                  y="-317.24"
                  transform="matrix(0.5 0.866 -0.866 0.5 576.8726 -468.3454)"
                  className="st4"
                  css={{ fill: '#405FAB' }}
                  width="78.37"
                  height="1165.3"
                />

                <rect
                  x="694.04"
                  y="-249.37"
                  transform="matrix(0.5 0.866 -0.866 0.5 655.2405 -468.3454)"
                  className="st5"
                  css={{ fill: '#722A83' }}
                  width="78.37"
                  height="1165.3"
                />
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <polygon
                    id="SVGID_3_"
                    points="271.85,80.35 140.82,4.69 9.78,80.35 9.78,231.65 140.82,307.31 271.85,231.65 				"
                  />
                </defs>
                <clipPath id="SVGID_4_">
                  <use href="#SVGID_3_" css={{ overflow: 'visible' }} />
                </clipPath>
                <g className="st8" css={{ clipPath: 'url(#SVGID_4_)' }}>
                  <rect
                    x="54.94"
                    y="-315.39"
                    transform="matrix(0.5 0.866 -0.866 0.5 82.8859 -43.942)"
                    className="st0"
                    css={{ fill: '#E31E26' }}
                    width="49.12"
                    height="730.4"
                  />

                  <rect
                    x="79.5"
                    y="-272.85"
                    transform="matrix(0.5 0.866 -0.866 0.5 132.0061 -43.942)"
                    className="st1"
                    css={{ fill: '#F68C1F' }}
                    width="49.12"
                    height="730.4"
                  />

                  <rect
                    x="103.97"
                    y="-230.46"
                    transform="matrix(0.5 0.866 -0.866 0.5 180.9484 -43.9419)"
                    className="st2"
                    css={{ fill: '#FDEC05' }}
                    width="49.12"
                    height="730.4"
                  />

                  <rect
                    x="128.53"
                    y="-187.92"
                    transform="matrix(0.5 0.866 -0.866 0.5 230.0686 -43.9419)"
                    className="st3"
                    css={{ fill: '#0D8140' }}
                    width="49.12"
                    height="730.4"
                  />

                  <rect
                    x="153.09"
                    y="-145.38"
                    transform="matrix(0.5 0.866 -0.866 0.5 279.1888 -43.9419)"
                    className="st4"
                    css={{ fill: '#405FAB' }}
                    width="49.12"
                    height="730.4"
                  />

                  <rect
                    x="177.65"
                    y="-102.84"
                    transform="matrix(0.5 0.866 -0.866 0.5 328.309 -43.9419)"
                    className="st5"
                    css={{ fill: '#722A83' }}
                    width="49.12"
                    height="730.4"
                  />
                </g>
              </g>
              <path
                className="st9"
                css={{ fill: '#FFFFFF' }}
                d="M140.82,230L140.82,230c22.32,0,40.42-18.1,40.42-40.42v-6.88c0-0.59,0.35-1.11,0.89-1.33
			c6.28-2.52,43.29-19.01,38.4-55.51c-5.26-39.33-54.11-33.16-78.73-9.66c-0.56,0.53-1.41,0.53-1.97,0
			c-24.62-23.49-73.47-29.66-78.73,9.66c-4.88,36.5,32.13,52.99,38.4,55.51c0.54,0.22,0.89,0.74,0.89,1.33v6.88
			C100.4,211.91,118.49,230,140.82,230L140.82,230L140.82,230z"
              />
              <g>
                <path
                  className="st10"
                  css={{ fill: '#375177' }}
                  d="M123.51,152.1c0.12,1.39-1.59,2.15-2.51,1.09c-2.97-3.44-8.61-8.35-18.07-10.97
				c-15.53-4.3,0.94-13.47,7.3-10.48C115.98,134.44,122.32,138.2,123.51,152.1z"
                />
                <path
                  className="st10"
                  css={{ fill: '#375177' }}
                  d="M158.12,152.1c-0.12,1.39,1.59,2.15,2.51,1.09c2.97-3.44,8.61-8.35,18.07-10.97
				c15.53-4.3-0.94-13.47-7.3-10.48C165.66,134.44,159.31,138.2,158.12,152.1z"
                />
              </g>
              <g>
                <path
                  className="st10"
                  css={{ fill: '#375177' }}
                  d="M149.96,172.69c2.12,4.7,5.51,14.07,2.55,20.71c-0.41,0.93-1.68,1.09-2.35,0.33
				c-2.42-2.73-6.77-9.6-2.87-20.89C147.72,171.6,149.43,171.5,149.96,172.69z"
                />
                <path
                  className="st10"
                  css={{ fill: '#375177' }}
                  d="M131.67,172.69c-2.12,4.7-5.51,14.07-2.55,20.71c0.41,0.93,1.68,1.09,2.35,0.33
				c2.42-2.73,6.77-9.6,2.87-20.89C133.91,171.6,132.21,171.5,131.67,172.69z"
                />
              </g>
            </g>
          </g>
        </Logo>
      );
    default:
      return (
        <Logo
          version="1.1"
          x="0px"
          pointer={pointer}
          y="0px"
          viewBox="0 0 1024 312"
          size={size}
          fill="none"
          xmlSpace="preserve"
          onClick={onClick}
        >
          <g>
            <polygon
              css={{ fill: '#365076' }}
              points="270.028,78.05 135.014,0.099 0,78.05 0,233.95 135.014,311.901 270.028,233.95 	"
            />
            <g>
              <path
                className="innerHorizontalLogoPath"
                css={{ fill: '#FFFFFF' }}
                d="M135.014,232.253L135.014,232.253c23.001,0,41.647-18.646,41.647-41.647v-7.085
			c0-0.605,0.361-1.144,0.922-1.369c6.466-2.598,44.6-19.591,39.568-57.198c-5.422-40.521-55.75-34.163-81.122-9.958
			c-0.574,0.548-1.457,0.548-2.031,0c-25.371-24.206-75.7-30.563-81.122,9.958c-5.032,37.606,33.102,54.6,39.568,57.198
			c0.561,0.225,0.922,0.765,0.922,1.369v7.085C93.367,213.607,112.013,232.253,135.014,232.253L135.014,232.253L135.014,232.253z"
              />
              <g>
                <path
                  css={{ fill: '#365076' }}
                  d="M117.185,151.98c0.123,1.435-1.642,2.213-2.582,1.122c-3.055-3.545-8.869-8.606-18.616-11.307
				c-16.003-4.435,0.964-13.882,7.52-10.797C109.419,133.78,115.96,137.661,117.185,151.98z"
                />
                <path
                  css={{ fill: '#365076' }}
                  d="M152.844,151.98c-0.123,1.435,1.642,2.213,2.582,1.122c3.055-3.545,8.869-8.606,18.616-11.307
				c16.003-4.435-0.964-13.882-7.52-10.797C160.61,133.78,154.069,137.661,152.844,151.98z"
                />
              </g>
              <g>
                <path
                  css={{ fill: '#365076' }}
                  d="M144.44,173.2c2.182,4.842,5.679,14.494,2.63,21.334c-0.426,0.954-1.727,1.119-2.42,0.337
				c-2.498-2.818-6.976-9.894-2.959-21.522C142.13,172.078,143.887,171.974,144.44,173.2z"
                />
                <path
                  css={{ fill: '#365076' }}
                  d="M125.589,173.2c-2.182,4.842-5.679,14.494-2.63,21.334c0.426,0.954,1.727,1.119,2.42,0.337
				c2.498-2.818,6.976-9.894,2.959-21.521C127.898,172.078,126.141,171.974,125.589,173.2z"
                />
              </g>
            </g>
          </g>
          <g>
            <path
              css={{ fill: '#365076' }}
              d="M398.563,193.397c-3.383,4.214-8.162,7.482-14.341,9.804c-6.179,2.325-13.023,3.487-20.539,3.487
		c-7.889,0-14.808-1.793-20.758-5.374c-5.95-3.586-10.542-8.785-13.776-15.605c-3.237-6.818-4.894-14.831-4.978-24.041v-6.45
		c0-9.468,1.532-17.667,4.602-24.596c3.067-6.927,7.493-12.225,13.275-15.897c5.78-3.669,12.554-5.504,20.32-5.504
		c10.81,0,19.264,2.682,25.36,8.048c6.096,5.363,9.705,13.171,10.834,23.421h-18.284c-0.837-5.428-2.684-9.403-5.543-11.923
		c-2.859-2.517-6.794-3.779-11.803-3.779c-6.388,0-11.251,2.499-14.592,7.493c-3.338,4.996-5.03,12.423-5.071,22.282v6.059
		c0,9.947,1.816,17.461,5.449,22.543c3.63,5.082,8.955,7.623,15.968,7.623c7.055,0,12.084-1.564,15.089-4.691v-16.353h-17.093
		v-14.399h35.881V193.397z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M413.78,205.386v-94.862h28.052c8.016,0,15.186,1.879,21.511,5.634
		c6.325,3.758,11.261,9.1,14.808,16.028c3.549,6.93,5.324,14.803,5.324,23.619v4.365c0,8.819-1.743,16.658-5.23,23.52
		c-3.484,6.864-8.402,12.184-14.745,15.962c-6.346,3.779-13.505,5.692-21.479,5.733H413.78z M432.564,126.356v63.328h9.08
		c7.347,0,12.963-2.497,16.846-7.493c3.88-4.993,5.864-12.139,5.947-21.435v-5.017c0-9.643-1.921-16.95-5.759-21.923
		c-3.841-4.975-9.458-7.461-16.846-7.461H432.564z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M515.91,189.684h39.889v15.702h-58.674v-94.862h18.785V189.684z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M604.642,205.386c-0.837-1.694-1.441-3.8-1.816-6.32c-4.383,5.082-10.083,7.623-17.096,7.623
		c-6.638,0-12.139-1.996-16.499-5.994c-4.363-3.995-6.544-9.033-6.544-15.115c0-7.469,2.661-13.202,7.982-17.2
		c5.324-3.995,13.015-6.015,23.077-6.059h8.326v-4.039c0-3.258-0.803-5.864-2.411-7.818c-1.605-1.955-4.144-2.932-7.607-2.932
		c-3.049,0-5.439,0.761-7.169,2.28c-1.733,1.522-2.598,3.607-2.598,6.255h-18.097c0-4.081,1.209-7.86,3.63-11.337
		c2.421-3.474,5.845-6.2,10.271-8.175c4.423-1.978,9.392-2.966,14.902-2.966c8.35,0,14.977,2.184,19.882,6.547
		c4.905,4.368,7.36,10.503,7.36,18.407v30.557c0.039,6.69,0.938,11.751,2.692,15.181v1.108H604.642z M589.676,192.29
		c2.671,0,5.134-0.618,7.388-1.858c2.254-1.235,3.925-2.898,5.009-4.983v-12.118h-6.763c-9.059,0-13.88,3.258-14.464,9.773
		l-0.063,1.108c0,2.345,0.792,4.279,2.379,5.799C584.75,191.532,586.921,192.29,589.676,192.29z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M674.713,198.219c-4.467,5.647-10.646,8.47-18.535,8.47c-7.263,0-12.806-2.171-16.624-6.515
		c-3.82-4.342-5.772-10.706-5.856-19.09v-46.193h18.097v45.594c0,7.349,3.213,11.024,9.643,11.024c6.137,0,10.354-2.218,12.65-6.653
		v-49.964h18.159v70.495h-17.033L674.713,198.219z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M722.553,134.891l0.563,8.144c4.842-6.296,11.334-9.447,19.473-9.447
		c7.18,0,12.525,2.194,16.033,6.58c3.505,4.389,5.301,10.946,5.384,19.676v45.542h-18.097V160.3c0-3.995-0.837-6.896-2.504-8.699
		c-1.671-1.801-4.446-2.703-8.329-2.703c-5.092,0-8.913,2.259-11.459,6.776v49.711h-18.097v-70.495H722.553z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M805.898,191.508c3.338,0,6.051-0.954,8.139-2.867c2.087-1.91,3.172-4.451,3.258-7.623h16.968
		c-0.042,4.78-1.293,9.153-3.755,13.13c-2.465,3.972-5.835,7.057-10.114,9.252c-4.279,2.192-9.007,3.289-14.182,3.289
		c-9.687,0-17.325-3.203-22.918-9.611c-5.595-6.406-8.392-15.253-8.392-26.548v-1.238c0-10.857,2.776-19.522,8.329-25.996
		c5.551-6.471,13.169-9.708,22.855-9.708c8.472,0,15.267,2.507,20.382,7.526c5.113,5.014,7.711,11.694,7.795,20.033h-16.968
		c-0.086-3.667-1.17-6.648-3.258-8.939c-2.088-2.293-4.842-3.44-8.264-3.44c-4.219,0-7.401,1.6-9.551,4.795
		c-2.15,3.198-3.224,8.386-3.224,15.564v1.957c0,7.266,1.063,12.486,3.193,15.66C798.32,189.921,801.554,191.508,805.898,191.508z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M862.255,142.579c4.8-5.994,10.834-8.991,18.097-8.991c14.693,0,22.147,8.884,22.355,26.647v45.151
		H884.61v-44.629c0-4.039-0.837-7.026-2.504-8.957c-1.671-1.934-4.446-2.901-8.329-2.901c-5.301,0-9.142,2.129-11.522,6.385v50.102
		h-18.097V105.311h18.097V142.579z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M947.542,206.689c-9.937,0-18.024-3.169-24.265-9.512c-6.242-6.341-9.361-14.79-9.361-25.344v-1.824
		c0-7.078,1.316-13.411,3.946-18.991c2.63-5.582,6.356-9.882,11.178-12.9c4.821-3.02,10.32-4.529,16.499-4.529
		c9.267,0,16.562,3.041,21.886,9.121c5.322,6.083,7.982,14.704,7.982,25.866v7.688h-43.144c0.584,4.605,2.348,8.298,5.293,11.076
		c2.942,2.781,6.666,4.17,11.178,4.17c6.969,0,12.418-2.627,16.343-7.883l8.892,10.359c-2.716,3.998-6.388,7.112-11.021,9.348
		C958.313,205.571,953.177,206.689,947.542,206.689z M945.476,148.768c-3.591,0-6.502,1.267-8.736,3.797
		c-2.233,2.531-3.662,6.15-4.29,10.862h25.172v-1.506c-0.083-4.188-1.168-7.427-3.255-9.718
		C952.28,149.912,949.317,148.768,945.476,148.768z"
            />
            <path
              css={{ fill: '#365076' }}
              d="M1023.75,152.547c-2.463-0.347-4.634-0.521-6.513-0.521c-6.846,0-11.334,2.411-13.463,7.232v46.128
		h-18.097v-70.495h17.096l0.5,8.405c3.633-6.471,8.663-9.708,15.092-9.708c2.004,0,3.88,0.284,5.634,0.847L1023.75,152.547z"
            />
          </g>

          <div></div>
        </Logo>
      );
  }
};

export default HorizontalLogo;
