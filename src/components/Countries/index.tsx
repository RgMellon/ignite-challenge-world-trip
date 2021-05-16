import { SimpleGrid, Text, useBreakpointValue} from "@chakra-ui/react";

import { Card } from "./Card";

type CountryProps = {
  image: string;
  city: string;
  country: string;
  flag: string;
};

const countries = [
  {
    image: '/cities/londres.png',
    city: 'Londres',
    country: 'Reino Unido',
    flag: '/flags/reino_unido.png',
  },
  {
    image: '/cities/paris.png',
    city: 'Paris',
    country: 'França',
    flag: '/flags/franca.png',
  },
  {
    image: '/cities/roma.png',
    city: 'Roma',
    country: 'Itália',
    flag: '/flags/italia.png',
  },
  {
    image: '/cities/praga.png',
    city: 'Praga',
    country: 'República Tcheca',
    flag: '/flags/republica_tcheca.png',
  },
  {
    image: '/cities/amsterda.png',
    city: 'Amsterdã',
    country: 'Holanda',
    flag: '/flags/holanda.png',
  },
] as CountryProps[];

export function Countries() {  
  return (
    <>
      <Text 
        mt="85px" 
        fontWeight="500" 
        fontSize="36px"
        textAlign={['center', 'initial']}
      >
        Cidades +100
      </Text>
      
      <SimpleGrid minChildWidth="256px" spacing="40px" mt="55px" >
        {countries.map(country => 
          <Card
            key={country.city}
            image={country.image} 
            city={country.city} 
            country={country.country}
            flag={country.flag} 
          />
        )}
      </SimpleGrid>
    </>
  );
}
