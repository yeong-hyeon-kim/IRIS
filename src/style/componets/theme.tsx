import styled from "styled-components";

export const lightTheme: ITheme = {
  value: "light",
  style: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};

export const darkTheme: ITheme = {
  value: "dark",
  style: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
};

export interface ITheme {
  value: string;
  style: {
    backgroundColor: string;
    color: string;
  };
}
