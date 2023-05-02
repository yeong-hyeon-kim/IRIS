import styled from "styled-components";

export const lightTheme: ITheme = {
  value: "light",
  style: {
    margin: "",
    padding: "",
    borderRadius: "",
    backgroundColor: "#f8f9fa",
    color: "#000000",
  },
};

export const lightContainerTheme: ITheme = {
  value: "light",
  style: {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};

export const darkTheme: ITheme = {
  value: "dark",
  style: {
    margin: "",
    padding: "",
    borderRadius: "",
    backgroundColor: "#000000",
    color: "#ffffff",
  },
};

export const darkContainerTheme: ITheme = {
  value: "dark",
  style: {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#202124",
    color: "#ffffff",
  },
};

export interface ITheme {
  value: string;
  style: {
    margin: string;
    padding: string;
    borderRadius: string;
    backgroundColor: string;
    color: string;
  };
}
