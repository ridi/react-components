import css from "@emotion/css";
import { TextAlignProperty } from "csstype";

export const landscapeBook = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  fontSize: 0,
};

export const thumbnail = {
  flex: '0 1 0',
  paddingRight: 16,
  alignSelf: 'flex-end',
};

export const metadata = {
  flex: '1 1 0',
  padding: '10px 0',
};

export const buttons = {
  flex: '0 1 0',
  textAlign: 'right' as TextAlignProperty,
  paddingLeft: 20,
};