const breakpoints = {
  desktop_breakpoint: '992px',
  tablet_breakpoint: '768px',
};

export default {
  light: {
    font_base: '16px',
    background_color: '#fdfdfd',
    copy_color: '#0e0e0e',
    copy_color_disabled: '#909090',
    text_decoration_color: '#0e0e0e',
    color_heart: '#ff3737',
    background_color_offset: '#eee',
    table_header: '#333',
    table_header_copy: '#fdfdfd',
    highlight_color: '#00e3ff',
    ...breakpoints,
  },
  dark: {
    font_base: '16px',
    background_color: '#0e0e0e',
    copy_color: '#fdfdfd',
    copy_color_disabled: '#3c3c3c',
    text_decoration_color: '#fdfdfd',
    color_heart: '#ff3737',
    background_color_offset: '#333232',
    table_header: '#dadada',
    table_header_copy: '#0e0e0e',
    highlight_color: '#ff0071',
    ...breakpoints,
  },
};
