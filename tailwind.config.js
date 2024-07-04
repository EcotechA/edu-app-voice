// Define custom configurations
module.exports = {
  //['./App.{js,jsx,ts,tsx}', './<custom directory>/**/*.{js,jsx,ts,tsx}']
  content: ['./components/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Define breakpoints
      screens: {
        sm: '340px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Define custom colors
      colors: {
        primary: '#2274F0',
        secondary: '#50B7F1',
        success: '#1EB840',
        danger: '#D71E1E',
        textLight: '#000000',
        TextGray333Light: '#333333',
        TextGray666Light: '#666666',
        TextGray999Light: '#999999',
        backgroundLight: '#FFFFFF',
        backgroundGrayLight: '#F5F5F5',
        darkMode: '#0F172A',
        borderDark: '#414141',
        borderLight: '#E2E2E2',
      },
      // Define custom fonts
      fontFamily: {
        PoppinsSemiBold: ['Poppins-SemiBold', 'sans-serif'],
        PoppinsRegular: ['Poppins-Regular', 'sans-serif'],
        InterBold: ['Inter-Bold', 'sans-serif'],
        InterRegular: ['Inter-Regular', 'sans-serif'],
        InterMedium: ['Inter-Medium', 'sans-serif'],
        InterSemiBold: ['Inter-SemiBold', 'sans-serif'],
      },
      // Define custom font sizes
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
    },
  },
  plugins: [],
};
