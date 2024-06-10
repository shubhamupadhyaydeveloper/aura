import { textInput } from "./type";

export const signUpFields:textInput[] = [
    {
      name: "username",
      label: "Username",
      placeholder: "Your username",
      secureText: false,
      keyboardType: "default",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Your email",
      secureText: false,
      keyboardType: "email-address",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Your password",
      secureText: true,
      keyboardType: "default",
    },
  ];

export const signInFields:textInput[] = [
    {
        name: "email",
        label: "Email",
        placeholder: "Your email",
        secureText: false,
        keyboardType: "email-address",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Your password",
        secureText: true,
        keyboardType: "default",
      },
]

export const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Night life in tokyo",
    name: "Jon doe",
    imgLink : require("@/assets/images/img3.png")
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Street dogs life",
    name: "Robin hood",
    imgLink : require("@/assets/images/img.png")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Driving in offroad vehicle",
    name: "Jack ma",
    imgLink : require("@/assets/images/img2.png")
  },
];