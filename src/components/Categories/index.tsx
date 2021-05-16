import { SimpleGrid } from "@chakra-ui/layout";
import { Item } from "./Item";

export function Categories() {
  return (
    <SimpleGrid 
      columns={[2, 5]}
      spacing={["45px", "130px"]}
    >
      <Item title="vida noturna" image="categories/cocktail.svg" />
      <Item title="praia" image="categories/beach.svg" />
      <Item title="moderno" image="categories/building.svg" />
      <Item title="clássico" image="categories/museum.svg" />
      <Item title="e mais..." image="categories/earth.svg" />
    </SimpleGrid>
  );
}