import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure, Image } from "@chakra-ui/react";

interface CertificateImageProps {
  src: string;
  alt?: string;
}

const CertificateImage = ({ src, alt }: CertificateImageProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        src={src}
        alt={alt}
        boxSize="200px"
        objectFit="cover"
        cursor="pointer"
        borderRadius="md"
        onClick={onOpen}
        _hover={{ opacity: 0.8 }}
      />

      <Modal isOpen={open} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
          <ModalBody p={0}>
            <Image
              src={src}
              alt={alt}
              borderRadius="md"
              maxH="80vh"
              mx="auto"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CertificateImage;
