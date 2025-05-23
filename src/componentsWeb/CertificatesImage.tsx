import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDisclosure, Image, Center } from "@chakra-ui/react";

interface CertificateImageProps {
  src: string;
  alt?: string;
}

const CertificateImage = ({ src, alt }: CertificateImageProps) => {
  const { open, onOpen, onClose } = useDisclosure();

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

      <Modal isOpen={open} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
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
              _focus={{ outline: "none", boxShadow: "none" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertificateImage;
