import Color from 'color';

export const getColorWithOpacity = (color: string, opacity: number) => {
    return Color(color)?.alpha(opacity)?.toString();
};

export const hitSlop = (size = 24) => ({
    bottom: size,
    top: size,
    right: size,
    left: size,
});

export const shadow = {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
};
