import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const COLORS = {
    main: '#141E46',
    background: '#15133C20',
    white: '#fff',
    black: '#111111',
    whatsapp: '#0e8623',
    facebook: '#28346f',
    phone: '#16294e',
    gray: '#aaa',
    red:"#f92525",
    error: '#f86e87'

};

export const PADDING = {
    xsPadding: 5,
    smPadding: 10,
    mdPadding: 15,
    lgPadding: 20,
    xlPadding: 25,
};
export const MARGIN = {
    xsMargin: 10,
    smMargin: 20,
    mdMargin: 25,
    lgMargin: 30,
    xlMargin: 45,
};

export const RADIUS = {
    xxxsRadius: 5,
    xxsRadius: 7,
    xsRadius: 10,
    smRadius: 15,
    mdRadius: 20,
    lgRadius: 25,
    xlRadius: 30,
};

export const FONTS = {
    h1: 30,
    h2: 25,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
    h7: 18,
};

export const FONTSFAMILY = {
    Main:'ReemKufiFun-Bold',
    Generator_Black: "Generator Black"
    
};
export const ICONS = {
    smIcon: 15,
    mIcon: 20,
    lIcon: 25,
    xlIcon: 30,
};

export const ProfilePhoto = {
    PhotoWidth: width * 0.17,
    PhotoHeight: height * 0.078,
};

export const IconsView = {
    IconWidth: width * 0.1,
    IconHeight: height * 0.05,
};
