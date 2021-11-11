import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChrakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChrakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        width="100"
        focusBorderColor="pink.500"
        bgColor="gray.800"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
