import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDisclosure, Image, Center } from "@chakra-ui/react";
import { use } from "react";

interface CertificateImageProps {
  src: string;
  alt?: string;
}

const CertificateImage = ({ src, alt }: CertificateImageProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const test = useDisclosure();
  console.log(test);

  return (
    <>
      <Center padding={0}>
        <Image
          focusRing={"none"}
          src={src}
          alt={alt}
          boxSize="200px"
          objectFit="cover"
          borderRadius="md"
          onClick={onOpen}
          _hover={{ opacity: 1.2 }}
        />
      </Center>

      <Modal
        onOverlayClick={onClose}
        isOpen={open}
        closeOnEsc={true}
        onClose={onClose}
        size="xl"
        isCentered
        closeOnOverlayClick={true}
      >
        <ModalOverlay />
        <ModalContent
          onClick={onClose}
          boxShadow="none"
          outline="none"
          _focus={{ outline: "none", boxShadow: "none" }}
          tabIndex={-1}
          position="relative"
        >
          <ModalCloseButton
            color={"gray"}
            top={10}
            right={10}
            position="absolute"
          />
          <ModalBody p={0}>
            <Image
              src={src}
              alt={alt}
              borderRadius="md"
              maxH="80vh"
              mx="auto"
              tabIndex={-1}
              outline="none"
              draggable={false}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertificateImage;
