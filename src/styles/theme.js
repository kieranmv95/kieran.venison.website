const breakpoints = {
  desktop_breakpoint: '992px',
  tablet_breakpoint: '768px',
};

export default {
  light: {
    font_base: '16px',
    background_color: '#fdfdfd',
    copy_color: '#0e0e0e',
    text_decoration_color: '#0e0e0e',
    color_heart: '#ff3737',
    background_color_offset: '#eee',
    table_header: '#333',
    table_header_copy: '#fdfdfd',
    ...breakpoints,
  },
  dark: {
    font_base: '16px',
    background_color: '#0e0e0e',
    copy_color: '#fdfdfd',
    text_decoration_color: '#fdfdfd',
    color_heart: '#ff3737',
    background_color_offset: '#333232',
    table_header: '#dadada',
    table_header_copy: '#0e0e0e',
    ...breakpoints,
  },
};
