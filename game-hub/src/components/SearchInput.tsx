import { Input, InputGroup, InputLeftElement, useAccordion } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);

    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder='Seacrch games...' variant='filled'/>
      </InputGroup>
    </form>
  )
}

export default SearchInput
