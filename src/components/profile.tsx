"use client";

import React from "react";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border w-auto sm:w-[30rem] h-auto rounded-xl p-6  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Aspirant OP Here!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="450px"
            height="450px"
            fill-rule="nonzero"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(2.56,2.56)">
                <path
                  d="M25.84,63.777c0,0 0.479,8.33 5.553,8.426c0,0 2.298,16.181 21.16,17.426c0,0 16.564,-2.011 20.681,-18.862c0,0 7.372,-2.202 4.596,-13.787v-17.235h-52.468z"
                  fill="#f7a160"
                ></path>
                <path
                  d="M33.309,77.468l-6.798,4.5c0,0 2.564,-5.819 -4.511,-4.968l-0.755,-5.181c0,0 -3.064,1.245 -5.553,-1.532c0,0 4.309,-2.245 4.309,-5.287c0,0 -9.436,-0.936 -13,5c0,0 -0.596,-7.372 7.351,-12.734c0,0 -7.277,3.734 -9.287,-9.287c0,0 7.851,6.319 11.394,2.968c0,0 -2.968,-1.628 -4.691,-8.234c0,0 -4.404,-5.074 -6.223,-3.83c0,0 6.319,-3.83 14.745,-1.915c0,0 -6.223,-7.851 -4.787,-15.415c0,0 5.553,8.234 8.617,8.043l-0.394,-6.702l9.489,1.819c0,0 -8.426,-9.287 -3.543,-16.085c0,0 2.011,8.043 15.989,9.191l-3.734,-7.181c0,0 9.957,-4.213 16.755,5.745l1.532,-2.681l2.681,4.883c0,0 -2.202,-9.287 5.745,-9.67c0,0 -1.915,6.415 5.553,13.404c0,0 16.468,-8.043 18.67,20.777l-6.223,-3.83l-0.096,4.979c0,0 6.085,5.213 9.457,3.755c0,0 -2.255,3.606 -6,5c0,0 4.585,5.128 3.436,9.723c0,0 -4.83,-4.979 -6.436,-1.723c-1.606,3.256 4.617,4.979 4.617,4.979c0,0 -1.831,3.287 -7.618,1.021l6,6l-9,-2l-1.255,4.649c0,0 -2.968,-3.255 -5.074,-3.926c0,0 6.862,-7.713 2.33,-14.723c0,0 -1.564,6.394 -7.117,7.926l2.011,-9.287l-5.895,4.361c0,0 3.213,-7.33 -0.904,-12.883l-0.957,6.606l-5.139,-8.723c0,0 -0.128,8.628 -6.638,12.553l-2.872,-10.34l-1.628,7.277c0,0 -3.819,-4.521 -1.862,-9.489c0,0 -6.947,2.213 -7.138,12.649l-3.926,-3.351l-1.723,4.596l-2.585,-1.532c0,0 -0.766,6.798 1.819,7.372c0,0 -2.745,3.426 -6.447,-1.734c0,0 -1.5,8.915 6.16,10.447z"
                  fill="#b295e6"
                ></path>
                <path
                  d="M27,81l5.926,-3.34l-1.926,-4.66c0,0 -5.936,-2.872 -4.968,-8.936c0,0 5.053,3.745 6.511,1.34c0,0 -4.543,-3.404 -1.543,-8.404l3,2l0.697,-4.511l3.83,3.207c0,0.001 0.473,-11.696 7.473,-12.696c0,0 -2,7 2,10l1,-9c0,0 5,9 2,13c0,0 8.606,-7.309 8.303,-13.654l4.356,8.809l1.341,-7.155c0,0 3,5 1,13c0,0 3,-1 6,-6c0,0 0,10 -3,12c0,0 8,-5 8,-9c0,0 6,5 -3,15c0,0 4,0 6,3l1.181,-3.947l7.133,1.628l-4.314,-5.681c0,0 7,2 8,-1c0,0 -8,-2 -4,-6c0,0 3,0 6,3c0,0 1.553,-5.702 -3.723,-9.851c0,0 5.191,0.383 5.457,-4.883c0,0 -9.511,-0.926 -9.622,-4.596l0.888,-4.67l-6.489,-7.234l-1.723,3.574l2.633,10.867l-7.085,1.197l-4.596,-6.894l6.559,0.814l-5.799,-4.824l-7.926,1.904l-0.894,-4.787l3.559,-6.032l-7.739,1.915l-2,9l-2,-9l-7,1l-5.915,-6.745l4.787,14.553l-9.67,-4.787l-11.202,-1.021l2.5,3.5l6.309,0.633l-9.383,4.069l-5.426,0.798l6.191,2.84l7.309,-2.34l-2,4l6.42,-0.319l-8.42,6.319l-1.489,5.027l-2.511,-6.027l-1.5,9.5h-5l-5.5,4.5h8c0,0 -0.234,4.383 -4.117,5.191c0,0 2.117,2.809 6.117,0.809c0,0 -2.074,2.596 -0.037,5.798c0,0 5.037,-0.798 5.037,4.202z"
                  fill="#7596f5"
                ></path>
                <ellipse
                  cx="40.936"
                  cy="66.457"
                  rx="7.468"
                  ry="6.862"
                  fill="#ffffff"
                ></ellipse>
                <ellipse
                  cx="63.979"
                  cy="65.5"
                  rx="7.468"
                  ry="6.862"
                  fill="#ffffff"
                ></ellipse>
                <path
                  d="M31,74c-0.104,0 -0.211,-0.017 -0.316,-0.052c-0.067,-0.022 -6.765,-2.359 -5.676,-11.072c0.053,-0.423 0.368,-0.767 0.786,-0.854c0.416,-0.09 0.845,0.099 1.064,0.464c0.011,0.019 1.283,2.081 3.065,2.426c0.365,0.069 0.727,0.062 1.092,-0.022c-0.596,-0.525 -1.22,-1.271 -1.604,-2.279c-0.669,-1.76 -0.435,-3.798 0.694,-6.057c0.144,-0.287 0.417,-0.488 0.734,-0.54c0.315,-0.052 0.64,0.053 0.867,0.28l1.076,1.075c0.102,-1.158 0.463,-2.54 1.385,-3.923c0.166,-0.249 0.436,-0.411 0.733,-0.44c0.303,-0.03 0.594,0.076 0.806,0.288l2.13,2.13c0.11,-3.239 1.358,-8.493 7.757,-11.337c0.361,-0.16 0.784,-0.094 1.079,0.174c0.293,0.267 0.402,0.681 0.276,1.057c-0.014,0.043 -1.184,3.716 0.347,6.967l0.71,-6.394c0.049,-0.447 0.392,-0.807 0.836,-0.877c0.445,-0.068 0.881,0.165 1.067,0.573c0.865,1.903 2.953,6.859 3.041,10.508c2.42,-2.303 5.639,-6.314 5.057,-10.97c-0.061,-0.483 0.236,-0.94 0.703,-1.081c0.465,-0.142 0.967,0.074 1.184,0.51l3.485,6.972l0.626,-5.635c0.044,-0.402 0.327,-0.737 0.715,-0.851c0.387,-0.112 0.806,0.02 1.059,0.336c0.158,0.198 3.464,4.453 1.94,12.058c1.686,-1.445 3.27,-3.198 3.279,-4.421c0,-0.007 0,-0.011 0,-0.012v-0.001c0.003,-0.553 0.451,-1 1.003,-1c0.538,0 0.976,0.425 0.999,0.956c0,0.001 0,0.001 0,0.001c0,0.004 0,0.005 0,0.005c0,0.004 0,0.008 0,0.013v0c0,0.001 0,0.003 0,0.005c0,0.002 0,0.005 0,0.008c0,0.005 0,0.009 0,0.013c0,0.301 -0.023,5.96 -1.583,10.408c1.88,-1.374 4.098,-3.58 4.597,-6.572c0.059,-0.354 0.302,-0.648 0.638,-0.773c0.335,-0.126 0.712,-0.061 0.988,0.169c0.084,0.07 2.062,1.754 2.296,5.026c0.249,3.467 -1.499,7.306 -5.193,11.411c-0.369,0.41 -1.002,0.443 -1.412,0.074c-0.411,-0.369 -0.444,-1.002 -0.074,-1.412c3.247,-3.608 4.869,-7.021 4.688,-9.872c-0.057,-0.902 -0.283,-1.639 -0.549,-2.209c-2.044,5.062 -7.731,7.553 -8.002,7.669c-0.417,0.179 -0.9,0.056 -1.18,-0.301c-0.28,-0.356 -0.286,-0.855 -0.014,-1.218c1.469,-1.96 2.167,-5.317 2.5,-8.045c-1.694,1.81 -3.766,3.224 -4.145,3.477c-0.355,0.238 -0.822,0.224 -1.162,-0.037c-0.339,-0.26 -0.477,-0.706 -0.342,-1.111c1.478,-4.433 1.171,-7.814 0.548,-10.024l-0.606,5.451c-0.049,0.44 -0.382,0.796 -0.818,0.874c-0.434,0.078 -0.872,-0.141 -1.07,-0.537l-3.316,-6.633c-1.455,6.424 -7.909,10.801 -8.234,11.018c-0.002,0.001 -0.002,0.001 -0.005,0.003c0,0.001 -0.001,0.001 -0.001,0.001c-0.46,0.302 -1.077,0.176 -1.381,-0.281c-0.306,-0.459 -0.183,-1.079 0.276,-1.386c0.001,0.001 0.003,-0.001 0.012,-0.009c1.025,-0.711 0.423,-4.262 -0.903,-8.083l-0.56,5.033c-0.042,0.382 -0.3,0.706 -0.663,0.833c-0.362,0.128 -0.766,0.036 -1.038,-0.236c-2.841,-2.841 -2.98,-6.513 -2.701,-8.82c-6.049,3.89 -4.682,10.591 -4.616,10.898c0.094,0.434 -0.108,0.879 -0.498,1.092c-0.388,0.211 -0.872,0.145 -1.186,-0.17l-3.053,-3.053c-0.886,2.11 -0.318,3.945 -0.29,4.035c0.141,0.439 -0.036,0.921 -0.43,1.161c-0.394,0.241 -0.901,0.184 -1.227,-0.144l-1.945,-1.944c-0.382,1.179 -0.408,2.222 -0.075,3.114c0.577,1.548 2.089,2.19 2.104,2.197c0.332,0.138 0.567,0.443 0.612,0.8c0.044,0.356 -0.102,0.711 -0.389,0.926c-1.311,0.983 -2.681,1.344 -4.069,1.072c-1.033,-0.202 -1.916,-0.737 -2.612,-1.321c0.379,5.048 4.217,6.438 4.403,6.502c0.52,0.18 0.8,0.747 0.623,1.268c-0.139,0.415 -0.526,0.678 -0.942,0.678z"
                  fill="#181818"
                ></path>
                <path
                  d="M26,83c-0.223,0 -0.445,-0.074 -0.629,-0.223c-0.365,-0.295 -0.476,-0.805 -0.266,-1.225c0.659,-1.318 0.815,-2.331 0.439,-2.852c-0.591,-0.821 -2.549,-0.835 -3.403,-0.711c-0.312,0.044 -0.626,-0.061 -0.849,-0.283c-1.308,-1.308 -1.315,-3.17 -1.017,-4.669c-2.366,0.447 -4.781,-1.129 -5.983,-2.331c-0.286,-0.286 -0.372,-0.716 -0.217,-1.09c0.155,-0.374 0.521,-0.616 0.925,-0.616c2.877,0 3.686,-2.005 3.913,-3.19c-7.536,-1.212 -10.901,4.439 -11.046,4.689c-0.227,0.393 -0.688,0.584 -1.125,0.465c-0.438,-0.117 -0.742,-0.512 -0.742,-0.964c0,-5.437 2.682,-9.142 5.044,-11.35c-0.732,-0.115 -1.425,-0.368 -2.075,-0.759c-4.332,-2.6 -4.943,-10.486 -4.967,-10.82c-0.032,-0.447 0.237,-0.86 0.659,-1.012c0.421,-0.152 0.892,-0.006 1.153,0.359c2.629,3.681 6.141,4.327 8.667,4.224c-1.447,-1.289 -2.214,-3.208 -2.461,-4.446c-1.729,-6.909 -6.653,-6.243 -6.862,-6.209c-0.442,0.072 -0.882,-0.168 -1.066,-0.577c-0.185,-0.409 -0.077,-0.891 0.268,-1.179c4.163,-3.468 9.97,-3.378 13.59,-2.877c-3.897,-5.451 -3.95,-14.885 -3.95,-15.354c0,-0.483 0.346,-0.897 0.822,-0.984c0.473,-0.081 0.945,0.181 1.115,0.633c1.956,5.218 5.197,7.71 7.026,8.756c-0.169,-3.474 -0.853,-4.949 -0.861,-4.966c-0.183,-0.382 -0.108,-0.846 0.191,-1.146c0.315,-0.314 1.058,-1.056 7.611,0.399c-3.772,-5.446 -1.988,-15.341 -1.887,-15.877c0.083,-0.442 0.452,-0.775 0.901,-0.812c0.447,-0.025 0.868,0.231 1.021,0.655c3.02,8.305 11.442,9.941 14.735,10.263c-1.209,-3.504 -3.995,-4.961 -4.125,-5.028c-0.366,-0.187 -0.583,-0.579 -0.543,-0.988c0.04,-0.409 0.324,-0.753 0.719,-0.866c10.148,-2.896 15.417,1.296 17.721,4.205l0.568,-3.407c0.086,-0.515 0.552,-0.873 1.069,-0.833c0.518,0.042 0.917,0.475 0.917,0.996c0,1.216 0.315,2.448 0.733,3.55c0.18,-1.933 0.806,-3.474 1.878,-4.606c2.194,-2.319 5.378,-1.952 5.513,-1.936c0.379,0.047 0.698,0.307 0.822,0.668c0.124,0.361 0.031,0.762 -0.239,1.031c-1.545,1.545 1.697,7.821 4.611,12.015c3.772,-1.79 7.157,-1.872 10.071,-0.249c8.329,4.645 9.56,21.735 9.608,22.461c0.028,0.416 -0.205,0.805 -0.584,0.977c-0.379,0.175 -0.826,0.091 -1.12,-0.203c-1.214,-1.214 -3.222,-2.834 -4.551,-3.874c-0.197,1.01 -0.463,2.145 -0.634,2.848c4.38,4.093 8.522,3.37 8.701,3.338c0.292,-0.055 0.597,0.023 0.826,0.212c0.23,0.189 0.365,0.47 0.365,0.768c0,3.228 -2.975,4.802 -5.002,5.5c3.843,4.191 3.029,9.421 2.988,9.664c-0.062,0.37 -0.324,0.674 -0.681,0.788c-0.356,0.115 -0.747,0.021 -1.013,-0.245c-1.679,-1.675 -4.074,-3.294 -4.949,-3.062c-0.16,0.045 -0.286,0.246 -0.374,0.598c-0.162,0.649 -0.084,1.205 0.239,1.7c0.844,1.291 3.142,1.933 3.957,2.071c0.481,0.082 0.835,0.499 0.835,0.986c0,0.749 -0.31,1.387 -0.895,1.844c-1.388,1.083 -4.263,0.872 -6.289,0.546c1.828,2.925 4.309,3.609 4.432,3.642c0.517,0.136 0.839,0.655 0.727,1.178c-0.112,0.523 -0.607,0.877 -1.14,0.777c-4.017,-0.669 -6.697,-1.336 -8.07,-1.717l-0.785,3.927c-0.092,0.459 -0.489,0.792 -0.957,0.804c-0.468,0.024 -0.881,-0.304 -0.994,-0.758c-0.795,-3.182 -4.86,-3.241 -5.033,-3.242c-0.551,-0.003 -0.997,-0.451 -0.996,-1.003c0.003,-0.552 0.449,-0.998 1,-0.998c1.433,0 3.909,0.511 5.543,2.186l0.477,-2.382c0.056,-0.281 0.23,-0.524 0.479,-0.668c0.247,-0.144 0.547,-0.175 0.817,-0.085c0.02,0.007 1.379,0.453 4.044,1.041c-0.843,-0.931 -1.657,-2.145 -2.288,-3.721c-0.139,-0.349 -0.071,-0.745 0.175,-1.028c0.247,-0.282 0.629,-0.406 0.996,-0.312c1.758,0.438 4.514,0.815 5.94,0.515c-1.208,-0.419 -2.78,-1.188 -3.643,-2.503c-0.63,-0.961 -0.806,-2.097 -0.509,-3.284c0.343,-1.374 1.158,-1.868 1.781,-2.04c1.618,-0.455 3.754,0.905 5.244,2.1c-0.152,-1.91 -0.89,-4.806 -3.679,-7.036c-0.308,-0.246 -0.441,-0.65 -0.343,-1.032c0.099,-0.381 0.413,-0.669 0.801,-0.735c0.045,-0.008 3.943,-0.696 4.938,-2.931c-1.982,-0.021 -5.741,-0.638 -9.479,-4.376c-0.249,-0.248 -0.348,-0.608 -0.263,-0.949c0.402,-1.614 0.969,-4.156 0.969,-4.76c0,-0.379 0.214,-0.725 0.553,-0.895c0.339,-0.169 0.744,-0.134 1.047,0.095c0.12,0.09 2.206,1.657 4.117,3.284c-0.663,-4.857 -2.703,-15.145 -8.303,-18.266c-2.486,-1.386 -5.496,-1.162 -8.946,0.665c-0.44,0.23 -0.984,0.106 -1.276,-0.296c-1.22,-1.678 -6.494,-9.234 -5.776,-13.504c-0.75,0.147 -1.652,0.487 -2.364,1.248c-1.331,1.42 -1.7,4.01 -1.067,7.489c0.083,0.456 -0.159,0.909 -0.584,1.095c-0.425,0.187 -0.921,0.056 -1.2,-0.316c-0.076,-0.101 -1.144,-1.541 -2.025,-3.569l-0.189,1.134c-0.074,0.442 -0.433,0.782 -0.879,0.83c-0.448,0.048 -0.87,-0.206 -1.036,-0.623c-0.143,-0.349 -3.473,-8.151 -14.724,-5.914c1.345,1.197 3.012,3.242 3.633,6.347c0.059,0.294 -0.017,0.599 -0.207,0.83c-0.19,0.231 -0.474,0.366 -0.774,0.366c-0.123,0 -11.127,-0.107 -16.398,-8.493c-0.294,4.381 0.008,11.723 5.032,13.358c0.206,0.055 0.416,0.112 0.629,0.17c0.524,0.143 0.838,0.678 0.708,1.205c-0.13,0.526 -0.659,0.853 -1.188,0.736c-0.255,-0.057 -0.501,-0.123 -0.739,-0.198c-3.734,-0.991 -7.897,-1.882 -9.722,-1.985c0.311,1.156 0.678,3.163 0.678,6.207c0,0.321 -0.154,0.623 -0.416,0.812c-0.261,0.188 -0.597,0.239 -0.901,0.137c-0.207,-0.068 -4.102,-1.419 -7.279,-6.055c0.564,3.924 1.916,9.118 5.15,11.274c0.412,0.274 0.561,0.809 0.35,1.257c-0.209,0.448 -0.716,0.677 -1.191,0.533c-0.083,-0.025 -7.282,-2.117 -12.777,0.381c2.139,0.675 4.81,2.523 6.034,7.419c0.045,0.215 0.908,4.242 4.03,4.242c0.483,0 0.897,0.346 0.984,0.821c0.087,0.475 -0.18,0.945 -0.633,1.115c-0.075,0.026 -6.586,2.388 -11.827,-1.849c0.528,2.199 1.55,4.937 3.476,6.091c1.257,0.751 2.759,0.722 4.593,-0.093c0.495,-0.22 1.077,-0.005 1.309,0.486c0.232,0.49 0.031,1.077 -0.454,1.321c-0.263,0.133 -5.651,2.925 -7.095,9.022c2.21,-1.979 6.108,-4.172 11.863,-2.893c0.458,0.104 0.784,0.51 0.784,0.979c0,1.656 -0.799,4.491 -3.535,5.568c1.136,0.596 2.619,0.935 3.828,-0.275c0.346,-0.347 0.892,-0.39 1.29,-0.104c0.398,0.286 0.53,0.818 0.312,1.257c-0.015,0.031 -1.404,2.938 -0.454,4.508c1.142,-0.075 3.575,-0.02 4.727,1.578c0.394,0.547 0.587,1.191 0.58,1.932c1.71,-1.175 3.897,-2.464 5.252,-2.464c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1c-1.019,0 -4.103,1.963 -6.375,3.781c-0.183,0.146 -0.404,0.219 -0.625,0.219z"
                  fill="#181818"
                ></path>
                <path
                  d="M52,91c-0.058,0 -0.115,-0.005 -0.171,-0.015c-23.643,-4.112 -21.845,-24.876 -21.824,-25.085c0.055,-0.55 0.533,-0.962 1.093,-0.895c0.549,0.054 0.95,0.543 0.897,1.092c-0.076,0.778 -1.6,19.066 20.063,22.897c1.789,-0.115 20.942,-1.931 20.942,-25.994c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1c0,26.647 -22.725,27.988 -22.955,27.999c-0.015,0.001 -0.03,0.001 -0.045,0.001z"
                  fill="#181818"
                ></path>
                <path
                  d="M41,74c-4.411,0 -8,-3.364 -8,-7.5c0,-4.136 3.589,-7.5 8,-7.5c4.411,0 8,3.364 8,7.5c0,4.136 -3.589,7.5 -8,7.5zM41,60c-3.86,0 -7,2.916 -7,6.5c0,3.584 3.14,6.5 7,6.5c3.86,0 7,-2.916 7,-6.5c0,-3.584 -3.14,-6.5 -7,-6.5z"
                  fill="#181818"
                ></path>
                <path
                  d="M64,73c-4.411,0 -8,-3.364 -8,-7.5c0,-4.136 3.589,-7.5 8,-7.5c4.411,0 8,3.364 8,7.5c0,4.136 -3.589,7.5 -8,7.5zM64,59c-3.86,0 -7,2.916 -7,6.5c0,3.584 3.14,6.5 7,6.5c3.86,0 7,-2.916 7,-6.5c0,-3.584 -3.14,-6.5 -7,-6.5z"
                  fill="#181818"
                ></path>
                <path
                  d="M42.5,62c-1.657,0 -3,1.567 -3,3.5c0,0.059 0.012,0.114 0.015,0.172c0.366,-0.41 0.893,-0.672 1.485,-0.672c1.105,0 2,0.895 2,2c0,0.852 -0.535,1.575 -1.286,1.863c0.252,0.08 0.512,0.137 0.786,0.137c1.657,0 3,-1.567 3,-3.5c0,-1.933 -1.343,-3.5 -3,-3.5z"
                  fill="#181818"
                ></path>
                <path
                  d="M62.5,61c-1.657,0 -3,1.567 -3,3.5c0,0.059 0.012,0.114 0.015,0.172c0.366,-0.41 0.893,-0.672 1.485,-0.672c1.105,0 2,0.895 2,2c0,0.852 -0.535,1.575 -1.286,1.863c0.252,0.08 0.512,0.137 0.786,0.137c1.657,0 3,-1.567 3,-3.5c0,-1.933 -1.343,-3.5 -3,-3.5z"
                  fill="#181818"
                ></path>
                <path
                  d="M46.5,59c-0.128,0 -0.256,-0.049 -0.354,-0.146c-2.878,-2.878 -7.261,-4.364 -7.305,-4.379c-0.262,-0.088 -0.403,-0.371 -0.316,-0.633c0.087,-0.261 0.367,-0.403 0.632,-0.316c0.188,0.063 4.647,1.572 7.695,4.621c0.195,0.195 0.195,0.512 0,0.707c-0.096,0.097 -0.224,0.146 -0.352,0.146z"
                  fill="#181818"
                ></path>
                <path
                  d="M56.5,59c-0.095,0 -0.191,-0.027 -0.277,-0.084c-0.23,-0.153 -0.292,-0.464 -0.139,-0.693c0.088,-0.132 2.254,-3.223 11.416,-3.223c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5c-8.632,0 -10.565,2.75 -10.584,2.777c-0.096,0.145 -0.255,0.223 -0.416,0.223z"
                  fill="#181818"
                ></path>
                <path
                  d="M60,82.5c-0.015,0 -0.03,-0.001 -0.046,-0.002c-5.402,-0.49 -14.833,-0.004 -14.928,0.001c-0.276,0.038 -0.511,-0.197 -0.526,-0.473c-0.014,-0.275 0.197,-0.511 0.473,-0.525c0.096,-0.006 9.599,-0.497 15.072,0.001c0.275,0.025 0.478,0.269 0.453,0.543c-0.024,0.26 -0.242,0.455 -0.498,0.455z"
                  fill="#181818"
                ></path>
                <path
                  d="M51,76.5c-0.233,0 -0.442,-0.164 -0.49,-0.402c-0.516,-2.58 0.463,-6.551 0.505,-6.719c0.066,-0.269 0.337,-0.43 0.606,-0.364c0.268,0.067 0.431,0.339 0.364,0.606c-0.009,0.039 -0.966,3.922 -0.495,6.281c0.054,0.271 -0.122,0.534 -0.392,0.588c-0.033,0.007 -0.066,0.01 -0.098,0.01z"
                  fill="#181818"
                ></path>
                <circle cx="38.5" cy="76.5" r="0.5" fill="#181818"></circle>
                <circle cx="65.5" cy="76.5" r="0.5" fill="#181818"></circle>
                <circle cx="37.5" cy="78.5" r="0.5" fill="#181818"></circle>
                <circle cx="40.5" cy="78.5" r="0.5" fill="#181818"></circle>
                <circle cx="63.5" cy="78.5" r="0.5" fill="#181818"></circle>
                <circle cx="66.5" cy="78.5" r="0.5" fill="#181818"></circle>
                <path
                  d="M74.5,48c-0.16,0 -0.312,-0.077 -0.407,-0.209l-3.214,-4.5c-0.161,-0.225 -0.108,-0.537 0.116,-0.698c0.224,-0.159 0.537,-0.108 0.697,0.116l3.038,4.253l6.139,-0.877l-2.851,-10.453c-0.032,-0.119 -0.02,-0.245 0.035,-0.355l2,-4c0.076,-0.152 0.225,-0.256 0.395,-0.273c0.169,-0.018 0.336,0.051 0.443,0.185l4,5c0.172,0.216 0.137,0.53 -0.078,0.703c-0.216,0.171 -0.53,0.137 -0.703,-0.078l-3.512,-4.39l-1.565,3.13l2.95,10.815c0.038,0.139 0.014,0.286 -0.064,0.406c-0.078,0.12 -0.205,0.2 -0.347,0.221l-7,1c-0.025,0.002 -0.049,0.004 -0.072,0.004z"
                  fill="#181818"
                ></path>
                <path
                  d="M76.5,42c-0.023,0 -0.047,-0.002 -0.071,-0.005l-7,-1c-0.273,-0.039 -0.463,-0.292 -0.424,-0.565c0.039,-0.273 0.294,-0.461 0.566,-0.425l5.255,0.751l-4.451,-3.709l-7.754,1.938c-0.133,0.032 -0.273,0.01 -0.389,-0.062c-0.115,-0.073 -0.196,-0.19 -0.223,-0.325l-1,-5c-0.026,-0.13 0,-0.265 0.074,-0.375l3.283,-4.924l-6.446,1.611l-1.933,8.698c-0.049,0.229 -0.253,0.392 -0.487,0.392c-0.234,0 -0.438,-0.163 -0.488,-0.392l-1.899,-8.548l-4.042,0.577c-0.276,0.034 -0.527,-0.151 -0.566,-0.425c-0.039,-0.274 0.151,-0.526 0.424,-0.565l4.5,-0.643c0.259,-0.029 0.502,0.132 0.559,0.387l1.512,6.804l1.512,-6.804c0.042,-0.185 0.183,-0.331 0.367,-0.377l8,-2c0.2,-0.049 0.411,0.028 0.53,0.197c0.119,0.169 0.122,0.394 0.007,0.565l-3.885,5.828l0.857,4.282l7.491,-1.873c0.154,-0.038 0.318,-0.002 0.441,0.102l6,5c0.171,0.143 0.228,0.383 0.137,0.587c-0.081,0.184 -0.262,0.298 -0.457,0.298z"
                  fill="#181818"
                ></path>
                <path
                  d="M45.5,39c-0.209,0 -0.404,-0.133 -0.474,-0.342l-5,-15c-0.076,-0.227 0.02,-0.476 0.228,-0.594c0.209,-0.114 0.47,-0.072 0.626,0.11l6,7c0.18,0.209 0.156,0.525 -0.054,0.705c-0.209,0.179 -0.524,0.155 -0.705,-0.055l-4.339,-5.062l4.192,12.578c0.087,0.262 -0.054,0.545 -0.316,0.633c-0.053,0.019 -0.106,0.027 -0.158,0.027z"
                  fill="#181818"
                ></path>
                <path
                  d="M42,37.25c-0.075,0 -0.151,-0.017 -0.223,-0.053l-4,-2c-0.247,-0.124 -0.347,-0.424 -0.224,-0.671c0.124,-0.246 0.424,-0.348 0.671,-0.224l4,2c0.247,0.124 0.347,0.424 0.224,0.671c-0.089,0.175 -0.265,0.277 -0.448,0.277z"
                  fill="#181818"
                ></path>
                <path
                  d="M24.5,45c-0.077,0 -0.153,-0.018 -0.224,-0.053l-6,-3c-0.194,-0.097 -0.303,-0.308 -0.271,-0.521c0.032,-0.213 0.199,-0.384 0.413,-0.419l5.937,-0.989l7.354,-3.269l-5.279,-0.754c-0.141,-0.021 -0.266,-0.1 -0.345,-0.218l-2,-3c-0.107,-0.16 -0.112,-0.367 -0.014,-0.533c0.098,-0.166 0.279,-0.264 0.475,-0.242l11,1c0.275,0.025 0.478,0.269 0.453,0.543c-0.025,0.274 -0.259,0.479 -0.543,0.453l-9.958,-0.905l1.296,1.944l6.779,0.968c0.221,0.031 0.394,0.205 0.424,0.426c0.031,0.222 -0.088,0.436 -0.292,0.526l-9,4c-0.039,0.017 -0.079,0.029 -0.121,0.036l-4.483,0.747l4.43,2.215l4.295,-1.61c0.258,-0.101 0.547,0.033 0.644,0.292c0.097,0.259 -0.034,0.547 -0.292,0.644l-4.5,1.688c-0.059,0.02 -0.118,0.031 -0.178,0.031z"
                  fill="#181818"
                ></path>
                <path
                  d="M23,58.5c-0.032,0 -0.065,-0.003 -0.099,-0.01c-0.271,-0.054 -0.446,-0.317 -0.392,-0.588l1.5,-7.5c0.045,-0.227 0.239,-0.393 0.47,-0.402c0.228,0.016 0.438,0.141 0.501,0.362l1.556,5.446l1.489,-4.467c0.032,-0.097 0.093,-0.181 0.174,-0.242l6.438,-4.829l-5.068,0.725c-0.193,0.026 -0.381,-0.059 -0.487,-0.219c-0.107,-0.16 -0.111,-0.368 -0.012,-0.533l3,-5c0.142,-0.236 0.449,-0.315 0.686,-0.172c0.237,0.142 0.313,0.449 0.171,0.686l-2.459,4.1l5.96,-0.852c0.22,-0.028 0.445,0.093 0.533,0.304c0.088,0.211 0.021,0.454 -0.162,0.592l-7.875,5.906l-1.951,5.852c-0.069,0.208 -0.261,0.357 -0.485,0.342c-0.219,-0.005 -0.41,-0.151 -0.47,-0.362l-1.433,-5.018l-1.096,5.478c-0.046,0.237 -0.255,0.401 -0.489,0.401z"
                  fill="#181818"
                ></path>
                <path
                  d="M6.979,69.159c-0.149,0 -0.297,-0.066 -0.396,-0.193c-0.169,-0.219 -0.129,-0.532 0.088,-0.702l10.521,-8.159c0.089,-0.068 0.197,-0.105 0.308,-0.105h5c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5h-4.829l-10.386,8.055c-0.091,0.07 -0.199,0.104 -0.306,0.104z"
                  fill="#181818"
                ></path>
              </g>
            </g>
          </svg>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

{
  /* <Image
            src=""
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */
}
