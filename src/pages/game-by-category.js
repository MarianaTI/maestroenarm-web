// import {
//   Autocomplete,
//   Checkbox,
//   Slider,
//   Stack,
//   TextField,
//   Typography,
//   Button,
// } from "@mui/material";
// import styles from "../styles/GameByCategory.module.css";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { useDispatch } from "react-redux";
// import { setCasesQuantity, setSubcategories } from "../store/slices/gameSlice";
// import { useRouter } from "next/router";

// const categories = [
//   {
//     name: "Medicina Interna",
//     subcategories: [
//       { name: "Gastroenterologia 1" },
//       { name: "Nefrologi 1" },
//       { name: "Dermatologia 1" },
//     ],
//   },  
//   {
//     name: "Medicina Interna 2",
//     subcategories: [
//       { name: "Gastroenterologia 2" },
//       { name: "Nefrologia 2" },
//       { name: "Dermatologia 2" },
//     ],
//   },
//   {
//     name: "Medicina Interna 3",
//     subcategories: [
//       { name: "Gastroenterologia 3" },
//       { name: "Nefrologia 3" },
//       { name: "Dermatologia 3" },
//     ],
//   },
// ];

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// const GameByCategory = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const categoriesMap = categories.flatMap((category) =>
//     category.subcategories.map((subcategory) => ({
//       category: category.name,
//       subcategory: subcategory.name,
//     }))
//   );

//   const handleCategoriesChange = (_, options) => {
//     const subcategories = options.map((option) => option.subcategory);
//     dispatch(setSubcategories(subcategories));
//   };

//   const handleSliderChange = (_, value) => {
//     dispatch(setCasesQuantity(value));
//   };

//   const handlePlay = () => {
//     router.push("/");
//   };

//   return (
//     <section className={styles.gameByCategory}>
//       <Stack direction="column" spacing={2}>
//         <Autocomplete
//           onChange={handleCategoriesChange}
//           multiple
//           disableCloseOnSelect
//           options={categoriesMap}
//           groupBy={(option) => option.category}
//           getOptionLabel={(option) => option.subcategory}
//           renderOption={(props, option, { selected }) => (
//             <li {...props}>
//               <Checkbox
//                 icon={icon}
//                 checkedIcon={checkedIcon}
//                 style={{ marginRight: 8 }}
//                 checked={selected}
//               />
//               {option.subcategory}
//             </li>
//           )}
//           renderInput={(params) => <TextField {...params} label="Categorias" />}
//         />
//         <Typography gutterBottom>Numero de casos clinicos</Typography>
//         <Slider
//           valueLabelDisplay="auto"
//           defaultValue={30}
//           max={50}
//           onChangeCommitted={handleSliderChange}
//         />
//         <Button onClick={handlePlay}>Jugar</Button>
//       </Stack>
//     </section>
//   );
// };

// export default GameByCategory;

export default function GameByCategory() {
  return <>game by category</>
}

//TODO: reparar esto que no esta usando las fucnones de su slice RTK