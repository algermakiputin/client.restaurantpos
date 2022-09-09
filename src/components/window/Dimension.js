export function Dimension() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}; 

const dimension = Dimension();

export const getComponentsHeight = function() {
  const height = dimension.height;
  const orderLineHeight = height / 1.45 - 20;
  const summaryHeight = orderLineHeight / 10;
  const actionHeight = orderLineHeight / 8;
  return {
      orderLineHeight,
      summaryHeight,
      actionHeight
  }
}