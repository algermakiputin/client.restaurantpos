export function Dimension() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}; 