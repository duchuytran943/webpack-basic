export const add = (a = 1, b = 2) => a + b;

export const treeShaking = () => {
  console.log("None display this line in file build");
};
