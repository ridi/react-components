import { css } from '@emotion/core';
import colors from '@ridi/colors';
import { arrow_1_down } from '@ridi/web-icons';
import * as React from 'react';
import { formElementDisabled, formElementHover, resetAppearance, resetFont, resetLayout } from '../styles';
import { Svg, SvgProps } from '../Svg';
import { SelectProps } from './index';

const ArrowIcon = (props: SvgProps) => (
  <Svg render={arrow_1_down} {...props} />
);

export default ({ outline }: SelectProps) => css(
  resetAppearance,
  resetFont,
  resetLayout,

  {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',

    boxSizing: 'border-box',
    padding: '.7em 0',
    paddingRight: '1.7em',
    outline: 'none',
    background: 'white',
    color: colors.slategray_70,
    fontSize: '13px',
    fontWeight: 700,
    touchAction: 'manipulation',
    transition: 'color .2s, border-color .2s, box-shadow .2s',

    backgroundPosition: 'right 7px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '10px 6px',
    backgroundImage: `url(${Svg.renderToDataUri(<ArrowIcon fill={colors.slategray_50} />)})`,

    '&::-ms-expand': {
      display: 'none',
    },

    '&:not(:disabled)': {
      '&:hover, &:active': css(
        formElementHover,
        {
          color: colors.slategray_90,
        },
      ),
    },

    '&:disabled': {
      color: colors.slategray_40,
      backgroundImage: `url(${Svg.renderToDataUri(<ArrowIcon fill={colors.slategray_20} />)})`,
      cursor: 'not-allowed',
    },
  },

  outline && {
    padding: '.6em',
    border: `1px solid ${colors.slategray_20}`,
    borderRadius: '3px',

    '&:disabled': formElementDisabled,
  },
);