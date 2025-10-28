import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const clearSearchText = useGameQueryStore((s) =>s.clearSearch);

  const handleClear = () => {
    clearSearchText();
    if (ref.current) ref.current.value = '';
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);
            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Seacrch games..."
            variant="filled"
          />
        </InputGroup>
      </form>
      <Button onClick={handleClear}>clear</Button>
    </>
  );
};

export default SearchInput;
