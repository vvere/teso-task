// const sortData = (type: keyof typeof titles) => {
//     const sortProperty = titles[type] as keyof typeof titles;

//     const sorttedArray = [...data].sort((a, b) =>
//       a[sortProperty].localeCompare(b[sortProperty])
//     );

//     console.log(type === sort);
//     setData(type === sort ? sorttedArray.reverse() : sorttedArray);
//     setSort(type);
//   };

export const titles = {
  server: "server",
  distance: "distance",
};
